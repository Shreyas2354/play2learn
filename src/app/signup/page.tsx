
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signup } from '@/lib/users';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/language-context';
import { Icons } from '@/components/icons';

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [isLoading, setIsLoading] = useState(false);

  const pageText = {
    title: { en: "Sign Up", hi: "साइन अप करें", te: "నమోదు చేసుకోండి" },
    description: { en: "Create an account to start your learning journey.", hi: "अपनी सीखने की यात्रा शुरू करने के लिए एक खाता बनाएँ।", te: "మీ అభ్యాస ప్రయాణాన్ని ప్రారంభించడానికి ఒక ఖాతాను సృష్టించండి." },
    usernameLabel: { en: "Username", hi: "उपयोगकर्ता नाम", te: "వినియోగదారు పేరు" },
    passwordLabel: { en: "Password", hi: "पासवर्ड", te: "పాస్వర్డ్" },
    roleLabel: { en: "I am a...", hi: "मैं एक...", te: "నేను ఒక..." },
    studentLabel: { en: "Student", hi: "छात्र", te: "విద్యార్థి" },
    teacherLabel: { en: "Teacher", hi: "शिक्षक", te: "ఉపాధ్యాయుడు" },
    signupButton: { en: "Create Account", hi: "खाता बनाएं", te: "ఖాతాను సృష్టించండి" },
    alreadyAccount: { en: "Already have an account?", hi: "पहले से ही एक खाता हैं?", te: "ఇప్పటికే ఖాతా ఉందా?" },
    login: { en: "Login", hi: "लॉग इन करें", te: "లాగిన్" },
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      signup(username, password, role);
      toast({
        title: "Signup successful!",
        description: "You can now log in with your new account.",
      });
      router.push('/login');
    } catch (error) {
      toast({
        title: "Signup failed",
        description: (error as Error).message,
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex items-center gap-2 font-headline font-bold text-3xl text-primary mb-4">
            <Icons.logo className="h-10 w-10" />
            <span>play2learn</span>
        </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{t('title', pageText)}</CardTitle>
          <CardDescription>
            {t('description', pageText)}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSignup}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">{t('usernameLabel', pageText)}</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">{t('passwordLabel', pageText)}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>{t('roleLabel', pageText)}</Label>
              <RadioGroup
                defaultValue="student"
                className="flex gap-4"
                value={role}
                onValueChange={(value) => setRole(value as 'student' | 'teacher')}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="r1" />
                  <Label htmlFor="r1">{t('studentLabel', pageText)}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="teacher" id="r2" />
                  <Label htmlFor="r2">{t('teacherLabel', pageText)}</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Creating account...' : t('signupButton', pageText)}
            </Button>
             <div className="mt-4 text-center text-sm">
              {t('alreadyAccount', pageText)}{' '}
              <Link href="/login" className="underline">
                {t('login', pageText)}
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
