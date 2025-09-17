
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
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

const imageSeeds: { [key: string]: string } = {
    sun: 'sunSeed',
    grass: 'grassSeed',
    grasshopper: 'insectSeed',
    frog: 'frogSeed',
    snake: 'snakeSeed',
    eagle: 'eagleSeed',
};

export function FoodChainPuzzle({ question, showFeedback, onPuzzleComplete }: FoodChainPuzzleProps) {
  const { t } = useLanguage();
  const [items, setItems] = useState<Item[]>([]);
  const [slots, setSlots] = useState<(Item | null)[]>([]);
  
  useEffect(() => {
    if (question.chainItems) {
      const initialItems = [...question.chainItems].sort(() => Math.random() - 0.5).map((item, index) => ({
        ...item,
        text: t('text', item),
        imageUrl: `https://picsum.photos/seed/${imageSeeds[item.id] || index}/64/64`
      }));
      setItems(initialItems);
      setSlots(new Array(question.chainItems.length).fill(null));
    }
  }, [question, t]);

  useEffect(() => {
    const answer = slots.map(item => item?.id || '').join(',');
    onPuzzleComplete(answer);
  }, [slots, onPuzzleComplete]);


  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item, source: 'bank' | 'slot', index: number) => {
    if (showFeedback) return e.preventDefault();
    e.dataTransfer.setData('text/plain', JSON.stringify({ item, source, index }));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetSlotIndex: number) => {
    e.preventDefault();
    if (showFeedback) return;

    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const { item: draggedItem, source, index: sourceIndex } = data;

    let newItems = [...items];
    let newSlots = [...slots];

    const existingItemInTargetSlot = newSlots[targetSlotIndex];

    if (source === 'bank') {
      // Move from bank to slot
      newSlots[targetSlotIndex] = draggedItem;
      newItems.splice(sourceIndex, 1);
      if (existingItemInTargetSlot) {
        newItems.push(existingItemInTargetSlot);
      }
    } else { // source === 'slot'
      const sourceSlotIndex = sourceIndex;
      if (sourceSlotIndex === targetSlotIndex) return; // Dropped in the same slot

      // Swap items between slots
      newSlots[targetSlotIndex] = draggedItem;
      newSlots[sourceSlotIndex] = existingItemInTargetSlot;
    }
    
    setItems(newItems);
    setSlots(newSlots);
  };
  
  const handleDropOnBank = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (showFeedback) return;
    
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const { item: draggedItem, source, index: sourceIndex } = data;

    if (source === 'slot') {
      let newItems = [...items];
      let newSlots = [...slots];
      
      newSlots[sourceIndex] = null; // Remove from slot
      newItems.push(draggedItem); // Add back to bank
      
      setItems(newItems);
      setSlots(newSlots);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const correctOrder = question.correctAnswer.split(',');

  return (
      <div className="space-y-6 flex flex-col items-center">
        {/* Drop Slots */}
        <div className="flex items-center justify-center flex-wrap gap-2">
            {slots.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <div
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={handleDragOver}
                        className={cn(
                            'w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/50 transition-colors',
                            showFeedback && item && item.id === correctOrder[index] && 'border-green-500 bg-green-100',
                            showFeedback && item && item.id !== correctOrder[index] && 'border-red-500 bg-red-100'
                        )}
                    >
                        {item && (
                           <div
                              draggable={!showFeedback}
                              onDragStart={(e) => handleDragStart(e, item, 'slot', index)}
                              className="p-2 text-center cursor-grab"
                            >
                              <Image src={item.imageUrl} alt={item.text} width={64} height={64} className="mx-auto rounded-md" />
                              <span className="text-xs font-semibold">{item.text}</span>
                            </div>
                        )}
                    </div>
                    {index < slots.length - 1 && <ArrowRight className="h-6 w-6 text-muted-foreground" />}
                </div>
            ))}
        </div>

        {/* Draggable Items */}
         <div
            onDrop={handleDropOnBank}
            onDragOver={handleDragOver}
            className="mt-8 p-4 border rounded-lg bg-background min-h-[120px] w-full flex items-center justify-center flex-wrap gap-4"
          >
              {items.map((item, index) => (
                <div
                  key={item.id}
                  draggable={!showFeedback}
                  onDragStart={(e) => handleDragStart(e, item, 'bank', index)}
                  className="p-2 text-center bg-card shadow rounded-md cursor-grab"
                >
                  <Image src={item.imageUrl} alt={item.text} width={64} height={64} className="mx-auto rounded-md" />
                  <span className="text-xs font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
      </div>
  );
}

    