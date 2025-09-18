
"use client";

import type { Mission, Question } from "@/lib/data";
import { useState, useEffect, useTransition } from "react";
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
  Volume2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { PicturePuzzle } from "./picture-puzzle";
import { Balloon } from "./balloon";
import { FoodChainPuzzle } from "./food-chain-puzzle";

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
  
  const handleSubmit = () => {
    let answer = selectedAnswer;
    if (currentQuestion.type === 'food-chain-visual' || currentQuestion.type === 'picture-puzzle' || currentQuestion.type === 'puzzle') {
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

    if (currentQuestion.type === 'picture-puzzle' || currentQuestion.type === 'puzzle') {
        return (
            <PicturePuzzle
                question={currentQuestion}
                showFeedback={showFeedback}
                onAnswerChange={setPuzzleAnswer}
                value={puzzleAnswer}
            />
        );
    }
    
    if (mission.subject === 'mathematics' && currentQuestion.type === 'mcq' && currentQuestion.options) {
        return (
            <div className="flex justify-center items-center gap-4 flex-wrap min-h-[250px]">
              {currentQuestion.options?.map((option) => (
                <Balloon
                  key={option.id}
                  option={option}
                  onClick={(optionId) => !showFeedback && setSelectedAnswer(optionId)}
                  disabled={showFeedback}
                  isSelected={selectedAnswer === option.id}
                  isCorrect={option.id === currentQuestion.correctAnswer}
                  showFeedback={showFeedback}
                />
              ))}
            </div>
        );
    }

    if (mission.subject === 'chemistry' && currentQuestion.type === 'mcq' && currentQuestion.options) {
      return (
          <div className="flex justify-center items-center gap-4 flex-wrap min-h-[250px]">
            {currentQuestion.options?.map((option) => (
              <Balloon
                key={option.id}
                option={option}
                onClick={(optionId) => !showFeedback && setSelectedAnswer(optionId)}
                disabled={showFeedback}
                isSelected={selectedAnswer === option.id}
                isCorrect={option.id === currentQuestion.correctAnswer}
                showFeedback={showFeedback}
              />
            ))}
          </div>
        );
  }

    // Default multiple-choice interface
    return (
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
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-end items-center gap-4">
          {showFeedback ? (
            <div className="flex items-center gap-4">
                {answerState === 'correct' && <Alert variant="default" className="p-2 border-green-500 bg-green-50 text-green-700 font-semibold"><CheckCircle2 className="h-5 w-5 mr-2" />Correct!</Alert>}
                {answerState === 'incorrect' && <Alert variant="destructive" className="p-2 bg-red-50 font-semibold"><XCircle className="h-5 w-5 mr-2" />Not quite, but good try!</Alert>}
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
                  ((currentQuestion.type === 'picture-puzzle' || currentQuestion.type === 'puzzle') && !puzzleAnswer) ||
                  (currentQuestion.type === 'food-chain-visual' && puzzleAnswer.split(',').some(p => p === ''))
              }
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
