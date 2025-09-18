
"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { missions } from '@/lib/data';
import type { Mission } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { Award, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AchievementsPage() {
  const { t } = useLanguage();
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [totalCoins, setTotalCoins] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const completedStr = localStorage.getItem('completedMissions');
    if (completedStr) {
      const completedIds = JSON.parse(completedStr);
      setCompletedMissions(completedIds);
      
      // Calculate total coins from completed missions
      let coins = 0;
      completedIds.forEach((missionId: string) => {
        const mission = missions.find(m => m.id === missionId);
        if (mission) {
            // Assuming 10 coins per question for a perfect score
            coins += mission.questions.length * 10;
        }
      });
      setTotalCoins(coins);
    }
  }, []);

  const unlockedBadges = missions.filter(mission => completedMissions.includes(mission.id));
  const allBadges = missions; // For showing locked badges too

  const pageText = {
    title: {
      en: "My Achievements",
      hi: "मेरी उपलब्धियाँ",
      te: "నా విజయాలు",
    },
    description: {
      en: "Check out all the cool badges and coins you've earned!",
      hi: "आपने जो शानदार बैज और सिक्के अर्जित किए हैं, उन्हें देखें!",
      te: "మీరు సంపాదించిన అన్ని కూల్ బ్యాడ్జ్‌లు మరియు నాణేలను చూడండి!",
    },
    totalCoins: {
        en: "Total Coins",
        hi: "कुल सिक्के",
        te: "మొత్తం నాణేలు",
    },
    myBadges: {
        en: "My Badges",
        hi: "मेरे बैज",
        te: "నా బ్యాడ్జ్‌లు",
    },
    locked: {
        en: "Locked",
        hi: "लॉक किया हुआ",
        te: "లాక్ చేయబడింది",
    },
  };

  if (!isClient) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          {t('title', pageText)}
        </h1>
        <p className="text-muted-foreground">
          {t('description', pageText)}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="text-yellow-500" /> {t('totalCoins', pageText)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-5xl font-bold">{totalCoins}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="text-primary" /> {t('myBadges', pageText)}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allBadges.map(mission => {
            const isUnlocked = unlockedBadges.some(b => b.id === mission.id);
            return (
              <div
                key={mission.id}
                className={cn(
                  "flex flex-col items-center text-center p-4 border rounded-lg transition-all",
                  isUnlocked ? "bg-card shadow-md" : "bg-muted/50 opacity-60"
                )}
              >
                <div className={cn(
                  "w-24 h-24 flex items-center justify-center rounded-lg text-6xl mb-2",
                  isUnlocked ? mission.badge_color : "bg-gray-300 text-gray-500"
                )}>
                  {mission.badge_emoji}
                </div>
                <h3 className="font-semibold">{t('badgeId', mission)}</h3>
                <p className="text-xs text-muted-foreground">{t('title', mission)}</p>
                {!isUnlocked && (
                    <div className="text-xs font-bold mt-1 text-destructive">{t('locked', pageText)}</div>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
