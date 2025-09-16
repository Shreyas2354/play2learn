"use client";

import { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { missions } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Coins, Home, RefreshCw, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function ResultsPage() {
  const params = useParams();
  const { t } = useLanguage();
  const missionId = params.id;
  const mission = missions.find((m) => m.id === missionId);

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const storedScore = localStorage.getItem(`mission-${missionId}-score`);
    const storedTotal = localStorage.getItem(`mission-${missionId}-total`);
    if (storedScore && storedTotal) {
      setScore(JSON.parse(storedScore));
      setTotal(JSON.parse(storedTotal));
    }
  }, [missionId]);


  if (!mission) {
    return notFound();
  }
  
  if (!isClient) {
    return null; 
  }

  const coinsEarned = score * 10;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  
  const pageText = {
    missionComplete: {
      en: "Mission Complete!",
      hi: "मिशन पूरा हुआ!",
      te: "మిషన్ పూర్తయింది!",
      ta: "பணி முடிந்தது!",
      mr: "मोहीम पूर्ण झाली!",
    },
    wellDone: {
        en: `Well done on completing the "${t('title', mission)}" mission.`,
        hi: `"${t('title', mission)}" मिशन को पूरा करने पर बहुत अच्छा।`,
        te: `"${t('title', mission)}" మిషన్‌ను పూర్తి చేసినందుకు అభినందనలు.`,
        ta: `"${t('title', mission)}" பணியை முடித்ததற்கு வாழ்த்துக்கள்.`,
        mr: `"${t('title', mission)}" मोहीम पूर्ण केल्याबद्दल अभिनंदन.`,
    },
    yourScore: {
      en: "Your Score",
      hi: "आपका स्कोर",
      te: "మీ స్కోరు",
      ta: "உங்கள் மதிப்பெண்",
      mr: "तुमचा गुण",
    },
    outOf: {
        en: `out of`,
        hi: 'में से',
        te: 'లో',
        ta: 'இல்',
        mr: 'पैकी',
    },
    correct: {
        en: 'correct',
        hi: 'सही',
        te: 'సరైనవి',
        ta: 'சரி',
        mr: 'बरोबर',
    },
    coinsEarned: {
      en: "Coins Earned",
      hi: "अर्जित सिक्के",
      te: "సంపాదించిన నాణేలు",
      ta: "சம்பாதித்த நாணயங்கள்",
      mr: "कमावलेले शिक्के",
    },
    badgeUnlocked: {
      en: "Badge Unlocked!",
      hi: "बैज अनलॉक हो गया!",
      te: "బ్యాడ్జ్ అన్‌లాక్ చేయబడింది!",
      ta: "சின்னம் திறக்கப்பட்டது!",
      mr: "बॅज अनलॉक झाला!",
    },
    simulatedReward: {
      en: "Simulated Reward System",
      hi: "सिम्युलेटेड इनाम प्रणाली",
      te: "అనుకరణ బహుమతి వ్యవస్థ",
      ta: " உருவகப்படுத்தப்பட்ட வெகுமதி அமைப்பு",
      mr: "सिम्युलेटेड बक्षीस प्रणाली",
    },
    exchangeIncentives: {
      en: "Your coins can be exchanged for amazing real-life incentives!",
      hi: "आपके सिक्कों को अद्भुत वास्तविक जीवन प्रोत्साहनों के लिए बदला जा सकता है!",
      te: "మీ నాణేలను అద్భుతమైన నిజ జీవిత ప్రోత్సాహకాల కోసం మార్చుకోవచ్చు!",
      ta: "உங்கள் நாணயங்களை அற்புதமான நிஜ வாழ்க்கை ஊக்கத்தொகைகளுக்குப் பரிமாறிக்கொள்ளலாம்!",
      mr: "तुमचे शिक्के आश्चर्यकारक वास्तविक जीवनातील प्रोत्साहनांसाठी बदलले जाऊ शकतात!",
    },
    stationeryKit: {
      en: "Stationery Kit",
      hi: "स्टेशनरी किट",
      te: "స్టేషనరీ కిట్",
      ta: "எழுதுபொருள் கிட்",
      mr: "स्टेशनरी किट",
    },
    storyBook: {
      en: "Story Book",
      hi: "कहानी की किताब",
      te: "కథ పుస్తకం",
      ta: "கதை புத்தகம்",
      mr: "कथेचे पुस्तक",
    },
    extraPlayTime: {
        en: "Extra Play Time",
        hi: "अतिरिक्त खेलने का समय",
        te: "అదనపు ఆట సమయం",
        ta: "கூடுதல் விளையாட்டு நேரம்",
        mr: "जास्त खेळायची वेळ",
    },
    exchange: {
        en: "Exchange",
        hi: "बदलें",
        te: "మార్పిడి",
        ta: "பரிமாற்றம்",
        mr: "बदला",
    },
    coins: {
        en: "coins",
        hi: "सिक्के",
        te: "నాణేలు",
        ta: "நாணயங்கள்",
        mr: "शिक्के",
    },
    tryAgain: {
        en: "Try Again",
        hi: "पुनः प्रयास करें",
        te: "మళ్లీ ప్రయత్నించండి",
        ta: "மீண்டும் முயற்சி செய்",
        mr: "पुन्हा प्रयत्न करा",
    },
    allMissions: {
        en: "All Missions",
        hi: "सभी मिशन",
        te: "అన్ని మిషన్లు",
        ta: "அனைத்து பயணங்களும்",
        mr: "सर्व मोहिमा",
    }
  }

  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="animate-fade-in-down">
        <h1 className="text-4xl font-bold font-headline text-primary">{t('missionComplete', pageText)}</h1>
        <p className="text-muted-foreground text-lg">{t('wellDone', pageText)}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{t('yourScore', pageText)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-5xl font-bold">{percentage}%</p>
            <p className="text-muted-foreground">{score} {t('outOf', pageText)} {total} {t('correct', pageText)}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{t('coinsEarned', pageText)}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center gap-4">
            <Coins className="h-12 w-12 text-yellow-500"/>
            <p className="text-5xl font-bold">{coinsEarned}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{t('badgeUnlocked', pageText)}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-2">
            <Badge variant="default" className={`w-20 h-20 flex items-center justify-center rounded-lg text-5xl ${mission.badge_color}`}>
              {mission.badge_emoji}
            </Badge>
            <p className="font-semibold">{mission.badgeId}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-accent/10 border-accent/20">
        <CardHeader>
            <CardTitle className="font-headline flex items-center justify-center gap-2"><ShoppingCart className="h-6 w-6"/> {t('simulatedReward', pageText)}</CardTitle>
            <CardDescription>{t('exchangeIncentives', pageText)}</CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">{t('stationeryKit', pageText)}</h3>
                <p className="text-sm text-muted-foreground">{t('exchange', pageText)} <span className="font-bold text-accent">500 {t('coins', pageText)}</span></p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">{t('storyBook', pageText)}</h3>
                <p className="text-sm text-muted-foreground">{t('exchange', pageText)} <span className="font-bold text-accent">1000 {t('coins', pageText)}</span></p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">{t('extraPlayTime', pageText)}</h3>
                <p className="text-sm text-muted-foreground">{t('exchange', pageText)} <span className="font-bold text-accent">200 {t('coins', pageText)}</span></p>
            </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button asChild variant="outline">
            <Link href={`/missions/${mission.id}`}><RefreshCw className="mr-2 h-4 w-4"/> {t('tryAgain', pageText)}</Link>
        </Button>
        <Button asChild>
            <Link href="/missions"><Home className="mr-2 h-4 w-4"/> {t('allMissions', pageText)}</Link>
        </Button>
      </div>
    </div>
  );
}
