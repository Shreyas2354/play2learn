
"use client";

import { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { missions } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Coins, Home, RefreshCw, ShoppingCart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function ResultsPage() {
  const params = useParams();
  const { t } = useLanguage();
  const missionId = params.id as string;
  const mission = missions.find((m) => m.id === missionId);

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const storedScore = localStorage.getItem(`mission-${missionId}-score`);
    const storedTotal = localStorage.getItem(`mission-${missionId}-total`);
    if (storedScore && storedTotal) {
      const currentScore = JSON.parse(storedScore);
      const totalQuestions = JSON.parse(storedTotal);
      setScore(currentScore);
      setTotal(totalQuestions);

      // If the user gets a perfect score, mark the mission as complete
      if (currentScore === totalQuestions) {
        const completedMissionsStr = localStorage.getItem('completedMissions');
        const completedMissions = completedMissionsStr ? JSON.parse(completedMissionsStr) : [];
        if (!completedMissions.includes(missionId)) {
            completedMissions.push(missionId);
            localStorage.setItem('completedMissions', JSON.stringify(completedMissions));
        }
      }
    }
  }, [missionId]);


  if (!mission) {
    return notFound();
  }
  
  // Find the next level
  const subjectMissions = missions.filter(m => m.subject === mission.subject);
  const currentMissionIndex = subjectMissions.findIndex(m => m.id === mission.id);
  const nextMission = currentMissionIndex !== -1 && currentMissionIndex < subjectMissions.length - 1
    ? subjectMissions[currentMissionIndex + 1]
    : null;

  if (!isClient) {
    return null; 
  }

  const coinsEarned = score * 10;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const isPerfectScore = score === total;
  
  const pageText = {
    missionComplete: {
      en: "Mission Complete!",
      hi: "मिशन पूरा हुआ!",
      te: "మిషన్ పూర్తయింది!",
    },
    wellDone: {
        en: `Well done on completing the "${t('title', mission)}" mission.`,
        hi: `"${t('title', mission)}" मिशन को पूरा करने पर बहुत अच्छा।`,
        te: `"${t('title', mission)}" మిషన్‌ను పూర్తి చేసినందుకు అభినందనలు.`,
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
    coinsEarned: {
      en: "Coins Earned",
      hi: "अर्जित सिक्के",
      te: "సంపాదించిన నాణేలు",
    },
    badgeUnlocked: {
      en: "Badge Unlocked!",
      hi: "बैज अनलॉक हो गया!",
      te: "బ్యాడ్జ్ అన్‌లాక్ చేయబడింది!",
    },
    simulatedReward: {
      en: "Simulated Reward System",
      hi: "सिम्युलेटेड इनाम प्रणाली",
      te: "అనుకరణ బహుమతి వ్యవస్థ",
    },
    exchangeIncentives: {
      en: "Your coins can be exchanged for amazing real-life incentives!",
      hi: "आपके सिक्कों को अद्भुत वास्तविक जीवन प्रोत्साहनों के लिए बदला जा सकता है!",
      te: "మీ నాణేలను అద్భుతమైన నిజ జీవిత ప్రోత్సాహకాల కోసం మార్చుకోవచ్చు!",
    },
    stationeryKit: {
      en: "Stationery Kit",
      hi: "स्टेशनरी किट",
      te: "స్టేషనరీ కిట్",
    },
    storyBook: {
      en: "Story Book",
      hi: "कहानी की किताब",
      te: "కథ పుస్తకం",
    },
    extraPlayTime: {
        en: "Extra Play Time",
        hi: "अतिरिक्त खेलने का समय",
        te: "అదనపు ఆట సమయం",
    },
    exchange: {
        en: "Exchange",
        hi: "बदलें",
        te: "మార్పిడి",
    },
    coins: {
        en: "coins",
        hi: "सिक्के",
        te: "నాణేలు",
    },
    tryAgain: {
        en: "Try Again",
        hi: "पुनः प्रयास करें",
        te: "మళ్లీ ప్రయత్నించండి",
    },
    nextLevel: {
        en: "Next Level",
        hi: "अगला स्तर",
        te: "తదుపరి స్థాయి",
    },
    allMissions: {
        en: "All Missions",
        hi: "सभी मिशन",
        te: "అన్ని మిషన్లు",
    }
  }

  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="animate-fade-in-down">
        <h1 className="text-4xl font-bold font-headline text-primary">{t('missionComplete', pageText)}</h1>
        <p className="text-muted-foreground text-lg">{t('wellDone', pageText)}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{t('yourScore', pageText)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-5xl font-bold">{percentage}%</p>
            <p className="text-muted-foreground">{score} {t('outOf', pageText)} {total} {t('correct', pageText)}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{t('coinsEarned', pageText)}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center gap-4">
            <Coins className="h-12 w-12 text-yellow-500"/>
            <p className="text-5xl font-bold">{coinsEarned}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{t('badgeUnlocked', pageText)}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-2">
            <Badge variant="default" className={`w-20 h-20 flex items-center justify-center rounded-lg text-5xl ${mission.badge_color}`}>
              {mission.badge_emoji}
            </Badge>
            <p className="font-semibold">{t('badgeId', mission)}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-accent/10 border-accent/20">
        <CardHeader>
            <CardTitle className="font-headline flex items-center justify-center gap-2"><ShoppingCart className="h-6 w-6"/> {t('simulatedReward', pageText)}</CardTitle>
            <CardDescription>{t('exchangeIncentives', pageText)}</CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">{t('stationeryKit', pageText)}</h3>
                <p className="text-sm text-muted-foreground">{t('exchange', pageText)} <span className="font-bold text-accent">500 {t('coins', pageText)}</span></p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">{t('storyBook', pageText)}</h3>
                <p className="text-sm text-muted-foreground">{t('exchange', pageText)} <span className="font-bold text-accent">1000 {t('coins', pageText)}</span></p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">{t('extraPlayTime', pageText)}</h3>
                <p className="text-sm text-muted-foreground">{t('exchange', pageText)} <span className="font-bold text-accent">200 {t('coins', pageText)}</span></p>
            </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button asChild variant="outline">
            <Link href={`/missions/${mission.id}`}><RefreshCw className="mr-2 h-4 w-4"/> {t('tryAgain', pageText)}</Link>
        </Button>
        
        {isPerfectScore && nextMission && (
          <Button asChild>
            <Link href={`/missions/${nextMission.id}`}>{t('nextLevel', pageText)} <ArrowRight className="ml-2 h-4 w-4"/></Link>
          </Button>
        )}

        {isPerfectScore && !nextMission && (
          <Button asChild>
            <Link href="/missions"><Home className="mr-2 h-4 w-4"/> {t('allMissions', pageText)}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
