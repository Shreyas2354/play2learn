
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
    'bg-red-300',
    'bg-blue-300',
    'bg-green-300',
    'bg-yellow-300',
    'bg-purple-300',
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
    onClick(option.id)
  };

  useEffect(() => {
    if (showFeedback && isSelected) {
        setIsPopped(true);
    }
  }, [showFeedback, isSelected]);

  const feedbackClass = showFeedback && isSelected
    ? isCorrect
      ? 'bg-green-500'
      : 'bg-red-500'
    : color;
  
  if (isPopped) {
    return (
        <div className="w-40 h-52 flex items-center justify-center">
            <div className={cn(
                "w-12 h-12 rounded-full animate-pop",
                isCorrect ? 'bg-green-500' : 'bg-red-500'
            )}></div>
        </div>
    )
  }

  return (
    <div
      className={cn(
        'relative animate-float'
      )}
      style={{ animationDelay }}
    >
      <button
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          'relative flex items-center justify-center w-40 h-52 rounded-[50%] text-white font-bold text-3xl shadow-lg transition-all duration-300 transform hover:scale-110',
          feedbackClass,
          isSelected && !showFeedback && 'ring-4 ring-primary ring-offset-2'
        )}
      >
        <span>{option.text}</span>
        <div className={cn(
            "absolute -bottom-2 w-2 h-4 rounded-b-full",
            feedbackClass
        )}></div>
      </button>
    </div>
  );
}

    