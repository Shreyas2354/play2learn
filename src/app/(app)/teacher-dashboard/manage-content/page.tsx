
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { PlusCircle, Upload, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { missions as initialMissions, subjects } from "@/lib/data";
import type { Mission, Question } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function ManageContentPage() {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [missions, setMissions] = useState<Mission[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    // New Mission State
    const [newMission, setNewMission] = useState<Partial<Mission>>({
        subject: 'physics',
        questions: [],
    });
    const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
        options: [{id: 'a', text: ''}, {id: 'b', text: ''}, {id: 'c', text: ''}, {id: 'd', text: ''}],
        type: 'mcq'
    });

    useEffect(() => {
        const storedMissions = localStorage.getItem('missions');
        if (storedMissions) {
            setMissions(JSON.parse(storedMissions));
        } else {
            setMissions(initialMissions);
        }
    }, []);

    const handleSaveNewMission = () => {
        if (!newMission.title || !newMission.subject || (newMission.questions && newMission.questions.length === 0)) {
            toast({
                title: "Error",
                description: "Please fill in all mission details and add at least one question.",
                variant: "destructive",
            });
            return;
        }

        const missionToSave: Mission = {
            id: `custom-${newMission.subject}-${Date.now()}`,
            badgeId: `custom-badge-${newMission.subject}`,
            badge_emoji: '✨',
            badge_color: 'bg-gray-400',
            ...newMission,
        } as Mission;
        
        const updatedMissions = [...missions, missionToSave];
        localStorage.setItem('missions', JSON.stringify(updatedMissions));
        setMissions(updatedMissions);
        setIsDialogOpen(false);
        setNewMission({ subject: 'physics', questions: [] }); // Reset form
        toast({
            title: "Success",
            description: "New mission has been saved locally.",
        });
    };
    
    const handleAddQuestion = () => {
        if (!newQuestion.text || !newQuestion.correctAnswer || newQuestion.options?.some(opt => !opt.text)) {
             toast({
                title: "Incomplete Question",
                description: "Please fill in the question, all options, and select a correct answer.",
                variant: "destructive",
            });
            return;
        }
        const questionToAdd = { ...newQuestion, id: Date.now() } as Question;
        setNewMission(prev => ({
            ...prev,
            questions: [...(prev.questions || []), questionToAdd]
        }));
        // Reset question form
        setNewQuestion({
            options: [{id: 'a', text: ''}, {id: 'b', text: ''}, {id: 'c', text: ''}, {id: 'd', text: ''}],
            type: 'mcq'
        });
    };


    const pageText = {
        title: { en: "Manage Learning Content", hi: "शिक्षण सामग्री प्रबंधित करें", te: "అభ్యాస కంటెంట్‌ను నిర్వహించండి" },
        description: { en: "Add, edit, or remove missions and questions directly in your browser.", hi: "सीधे अपने ब्राउज़र में मिशन और प्रश्न जोड़ें, संपादित करें या हटाएं।", te: "మీ బ్రౌజర్‌లో నేరుగా మిషన్లు మరియు ప్రశ్నలను జోడించండి, సవరించండి లేదా తీసివేయండి." },
        currentMissions: { en: "Current Missions", hi: "वर्तमान मिशन", te: "ప్రస్తుత మిషన్లు" },
        addNewMission: { en: "Add New Mission", hi: "नया मिशन जोड़ें", te: "కొత్త మిషన్‌ను జోడించండి" },
        missionTitle: { en: "Mission Title", hi: "मिशन शीर्षक", te: "మిషన్ శీర్షిక" },
        missionDesc: { en: "Mission Description", hi: "मिशन विवरण", te: "మిషన్ వివరణ" },
        subject: { en: "Subject", hi: "विषय", te: "విషయం" },
        questions: { en: "Questions", hi: "प्रश्न", te: "ప్రశ్నలు" },
        addQuestion: { en: "Add Question", hi: "प्रश्न जोड़ें", te: "ప్రశ్నను జోడించండి" },
        questionText: { en: "Question Text", hi: "प्रश्न पाठ", te: "ప్రశ్న వచనం" },
        option: { en: "Option", hi: "विकल्प", te: "ఎంపిక" },
        correctAnswer: { en: "Correct Answer", hi: "सही उत्तर", te: "సరైన సమాధానం" },
        saveMission: { en: "Save Mission", hi: "मिशन सहेजें", te: "మిషన్‌ను సేవ్ చేయండి" },
        cancel: { en: "Cancel", hi: "रद्द करें", te: "రద్దు చేయండి" },
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline tracking-tight">{t('title', pageText)}</h1>
                <p className="text-muted-foreground">{t('description', pageText)}</p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>{t('currentMissions', pageText)}</CardTitle>
                        <Button onClick={() => setIsDialogOpen(true)}>
                            <PlusCircle className="mr-2 h-4 w-4" /> {t('addNewMission', pageText)}
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-2">
                    {missions.map(mission => (
                        <div key={mission.id} className="p-3 border rounded-md bg-muted/50">
                           <p className="font-semibold">{t('title', mission)} ({t('title', subjects.find(s => s.id === mission.subject))})</p>
                           <p className="text-sm text-muted-foreground">{mission.questions.length} {t('questions', pageText)}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>{t('addNewMission', pageText)}</DialogTitle>
                        <DialogDescription>Create a new mission with questions. It will be saved on this device.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-4">
                        {/* Mission Details */}
                        <div className="space-y-2">
                            <Label htmlFor="title">{t('missionTitle', pageText)}</Label>
                            <Input id="title" value={newMission.title || ''} onChange={e => setNewMission({...newMission, title: e.target.value})} />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="description">{t('missionDesc', pageText)}</Label>
                            <Input id="description" value={newMission.description || ''} onChange={e => setNewMission({...newMission, description: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">{t('subject', pageText)}</Label>
                             <Select value={newMission.subject} onValueChange={(value) => setNewMission({...newMission, subject: value as Mission['subject']})}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subjects.map(s => <SelectItem key={s.id} value={s.id}>{t('title', s)}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <hr className="my-4" />
                        {/* Added Questions List */}
                        <h3 className="font-semibold">{t('questions', pageText)} ({newMission.questions?.length || 0})</h3>
                        <div className="space-y-2">
                            {newMission.questions?.map((q, index) => (
                                <div key={index} className="p-2 border rounded-md text-sm">
                                    <p><strong>Q:</strong> {q.text}</p>
                                    <p className="text-green-600"><strong>Ans:</strong> {q.options?.find(o => o.id === q.correctAnswer)?.text}</p>
                                </div>
                            ))}
                        </div>
                        {/* Add New Question Form */}
                        <div className="p-4 border-2 border-dashed rounded-lg space-y-4">
                             <h4 className="font-semibold">{t('addQuestion', pageText)}</h4>
                            <div className="space-y-2">
                                <Label>{t('questionText', pageText)}</Label>
                                <Textarea value={newQuestion.text || ''} onChange={e => setNewQuestion({...newQuestion, text: e.target.value})} />
                            </div>
                            {newQuestion.options?.map((option, index) => (
                                <div key={index} className="space-y-2">
                                    <Label>{t('option', pageText)} {option.id.toUpperCase()}</Label>
                                    <Input value={option.text} onChange={e => {
                                        const updatedOptions = [...(newQuestion.options || [])];
                                        updatedOptions[index].text = e.target.value;
                                        setNewQuestion({...newQuestion, options: updatedOptions});
                                    }}/>
                                </div>
                            ))}
                            <div className="space-y-2">
                                <Label>{t('correctAnswer', pageText)}</Label>
                                <Select value={newQuestion.correctAnswer} onValueChange={value => setNewQuestion({...newQuestion, correctAnswer: value})}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select correct option" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="a">Option A</SelectItem>
                                        <SelectItem value="b">Option B</SelectItem>
                                        <SelectItem value="c">Option C</SelectItem>
                                        <SelectItem value="d">Option D</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button variant="outline" onClick={handleAddQuestion}>{t('addQuestion', pageText)}</Button>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>{t('cancel', pageText)}</Button>
                        <Button onClick={handleSaveNewMission}>{t('saveMission', pageText)}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
