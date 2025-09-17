
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
  import { CheckCircle, Clock, TrendingUp, UserCheck } from "lucide-react";
  import { OverviewChart } from "@/components/dashboard-charts";
import { useLanguage } from "@/contexts/language-context";
  
  const students = [
    { name: "Aarav Sharma", lastScore: 75, status: "Needs Help" },
    { name: "Priya Patel", lastScore: 92, status: "On Track" },
    { name: "Rohan Das", lastScore: 88, status: "On Track" },
    { name: "Sita Reddy", lastScore: 68, status: "Needs Help" },
  ];
  
  export default function TeacherDashboardPage() {
    const { t } = useLanguage();

    const pageText = {
        title: {
            en: "Teacher Analytics Dashboard",
            hi: "शिक्षक विश्लेषण डैशबोर्ड",
            te: "ఉపాధ్యాయ విశ్లేషణల డాష్‌బోర్డ్",
        },
        description: {
            en: "A simplified view of your class's performance and progress.",
            hi: "आपकी कक्षा के प्रदर्शन और प्रगति का एक सरलीकृत दृश्य।",
            te: "మీ తరగతి పనితీరు మరియు పురోగతి యొక్క సరళీకృత వీక్షణ.",
        },
        avgScore: { en: "Average Score", hi: "औसत स्कोर", te: "సగటు స్కోరు" },
        avgScoreDesc: { en: "+3% from last month", hi: "पिछले महीने से +3%", te: "గత నెల నుండి +3%" },
        activeStudents: { en: "Active Students", hi: "सक्रिय छात्र", te: "క్రియాశీల విద్యార్థులు" },
        activeStudentsDesc: { en: "80% class participation", hi: "80% कक्षा की भागीदारी", te: "80% తరగతి భాగస్వామ్యం" },
        missionsCompleted: { en: "Missions Completed", hi: "मिशन पूरे हुए", te: "మిషన్లు పూర్తయ్యాయి" },
        missionsCompletedDesc: { en: "Across all students this week", hi: "इस सप्ताह सभी छात्रों में", te: "ఈ వారం విద్యార్థులందరిలో" },
        weakestArea: { en: "Weakest Area", hi: "सबसे कमजोर क्षेत्र", te: "బలహీనమైన ప్రాంతం" },
        weakestAreaTopic: { en: "Newton's 3rd Law", hi: "न्यूटन का तीसरा नियम", te: "న్యూటన్ 3వ నియమం" },
        weakestAreaDesc: { en: "45% average score on this topic", hi: "इस विषय पर 45% औसत स्कोर", te: "ఈ అంశంపై 45% సగటు స్కోరు" },
        classPerf: { en: "Class Performance Overview", hi: "कक्षा प्रदर्शन अवलोकन", te: "తరగతి పనితీరు అవలోకనం" },
        classPerfDesc: { en: "Average score per mission for the whole class.", hi: "पूरी कक्षा के लिए प्रति मिशन औसत स्कोर।", "te": "మొత్తం తరగతికి ప్రతి మిషన్‌కు సగటు స్కోరు." },
        studentProgress: { en: "Student Progress", hi: "छात्र प्रगति", te: "విద్యార్థి పురోగతి" },
        studentProgressDesc: { en: "Recent performance of students who might need help.", hi: "जिन छात्रों को मदद की आवश्यकता हो सकती है उनका हालिया प्रदर्शन।", te: "సహాయం అవసరమైన విద్యార్థుల ఇటీవలి పనితీరు." },
        student: { en: "Student", hi: "छात्र", te: "విద్యార్థి" },
        lastScore: { en: "Last Score", hi: "अंतिम स्कोर", te: "చివరి స్కోరు" },
        status: { en: "Status", hi: "स्थिति", te: "స్థితి" },
        needsHelp: { en: "Needs Help", hi: "मदद चाहिए", te: "సహాయం కావాలి" },
        onTrack: { en: "On Track", hi: "पटरी पर", te: "ట్రాక్‌లో ఉంది" },
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
  
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t('avgScore', pageText)}
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86%</div>
              <p className="text-xs text-muted-foreground">
                {t('avgScoreDesc', pageText)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t('activeStudents', pageText)}
              </CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 / 30</div>
              <p className="text-xs text-muted-foreground">
                {t('activeStudentsDesc', pageText)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {t('missionsCompleted', pageText)}
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">
                {t('missionsCompletedDesc', pageText)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('weakestArea', pageText)}</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{t('weakestAreaTopic', pageText)}</div>
              <p className="text-xs text-muted-foreground">
                {t('weakestAreaDesc', pageText)}
              </p>
            </CardContent>
          </Card>
        </div>
  
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>{t('classPerf', pageText)}</CardTitle>
              <CardDescription>
                {t('classPerfDesc', pageText)}
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <OverviewChart />
            </CardContent>
          </Card>
          <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
              <CardTitle>{t('studentProgress', pageText)}</CardTitle>
              <CardDescription>
                {t('studentProgressDesc', pageText)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>{t('student', pageText)}</TableHead>
                        <TableHead>{t('lastScore', pageText)}</TableHead>
                        <TableHead>{t('status', pageText)}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.map(student => (
                        <TableRow key={student.name}>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.lastScore}%</TableCell>
                            <TableCell>
                                <Badge variant={student.status === "On Track" ? "secondary" : "destructive"}>
                                    {student.status === "On Track" ? t('onTrack', pageText) : t('needsHelp', pageText)}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
