"use client";

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Award, Coins, Rocket } from 'lucide-react';
import { missions } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';

export default function DashboardPage() {
  const firstMission = missions[0];
  const { t } = useLanguage();

  const pageText = {
    welcome: {
        en: "Welcome to play2learn!",
        hi: "play2learn में आपका स्वागत है!",
        te: "play2learnకు స్వాగతం!",
    },
    adventure: {
        en: "Your adventure in STEM starts here. Let's learn and grow!",
        hi: "STEM में आपका रोमांच यहीं से शुरू होता है। आइए सीखें और बढ़ें!",
        te: "STEMలో మీ సాహసం ఇక్కడ ప్రారంభమవుతుంది. నేర్చుకుందాం మరియు ఎదుగుదాం!",
    },
    myProgress: {
        en: "My Progress",
        hi: "मेरी प्रगति",
        te: "నా పురోగతి",
    },
    fromLastWeek: {
        en: "+20% from last week",
        hi: "पिछले सप्ताह से +20%",
        te: "గత వారం నుండి +20%",
    },
    myCoins: {
        en: "My Coins",
        hi: "मेरे सिक्के",
        te: "నా నాణేలు",
    },
    keepItUp: {
        en: "Keep it up! You're doing great.",
        hi: "लगे रहो! आप बहुत अच्छा कर रहे हैं।",
        te: "ఇలాగే కొనసాగించండి! మీరు చాలా బాగా చేస్తున్నారు.",
    },
    badgesEarned: {
        en: "Badges Earned",
        hi: "अर्जित बैज",
        te: "సంపాదించిన బ్యాడ్జ్‌లు",
    },
    continueAdventure: {
        en: "Continue Your Adventure",
        hi: "अपना रोमांच जारी रखें",
        te: "మీ సాహసం కొనసాగించండి",
    },
    lastExploring: {
        en: "You were last exploring the world of Physics.",
        hi: "आप पिछली बार भौतिकी की दुनिया की खोज कर रहे थे।",
        te: "మీరు చివరిగా భౌతికశాస్త్ర ప్రపంచాన్ని అన్వేషిస్తున్నారు.",
    },
    startMission: {
        en: "Start Mission",
        hi: "मिशन शुरू करें",
        te: "మిషన్ ప్రారంభించండి",
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            {t('welcome', pageText)}
          </h1>
          <p className="text-muted-foreground">
            {t('adventure', pageText)}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('myProgress', pageText)}</CardTitle>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">
              {t('fromLastWeek', pageText)}
            </p>
            <Progress value={75} className="mt-4 h-2" />
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('myCoins', pageText)}</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">
              {t('keepItUp', pageText)}
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('badgesEarned', pageText)}</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="flex -space-x-2 mt-2">
              <Badge
                variant="default"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-yellow-900"
              >
                ⚛️
              </Badge>
              <Badge
                variant="default"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-green-900"
              >
                🌿
              </Badge>
              <Badge
                variant="default"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-blue-900"
              >
                💧
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary/10 border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            {t('continueAdventure', pageText)}
          </CardTitle>
          <CardDescription>
            {t('lastExploring', pageText)}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">{t('title', firstMission)}</h3>
            <p className="text-sm text-muted-foreground max-w-prose">
              {t('description', firstMission)}
            </p>
          </div>
          <Button asChild className="shrink-0">
            <Link href={`/missions/${firstMission.id}`}>
              {t('startMission', pageText)} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
