
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { PlusCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { missions as initialMissions, subjects, competitionQuestions as initialCompetitionQuestions } from "@/lib/data";
import type { Mission, Question } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function ManageContentPage() {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [isMissionDialogOpen, setIsMissionDialogOpen] = useState(false);
    const [isCompetitionDialogOpen, setIsCompetitionDialogOpen] = useState(false);
    
    // New Mission State
    const [newMission, setNewMission] = useState<Partial<Mission>>({
        subject: 'physics',
        questions: [],
    });
    const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
        options: [{id: 'a', text: ''}, {id: 'b', text: ''}, {id: 'c', text: ''}, {id: 'd', text: ''}],
        type: 'mcq'
    });
    
    // New Competition Question State
    const [newCompetitionQuestion, setNewCompetitionQuestion] = useState<Partial<Question>>({
        subject: 'physics',
        type: 'mcq',
        difficulty: 'medium',
        options: [{id: 'a', text: ''}, {id: 'b', text: ''}, {id: 'c', text: ''}, {id: 'd', text: ''}]
    });

    const handleSaveNewMission = () => {
        if (!newMission.title || !newMission.subject || (newMission.questions && newMission.questions.length === 0)) {
            toast({
                title: "Error",
                description: "Please fill in all mission details and add at least one question.",
                variant: "destructive",
            });
            return;
        }

        const storedMissionsStr = localStorage.getItem('missions');
        const storedMissions = storedMissionsStr ? JSON.parse(storedMissionsStr) : initialMissions;

        const missionToSave: Mission = {
            id: `custom-${newMission.subject}-${Date.now()}`,
            badgeId: `custom-badge-${newMission.subject}`,
            badge_emoji: '✨',
            badge_color: 'bg-gray-400',
            ...newMission,
        } as Mission;
        
        const updatedMissions = [...storedMissions, missionToSave];
        localStorage.setItem('missions', JSON.stringify(updatedMissions));
        
        setIsMissionDialogOpen(false);
        setNewMission({ subject: 'physics', questions: [] }); // Reset form
        toast({
            title: "Success",
            description: "New mission has been saved locally.",
        });
    };
    
    const handleAddQuestionToMission = () => {
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
    
    const handleSaveNewCompetitionQuestion = () => {
        if (!newCompetitionQuestion.text || !newCompetitionQuestion.subject || !newCompetitionQuestion.correctAnswer || newCompetitionQuestion.options?.some(opt => !opt.text)) {
             toast({
                title: "Incomplete Question",
                description: "Please fill in all fields for the competition question.",
                variant: "destructive",
            });
            return;
        }

        const storedCompQuestionsStr = localStorage.getItem('competitionQuestions');
        const storedCompQuestions = storedCompQuestionsStr ? JSON.parse(storedCompQuestionsStr) : initialCompetitionQuestions;

        const questionToSave: Question = {
            id: `custom-${Date.now()}`,
            ...newCompetitionQuestion
        } as Question;

        const updatedCompQuestions = [...storedCompQuestions, questionToSave];
        localStorage.setItem('competitionQuestions', JSON.stringify(updatedCompQuestions));

        setIsCompetitionDialogOpen(false);
        setNewCompetitionQuestion({ subject: 'physics', type: 'mcq', difficulty: 'medium', options: [{id: 'a', text: ''}, {id: 'b', text: ''}, {id: 'c', text: ''}, {id: 'd', text: ''}]}); // Reset form
        toast({
            title: "Success",
            description: "New competition question has been saved locally.",
        });
    };


    const pageText = {
        title: { en: "Manage Learning Content", hi: "शिक्षण सामग्री प्रबंधित करें", te: "అభ్యాస కంటెంట్‌ను నిర్వహించండి" },
        description: { en: "Add, edit, or remove missions and questions directly in your browser.", hi: "सीधे अपने ब्राउज़र में मिशन और प्रश्न जोड़ें, संपादित करें या हटाएं।", te: "మీ బ్రౌజర్‌లో నేరుగా మిషన్లు మరియు ప్రశ్నలను జోడించండి, సవరించండి లేదా తీసివేయండి." },
        manageMissions: { en: "Manage Missions", hi: "मिशन प्रबंधित करें", te: "మిషన్లను నిర్వహించండి" },
        manageMissionsDesc: { en: "Create new learning missions for students.", hi: "छात्रों के लिए नए शिक्षण मिशन बनाएं।", te: "విద్యార్థుల కోసం కొత్త అభ్యాస మిషన్లను సృష్టించండి." },
        addNewMission: { en: "Add New Mission", hi: "नया मिशन जोड़ें", te: "కొత్త మిషన్‌ను జోడించండి" },
        manageCompetitions: { en: "Manage Competitions", hi: "प्रतियोगिताएं प्रबंधित करें", te: "పోటీలను నిర్వహించండి" },
        manageCompetitionsDesc: { en: "Add new questions to the competition pool.", hi: "प्रतियोगिता पूल में नए प्रश्न जोड़ें।", te: "పోటీ పూల్‌కు కొత్త ప్రశ్నలను జోడించండి." },
        addCompetitionQuestion: { en: "Add Competition Question", hi: "प्रतियोगिता प्रश्न जोड़ें", te: "పోటీ ప్రశ్నను జోడించండి" },
        missionTitle: { en: "Mission Title", hi: "मिशन शीर्षक", te: "మిషన్ శీర్షిక" },
        missionDesc: { en: "Mission Description", hi: "मिशन विवरण", te: "మిషన్ వివరణ" },
        subject: { en: "Subject", hi: "विषय", te: "విషయం" },
        questions: { en: "Questions", hi: "प्रश्न", te: "ప్రశ్నలు" },
        addQuestion: { en: "Add Question", hi: "प्रश्न जोड़ें", te: "ప్రశ్నను జోడించండి" },
        questionText: { en: "Question Text", hi: "प्रश्न पाठ", te: "ప్రశ్న వచనం" },
        option: { en: "Option", hi: "विकल्प", te: "ఎంపిక" },
        correctAnswer: { en: "Correct Answer", hi: "सही उत्तर", te: "సరైన సమాధానం" },
        saveMission: { en: "Save Mission", hi: "मिशन सहेजें", te: "మిషన్‌ను సేవ్ చేయండి" },
        saveQuestion: { en: "Save Question", hi: "प्रश्न सहेजें", te: "ప్రశ్నను సేవ్ చేయండి" },
        cancel: { en: "Cancel", hi: "रद्द करें", te: "రద్దు చేయండి" },
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline tracking-tight">{t('title', pageText)}</h1>
                <p className="text-muted-foreground">{t('description', pageText)}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('manageMissions', pageText)}</CardTitle>
                        <CardDescription>{t('manageMissionsDesc', pageText)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={() => setIsMissionDialogOpen(true)} className="w-full">
                            <PlusCircle className="mr-2 h-4 w-4" /> {t('addNewMission', pageText)}
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>{t('manageCompetitions', pageText)}</CardTitle>
                        <CardDescription>{t('manageCompetitionsDesc', pageText)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={() => setIsCompetitionDialogOpen(true)} className="w-full">
                             <PlusCircle className="mr-2 h-4 w-4" /> {t('addCompetitionQuestion', pageText)}
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Add Mission Dialog */}
            <Dialog open={isMissionDialogOpen} onOpenChange={setIsMissionDialogOpen}>
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
                                    <Input value={option.text || ''} onChange={e => {
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
                            <Button variant="outline" onClick={handleAddQuestionToMission}>{t('addQuestion', pageText)}</Button>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsMissionDialogOpen(false)}>{t('cancel', pageText)}</Button>
                        <Button onClick={handleSaveNewMission}>{t('saveMission', pageText)}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

             {/* Add Competition Question Dialog */}
            <Dialog open={isCompetitionDialogOpen} onOpenChange={setIsCompetitionDialogOpen}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>{t('addCompetitionQuestion', pageText)}</DialogTitle>
                        <DialogDescription>Create a new question for the competition pool. It will be saved locally.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label>{t('subject', pageText)}</Label>
                             <Select value={newCompetitionQuestion.subject} onValueChange={(value) => setNewCompetitionQuestion({...newCompetitionQuestion, subject: value as Question['subject']})}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subjects.filter(s => s.id !== 'english' && s.id !== 'gk').map(s => <SelectItem key={s.id} value={s.id}>{t('title', s)}</SelectItem>)}
                                    <SelectItem value="mega">Mega STEM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>{t('questionText', pageText)}</Label>
                            <Textarea value={newCompetitionQuestion.text || ''} onChange={e => setNewCompetitionQuestion({...newCompetitionQuestion, text: e.target.value})} />
                        </div>
                        {newCompetitionQuestion.options?.map((option, index) => (
                            <div key={index} className="space-y-2">
                                <Label>{t('option', pageText)} {option.id.toUpperCase()}</Label>
                                <Input value={option.text || ''} onChange={e => {
                                    const updatedOptions = [...(newCompetitionQuestion.options || [])];
                                    updatedOptions[index].text = e.target.value;
                                    setNewCompetitionQuestion({...newCompetitionQuestion, options: updatedOptions});
                                }}/>
                            </div>
                        ))}
                         <div className="space-y-2">
                            <Label>{t('correctAnswer', pageText)}</Label>
                            <Select value={newCompetitionQuestion.correctAnswer} onValueChange={value => setNewCompetitionQuestion({...newCompetitionQuestion, correctAnswer: value})}>
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
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsCompetitionDialogOpen(false)}>{t('cancel', pageText)}</Button>
                        <Button onClick={handleSaveNewCompetitionQuestion}>{t('saveQuestion', pageText)}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

    

    