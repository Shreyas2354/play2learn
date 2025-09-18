
"use client";

import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CompetitionLobbyPage() {
  const params = useParams();
  const { mode, subject } = params;

  const subjectName = (subject as string).charAt(0).toUpperCase() + (subject as string).slice(1);
  const modeName = (mode as string).charAt(0).toUpperCase() + (mode as string).slice(1);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-lg text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Competition Lobby</CardTitle>
          <CardDescription>
            You are about to start a <strong>{modeName}</strong> challenge in <strong>{subjectName}</strong>.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Get ready to test your knowledge!</p>
          <Button size="lg" className="w-full">
            Start Competition!
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/competition">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Change Selection
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

    