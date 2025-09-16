import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experiments } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function ExperimentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Hands-on STEM Experiments
        </h1>
        <p className="text-muted-foreground">
          Learn by doing with these fun and low-cost experiments!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiments.map((exp) => (
          <Card key={exp.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardHeader className="p-0">
                <Image 
                    src={exp.imageUrl}
                    alt={exp.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={exp.imageHint}
                />
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline">{exp.title}</CardTitle>
              <CardDescription>{exp.description}</CardDescription>
              <div className="flex-grow" />
              <CardFooter className="p-0 pt-6">
                <Button asChild className="w-full">
                  <Link href={`/experiments/${exp.id}`}>
                    Start Experiment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
