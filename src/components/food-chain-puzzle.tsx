
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

    let newItems = [...items];
    let newSlots = [...slots];

    // Item being dragged
    let draggedItem: Item | null = null;

    // Case 1: Dragging from the item bank
    if (source.droppableId === 'items') {
        draggedItem = newItems[source.index];
        newItems.splice(source.index, 1);
    } 
    // Case 2: Dragging from a slot
    else if (source.droppableId.startsWith('slot-')) {
        const slotIndex = parseInt(source.droppableId.split('-')[1]);
        draggedItem = newSlots[slotIndex];
        newSlots[slotIndex] = null;
    }

    if (!draggedItem) return;

    // Now, handle the drop destination
    // Case A: Dropping into a slot
    if (destination.droppableId.startsWith('slot-')) {
        const slotIndex = parseInt(destination.droppableId.split('-')[1]);
        
        // If the destination slot already has an item, move it back to the bank
        const existingItem = newSlots[slotIndex];
        if (existingItem) {
            newItems.push(existingItem);
        }

        newSlots[slotIndex] = draggedItem;
    }
    // Case B: Dropping back into the item bank
    else if (destination.droppableId === 'items') {
        newItems.splice(destination.index, 0, draggedItem);
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
