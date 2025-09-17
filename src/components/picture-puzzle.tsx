
"use client";

import Image from 'next/image';
import type { Question } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { Input } from './ui/input';

type PicturePuzzleProps = {
  question: Question;
  showFeedback: boolean;
  onAnswerChange: (answer: string) => void;
};

export function PicturePuzzle({ question, showFeedback, onAnswerChange }: PicturePuzzleProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {question.imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden border shadow-sm">
            <Image
            src={question.imageUrl}
            alt={t('imageHint', question) || 'Math puzzle'}
            width={400}
            height={300}
            className="w-full h-auto"
            data-ai-hint={question.imageHint}
            />
        </div>
      )}
      <Input
        type="text"
        onChange={(e) => onAnswerChange(e.target.value)}
        placeholder={t('enterAnswer', {en: 'Enter your answer', hi: 'अपना उत्तर दर्ज करें', te: 'మీ సమాధానం నమోదు చేయండి'})}
        className="max-w-xs text-center text-2xl h-14 font-bold"
        disabled={showFeedback}
      />
    </div>
  );
}
