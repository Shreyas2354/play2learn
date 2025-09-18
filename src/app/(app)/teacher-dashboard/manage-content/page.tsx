
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-context";
import { PlusCircle, Upload } from "lucide-react";

export default function ManageContentPage() {
    const { t } = useLanguage();

    const pageText = {
        title: {
            en: "Manage Learning Content",
            hi: "शिक्षण सामग्री प्रबंधित करें",
            te: "అభ్యాస కంటెంట్‌ను నిర్వహించండి",
        },
        description: {
            en: "Add, edit, or remove missions, questions, and competition content.",
            hi: "मिशन, प्रश्न और प्रतियोगिता सामग्री जोड़ें, संपादित करें या हटाएं।",
            te: "మిషన్లు, ప్రశ్నలు మరియు పోటీ కంటెంట్‌ను జోడించండి, సవరించండి లేదా తీసివేయండి.",
        },
        missionManagement: {
            en: "Mission Management",
            hi: "मिशन प्रबंधन",
            te: "మిషన్ నిర్వహణ",
        },
        missionDescription: {
            en: "Here you can create new missions or edit existing ones. Missions are structured levels with a series of questions.",
            hi: "यहां आप नए मिशन बना सकते हैं या मौजूदा मिशनों को संपादित कर सकते हैं। मिशन प्रश्नों की एक श्रृंखला के साथ संरचित स्तर हैं।",
            te: "ఇక్కడ మీరు కొత్త మిషన్లను సృష్టించవచ్చు లేదా ఉన్నవాటిని సవరించవచ్చు. మిషన్లు ప్రశ్నల శ్రేణితో నిర్మాణాత్మక స్థాయిలు.",
        },
        addNewMission: {
            en: "Add New Mission",
            hi: "नया मिशन जोड़ें",
            te: "కొత్త మిషన్‌ను జోడించండి",
        },
        competitionManagement: {
            en: "Competition Management",
            hi: "प्रतियोगिता प्रबंधन",
            te: "పోటీ నిర్వహణ",
        },
        competitionDescription: {
            en: "Manage the questions used in the solo and team competitions. These questions are separate from the learning missions.",
            hi: "एकल और टीम प्रतियोगिताओं में उपयोग किए जाने वाले प्रश्नों का प्रबंधन करें। ये प्रश्न सीखने के मिशन से अलग हैं।",
            te: "సోలో మరియు జట్టు పోటీలలో ఉపయోగించే ప్రశ్నలను నిర్వహించండి. ఈ ప్రశ్నలు అభ్యాస మిషన్ల నుండి ప్రత్యేకమైనవి.",
        },
        addNewCompetitionQuestion: {
            en: "Add New Competition Question",
            hi: "नया प्रतियोगिता प्रश्न जोड़ें",
            te: "కొత్త పోటీ ప్రశ్నను జోడించండి",
        },
        bulkUpload: {
            en: "Bulk Upload Questions",
            hi: "प्रश्न बल्क में अपलोड करें",
            te: "ప్రశ్నలను மொத்தంగా అప్‌లోడ్ చేయండి",
        },
        bulkUploadDescription: {
            en: "To save time, you can upload a JSON file with multiple questions for missions or competitions.",
            hi: "समय बचाने के लिए, आप मिशन या प्रतियोगिताओं के लिए कई प्रश्नों वाली JSON फ़ाइल अपलोड कर सकते हैं।",
            te: "సమయం ఆదా చేయడానికి, మీరు మిషన్లు లేదా పోటీల కోసం బహుళ ప్రశ్నలతో కూడిన JSON ఫైల్‌ను అప్‌లోడ్ చేయవచ్చు.",
        },
        uploadJson: {
            en: "Upload JSON File",
            hi: "JSON फ़ाइल अपलोड करें",
            te: "JSON ఫైల్‌ను అప్‌లోడ్ చేయండి",
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

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('missionManagement', pageText)}</CardTitle>
                        <CardDescription>{t('missionDescription', pageText)}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Placeholder for mission list and edit forms */}
                        <div className="p-8 border-2 border-dashed rounded-lg text-center text-muted-foreground">
                            <p>Mission editing interface will be here.</p>
                        </div>
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            {t('addNewMission', pageText)}
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('competitionManagement', pageText)}</CardTitle>
                        <CardDescription>{t('competitionDescription', pageText)}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         {/* Placeholder for competition question list and edit forms */}
                         <div className="p-8 border-2 border-dashed rounded-lg text-center text-muted-foreground">
                            <p>Competition question editing interface will be here.</p>
                        </div>
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            {t('addNewCompetitionQuestion', pageText)}
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('bulkUpload', pageText)}</CardTitle>
                    <CardDescription>{t('bulkUploadDescription', pageText)}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-4">
                    <div className="w-full p-4 border rounded-md bg-muted/50">
                        <p className="text-sm font-semibold">JSON Format Example:</p>
                        <pre className="mt-2 text-xs bg-background p-2 rounded-md overflow-x-auto">
                            <code>
{`
[
  {
    "id": 1,
    "subject": "physics",
    "text": "What is the unit of force?",
    "options": [...],
    "correctAnswer": "b",
    "difficulty": "easy",
    "type": "mcq"
  }
]
`}
                            </code>
                        </pre>
                    </div>
                    <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        {t('uploadJson', pageText)}
                    </Button>
                </CardContent>
            </Card>

        </div>
    )
}
