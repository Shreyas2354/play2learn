
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { Question } from '@/lib/data';

type Option = NonNullable<Question['options']>[0];

type BalloonProps = {
  option: Option;
  onClick: (optionId: string) => void;
  disabled: boolean;
  isSelected: boolean;
  isCorrect: boolean;
  showFeedback: boolean;
};

const colors = [
    'bg-red-300 hover:bg-red-400',
    'bg-blue-300 hover:bg-blue-400',
    'bg-green-300 hover:bg-green-400',
    'bg-yellow-300 hover:bg-yellow-400',
    'bg-purple-300 hover:bg-purple-400',
];

export function Balloon({ option, onClick, disabled, isSelected, isCorrect, showFeedback }: BalloonProps) {
  const [isPopped, setIsPopped] = useState(false);
  const [color, setColor] = useState('');
  const [animationDelay, setAnimationDelay] = useState('0s');
  
  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setAnimationDelay(`${Math.random() * 2}s`);
  }, []);

  const handleClick = () => {
    if (disabled) return;
    setIsPopped(true);
    setTimeout(() => onClick(option.id), 300); // Wait for pop animation to start
  };

  const feedbackClass = showFeedback
    ? isCorrect
      ? 'border-4 border-green-500 scale-110'
      : isSelected
      ? 'border-4 border-red-500 opacity-50'
      : 'opacity-50'
    : '';

  if (showFeedback && !isSelected && !isCorrect) {
      return null;
  }

  return (
    <div
      className={cn(
        'relative animate-float',
        (isPopped || (showFeedback && isSelected)) && 'animate-pop'
      )}
      style={{ animationDelay }}
    >
      <button
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          'relative flex items-center justify-center w-40 h-52 rounded-[50%] text-white font-bold text-3xl shadow-lg transition-all duration-300 transform hover:scale-110',
          color,
          isSelected && !showFeedback && 'ring-4 ring-primary ring-offset-2',
          feedbackClass
        )}
      >
        <span>{option.text}</span>
        <div className={cn(
            "absolute -bottom-2 w-2 h-4 rounded-b-full",
            color
        )}></div>
      </button>
    </div>
  );
}
