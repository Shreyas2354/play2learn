
"use client";

import type { Mission, Question } from "@/lib/data";
import { useState, useEffect, useMemo, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  Loader2,
  Volume2,
  ArrowRight,
  GripVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { FoodChainPuzzle } from "./food-chain-puzzle";
import { PicturePuzzle } from "./picture-puzzle";
import { getHintAction } from "@/app/actions/get-hint";

type AnswerState = "correct" | "incorrect" | "unanswered";

export function QuizClient({ mission }: { mission: Mission }) {
  const router = useRouter();
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const [hint, setHint] = useState<string | null>(null);
  const [hintLevel, setHintLevel] = useState(1);
  const [isHintLoading, setIsHintLoading] = useState(false);
  const [puzzleAnswer, setPuzzleAnswer] = useState("");

  const questions = mission.questions;
  const currentQuestion: Question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    const progressData = {
        lastMissionId: mission.id,
        lastQuestionIndex: currentQuestionIndex,
    };
    localStorage.setItem('user-progress', JSON.stringify(progressData));
  }, [currentQuestionIndex, mission.id]);

  useEffect(() => {
    // Reset state for new question
    setSelectedAnswer(null);
    setAnswerState("unanswered");
    setShowFeedback(false);
    setHint(null);
    setHintLevel(1);
    setPuzzleAnswer("");
  }, [currentQuestionIndex]);

  const handleTextToSpeech = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        t("text", currentQuestion),
      );
      utterance.lang = language === "hi" ? "hi-IN" : "en-US";
      window.speechSynthesis.speak(utterance);
    } else {
      toast({
        title: "Feature not supported",
        description: "Your browser does not support text-to-speech.",
        variant: "destructive",
      });
    }
  };

  const handleGetHint = async () => {
    setIsHintLoading(true);
    setHint(null);

    const studentPerformance = `The student has attempted this question ${hintLevel -1} times. Last answer was '${selectedAnswer || puzzleAnswer}'.`;
    
    const response = await getHintAction({
      question: t('text', currentQuestion),
      studentPerformance,
      hintLevel,
    });
    
    if (response.error) {
        toast({
            title: "Error getting hint",
            description: response.error,
            variant: "destructive",
        });
    } else {
        setHint(response.hint || null);
        setHintLevel(prev => prev + 1);
    }
    
    setIsHintLoading(false);
  };
  
  const handleSubmit = () => {
    let answer = selectedAnswer;
    if (currentQuestion.type === 'puzzle' || currentQuestion.type === 'food-chain-visual' || currentQuestion.type === 'picture-puzzle') {
        answer = puzzleAnswer;
    }

    if (!answer) return;
    
    setShowFeedback(true);
    
    if (answer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
      setAnswerState("correct");
      setScore((s) => s + 1);
    } else {
      setAnswerState("incorrect");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
    } else {
      localStorage.setItem(`mission-${mission.id}-score`, JSON.stringify(score));
      localStorage.setItem(`mission-${mission.id}-total`, JSON.stringify(questions.length));
      startTransition(() => {
        router.push(`/missions/${mission.id}/results`);
      });
    }
  };

  const renderQuizInterface = () => {
    if (currentQuestion.type === 'food-chain-visual') {
        return (
            <FoodChainPuzzle
                question={currentQuestion}
                showFeedback={showFeedback}
                onPuzzleComplete={setPuzzleAnswer}
            />
        );
    }

    if (currentQuestion.type === 'picture-puzzle') {
        return (
            <PicturePuzzle
                question={currentQuestion}
                showFeedback={showFeedback}
                onAnswerChange={setPuzzleAnswer}
            />
        );
    }
    
    if (mission.subject === 'mathematics' && (currentQuestion.type === 'puzzle' || currentQuestion.type === 'mcq') && currentQuestion.options) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options?.map((option) => (
              <Button
                key={option.id}
                variant="outline"
                size="lg"
                className={cn(
                  "h-auto justify-center text-center whitespace-normal py-8 text-2xl font-bold",
                  selectedAnswer === option.id &&
                    "ring-2 ring-primary ring-offset-2",
                  showFeedback &&
                    option.id === currentQuestion.correctAnswer &&
                    "bg-green-100 border-green-400 text-green-900",
                  showFeedback &&
                    selectedAnswer === option.id &&
                    selectedAnswer !== currentQuestion.correctAnswer &&
                    "bg-red-100 border-red-400 text-red-900"
                )}
                onClick={() => !showFeedback && setSelectedAnswer(option.id)}
                disabled={showFeedback}
              >
                <span>{t('text', option)}</span>
              </Button>
            ))}
          </div>
        )
    }

    // Default multiple-choice interface
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options?.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            size="lg"
            className={cn(
              "h-auto justify-start text-left whitespace-normal py-4",
              selectedAnswer === option.id &&
                "ring-2 ring-primary ring-offset-2",
              showFeedback &&
                option.id === currentQuestion.correctAnswer &&
                "bg-green-100 border-green-400 text-green-900",
              showFeedback &&
                selectedAnswer === option.id &&
                selectedAnswer !== currentQuestion.correctAnswer &&
                "bg-red-100 border-red-400 text-red-900"
            )}
            onClick={() => !showFeedback && setSelectedAnswer(option.id)}
            disabled={showFeedback}
          >
            <span className="mr-4 font-bold text-accent">{option.id.toUpperCase()}.</span>
            <span>{t('text', option)}</span>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-2xl">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <Badge variant="secondary" className="mb-2">{t('title', mission)}</Badge>
              <CardTitle className="font-headline text-2xl lg:text-3xl">
                {t('text', currentQuestion)}
              </CardTitle>
              <CardDescription>
                Question {currentQuestionIndex + 1} of {questions.length}
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={handleTextToSpeech}>
              <Volume2 className="h-6 w-6" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={progress} className="w-full" />
          {renderQuizInterface()}
          {hint && (
             <Alert className="bg-accent/10 border-accent/20">
               <Lightbulb className="h-4 w-4" />
               <AlertTitle>Hint</AlertTitle>
               <AlertDescription>{hint}</AlertDescription>
             </Alert>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button variant="ghost" onClick={handleGetHint} disabled={isHintLoading || showFeedback}>
            {isHintLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Lightbulb className="mr-2 h-4 w-4" />
            )}
            {hintLevel > 1 ? "Get a better hint" : "Get a hint"}
          </Button>
          
          {showFeedback ? (
            <div className="flex items-center gap-4">
                {answerState === 'correct' && <Alert variant="default" className="p-2 border-green-500 bg-green-50"><CheckCircle2 className="text-green-500 h-5 w-5 mr-2" /><AlertDescription className="text-green-700 font-semibold">Correct!</AlertDescription></Alert>}
                {answerState === 'incorrect' && <Alert variant="destructive" className="p-2 bg-red-50"><XCircle className="h-5 w-5 mr-2" /><AlertDescription className="font-semibold">Not quite, try again next time!</AlertDescription></Alert>}
                <Button onClick={handleNext} disabled={isPending}>
                  {currentQuestionIndex === questions.length - 1 ? 'Finish Mission' : 'Next Question'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={
                  (currentQuestion.type === 'mcq' && !selectedAnswer) ||
                  ((currentQuestion.type === 'puzzle' || currentQuestion.type === 'picture-puzzle') && !puzzleAnswer) ||
                  (currentQuestion.type === 'food-chain-visual' && puzzleAnswer.split(',').some(p => p === ''))
              }
              className="bg-accent hover:bg-accent/90"
            >
              {currentQuestion.type === 'puzzle' ? 'Check Answer' : 'Submit Answer'}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
