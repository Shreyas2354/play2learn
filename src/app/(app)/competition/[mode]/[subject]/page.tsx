
"use client";

import { useEffect, useState, useTransition } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert } from '@/components/ui/alert';
import { CheckCircle2, XCircle, ArrowRight, Timer } from 'lucide-react';
import { competitionQuestions } from '@/lib/data';
import type { Question } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';

type AnswerState = "correct" | "incorrect" | "unanswered";

export default function CompetitionQuizPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const { mode, subject } = params;
  const [isPending, startTransition] = useTransition();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const questions = competitionQuestions.filter(q => q.subject === subject).slice(0, 20);
  const currentQuestion: Question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleFinish = () => {
      localStorage.setItem(`competition-${subject}-score`, JSON.stringify(score));
      localStorage.setItem(`competition-${subject}-total`, JSON.stringify(questions.length));
      startTransition(() => {
        router.push(`/competition/${mode}/${subject}/results`);
      });
  }

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    setShowFeedback(true);
    
    if (selectedAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
      setAnswerState("correct");
      setScore((s) => s + 1);
    } else {
      setAnswerState("incorrect");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setAnswerState("unanswered");
    } else {
      handleFinish();
    }
  };

  const subjectName = (subject as string).charAt(0).toUpperCase() + (subject as string).slice(1);
  const modeName = (mode as string).charAt(0).toUpperCase() + (mode as string).slice(1);

  if (questions.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
            <Card className="w-full max-w-lg text-center">
                <CardHeader>
                    <CardTitle>Competition Unavailable</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Sorry, there are no questions available for the {subjectName} competition right now. Please check back later.</p>
                    <Button asChild className="mt-4">
                        <Link href="/competition">Back to Competition Hub</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-2xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="font-headline text-2xl lg:text-3xl">
                {subjectName} {modeName} Challenge
              </CardTitle>
              <CardDescription>
                Question {currentQuestionIndex + 1} of {questions.length}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 font-bold text-lg text-primary p-2 rounded-md bg-primary/10">
              <Timer className="h-6 w-6" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Progress value={progress} className="w-full" />
          <h2 className="text-xl font-semibold text-center min-h-[60px]">{t('text', currentQuestion)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options?.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === currentQuestion.correctAnswer;
      
                return (
                  <Button
                    key={option.id}
                    variant="outline"
                    size="lg"
                    className={cn(
                      "h-auto justify-start text-left whitespace-normal py-4",
                      isSelected && !showFeedback && "ring-2 ring-primary ring-offset-2",
                      showFeedback && isCorrect && "bg-green-100 border-green-400 text-green-900 hover:bg-green-100",
                      showFeedback && isSelected && !isCorrect && "bg-red-100 border-red-400 text-red-900 hover:bg-red-100"
                    )}
                    onClick={() => !showFeedback && setSelectedAnswer(option.id)}
                    disabled={showFeedback}
                  >
                    <span className="mr-4 font-bold text-accent">{option.id.toUpperCase()}.</span>
                    <span>{t('text', option)}</span>
                  </Button>
                );
              })}
            </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-end items-center gap-4">
           {showFeedback ? (
            <div className="flex items-center gap-4">
                {answerState === 'correct' && <Alert variant="default" className="p-2 border-green-500 bg-green-50 text-green-700 font-semibold"><CheckCircle2 className="h-5 w-5 mr-2" />Correct!</Alert>}
                {answerState === 'incorrect' && <Alert variant="destructive" className="p-2 bg-red-50 font-semibold"><XCircle className="h-5 w-5 mr-2" />Incorrect!</Alert>}
                <Button onClick={handleNext} disabled={isPending}>
                  {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="bg-accent hover:bg-accent/90"
            >
              Submit Answer
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
