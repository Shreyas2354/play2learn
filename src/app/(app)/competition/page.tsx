
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  import { Trophy, User, Users, Microscope, Atom, TestTube, Calculator, Sparkles, BookCheck } from "lucide-react";
  import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
  
  const leaderboardData = [
    { rank: 1, team: "Cosmic Coders", score: 12500, players: ["Aarav", "Priya"] },
    { rank: 2, team: "Quantum Questers", score: 11800, players: ["Rohan", "Sita"] },
    { rank: 3, team: "Bio Builders", score: 9500, players: ["Vikram", "Anjali"] },
    { rank: 4, team: "Physics Phenoms", score: 8200, players: ["Meera", "Karan"] },
  ];
  
  type Mode = 'solo' | 'team';
  type Arena = 'physics' | 'chemistry' | 'biology' | 'mathematics' | 'mega';

  export default function CompetitionPage() {
    const { t } = useLanguage();
    const router = useRouter();
    const [selectedMode, setSelectedMode] = useState<Mode | null>(null);

    const handleModeSelect = (mode: Mode) => {
        setSelectedMode(mode);
    }

    const handleArenaSelect = (arena: Arena) => {
        if (selectedMode) {
            router.push(`/competition/${selectedMode}/${arena}`);
        } else {
            // Optional: Add a toast or alert to select a mode first
            alert("Please select a mode first!");
        }
    }

    const pageText = {
        title: {
            en: "STEM Competition Hub",
            hi: "स्टेम प्रतियोगिता हब",
            te: "స్టెమ్ పోటీల హబ్",
        },
        description: {
            en: "Challenge yourself, compete with friends, and master new concepts.",
            hi: "खुद को चुनौती दें, दोस्तों के साथ प्रतिस्पर्धा करें, और नई अवधारणाओं में महारत हासिल करें।",
            te: "మిమ్మల్ని మీరు సవాలు చేసుకోండి, స్నేహితులతో పోటీపడండి మరియు కొత్త భావనలను నేర్చుకోండి.",
        },
        chooseMode: {
            en: "Choose Your Mode",
            hi: "अपना मोड चुनें",
            te: "మీ మోడ్‌ను ఎంచుకోండి",
        },
        solo: { en: "Solo Challenge", hi: "एकल चुनौती", te: "సోలో ఛాలెంజ్" },
        soloDesc: { en: "Test your skills against the clock.", hi: "समय के खिलाफ अपने कौशल का परीक्षण करें।", te: "సమయానికి వ్యతిరేకంగా మీ నైపుణ్యాలను పరీక్షించుకోండి." },
        team: { en: "Team Battle", hi: "टीम बैटल", te: "జట్టు యుద్ధం" },
        teamDesc: { en: "Collaborate with friends to win.", hi: "जीतने के लिए दोस्तों के साथ सहयोग करें।", te: "గెలవడానికి స్నేహితులతో సహకరించండి." },
        selectArena: { en: "Select Your Arena", hi: "अपना अखाड़ा चुनें", te: "మీ అరేనాను ఎంచుకోండి" },
        physics: { en: "Physics", hi: "भौतिकी", te: "భౌతికశాస్త్రం" },
        chemistry: { en: "Chemistry", hi: "रसायन विज्ञान", te: "రసాయన శాస్త్రం" },
        biology: { en: "Biology", hi: "जीवविज्ञान", te: "జీవశాస్త్రం" },
        math: { en: "Mathematics", hi: "गणित", te: "గణితం" },
        megaStem: { en: "Mega STEM Tournament", hi: "मेगा स्टेम टूर्नामेंट", te: "మెగా స్టెమ్ టోర్నమెంట్" },
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
        teamLabel: { en: "Team", hi: "टीम", te: "జట్టు" },
        players: { en: "Players", hi: "खिलाड़ी", te: "ఆటగాళ్ళు" },
        score: { en: "Score", hi: "स्कोर", te: "స్కోర్" },
        howItWorks: {
            en: "A Complete Learning Loop",
            hi: "एक संपूर्ण शिक्षण चक्र",
            te: "ఒక పూర్తి అభ్యాస లూప్",
        },
        howItWorksDesc: {
            en: "Our competitions are more than just a game. They are a cycle of playing, learning, and mastering.",
            hi: "हमारी प्रतियोगिताएं सिर्फ एक खेल से कहीं बढ़कर हैं। वे खेलने, सीखने और महारत हासिल करने का एक चक्र हैं।",
            te: "మా పోటీలు కేవలం ఒక ఆట కంటే ఎక్కువ. అవి ఆడటం, నేర్చుకోవడం మరియు నైపుణ్యం సాధించడం యొక్క చక్రం.",
        },
        step1Title: { en: "Play & Compete", hi: "खेलें और प्रतिस्पर्धा करें", te: "ఆడండి & పోటీపడండి" },
        step1Desc: { en: "Engage in timed quizzes, puzzle races, or practical simulations.", hi: "समयबद्ध क्विज़, पहेली दौड़, या व्यावहारिक सिमुलेशन में शामिल हों।", te: "సమయ క్విజ్‌లు, పజిల్ రేసులు లేదా ఆచరణాత్మక అనుకరణలలో పాల్గొనండి." },
        step2Title: { en: "Review & Learn", hi: "समीक्षा करें और सीखें", te: "సమీక్షించండి & నేర్చుకోండి" },
        step2Desc: { en: "After each match, get a detailed breakdown of your answers with explanations.", hi: "प्रत्येक मैच के बाद, स्पष्टीकरण के साथ अपने उत्तरों का विस्तृत विश्लेषण प्राप्त करें।", te: "ప్రతి మ్యాచ్ తర్వాత, వివరణలతో మీ సమాధానాల యొక్క వివరణాత్మక విశ్లేషణను పొందండి." },
        step3Title: { en: "Master & Win", hi: "मास्टर करें और जीतें", te: "మాస్టర్ చేయండి మరియు గెలవండి" },
        step3Desc: { en: "Use the practice mode to master concepts and climb the leaderboard for rewards!", hi: "अवधारणाओं में महारत हासिल करने के लिए अभ्यास मोड का उपयोग करें और पुरस्कारों के लिए लीडरबोर्ड पर चढ़ें!", te: "భావనలను నేర్చుకోవడానికి ప్రాక్టీస్ మోడ్‌ను ఉపయోగించండి మరియు బహుమతుల కోసం లీడర్‌బోర్డ్‌ను అధిరోహించండి!" },
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
  
        {/* Mode Selection */}
        <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold">{t('chooseMode', pageText)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                    className={cn(
                        "hover:shadow-lg transition-shadow cursor-pointer",
                        selectedMode === 'solo' && 'ring-2 ring-primary'
                    )}
                    onClick={() => handleModeSelect('solo')}
                >
                    <CardHeader className="flex flex-row items-center gap-4">
                        <User className="w-10 h-10 text-primary" />
                        <div>
                            <CardTitle>{t('solo', pageText)}</CardTitle>
                            <CardDescription>{t('soloDesc', pageText)}</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
                <Card 
                    className={cn(
                        "hover:shadow-lg transition-shadow cursor-pointer",
                        selectedMode === 'team' && 'ring-2 ring-primary'
                    )}
                    onClick={() => handleModeSelect('team')}
                >
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Users className="w-10 h-10 text-primary" />
                        <div>
                            <CardTitle>{t('team', pageText)}</CardTitle>
                            <CardDescription>{t('teamDesc', pageText)}</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>

        {/* Arena Selection */}
        <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold">{t('selectArena', pageText)}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleArenaSelect('physics')}>
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                        <Atom className="w-10 h-10 text-blue-500"/>
                        <p className="font-semibold">{t('physics', pageText)}</p>
                    </CardContent>
                </Card>
                 <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleArenaSelect('chemistry')}>
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                        <TestTube className="w-10 h-10 text-purple-500"/>
                        <p className="font-semibold">{t('chemistry', pageText)}</p>
                    </CardContent>
                </Card>
                 <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleArenaSelect('biology')}>
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                        <Microscope className="w-10 h-10 text-green-500"/>
                        <p className="font-semibold">{t('biology', pageText)}</p>
                    </CardContent>
                </Card>
                 <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleArenaSelect('mathematics')}>
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                        <Calculator className="w-10 h-10 text-orange-500"/>
                        <p className="font-semibold">{t('math', pageText)}</p>
                    </CardContent>
                </Card>
                 <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer col-span-2 md:col-span-1 lg:col-span-1" onClick={() => handleArenaSelect('mega')}>
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                        <Sparkles className="w-10 h-10 text-yellow-500"/>
                        <p className="font-semibold">{t('megaStem', pageText)}</p>
                    </CardContent>
                </Card>
            </div>
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
                  <TableHead>{t('teamLabel', pageText)}</TableHead>
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
              <BookCheck /> {t('howItWorks', pageText)}
            </CardTitle>
            <CardDescription>
                {t('howItWorksDesc', pageText)}
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

    