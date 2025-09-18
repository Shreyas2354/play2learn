
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Home, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function CompetitionResultsPage() {
  const params = useParams();
  const { t } = useLanguage();
  const { mode, subject } = params;

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const storedScore = localStorage.getItem(`competition-${subject}-score`);
    const storedTotal = localStorage.getItem(`competition-${subject}-total`);
    if (storedScore && storedTotal) {
      setScore(JSON.parse(storedScore));
      setTotal(JSON.parse(storedTotal));
    }
  }, [subject]);

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const subjectName = (subject as string).charAt(0).toUpperCase() + (subject as string).slice(1);

  const pageText = {
    title: {
      en: "Competition Over!",
      hi: "प्रतियोगिता समाप्त!",
      te: "పోటీ ముగిసింది!",
    },
    description: {
        en: `Here's how you performed in the ${subjectName} challenge.`,
        hi: `${subjectName} चुनौती में आपने कैसा प्रदर्शन किया, यहाँ देखें।`,
        te: `${subjectName} ఛాలెంజ్‌లో మీరు ఎలా ప్రదర్శన చేశారో ఇక్కడ ఉంది.`,
    },
    yourScore: {
      en: "Your Score",
      hi: "आपका स्कोर",
      te: "మీ స్కోరు",
    },
    outOf: {
        en: `out of`,
        hi: 'में से',
        te: 'లో',
    },
    correct: {
        en: 'correct',
        hi: 'सही',
        te: 'సరైనవి',
    },
    playAgain: {
        en: "Play Again",
        hi: "फिर से खेलें",
        te: "మళ్లీ ఆడండి",
    },
    backToHub: {
        en: "Back to Hub",
        hi: "हब पर वापस जाएं",
        te: "హబ్‌కు తిరిగి వెళ్లండి",
    }
  }

  if (!isClient) {
    return null; 
  }

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="animate-fade-in-down">
        <h1 className="text-4xl font-bold font-headline text-primary">{t('title', pageText)}</h1>
        <p className="text-muted-foreground text-lg">{t('description', pageText)}</p>
      </div>
      
      <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2"><Award className="text-yellow-500"/> {t('yourScore', pageText)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-6xl font-bold">{percentage}%</p>
            <p className="text-muted-foreground text-xl">{score} {t('outOf', pageText)} {total} {t('correct', pageText)}</p>
          </CardContent>
        </Card>

      <div className="flex justify-center gap-4">
        <Button asChild variant="outline">
            <Link href={`/competition/${mode}/${subject}`}><RefreshCw className="mr-2 h-4 w-4"/> {t('playAgain', pageText)}</Link>
        </Button>
        <Button asChild>
            <Link href="/competition"><Home className="mr-2 h-4 w-4"/> {t('backToHub', pageText)}</Link>
        </Button>
      </div>
    </div>
  );
}
