
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@/lib/users';
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
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/language-context';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const pageText = {
    title: { en: "Login", hi: "लॉग इन करें", te: "లాగిన్" },
    description: { en: "Enter your credentials to access your account.", hi: "अपने खाते तक पहुँचने के लिए अपनी साख दर्ज करें।", te: "మీ ఖాతాను యాక్సెస్ చేయడానికి మీ ఆధారాలను నమోదు చేయండి." },
    usernameLabel: { en: "Username", hi: "उपयोगकर्ता नाम", te: "వినియోగదారు పేరు" },
    passwordLabel: { en: "Password", hi: "पासवर्ड", te: "పాస్వర్డ్" },
    loginButton: { en: "Login", hi: "लॉग इन करें", te: "లాగిన్" },
    noAccount: { en: "Don't have an account?", hi: "खाता नहीं है?", te: "ఖాతా లేదా?" },
    signUp: { en: "Sign up", hi: "साइन अप करें", te: "నమోదు చేసుకోండి" },
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const user = login(username, password);

    if (user) {
      toast({
        title: "Login successful!",
        description: `Welcome back, ${user.username}.`,
      });
      // A simple way to trigger state update in other components
      window.dispatchEvent(new Event('storage')); 
      
      if (user.role === 'teacher') {
        router.push('/teacher-dashboard');
      } else {
        router.push('/');
      }
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{t('title', pageText)}</CardTitle>
          <CardDescription>
            {t('description', pageText)}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
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
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging in...' : t('loginButton', pageText)}
            </Button>
            <div className="mt-4 text-center text-sm">
              {t('noAccount', pageText)}{' '}
              <Link href="/signup" className="underline">
                {t('signUp', pageText)}
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
