"use client";

import { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { missions } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Coins, Home, RefreshCw, ShoppingCart } from 'lucide-react';

export default function ResultsPage() {
  const params = useParams();
  const missionId = params.id;
  const mission = missions.find((m) => m.id === missionId);

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const storedScore = localStorage.getItem(`mission-${missionId}-score`);
    const storedTotal = localStorage.getItem(`mission-${missionId}-total`);
    if (storedScore && storedTotal) {
      setScore(JSON.parse(storedScore));
      setTotal(JSON.parse(storedTotal));
    }
  }, [missionId]);


  if (!mission) {
    return notFound();
  }
  
  if (!isClient) {
    return null; 
  }

  const coinsEarned = score * 10;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="animate-fade-in-down">
        <h1 className="text-4xl font-bold font-headline text-primary">Mission Complete!</h1>
        <p className="text-muted-foreground text-lg">Well done on completing the &quot;{mission.title}&quot; mission.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Your Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-5xl font-bold">{percentage}%</p>
            <p className="text-muted-foreground">{score} out of {total} correct</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Coins Earned</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center gap-4">
            <Coins className="h-12 w-12 text-yellow-500"/>
            <p className="text-5xl font-bold">{coinsEarned}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Badge Unlocked!</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-2">
            <Badge variant="default" className={`w-20 h-20 flex items-center justify-center rounded-lg text-5xl ${mission.badge_color}`}>
              {mission.badge_emoji}
            </Badge>
            <p className="font-semibold">{mission.badgeId}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-accent/10 border-accent/20">
        <CardHeader>
            <CardTitle className="font-headline flex items-center justify-center gap-2"><ShoppingCart className="h-6 w-6"/> Simulated Reward System</CardTitle>
            <CardDescription>Your coins can be exchanged for amazing real-life incentives!</CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">Stationery Kit</h3>
                <p className="text-sm text-muted-foreground">Exchange <span className="font-bold text-accent">500 coins</span></p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">Story Book</h3>
                <p className="text-sm text-muted-foreground">Exchange <span className="font-bold text-accent">1000 coins</span></p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">Extra Play Time</h3>
                <p className="text-sm text-muted-foreground">Exchange <span className="font-bold text-accent">200 coins</span></p>
            </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button asChild variant="outline">
            <Link href={`/missions/${mission.id}`}><RefreshCw className="mr-2 h-4 w-4"/> Try Again</Link>
        </Button>
        <Button asChild>
            <Link href="/missions"><Home className="mr-2 h-4 w-4"/> All Missions</Link>
        </Button>
      </div>
    </div>
  );
}
