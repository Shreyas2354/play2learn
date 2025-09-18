
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Award, Coins, Rocket, Trophy, MessageSquare, FlaskConical, Wifi, User, Atom } from 'lucide-react';
import { missions, experiments } from '@/lib/data';
import type { Mission } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type UserProgress = {
  lastMissionId: string;
  lastQuestionIndex: number;
};

export default function DashboardPage() {
  const { t } = useLanguage();
  const [lastMission, setLastMission] = useState<Mission | null>(null);
  const [lastQuestionIndex, setLastQuestionIndex] = useState(0);

  useEffect(() => {
    const storedProgress = localStorage.getItem('user-progress');
    let missionToShow = missions[0];
    let questionIndex = 0;

    if (storedProgress) {
      const progress: UserProgress = JSON.parse(storedProgress);
      const foundMission = missions.find(m => m.id === progress.lastMissionId);
      if (foundMission) {
        missionToShow = foundMission;
        questionIndex = progress.lastQuestionIndex;
      }
    }
    setLastMission(missionToShow);
    setLastQuestionIndex(questionIndex);
  }, []);
  
  const firstExperiment = experiments[0];
  
  const leaderboardData = [
    { rank: 1, name: "Priya P.", score: 1250 },
    { rank: 2, name: "You", score: 1250 },
    { rank: 3, name: "Rohan D.", score: 950 },
  ];

  const pageText = {
    welcome: {
        en: "Welcome back!",
        hi: "वापस स्वागत है!",
        te: " తిరిగి స్వాగతం!",
    },
    adventure: {
        en: "Your adventure in STEM continues here. Let's learn and grow!",
        hi: "STEM में आपका रोमांच यहीं जारी है। आइए सीखें और बढ़ें!",
        te: "STEMలో మీ సాహసం ఇక్కడ కొనసాగుతుంది. నేర్చుకుందాం మరియు ఎదుగుదాం!",
    },
    myProgress: {
        en: "Overall Progress",
        hi: "समग्र प्रगति",
        te: "మొత్తం పురోగతి",
    },
    fromLastWeek: {
        en: "+20% from last week",
        hi: "पिछले सप्ताह से +20%",
        te: "గత వారం నుండి +20%",
    },
    myAchievements: {
        en: "My Achievements",
        hi: "मेरी उपलब्धियाँ",
        te: "నా విజయాలు",
    },
    syncStatus: {
        en: "Sync Status",
        hi: "सिंक स्थिति",
        te: "సమకాలీకరణ స్థితి",
    },
    lastSynced: {
        en: "Synced 2 days ago",
        hi: "2 दिन पहले सिंक किया गया",
        te: "2 రోజుల క్రితం సమకాలీకరించబడింది",
    },
    continueAdventure: {
        en: "Continue Your Adventure",
        hi: "अपना रोमांच जारी रखें",
        te: "మీ సాహసం కొనసాగించండి",
    },
    startMission: {
        en: "Continue Mission",
        hi: "मिशन जारी रखें",
        te: "మిషన్ కొనసాగించండి",
    },
    todaysGoal: {
        en: "Today's Goal",
        hi: "आज का लक्ष्य",
        te: "నేటి లక్ష్యం",
    },
    goalDescription: {
        en: "Complete Level 2 of the Physics mission on Energy.",
        hi: "ऊर्जा पर भौतिकी मिशन का स्तर 2 पूरा करें।",
        te: "శక్తిపై ఫిజిక్స్ మిషన్ యొక్క స్థాయి 2 పూర్తి చేయండి।",
    },
    leaderboard: {
        en: "Class Leaderboard",
        hi: "कक्षा लीडरबोर्ड",
        te: "తరగతి లీడర్‌బోర్డ్",
    },
    rank: { en: "Rank", hi: "रैंक", te: "ర్యాంక్" },
    name: { en: "Name", hi: "नाम", te: "పేరు" },
    score: { en: "Score", hi: "स्कोर", te: "స్కోర్" },
    experimentOfTheDay: {
        en: "Experiment of the Day",
        hi: "आज का प्रयोग",
        te: "రోజు ప్రయోగం",
    },
    tryItOut: {
        en: "Try it Out",
        hi: "इसे आजमाएं",
        te: "ప్రయత్నించండి",
    },
    teachersNote: {
        en: "A Note From Your Teacher",
        hi: "आपके शिक्षक का एक नोट",
        te: "మీ ఉపాధ్యాయుని నుండి ఒక గమనిక",
    },
    teacherFeedback: {
        en: "Great job on the Biology levels! Let's focus on the mathematics puzzles next.",
        hi: "जीव विज्ञान के स्तरों पर बहुत बढ़िया काम! आइए आगे गणित की पहेलियों पर ध्यान दें।",
        te: "జీవశాస్త్ర స్థాయిలలో అద్భుతమైన పని! తదుపరి గణిత పజిల్స్‌పై దృష్టి పెడదాం.",
    },
  };

  const missionProgress = lastMission ? ((lastQuestionIndex) / lastMission.questions.length) * 100 : 0;
  const missionProgressText = lastMission ? `You are on question ${lastQuestionIndex + 1} of ${lastMission.questions.length}.` : "Start a new mission!";
  if (!lastMission) {
    return null; // or a loading spinner
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          {t('welcome', pageText)}
        </h1>
        <p className="text-muted-foreground">
          {t('adventure', pageText)}
        </p>
      </div>

      {/* Top Row */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('myAchievements', pageText)}</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
                <Coins className="h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold">1,250</span>
            </div>
            <div className="flex -space-x-2">
              <Badge variant="default" className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-yellow-900">⚛️</Badge>
              <Badge variant="default" className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-green-900">🌿</Badge>
              <Badge variant="default" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-blue-900">💧</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('syncStatus', pageText)}</CardTitle>
            <Wifi className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Synced</div>
            <p className="text-xs text-muted-foreground">
              {t('lastSynced', pageText)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Middle Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col">
            <CardHeader>
            <CardTitle className="font-headline text-xl">
                {t('continueAdventure', pageText)}
            </CardTitle>
            <CardDescription>{t('title', lastMission)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <Progress value={missionProgress} className="h-2 mb-2" />
                <p className="text-sm text-muted-foreground">{missionProgressText}</p>
            </CardContent>
            <CardFooter>
                 <Button asChild className="w-full">
                    <Link href={`/missions/${lastMission.id}`}>
                    {t('startMission', pageText)} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-xl">{t('todaysGoal', pageText)}</CardTitle>
            <CardDescription>{t('goalDescription', pageText)}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-blue-500">
                    <Atom className="h-6 w-6 text-white" />
                </div>
                <div>
                    <p className="font-semibold">Physics Level 2: Energy Expert</p>
                    <Progress value={25} className="mt-1 h-2" />
                </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
                <Link href="/missions/subjects/physics">Go to Mission</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Trophy className="text-yellow-500" /> {t('leaderboard', pageText)}</CardTitle>
            </CardHeader>
            <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">{t('rank', pageText)}</TableHead>
                  <TableHead>{t('name', pageText)}</TableHead>
                  <TableHead className="text-right">{t('score', pageText)}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((row) => (
                  <TableRow key={row.rank} className={row.name === "You" ? "bg-primary/10" : ""}>
                    <TableCell className="font-medium">{row.rank}</TableCell>
                    <TableCell className="font-semibold flex items-center gap-2">{row.name} {row.name === "You" && <User className="h-4 w-4" />}</TableCell>
                    <TableCell className="text-right font-bold text-primary">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </CardContent>
        </Card>
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-md"><FlaskConical/> {t('experimentOfTheDay', pageText)}</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3 className="font-semibold">{t('title', firstExperiment)}</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">{t('description', firstExperiment)}</p>
                    <Button asChild variant="secondary" size="sm" className="w-full">
                        <Link href={`/experiments/${firstExperiment.id}`}>{t('tryItOut', pageText)}</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-md"><MessageSquare /> {t('teachersNote', pageText)}</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground italic">"{t('teacherFeedback', pageText)}"</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
