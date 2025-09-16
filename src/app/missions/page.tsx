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
import { ArrowRight } from 'lucide-react';
import { missions } from '@/lib/data';

export default function MissionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Choose Your Mission
        </h1>
        <p className="text-muted-foreground">
          Select an adventure to start learning and earning rewards!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {missions.map((mission) => (
          <Card key={mission.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Badge
                  variant="default"
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl ${mission.badge_color}`}
                >
                  {mission.badge_emoji}
                </Badge>
                <div>
                  <CardTitle className="font-headline">{mission.title}</CardTitle>
                  <CardDescription>{mission.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {mission.questions.length} questions
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/missions/${mission.id}`}>
                  Start Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
