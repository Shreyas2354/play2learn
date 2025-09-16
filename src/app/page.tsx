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

export default function DashboardPage() {
  const firstMission = missions[0];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            Welcome to EduQuest!
          </h1>
          <p className="text-muted-foreground">
            Your adventure in STEM starts here. Let&apos;s learn and grow!
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Progress</CardTitle>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">
              +20% from last week
            </p>
            <Progress value={75} className="mt-4 h-2" />
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Coins</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">
              Keep it up! You&apos;re doing great.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
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
            Continue Your Adventure
          </CardTitle>
          <CardDescription>
            You were last exploring the world of Physics.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">{firstMission.title}</h3>
            <p className="text-sm text-muted-foreground max-w-prose">
              {firstMission.description}
            </p>
          </div>
          <Button asChild className="shrink-0">
            <Link href={`/missions/${firstMission.id}`}>
              Start Mission <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
