
"use client";

import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Microscope, Atom, TestTube, Calculator, BookOpen, Globe } from 'lucide-react';
import { subjects } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';

export default function MissionsPage() {
  const { t } = useLanguage();
  
  const pageText = {
    title: {
      en: "Choose a Subject",
      hi: "एक विषय चुनें",
      te: "ఒక సబ్జెక్టును ఎంచుకోండి",
    },
    description: {
      en: "Select a subject to start your learning adventure!",
      hi: "अपना सीखने का रोमांच शुरू करने के लिए एक विषय चुनें!",
      te: "మీ అభ్యాస సాహసం ప్రారంభించడానికి ఒక సబ్జెక్టును ఎంచుకోండి!",
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
        {subjects.map((subject) => (
          <Link href={`/missions/subjects/${subject.id}`} key={subject.id}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className='flex items-center gap-4'>
                    <div className={`p-3 rounded-md ${subject.color}`}>
                      {subject.id === 'physics' && <Atom className="h-6 w-6 text-white" />}
                      {subject.id === 'biology' && <Microscope className="h-6 w-6 text-white" />}
                      {subject.id === 'chemistry' && <TestTube className="h-6 w-6 text-white" />}
                      {subject.id === 'mathematics' && <Calculator className="h-6 w-6 text-white" />}
                      {subject.id === 'english' && <BookOpen className="h-6 w-6 text-white" />}
                      {subject.id === 'gk' && <Globe className="h-6 w-6 text-white" />}
                    </div>
                    <div>
                      <CardTitle className="font-headline">{t('title', subject)}</CardTitle>
                      <CardDescription>{t('description', subject)}</CardDescription>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
