
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, FlaskConical, Trophy } from 'lucide-react';
import { Icons } from '@/components/icons';
import { useLanguage } from '@/contexts/language-context';

export default function LandingPage() {
  const { t } = useLanguage();

  const pageText = {
    headline: {
      en: "The Fun Way to Master STEM",
      hi: "स्टेम में महारत हासिल करने का मजेदार तरीका",
      te: "స్టెమ్‌లో నైపుణ్యం సాధించడానికి సరదా మార్గం",
    },
    description: {
      en: "play2learn makes learning science, math, and technology exciting with gamified missions, hands-on experiments, and friendly competitions. Designed for rural students, it even works offline!",
      hi: "प्ले2लर्न गेमिफाइड मिशन, व्यावहारिक प्रयोगों और मैत्रीपूर्ण प्रतियोगिताओं के साथ विज्ञान, गणित और प्रौद्योगिकी को रोमांचक बनाता है। ग्रामीण छात्रों के लिए डिज़ाइन किया गया, यह ऑफ़लाइन भी काम करता है!",
      te: "ప్లే2లెర్న్ గేమిఫైడ్ మిషన్లు, ప్రయోగాలు మరియు స్నేహపూర్వక పోటీలతో సైన్స్, గణితం మరియు టెక్నాలజీని ఉత్తేజకరంగా చేస్తుంది. గ్రామీణ విద్యార్థుల కోసం రూపొందించబడింది, ఇది ఆఫ్‌లైన్‌లో కూడా పనిచేస్తుంది!",
    },
    getStarted: {
      en: "Get Started for Free",
      hi: "मुफ्त में शुरू करें",
      te: "ఉచితంగా ప్రారంభించండి",
    },
    login: {
      en: "Login",
      hi: "लॉग इन करें",
      te: "లాగిన్",
    },
    featuresTitle: {
      en: "Everything You Need to Succeed",
      hi: "सफलता के लिए आपको जो कुछ भी चाहिए",
      te: "విజయం సాధించడానికి మీకు కావలసినవన్నీ",
    },
    missionsTitle: {
      en: "Interactive Missions",
      hi: "इंटरैक्टिव मिशन",
      te: "ఇంటరాక్టివ్ మిషన్లు",
    },
    missionsDesc: {
        en: "Learn complex topics through fun, story-based quizzes and challenges.",
        hi: "मजेदार, कहानी-आधारित क्विज़ और चुनौतियों के माध्यम से जटिल विषय सीखें।",
        te: "సరదా, కథ-ఆధారిత క్విజ్‌లు మరియు సవాళ్ల ద్వారా సంక్లిష్ట విషయాలను నేర్చుకోండి.",
    },
    experimentsTitle: {
        en: "Hands-on Experiments",
        hi: "व्यावहारिक प्रयोग",
        te: "ప్రయోగాలు",
    },
    experimentsDesc: {
        en: "Simple, safe experiments with household items to bring concepts to life.",
        hi: "अवधारणाओं को जीवंत करने के लिए घरेलू वस्तुओं के साथ सरल, सुरक्षित प्रयोग।",
        te: "భావనలను జీవం పోయడానికి గృహోపకరణాలతో సరళమైన, సురక్షితమైన ప్రయోగాలు.",
    },
    competitionTitle: {
        en: "Friendly Competition",
        hi: "मैत्रीपूर्ण प्रतियोगिता",
        te: "స్నేహపూర్వక పోటీ",
    },
    competitionDesc: {
        en: "Challenge friends, climb the leaderboards, and earn rewards for your knowledge.",
        hi: "दोस्तों को चुनौती दें, लीडरबोर्ड पर चढ़ें, और अपने ज्ञान के लिए पुरस्कार अर्जित करें।",
        te: "స్నేహితులను సవాలు చేయండి, లీడర్‌బోర్డులను అధిరోహించండి మరియు మీ జ్ఞానం కోసం బహుమతులు సంపాదించండి.",
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
         <Link
            href="/"
            className="flex items-center gap-2 font-headline font-bold text-2xl text-primary"
          >
            <Icons.logo className="h-8 w-8" />
            <span>play2learn</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
                <Link href="/login">{t('login', pageText)}</Link>
            </Button>
            <Button asChild>
                <Link href="/signup">{t('getStarted', pageText)}</Link>
            </Button>
          </nav>
      </header>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline max-w-3xl">
                {t('headline', pageText)}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                {t('description', pageText)}
            </p>
            <div className="mt-8 flex gap-4">
                <Button size="lg" asChild>
                    <Link href="/signup">
                        {t('getStarted', pageText)} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-headline">{t('featuresTitle', pageText)}</h2>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                            <BookOpen className="h-8 w-8" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">{t('missionsTitle', pageText)}</h3>
                        <p className="mt-2 text-muted-foreground">{t('missionsDesc', pageText)}</p>
                    </div>
                     <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                            <FlaskConical className="h-8 w-8" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">{t('experimentsTitle', pageText)}</h3>
                        <p className="mt-2 text-muted-foreground">{t('experimentsDesc', pageText)}</p>
                    </div>
                     <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                            <Trophy className="h-8 w-8" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">{t('competitionTitle', pageText)}</h3>
                        <p className="mt-2 text-muted-foreground">{t('competitionDesc', pageText)}</p>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} play2learn. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
