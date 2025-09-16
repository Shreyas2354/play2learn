"use client";

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
import { useLanguage } from '@/contexts/language-context';

export default function ExperimentsPage() {
    const { t } = useLanguage();

    const pageText = {
        title: {
            en: "Hands-on STEM Experiments",
            hi: "हैंड्स-ऑन STEM प्रयोग",
            te: "చేతితో చేసే STEM ప్రయోగాలు",
        },
        description: {
            en: "Learn by doing with these fun and low-cost experiments!",
            hi: "इन मजेदार और कम लागत वाले प्रयोगों के साथ करके सीखें!",
            te: "ఈ సరదా మరియు తక్కువ-ధర ప్రయోగాలతో చేయడం ద్వారా నేర్చుకోండి!",
        },
        startExperiment: {
            en: "Start Experiment",
            hi: "प्रयोग शुरू करें",
            te: "ప్రయోగం ప్రారంభించండి",
        }
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiments.map((exp) => (
          <Card key={exp.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardHeader className="p-0">
                <Image 
                    src={exp.imageUrl}
                    alt={t('title', exp)}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={exp.imageHint}
                />
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline">{t('title', exp)}</CardTitle>
              <CardDescription>{t('description', exp)}</CardDescription>
              <div className="flex-grow" />
              <CardFooter className="p-0 pt-6">
                <Button asChild className="w-full">
                  <Link href={`/experiments/${exp.id}`}>
                    {t('startExperiment', pageText)} <ArrowRight className="ml-2 h-4 w-4" />
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
