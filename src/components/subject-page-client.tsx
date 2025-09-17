
"use client";

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
import { ArrowRight, Lock } from 'lucide-react';
import type { Mission, Subject } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';

export function SubjectPageClient({ subject, subjectMissions }: { subject: Subject, subjectMissions: Mission[] }) {
  const { t } = useLanguage();
  
  // In a real app, this would come from user progress state
  const completedLevels = 6; 

  const pageText = {
    levels: {
      en: "Levels",
      hi: "स्तर",
      te: "స్థాయిలు",
    },
    selectLevel: {
      en: "Select a level to start learning and earning rewards!",
      hi: "सीखना और पुरस्कार अर्जित करना शुरू करने के लिए एक स्तर चुनें!",
      te: " నేర్చుకోవడం మరియు రివార్డులు సంపాదించడం ప్రారంభించడానికి ఒక స్థాయిని ఎంచుకోండి!",
    },
    questions: {
      en: "questions",
      hi: "प्रश्न",
      te: "ప్రశ్నలు",
    },
    locked: {
      en: "Locked",
      hi: "लॉक",
      te: "లాక్ చేయబడింది",
    },
    startLevel: {
      en: "Start Level",
      hi: "स्तर शुरू करें",
      te: "స్థాయిని ప్రారంభించండి",
    },
    noLevels: {
      en: "No levels yet!",
      hi: "अभी तक कोई स्तर नहीं!",
      te: "ఇంకా స్థాయిలు లేవు!",
    },
    checkBack: {
        en: "Check back soon for new adventures in",
        hi: "में नए रोमांच के लिए जल्द ही वापस देखें",
        te: "లో కొత్త సాహసాల కోసం త్వరలో మళ్ళీ తనిఖీ చేయండి",
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          {t('title', subject)} {t('levels', pageText)}
        </h1>
        <p className="text-muted-foreground">
          {t('selectLevel', pageText)}
        </p>
      </div>

      {subjectMissions.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjectMissions.map((mission, index) => {
            const level = index + 1;
            const isLocked = level > completedLevels;

            return (
              <Card 
                key={mission.id} 
                className={cn(
                  "flex flex-col shadow-lg transition-shadow duration-300",
                  isLocked ? "bg-muted/50" : "hover:shadow-xl"
                )}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant="default"
                      className={cn(
                        `w-12 h-12 flex items-center justify-center rounded-lg text-2xl`,
                        isLocked ? "bg-gray-400" : mission.badge_color
                      )}
                    >
                      {isLocked ? <Lock /> : mission.badge_emoji}
                    </Badge>
                    <div>
                      <CardTitle className="font-headline">{t('title', mission)}</CardTitle>
                      <CardDescription>{t('description', mission)}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    {mission.questions.length} {t('questions', pageText)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" disabled={isLocked}>
                    <Link href={`/missions/${mission.id}`}>
                      {isLocked ? t('locked', pageText) : t('startLevel', pageText)}
                      {!isLocked && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card className="text-center p-8">
            <CardTitle>{t('noLevels', pageText)}</CardTitle>
            <CardDescription>{t('checkBack', pageText)} {t('title', subject)}.</CardDescription>
        </Card>
      )}
    </div>
  );
}
