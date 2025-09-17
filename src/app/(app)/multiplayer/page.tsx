
"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { Trophy, WifiOff } from "lucide-react";
  import { useLanguage } from "@/contexts/language-context";
  
  const leaderboardData = [
    { rank: 1, team: "Cosmic Coders", score: 12500, players: ["Aarav", "Priya"] },
    { rank: 2, team: "Quantum Questers", score: 11800, players: ["Rohan", "Sita"] },
    { rank: 3, team: "Bio Builders", score: 9500, players: ["Vikram", "Anjali"] },
    { rank: 4, team: "Physics Phenoms", score: 8200, players: ["Meera", "Karan"] },
  ];
  
  export default function MultiplayerPage() {
    const { t } = useLanguage();

    const pageText = {
        title: {
            en: "Offline Multiplayer Challenges",
            hi: "ऑफलाइन मल्टीप्लेयर चुनौतियां",
            te: "ఆఫ్‌లైన్ మల్టీప్లేయర్ సవాళ్లు",
        },
        description: {
            en: "Compete with your friends, even without an internet connection!",
            hi: "बिना इंटरनेट कनेक्शन के भी अपने दोस्तों के साथ प्रतिस्पर्धा करें!",
            te: "ఇంటర్నెట్ కనెక్షన్ లేకుండా కూడా మీ స్నేహితులతో పోటీపడండి!",
        },
        leaderboard: {
            en: "Team Leaderboard",
            hi: "टीम लीडरबोर्ड",
            te: "జట్టు లీడర్‌బోర్డ్",
        },
        leaderboardDesc: {
            en: "See how your team stacks up against the competition.",
            hi: "देखें कि आपकी टीम प्रतिस्पर्धा में कैसी है।",
            te: "మీ జట్టు పోటీలో ఎలా ఉందో చూడండి.",
        },
        rank: { en: "Rank", hi: "रैंक", te: "ర్యాంక్" },
        team: { en: "Team", hi: "टीम", te: "జట్టు" },
        players: { en: "Players", hi: "खिलाड़ी", te: "ఆటగాళ్ళు" },
        score: { en: "Score", hi: "स्कोर", te: "స్కోర్" },
        howItWorks: {
            en: "How Offline Mode Works",
            hi: "ऑफलाइन मोड कैसे काम करता है",
            te: "ఆఫ్‌లైన్ మోడ్ ఎలా పనిచేస్తుంది",
        },
        simulation: {
            en: "This is a simulation of the offline multiplayer experience.",
            hi: "यह ऑफलाइन मल्टीप्लेयर अनुभव का एक सिमुलेशन है।",
            te: "ఇది ఆఫ్‌లైన్ మల్టీప్లేయర్ అనుభవం యొక్క అనుకరణ.",
        },
        step1Title: {
            en: "Download Challenge",
            hi: "चुनौती डाउनलोड करें",
            te: "సవాలును డౌన్‌లోడ్ చేయండి",
        },
        step1Desc: {
            en: "The teacher downloads a challenge pack onto a device.",
            hi: "शिक्षक एक डिवाइस पर एक चुनौती पैक डाउनलोड करता है।",
            te: "ఉపాధ్యాయుడు ఒక పరికరంలోకి ఒక ఛాలెంజ్ ప్యాక్‌ను డౌన్‌లోడ్ చేస్తాడు.",
        },
        step2Title: {
            en: "Play Anywhere",
            hi: "कहीं भी खेलें",
            te: "ఎక్కడైనా ఆడండి",
        },
        step2Desc: {
            en: "Students form teams and complete the quiz together on the single device, no internet required.",
            hi: "छात्र टीमें बनाते हैं और एक ही डिवाइस पर एक साथ प्रश्नोत्तरी पूरी करते हैं, कोई इंटरनेट की आवश्यकता नहीं है।",
            te: "విద్యార్థులు జట్లను ఏర్పాటు చేసుకుని, ఒకే పరికరంలో కలిసి క్విజ్‌ను పూర్తి చేస్తారు, ఇంటర్నెట్ అవసరం లేదు.",
        },
        step3Title: {
            en: "Sync Results",
            hi: "परिणाम सिंक करें",
            te: "ఫలితాలను సమకాలీకరించండి",
        },
        step3Desc: {
            en: "Once the device is back online, the teacher syncs the results. Scores are uploaded, and the leaderboard is updated for everyone to see!",
            hi: "डिवाइस वापस ऑनलाइन होने पर, शिक्षक परिणामों को सिंक करता है। स्कोर अपलोड किए जाते हैं, और लीडरबोर्ड सभी के देखने के लिए अपडेट किया जाता है!",
            te: "పరికరం తిరిగి ఆన్‌లైన్‌లోకి వచ్చిన తర్వాత, ఉపాధ్యాయుడు ఫలితాలను సమకాలీకరిస్తాడు. స్కోర్‌లు అప్‌లోడ్ చేయబడతాయి మరియు లీడర్‌బోర్డ్ అందరూ చూసేందుకు నవీకరించబడుతుంది!",
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
  
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              {t('leaderboard', pageText)}
            </CardTitle>
            <CardDescription>
              {t('leaderboardDesc', pageText)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">{t('rank', pageText)}</TableHead>
                  <TableHead>{t('team', pageText)}</TableHead>
                  <TableHead>{t('players', pageText)}</TableHead>
                  <TableHead className="text-right">{t('score', pageText)}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((row) => (
                  <TableRow key={row.rank}>
                    <TableCell className="font-medium">{row.rank}</TableCell>
                    <TableCell className="font-semibold">{row.team}</TableCell>
                    <TableCell>{row.players.join(', ')}</TableCell>
                    <TableCell className="text-right font-bold text-primary">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
  
        <Card className="bg-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <WifiOff /> {t('howItWorks', pageText)}
            </CardTitle>
            <CardDescription>
              {t('simulation', pageText)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <Badge variant="default" className="text-lg">1</Badge>
              <div>
                <h3 className="font-semibold">{t('step1Title', pageText)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('step1Desc', pageText)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Badge variant="default" className="text-lg">2</Badge>
              <div>
                <h3 className="font-semibold">{t('step2Title', pageText)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('step2Desc', pageText)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Badge variant="default" className="text-lg">3</Badge>
              <div>
                <h3 className="font-semibold">{t('step3Title', pageText)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('step3Desc', pageText)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
