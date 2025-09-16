
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
import { missions, subjects } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function SubjectPage({ params }: { params: { id: string } }) {
  const subject = subjects.find((s) => s.id === params.id);
  const subjectMissions = missions.filter((m) => m.subject === params.id);

  if (!subject) {
    notFound();
  }

  // In a real app, this would come from user progress state
  const completedLevels = 1; 

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          {subject.title} Levels
        </h1>
        <p className="text-muted-foreground">
          Select a level to start learning and earning rewards!
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
                  <Button asChild className="w-full" disabled={isLocked}>
                    <Link href={`/missions/${mission.id}`}>
                      {isLocked ? 'Locked' : 'Start Level'}
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
            <CardTitle>No levels yet!</CardTitle>
            <CardDescription>Check back soon for new adventures in {subject.title}.</CardDescription>
        </Card>
      )}
    </div>
  );
}

export async function generateStaticParams() {
    return subjects.map((subject) => ({
      id: subject.id,
    }));
}
