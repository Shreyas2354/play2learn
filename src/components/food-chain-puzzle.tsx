
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type { DropResult } from 'react-beautiful-dnd';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { Question } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';

type Item = {
  id: string;
  text: string;
  imageUrl: string;
};

type FoodChainPuzzleProps = {
  question: Question;
  showFeedback: boolean;
  onPuzzleComplete: (answer: string) => void;
};

export function FoodChainPuzzle({ question, showFeedback, onPuzzleComplete }: FoodChainPuzzleProps) {
  const { t } = useLanguage();
  const [items, setItems] = useState<Item[]>([]);
  const [slots, setSlots] = useState<(Item | null)[]>([]);

  useEffect(() => {
    if (question.chainItems) {
      const initialItems = [...question.chainItems].sort(() => Math.random() - 0.5).map(item => ({
        ...item,
        text: t('text', item),
        imageUrl: `/images/${item.id}.png`
      }));
      setItems(initialItems);
      setSlots(new Array(question.chainItems.length).fill(null));
    }
  }, [question, t]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination || showFeedback) return;

    const { source, destination } = result;

    const newItems = Array.from(items);
    const newSlots = Array.from(slots);

    if (source.droppableId === 'items') {
      const [movedItem] = newItems.splice(source.index, 1);
      
      if (destination.droppableId.startsWith('slot-')) {
        const slotIndex = parseInt(destination.droppableId.split('-')[1]);
        
        // If there's an item in the slot, move it back to items list
        if(newSlots[slotIndex]) {
            newItems.push(newSlots[slotIndex] as Item);
        }
        newSlots[slotIndex] = movedItem;
      } else {
        // Dragged back to the items list, do nothing or re-insert
        newItems.splice(source.index, 0, movedItem);
      }
    } else if (source.droppableId.startsWith('slot-')) {
      const sourceSlotIndex = parseInt(source.droppableId.split('-')[1]);
      const [movedItem] = newSlots.splice(sourceSlotIndex, 1, null);

      if (movedItem) {
        if (destination.droppableId === 'items') {
          newItems.push(movedItem);
        } else if (destination.droppableId.startsWith('slot-')) {
          const destSlotIndex = parseInt(destination.droppableId.split('-')[1]);
           // If there's an item in the destination slot, move it back to items list
            if(newSlots[destSlotIndex]) {
                newItems.push(newSlots[destSlotIndex] as Item);
            }
          newSlots[destSlotIndex] = movedItem;
        }
      }
    }

    setItems(newItems);
    setSlots(newSlots);
    onPuzzleComplete(newSlots.map(item => item?.id || '').join(','));
  };

  const correctOrder = question.correctAnswer.split(',');

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="space-y-6 flex flex-col items-center">
        {/* Drop Slots */}
        <div className="flex items-center justify-center flex-wrap gap-2">
            {slots.map((item, index) => (
            <Droppable key={index} droppableId={`slot-${index}`}>
                {(provided, snapshot) => (
                <>
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={cn(
                        'w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/50 transition-colors',
                        snapshot.isDraggingOver && 'bg-primary/20 border-primary',
                        showFeedback && item && item.id === correctOrder[index] && 'border-green-500 bg-green-100',
                        showFeedback && item && item.id !== correctOrder[index] && 'border-red-500 bg-red-100'
                    )}
                >
                    {item ? (
                    <Draggable draggableId={item.id} index={index} isDragDisabled={showFeedback}>
                        {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-2 text-center"
                        >
                            <Image src={item.imageUrl} alt={item.text} width={64} height={64} className="mx-auto" />
                            <span className="text-xs font-semibold">{item.text}</span>
                        </div>
                        )}
                    </Draggable>
                    ) : (
                    provided.placeholder
                    )}
                </div>
                {index < slots.length - 1 && <ArrowRight className="h-6 w-6 text-muted-foreground" />}
                </>
                )}
            </Droppable>
            ))}
        </div>

        {/* Draggable Items */}
        <Droppable droppableId="items" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={cn(
                'mt-8 p-4 border rounded-lg bg-background min-h-[120px] w-full flex items-center justify-center flex-wrap gap-4',
                snapshot.isDraggingOver && 'bg-secondary'
              )}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={showFeedback}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-2 text-center bg-card shadow rounded-md"
                    >
                      <Image src={item.imageUrl} alt={item.text} width={64} height={64} className="mx-auto" />
                      <span className="text-xs font-semibold">{item.text}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
