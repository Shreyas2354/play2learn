

export type Question = {
  id: number;
  text: string;
  text_hi: string;
  text_te: string;
  options?: { id: string; text: string; text_hi: string; text_te: string; }[];
  chainItems?: { id: string; text: string; text_hi: string; text_te: string; }[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type?: 'mcq' | 'puzzle' | 'food-chain' | 'food-chain-visual' | 'picture-puzzle';
  imageUrl?: string;
  imageHint?: string;
  subject?: 'physics' | 'biology' | 'chemistry' | 'mathematics' | 'mega';
};

export type Mission = {
  id: string;
  title: string;
  title_hi: string;
  title_te: string;
  description: string;
  description_hi: string;
  description_te: string;
  questions: Question[];
  badgeId: string;
  badge_emoji: string;
  badge_color: string;
  subject: 'physics' | 'biology' | 'chemistry' | 'technology' | 'engineering' | 'mathematics' | 'english' | 'gk';
};

export type Subject = {
    id: 'physics' | 'biology' | 'chemistry' | 'technology' | 'engineering' | 'mathematics' | 'english' | 'gk';
    title: string;
    title_hi: string;
    title_te: string;
    description: string;
    description_hi: string;
    description_te: string;
    color: string;
}

export const subjects: Subject[] = [
    { 
        id: 'physics', 
        title: 'Physics', 
        title_hi: 'भौतिक विज्ञान',
        title_te: 'భౌతిక శాస్త్రం',
        description: 'Explore the laws of the universe.', 
        description_hi: 'ब्रह्मांड के नियमों का अन्वेषण करें।',
        description_te: 'విశ్వం యొక్క నియమాలను అన్వేషించండి.',
        color: 'bg-blue-500' 
    },
    { 
        id: 'biology', 
        title: 'Biology', 
        title_hi: 'जीवविज्ञान',
        title_te: 'జీవశాస్త్రం',
        description: 'Discover the wonders of life.',
        description_hi: 'जीवन के आश्चर्यों की खोज करें।',
        description_te: 'జీవితం యొక్క అద్భుతాలను కనుగొనండి.',
        color: 'bg-green-500' 
    },
    { 
        id: 'chemistry', 
        title: 'Chemistry', 
        title_hi: 'रसायन विज्ञान',
        title_te: 'రసాయన శాస్త్రం',
        description: 'Uncover the building blocks of matter.',
        description_hi: 'पदार्थ के निर्माण खंडों को उजागर करें।',
        description_te: 'పదార్థం యొక్క నిర్మాణ బ్లాక్‌లను కనుగొనండి.',
        color: 'bg-purple-500' 
    },
    { 
        id: 'mathematics', 
        title: 'Mathematics', 
        title_hi: 'गणित',
        title_te: 'గణితం',
        description: 'Solve puzzles and play with numbers.',
        description_hi: 'पहेलियां सुलझाएं और संख्याओं के साथ खेलें।',
        description_te: 'పజిల్స్ పరిష్కరించండి మరియు సంఖ్యలతో ఆడండి.',
        color: 'bg-orange-500' 
    },
    { 
        id: 'english', 
        title: 'English', 
        title_hi: 'अंग्रेज़ी',
        title_te: 'ఆంగ్ల',
        description: 'Master grammar and vocabulary.',
        description_hi: 'व्याकरण और शब्दावली में महारत हासिल करें।',
        description_te: 'వ్యాకరణం మరియు పదజాలంలో నైపుణ్యం పొందండి.',
        color: 'bg-red-500' 
    },
    {
        id: 'gk',
        title: 'General Knowledge',
        title_hi: 'सामान्य ज्ञान',
        title_te: 'సాధారణ జ్ఞానం',
        description: 'Explore the world of facts and sports.',
        description_hi: 'तथ्यों और खेल की दुनिया का अन्वेषण करें।',
        description_te: 'వాస్తవాలు మరియు క్రీడల ప్రపంచాన్ని అన్వేషించండి.',
        color: 'bg-teal-500'
    }
]


export const missions: Mission[] = [
  // Physics Missions
  {
    id: 'physics-level-1',
    subject: 'physics',
    title: 'Level 1',
    title_hi: 'स्तर 1',
    title_te: 'స్థాయి 1',
    description: 'The fundamentals of force and motion.',
    description_hi: 'बल और गति के मूल सिद्धांत।',
    description_te: 'శక్తి మరియు చలనం యొక్క ప్రాథమికాలు.',
    badgeId: 'physics-whiz',
    badge_emoji: '⚛️',
    badge_color: 'bg-yellow-400 text-yellow-900',
    questions: [
      {
        id: 1,
        text: 'What is the unit of force?',
        text_hi: 'बल की इकाई क्या है?',
        text_te: 'శక్తికి ప్రమాణం ఏమిటి?',
        options: [
          { id: 'a', text: 'Watt', text_hi: 'वाट', text_te: 'వాట్' },
          { id: 'b', text: 'Newton', text_hi: 'न्यूटन', text_te: 'న్యూటన్' },
          { id: 'c', text: 'Joule', text_hi: 'जूल', text_te: 'జౌల్' },
          { id: 'd', text: 'Pascal', text_hi: 'पास्कल', text_te: 'పాస్కల్' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 2,
        text: 'Which law of motion is also known as the law of inertia?',
        text_hi: 'गति का कौन सा नियम जड़त्व का नियम भी कहलाता है?',
        text_te: 'ఏ చలన నియమాన్ని జడత్వ నియమం అని కూడా అంటారు?',
        options: [
            { id: 'a', text: "Newton's First Law", text_hi: 'न्यूटन का पहला नियम', text_te: 'న్యూటన్ మొదటి నియమం' },
            { id: 'b', text: "Newton's Second Law", text_hi: 'न्यूटन का दूसरा नियम', text_te: 'న్యూటన్ రెండవ నియమం' },
            { id: 'c', text: "Newton's Third Law", text_hi: 'न्यूटन का तीसरा नियम', text_te: 'న్యూటన్ మూడవ నియమం' },
            { id: 'd', text: "Law of Gravitation", text_hi: 'गुरुत्वाकर्षण का नियम', text_te: 'గురుత్వాకర్షణ నియమం' },
        ],
        correctAnswer: 'a',
        difficulty: 'medium',
        type: 'mcq',
      },
      {
        id: 3,
        text: 'If you push a wall, the wall pushes you back with an equal and opposite force. This is an example of:',
        text_hi: 'यदि आप एक दीवार को धक्का देते हैं, तो दीवार आपको बराबर और विपरीत बल से वापस धकेलती है। यह किसका उदाहरण है:',
        text_te: 'మీరు గోడను నెడితే, గోడ మిమ్మల్ని సమానమైన మరియు వ్యతిరేక శక్తితో వెనక్కి నెడుతుంది. ఇది దేనికి ఉదాహరణ:',
        options: [
            { id: 'a', text: "Newton's First Law", text_hi: 'न्यूटन का पहला नियम', text_te: 'న్యూటన్ మొదటి నియమం' },
            { id: 'b', text: "Newton's Second Law", text_hi: 'न्यूटन का दूसरा नियम', text_te: 'న్యూటన్ రెండవ నియమం' },
            { id: 'c', text: "Newton's Third Law", text_hi: 'न्यूटन का तीसरा नियम', text_te: 'న్యూటన్ మూడవ నియమం' },
            { id: 'd', text: "Friction", text_hi: 'घर्षण', text_te: 'ఘర్షణ' },
        ],
        correctAnswer: 'c',
        difficulty: 'medium',
        type: 'mcq',
      },
       {
        id: 4,
        text: 'Calculate the force needed to accelerate a 10 kg object at 5 m/s².',
        text_hi: '10 किलो की वस्तु को 5 m/s² पर त्वरित करने के लिए आवश्यक बल की गणना करें।',
        text_te: '10 కిలోల వస్తువును 5 మీ/సె² వద్ద త్వరణానికి గురిచేయడానికి అవసరమైన శక్తిని లెక్కించండి.',
        options: [
          { id: 'a', text: '50 N', text_hi: '50 न्यूटन', text_te: '50 N' },
          { id: 'b', text: '2 N', text_hi: '2 न्यूटन', text_te: '2 N' },
          { id: 'c', text: '0.5 N', text_hi: '0.5 न्यूटन', text_te: '0.5 N' },
          { id: 'd', text: '15 N', text_hi: '15 न्यूटन', text_te: '15 N' },
        ],
        correctAnswer: 'a',
        difficulty: 'hard',
        type: 'mcq',
      },
       {
        id: 5,
        text: 'What type of force pulls objects toward the center of the Earth?',
        text_hi: 'किस प्रकार का बल वस्तुओं को पृथ्वी के केंद्र की ओर खींचता है?',
        text_te: 'ఏ రకమైన శక్తి వస్తువులను భూమి కేంద్రం వైపుకు లాగుతుంది?',
        options: [
          { id: 'a', text: 'Magnetic Force', text_hi: 'चुंबकीय बल', text_te: 'అయస్కాంత శక్తి' },
          { id: 'b', text: 'Frictional Force', text_hi: 'घर्षण बल', text_te: 'ఘర్షణ శక్తి' },
          { id: 'c', text: 'Gravitational Force', text_hi: 'गुरुत्वाकर्षण बल', text_te: 'గురుత్వాకర్షణ శక్తి' },
          { id: 'd', text: 'Tension Force', text_hi: 'तनाव बल', text_te: 'తన్యత శక్తి' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        type: 'mcq',
      }
    ],
  },
  {
    id: 'physics-level-2',
    subject: 'physics',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    description: 'Exploring energy and work.',
    description_hi: 'ऊर्जा और कार्य की खोज।',
    description_te: 'శక్తి మరియు పనిని అన్వేషించడం.',
    badgeId: 'energy-expert',
    badge_emoji: '⚡️',
    badge_color: 'bg-blue-400 text-blue-900',
    questions: [
        {
            id: 1,
            text: 'What is the standard unit of energy?',
            text_hi: 'ऊर्जा की मानक इकाई क्या है?',
            text_te: 'శక్తికి ప్రామాణిక ప్రమాణం ఏమిటి?',
            options: [
                { id: 'a', text: 'Newton', text_hi: 'न्यूटन', text_te: 'న్యూటన్' },
                { id: 'b', text: 'Watt', text_hi: 'वाट', text_te: 'వాట్' },
                { id: 'c', text: 'Joule', text_hi: 'जूल', text_te: 'జౌల్' },
                { id: 'd', text: 'Volt', text_hi: 'वोल्ट', text_te: 'వోల్ట్' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            type: 'mcq',
        },
        {
            id: 2,
            text: 'An object in motion has which type of energy?',
            text_hi: 'गति में वस्तु में किस प्रकार की ऊर्जा होती है?',
            text_te: 'చలనంలో ఉన్న వస్తువుకు ఏ రకమైన శక్తి ఉంటుంది?',
            options: [
                { id: 'a', text: 'Potential Energy', text_hi: 'स्थितिज ऊर्जा', text_te: 'స్థితిజ శక్తి' },
                { id: 'b', text: 'Kinetic Energy', text_hi: 'गतिज ऊर्जा', text_te: 'గతిజ శక్తి' },
                { id: 'c', text: 'Chemical Energy', text_hi: 'रासायनिक ऊर्जा', text_te: 'రసాయన శక్తి' },
                { id: 'd', text: 'Thermal Energy', text_hi: 'ऊष्मीय ऊर्जा', text_te: 'ఉష్ణ శక్తి' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            type: 'mcq',
        },
        {
            id: 3,
            text: 'A book sitting on a high shelf is an example of what kind of energy?',
            text_hi: 'एक ऊंची शेल्फ पर रखी किताब किस प्रकार की ऊर्जा का उदाहरण है?',
            text_te: 'ఎత్తైన షెల్ఫ్‌లో ఉన్న పుస్తకం ఏ రకమైన శక్తికి ఉదాహరణ?',
            options: [
                { id: 'a', text: 'Kinetic Energy', text_hi: 'गतिज ऊर्जा', text_te: 'గతిజ శక్తి' },
                { id: 'b', text: 'Potential Energy', text_hi: 'स्थितिज ऊर्जा', text_te: 'స్థితిజ శక్తి' },
                { id: 'c', text: 'Sound Energy', text_hi: 'ध्वनि ऊर्जा', text_te: 'ధ్వని శక్తి' },
                { id: 'd', text: 'Light Energy', text_hi: 'प्रकाश ऊर्जा', text_te: 'కాంతి శక్తి' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            type: 'mcq',
        },
        {
            id: 4,
            text: 'Which of these is a non-renewable source of energy?',
            text_hi: 'इनमें से कौन सा ऊर्जा का गैर-नवीकरणीय स्रोत है?',
            text_te: 'వీటిలో పునరుత్పాదక శక్తి వనరు ఏది?',
            options: [
                { id: 'a', text: 'Solar Power', text_hi: 'सौर ऊर्जा', text_te: 'సౌర శక్తి' },
                { id: 'b', text: 'Wind Power', text_hi: 'पवन ऊर्जा', text_te: 'పవన శక్తి' },
                { id: 'c', text: 'Coal', text_hi: 'कोयला', text_te: 'బొగ్గు' },
                { id: 'd', text: 'Hydropower', text_hi: 'जलविद्युत', text_te: 'జలవిద్యుత్' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            type: 'mcq',
        },
        {
            id: 5,
            text: 'Energy cannot be created or destroyed, only transformed. This is the law of...',
            text_hi: 'ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है, केवल रूपांतरित किया जा सकता है। यह किसका नियम है...',
            text_te: 'శక్తిని సృష్టించడం లేదా నాశనం చేయడం సాధ్యం కాదు, కేవలం రూపాంతరం చెందుతుంది. ఇది దేని నియమం...',
            options: [
                { id: 'a', text: 'Conservation of Energy', text_hi: 'ऊर्जा संरक्षण', text_te: 'శక్తి పరిరక్షణ' },
                { id: 'b', text: 'Conservation of Mass', text_hi: 'द्रव्यमान संरक्षण', text_te: 'ద్రవ్యరాశి పరిరక్షణ' },
                { id: 'c', text: 'Thermodynamics', text_hi: 'ऊष्మప్రవైगिकी', text_te: 'ఉష్ణగతికశాస్త్రం' },
                { id: 'd', text: 'Gravity', text_hi: 'गुरुत्वाकर्षण', text_te: 'గురుత్వాకర్షణ' },
            ],
            correctAnswer: 'a',
            difficulty: 'easy',
            type: 'mcq',
        }
    ]
  },
  {
    id: 'physics-level-3',
    subject: 'physics',
    title: 'Level 3',
    title_hi: 'स्तर 3',
    title_te: 'స్థాయి 3',
    description: 'Introduction to light.',
    description_hi: 'प्रकाश का परिचय।',
    description_te: 'కాంతికి పరిచయం.',
    badgeId: 'light-learner',
    badge_emoji: '💡',
    badge_color: 'bg-yellow-300 text-yellow-800',
    questions: [
        { id: 1, text: 'Which of these is a source of light?', text_hi: 'इनमें से कौन प्रकाश का स्रोत है?', text_te: 'వీటిలో కాంతి మూలం ఏది?', options: [{ id: 'a', text: 'Moon', text_hi: 'चांद', text_te: 'చంద్రుడు' },{ id: 'b', text: 'Sun', text_hi: 'सूरज', text_te: 'సూర్యుడు' },{ id: 'c', text: 'Mirror', text_hi: 'आईना', text_te: 'అద్దం' },{ id: 'd', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 2, text: 'What is a shadow?', text_hi: 'छाया क्या है?', text_te: 'నీడ అంటే ఏమిటి?', options: [{ id: 'a', text: 'A type of light', text_hi: 'एक प्रकार का प्रकाश', text_te: 'ఒక రకమైన కాంతి' },{ id: 'b', text: 'An area where light is blocked', text_hi: 'एक क्षेत्र जहां प्रकाश अवरुद्ध है', text_te: 'కాంతి నిరోధించబడిన ప్రాంతం' },{ id: 'c', text: 'A reflection', text_hi: 'एक प्रतिबिंब', text_te: 'ప్రతిబింబం' },{ id: 'd', text: 'A source of heat', text_hi: 'गर्मी का स्रोत', text_te: 'వేడి మూలం' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 3, text: 'Which material is transparent?', text_hi: 'कौन सी सामग्री पारदर्शी है?', text_te: 'ఏ పదార్థం పారదర్శకంగా ఉంటుంది?', options: [{ id: 'a', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' },{ id: 'b', text: 'Brick', text_hi: 'ईंट', text_te: 'ఇటుక' },{ id: 'c', text: 'Glass', text_hi: 'कांच', text_te: 'గాజు' },{ id: 'd', text: 'Paper', text_hi: 'कागज', text_te: 'కాగితం' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
        { id: 4, text: 'What do we call the bending of light?', text_hi: 'प्रकाश के मुड़ने को हम क्या कहते हैं?', text_te: 'కాంతి వంగడాన్ని మనం ఏమంటాము?', options: [{ id: 'a', text: 'Reflection', text_hi: 'परावर्तन', text_te: 'ప్రతిబింబం' },{ id: 'b', text: 'Refraction', text_hi: 'अपवर्तन', text_te: 'వక్రీభవనం' },{ id: 'c', text: 'Absorption', text_hi: 'अवशोषण', text_te: 'శోషణ' },{ id: 'd', text: 'Shadow', text_hi: 'छाया', text_te: 'నీడ' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 5, text: 'What colors make up white light?', text_hi: 'सफेद प्रकाश किन रंगों से बना है?', text_te: 'తెలుపు కాంతి ఏ రంగులతో తయారైంది?', options: [{ id: 'a', text: 'Red, Green, Blue', text_hi: 'लाल, हरा, नीला', text_te: 'ఎరుపు, ఆకుపచ్చ, నీలం' },{ id: 'b', text: 'All colors of the rainbow', text_hi: 'इंद्रधनुष के सभी रंग', text_te: 'ఇంద్రధనస్సు యొక్క అన్ని రంగులు' },{ id: 'c', text: 'Black and White', text_hi: 'काला और सफेद', text_te: 'నలుపు మరియు తెలుపు' },{ id: 'd', text: 'Yellow and Blue', text_hi: 'पीला और नीला', text_te: 'పసుపు మరియు నీలం' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', }
    ]
  },
  {
    id: 'physics-level-4',
    subject: 'physics',
    title: 'Level 4',
    title_hi: 'स्तर 4',
    title_te: 'స్థాయి 4',
    description: 'Sound and its properties.',
    description_hi: 'ध्वनि और उसके गुण।',
    description_te: 'ధ్వని మరియు దాని లక్షణాలు.',
    badgeId: 'sound-superstar',
    badge_emoji: '🔊',
    badge_color: 'bg-cyan-400 text-cyan-900',
    questions: [
        { id: 1, text: 'How is sound made?', text_hi: 'ध्वनि कैसे बनती है?', text_te: 'ధ్వని ఎలా తయారవుతుంది?', options: [{ id: 'a', text: 'By light', text_hi: 'प्रकाश से', text_te: 'కాంతి ద్వారా' },{ id: 'b', text: 'By vibrations', text_hi: 'कंपन से', text_te: 'కంపనల ద్వారా' },{ id: 'c', text: 'By heat', text_hi: 'गर्मी से', text_te: 'వేడి ద్వారా' },{ id: 'd', text: 'By silence', text_hi: 'शांति से', text_te: 'నిశ్శబ్దం ద్వారా' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 2, text: 'Sound travels fastest through...', text_hi: 'ध्वनि सबसे तेज किसमें यात्रा करती है...', text_te: 'ధ్వని దేనిలో వేగంగా ప్రయాణిస్తుంది...', options: [{ id: 'a', text: 'Solids', text_hi: 'ठोस', text_te: 'ఘనపదార్థాలు' },{ id: 'b', text: 'Liquids', text_hi: 'तरल पदार्थ', text_te: 'ద్రవాలు' },{ id: 'c', text: 'Gases', text_hi: 'गैसें', text_te: 'వాయువులు' },{ id: 'd', text: 'Vacuum (space)', text_hi: 'निर्वात (अंतरिक्ष)', text_te: 'వాక్యూమ్ (అంతరిక్షం)' }], correctAnswer: 'a', difficulty: 'easy', type: 'mcq', },
        { id: 3, text: 'What is the highness or lowness of a sound called?', text_hi: 'ध्वनि की उच्चता या निम्नता को क्या कहा जाता है?', text_te: 'ధ్వని యొక్క హెచ్చుతగ్గులను ఏమంటారు?', options: [{ id: 'a', text: 'Volume', text_hi: 'आयतन', text_te: 'వాల్యూమ్' },{ id: 'b', text: 'Pitch', text_hi: 'पिच', text_te: 'పిచ్' },{ id: 'c', text: 'Tempo', text_hi: 'गति', text_te: 'టెంపో' },{ id: 'd', text: 'Rhythm', text_hi: 'ताल', text_te: 'లయ' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 4, text: 'What do we call a sound that is reflected back?', text_hi: 'परावर्तित होकर वापस आने वाली ध्वनि को हम क्या कहते हैं?', text_te: 'ప్రతిధ్వనించే ధ్వనిని మనం ఏమంటాము?', options: [{ id: 'a', text: 'An echo', text_hi: 'एक प्रतिध्वनि', text_te: 'ప్రతిధ్వని' },{ id: 'b', text: 'A shadow', text_hi: 'एक छाया', text_te: 'నీడ' },{ id: 'c', text: 'A pitch', text_hi: 'एक पिच', text_te: 'పిచ్' },{ id: 'd', text: 'A vibration', text_hi: 'एक कंपन', text_te: 'కంపనం' }], correctAnswer: 'a', difficulty: 'easy', type: 'mcq', },
        { id: 5, text: 'Sound cannot travel in...', text_hi: 'ध्वनि किसमें यात्रा नहीं कर सकती...', text_te: 'ధ్వని దేనిలో ప్రయాణించదు...', options: [{ id: 'a', text: 'Water', text_hi: 'पानी', text_te: 'నీరు' },{ id: 'b', text: 'Air', text_hi: 'वायु', text_te: 'గాలి' },{ id: 'c', text: 'Space', text_hi: 'अंतरिक्ष', text_te: 'అంతరిక్షం' },{ id: 'd', text: 'Iron', text_hi: 'लोहा', text_te: 'ఇనుము' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', }
    ]
  },
  {
    id: 'physics-level-5',
    subject: 'physics',
    title: 'Level 5',
    title_hi: 'स्तर 5',
    title_te: 'స్థాయి 5',
    description: 'Basics of electricity.',
    description_hi: 'बिजली की मूल बातें।',
    description_te: 'విద్యుత్ యొక్క ప్రాథమికాలు.',
    badgeId: 'electric-explorer',
    badge_emoji: '🔌',
    badge_color: 'bg-teal-400 text-teal-900',
    questions: [
        { id: 1, text: 'What flows through wires to power a light bulb?', text_hi: 'एक लाइट बल्ब को बिजली देने के लिए तारों से क्या बहता है?', text_te: 'ఒక లైట్ బల్బును శక్తివంతం చేయడానికి తీగల ద్వారా ఏమి ప్రవహిస్తుంది?', options: [{ id: 'a', text: 'Water', text_hi: 'पानी', text_te: 'నీరు' },{ id: 'b', text: 'Air', text_hi: 'वायु', text_te: 'గాలి' },{ id: 'c', text: 'Electricity', text_hi: 'बिजली', text_te: 'విద్యుత్' },{ id: 'd', text: 'Sound', text_hi: 'ध्वनि', text_te: 'ధ్వని' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
        { id: 2, text: 'A path for electricity to flow is called a...', text_hi: 'बिजली के बहने के रास्ते को क्या कहा जाता है...', text_te: 'విద్యుత్ ప్రవహించే మార్గాన్ని ఏమంటారు...', options: [{ id: 'a', text: 'Circuit', text_hi: 'सर्किट', text_te: 'సర్క్యూట్' },{ id: 'b', text: 'River', text_hi: 'नदी', text_te: 'నది' },{ id: 'c', text: 'Road', text_hi: 'सड़क', text_te: 'రహదారి' },{ id: 'd', text: 'Pipe', text_hi: 'पाइप', text_te: 'పైపు' }], correctAnswer: 'a', difficulty: 'easy', type: 'mcq', },
        { id: 3, text: 'Which material is a good conductor of electricity?', text_hi: 'कौन सी सामग्री बिजली का अच्छा सुचालक है?', text_te: 'ఏ పదార్థం విద్యుత్ యొక్క మంచి వాహకం?', options: [{ id: 'a', text: 'Rubber', text_hi: 'रबर', text_te: 'రబ్బరు' },{ id: 'b', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' },{ id: 'c', text: 'Plastic', text_hi: 'प्लास्टिक', text_te: 'ప్లాస్టిక్' },{ id: 'd', text: 'Copper', text_hi: 'तांबा', text_te: 'రాగి' }], correctAnswer: 'd', difficulty: 'easy', type: 'mcq', },
        { id: 4, text: 'A material that does NOT let electricity pass through it is called...', text_hi: 'एक सामग्री जो बिजली को अपने से गुजरने नहीं देती है, उसे क्या कहा जाता है...', text_te: 'విద్యుత్తును తన గుండా వెళ్ళనివ్వని పదార్థాన్ని ఏమంటారు...', options: [{ id: 'a', text: 'A conductor', text_hi: 'एक सुचालक', text_te: 'వాహకం' },{ id: 'b', text: 'An insulator', text_hi: 'एक इन्सुलेटर', text_te: 'ఇన్సులేటర్' },{ id: 'c', text: 'A battery', text_hi: 'एक बैटरी', text_te: 'బ్యాటరీ' },{ id: 'd', text: 'A wire', text_hi: 'एक तार', text_te: 'తీగ' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 5, text: 'What provides the power in a simple circuit?', text_hi: 'एक साधारण सर्किट में शक्ति कौन प्रदान करता है?', text_te: 'ఒక సాధారణ సర్క్యూట్‌లో శక్తిని ఏది అందిస్తుంది?', options: [{ id: 'a', text: 'The light bulb', text_hi: 'लाइट बल्ब', text_te: 'లైట్ బల్బ్' },{ id: 'b', text: 'The switch', text_hi: 'स्विच', text_te: 'స్విచ్' },{ id: 'c', text: 'The wire', text_hi: 'तार', text_te: 'తీగ' },{ id: 'd', text: 'The battery', text_hi: 'बैटरी', text_te: 'బ్యాటరీ' }], correctAnswer: 'd', difficulty: 'easy', type: 'mcq', }
    ]
  },

  // Biology Missions
  {
    id: 'biology-level-1',
    subject: 'biology',
    title: 'Level 1',
    title_hi: 'स्तर 1',
    title_te: 'స్థాయి 1',
    description: 'The magic of photosynthesis.',
    description_hi: 'प्रकाश संश्लेषण का जादू।',
    description_te: 'కిరణజన్య సంయోగక్రియ యొక్క మాయాజాలం.',
    badgeId: 'botany-expert',
    badge_emoji: '🌿',
    badge_color: 'bg-green-400 text-green-900',
    questions: [
      {
        id: 1,
        text: 'What is the process by which plants make their food called?',
        text_hi: 'पौधे जिस प्रक्रिया से अपना भोजन बनाते हैं, उसे क्या कहते हैं?',
        text_te: 'మొక్కలు తమ ఆహారాన్ని తయారుచేసుకునే ప్రక్రియను ఏమంటారు?',
        options: [
          { id: 'a', text: 'Respiration', text_hi: 'श्वसन', text_te: 'శ్వాసక్రియ' },
          { id: 'b', text: 'Transpiration', text_hi: 'वाष्पोत्सर्जन', text_te: 'భాష్పోత్సేకం' },
          { id: 'c', text: 'Photosynthesis', text_hi: 'प्रकाश संश्लेषण', text_te: 'కిరణజన్య సంయోగక్రియ' },
          { id: 'd', 'text': 'Germination', text_hi: 'अंकुरण', text_te: 'అంకురోత్పత్తి' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 2,
        text: 'What gas do plants absorb from the atmosphere for photosynthesis?',
        text_hi: 'प्रकाश संश्लेषण के लिए पौधे वायुमंडल से कौन सी गैस अवशोषित करते हैं?',
        text_te: 'కిరణజన్య సంయోగక్రియ కోసం మొక్కలు వాతావరణం నుండి ఏ వాయువును గ్రహిస్తాయి?',
        options: [
            { id: 'a', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్' },
            { id: 'b', text: 'Carbon Dioxide', text_hi: 'कार्बन डाइऑक्साइड', text_te: 'కార్బన్ డయాక్సైడ్' },
            { id: 'c', text: 'Nitrogen', text_hi: 'नाइट्रोजन', text_te: 'నత్రజని' },
            { id: 'd', text: 'Hydrogen', text_hi: 'हाइड्रोजन', text_te: 'హైడ్రోజన్' },
        ],
        correctAnswer: 'b',
        difficulty: 'medium',
        type: 'mcq',
      },
      {
        id: 3,
        text: 'Which part of the plant absorbs water and nutrients from the soil?',
        text_hi: 'पौधे का कौन सा भाग मिट्टी से पानी और पोषक तत्वों को अवशोषित करता है?',
        text_te: 'మొక్క యొక్క ఏ భాగం నేల నుండి నీరు మరియు పోషకాలను గ్రహిస్తుంది?',
        options: [
            { id: 'a', text: 'Leaf', text_hi: 'पत्ती', text_te: 'ఆకు' },
            { id: 'b', text: 'Stem', text_hi: 'तना', text_te: 'కాండం' },
            { id: 'c', text: 'Flower', text_hi: 'फूल', text_te: 'పువ్వు' },
            { id: 'd', text: 'Root', text_hi: 'जड़', text_te: 'వేరు' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 4,
        text: 'What is the green pigment in leaves that captures sunlight?',
        text_hi: 'पत्तियों में कौन सा हरा वर्णक सूर्य के प्रकाश को पकड़ता है?',
        text_te: 'ఆకులలో సూర్యరశ్మిని సంగ్రహించే ఆకుపచ్చ వర్ణద్రవ్యం ఏది?',
        options: [
          { id: 'a', text: 'Chlorophyll', text_hi: 'क्लोरोफिल', text_te: 'క్లోరోఫిల్' },
          { id: 'b', text: 'Carotene', text_hi: 'कैरोटीन', text_te: 'కెరోటిన్' },
          { id: 'c', text: 'Xanthophyll', text_hi: 'ज़ैंथोफिल', text_te: 'క్సాంతోఫిల్' },
          { id: 'd', text: 'Anthocyanin', text_hi: 'एंथोसायनिन', text_te: 'ఆంథోసైనిన్' },
        ],
        correctAnswer: 'a',
        difficulty: 'medium',
        type: 'mcq',
      },
      {
        id: 5,
        text: 'What do plants release as a byproduct of photosynthesis?',
        text_hi: 'प्रकाश संश्लेषण के उपोत्पाद के रूप में पौधे क्या छोड़ते हैं?',
        text_te: 'కిరణజన్య సంయోగక్రియ యొక్క ఉప-ఉత్పత్తిగా మొక్కలు దేనిని విడుదల చేస్తాయి?',
        options: [
          { id: 'a', text: 'Carbon Dioxide', text_hi: 'कार्बन डाइऑक्साइड', text_te: 'కార్బన్ డయాక్సైడ్' },
          { id: 'b', text: 'Water Vapor', text_hi: 'जल वाष्प', text_te: 'నీటి ఆవిరి' },
          { id: 'c', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్' },
          { id: 'd', text: 'Sugar', text_hi: 'शर्करा', text_te: 'చక్కెర' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        type: 'mcq',
      }
    ],
  },
  {
    id: 'biology-level-2',
    subject: 'biology',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    description: 'The human body systems.',
    description_hi: 'मानव शरीर के तंत्र।',
    description_te: 'మానవ శరీర వ్యవస్థలు.',
    badgeId: 'anatomy-ace',
    badge_emoji: '🫀',
    badge_color: 'bg-red-400 text-red-900',
    questions: [
        {
            id: 1,
            text: 'Which organ pumps blood around the body?',
            text_hi: 'कौन सा अंग शरीर में रक्त पंप करता है?',
            text_te: 'శరీరమంతా రక్తాన్ని పంప్ చేసే అవయవం ఏది?',
            options: [
                { id: 'a', text: 'Lungs', text_hi: 'फेफड़े', text_te: 'ఊపిరితిత్తులు' },
                { id: 'b', text: 'Brain', text_hi: 'मस्तिष्क', text_te: 'మెదడు' },
                { id: 'c', text: 'Heart', text_hi: 'हृदय', text_te: 'గుండె' },
                { id: 'd', text: 'Stomach', text_hi: 'पेट', text_te: 'కడుపు' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            type: 'mcq',
        },
        {
            id: 2,
            text: 'What is the main function of the lungs?',
            text_hi: 'फेफड़ों का मुख्य कार्य क्या है?',
            text_te: 'ఊపిరితిత్తుల యొక్క ప్రధాన విధి ఏమిటి?',
            options: [
                { id: 'a', text: 'Digesting food', text_hi: 'भोजन पचाना', text_te: 'ఆహారాన్ని జీర్ణం చేయడం' },
                { id: 'b', text: 'Pumping blood', text_hi: 'रक्त पंप करना', text_te: 'రక్తాన్ని పంప్ చేయడం' },
                { id: 'c', text: 'Filtering waste', text_hi: 'अपशिष्ट छानना', text_te: 'వ్యర్థాలను ఫిల్టర్ చేయడం' },
                { id: 'd', text: 'Breathing', text_hi: 'सांस लेना', text_te: 'శ్వాసించడం' },
            ],
            correctAnswer: 'd',
            difficulty: 'easy',
            type: 'mcq',
        },
        {
            id: 3,
            text: 'Which system is responsible for breaking down food?',
            text_hi: 'भोजन को तोड़ने के लिए कौन सी प्रणाली जिम्मेदार है?',
            text_te: 'ఆహారాన్ని విచ్ఛిన్నం చేయడానికి ఏ వ్యవస్థ బాధ్యత వహిస్తుంది?',
            options: [
                { id: 'a', text: 'Nervous System', text_hi: 'तंत्रिका तंत्र', text_te: 'నాడీ వ్యవస్థ' },
                { id: 'b', text: 'Digestive System', text_hi: 'पाचन तंत्र', text_te: 'జీర్ణ వ్యవస్థ' },
                { id: 'c', text: 'Skeletal System', text_hi: 'कंकाल तंत्र', text_te: 'అస్థిపంజర వ్యవస్థ' },
                { id: 'd', text: 'Circulatory System', text_hi: 'परिसंचरण तंत्र', text_te: 'ప్రసరణ వ్యవస్థ' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            type: 'mcq',
        },
        {
            id: 4,
            text: 'What is the control center of the human body?',
            text_hi: 'मानव शरीर का नियंत्रण केंद्र क्या है?',
            text_te: 'మానవ శరీరానికి నియంత్రణ కేంద్రం ఏది?',
            options: [
                { id: 'a', text: 'Heart', text_hi: 'हृदय', text_te: 'గుండె' },
                { id: 'b', text: 'Liver', text_hi: 'यकृत', text_te: 'కాలేయం' },
                { id: 'c', text: 'Spinal Cord', text_hi: 'मेरुदण्ड', text_te: 'వెన్నుపాము' },
                { id: 'd', text: 'Brain', text_hi: 'मस्तिष्क', text_te: 'మెదడు' },
            ],
            correctAnswer: 'd',
            difficulty: 'easy',
            type: 'mcq',
        },
        {
            id: 5,
            text: 'The framework of bones that supports the body is called the...',
            text_hi: 'शरीर को सहारा देने वाली हड्डियों के ढांचे को क्या कहा जाता है...',
            text_te: 'శరీరానికి మద్దతు ఇచ్చే ఎముకల చట్రాన్ని ఏమంటారు...',
            options: [
                { id: 'a', text: 'Muscular System', text_hi: 'मांसपेशी तंत्र', text_te: 'కండరాల వ్యవస్థ' },
                { id: 'b', text: 'Skeletal System', text_hi: 'कंकाल तंत्र', text_te: 'అస్థిపంజర వ్యవస్థ' },
                { id: 'c', text: 'Nervous System', text_hi: 'तंत्रिका तंत्र', text_te: 'నాడీ వ్యవస్థ' },
                { id: 'd', text: 'Skin', text_hi: 'त्वचा', text_te: 'చర్మం' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            type: 'mcq',
        }
    ]
  },
  {
    id: 'biology-level-3',
    subject: 'biology',
    title: 'Level 3',
    title_hi: 'स्तर 3',
    title_te: 'స్థాయి 3',
    description: 'All about animals.',
    description_hi: 'जानवरों के बारे में सब कुछ।',
    description_te: 'జంతువుల గురించి అన్నీ.',
    badgeId: 'zoology-zero',
    badge_emoji: '🐘',
    badge_color: 'bg-gray-400 text-gray-900',
    questions: [
        { id: 1, text: 'Which animal is the king of the jungle?', text_hi: 'जंगल का राजा कौन सा जानवर है?', text_te: 'అడవికి రాజు ఏ జంతువు?', options: [{ id: 'a', text: 'Tiger', text_hi: 'बाघ', text_te: 'పులి' },{ id: 'b', text: 'Elephant', text_hi: 'हाथी', text_te: 'ఏనుగు' },{ id: 'c', text: 'Lion', text_hi: 'शेर', text_te: 'సింహం' },{ id: 'd', text: 'Bear', text_hi: 'भालू', text_te: 'ఎలుగుబంటి' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
        { id: 2, text: 'Which of these animals can fly?', text_hi: 'इनमें से कौन सा जानवर उड़ सकता है?', text_te: 'ఈ జంతువులలో ఏది ఎగరగలదు?', options: [{ id: 'a', text: 'Penguin', text_hi: 'पेंगुइन', text_te: 'పెంగ్విన్' },{ id: 'b', text: 'Ostrich', text_hi: 'शुतुरमुर्ग', text_te: 'ఉష్ట్రపక్షి' },{ id: 'c', text: 'Bat', text_hi: 'चमगादड़', text_te: 'గబ్బిలం' },{ id: 'd', text: 'Chicken', text_hi: 'मुर्गी', text_te: 'కోడి' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
        { id: 3, text: 'What is a baby dog called?', text_hi: 'कुत्ते के बच्चे को क्या कहते हैं?', text_te: 'కుక్క పిల్లను ఏమంటారు?', options: [{ id: 'a', text: 'Kitten', text_hi: 'बिल्ली का बच्चा', text_te: 'పిల్లి పిల్ల' },{ id: 'b', text: 'Puppy', text_hi: 'पिल्ला', text_te: 'కుక్క పిల్ల' },{ id: 'c', text: 'Calf', text_hi: 'बछड़ा', text_te: 'దూడ' },{ id: 'd', text: 'Cub', text_hi: 'शावक', text_te: 'పిల్ల' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 4, text: 'Which animal is known for changing its color?', text_hi: 'कौन सा जानवर अपना रंग बदलने के लिए जाना जाता है?', text_te: 'ఏ జంతువు తన రంగును మార్చడానికి ప్రసిద్ధి చెందింది?', options: [{ id: 'a', text: 'Frog', text_hi: 'मेंढक', text_te: 'కప్ప' },{ id: 'b', text: 'Chameleon', text_hi: 'गिरगिट', text_te: 'ఊసరవెల్లి' },{ id: 'c', text: 'Snake', text_hi: 'सांप', text_te: 'పాము' },{ id: 'd', text: 'Lizard', text_hi: 'छिपकली', text_te: 'బల్లి' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 5, text: 'What do you call an animal that only eats plants?', text_hi: 'जो जानवर केवल पौधे खाता है उसे आप क्या कहते हैं?', text_te: 'మొక్కలను మాత్రమే తినే జంతువును ఏమంటారు?', options: [{ id: 'a', text: 'Carnivore', text_hi: 'मांसाहारी', text_te: 'మాంసాహారి' },{ id: 'b', text: 'Omnivore', text_hi: 'सर्वाहारी', text_te: 'సర్వభక్షకి' },{ id: 'c', text: 'Herbivore', text_hi: 'शाकाहारी', text_te: 'శాఖాహారి' },{ id: 'd', text: 'Insectivore', text_hi: 'कीटभक्षी', text_te: 'కీటకాహారి' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', }
    ]
  },
  {
    id: 'biology-level-4',
    subject: 'biology',
    title: 'Level 4',
    title_hi: 'स्तर 4',
    title_te: 'స్థాయి 4',
    description: 'The five senses.',
    description_hi: 'पांच इंद्रियां।',
    description_te: 'ఐదు ఇంద్రియాలు.',
    badgeId: 'senses-savant',
    badge_emoji: '👁️',
    badge_color: 'bg-blue-300 text-blue-800',
    questions: [
        { id: 1, text: 'Which sense do you use your eyes for?', text_hi: 'आप अपनी आंखों का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ కళ్ళను ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Hearing', text_hi: 'सुनना', text_te: 'వినడం' },{ id: 'b', text: 'Smell', text_hi: 'सूंघना', text_te: 'వాసన' },{ id: 'c', text: 'Sight', text_hi: 'देखना', text_te: 'చూపు' },{ id: 'd', text: 'Touch', text_hi: 'स्पर्श', text_te: 'స్పర్శ' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
        { id: 2, text: 'Which sense do you use your nose for?', text_hi: 'आप अपनी नाक का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ ముక్కును ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Taste', text_hi: 'स्वाद', text_te: 'రుచి' },{ id: 'b', text: 'Smell', text_hi: 'सूंघना', text_te: 'వాసన' },{ id: 'c', text: 'Hearing', text_hi: 'सुनना', text_te: 'వినడం' },{ id: 'd', text: 'Sight', text_hi: 'देखना', text_te: 'చూపు' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
        { id: 3, text: 'Which sense do you use your ears for?', text_hi: 'आप अपने कानों का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ చెవులను ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Touch', text_hi: 'स्पर्श', text_te: 'స్పర్శ' },{ id: 'b', text: 'Taste', text_hi: 'स्वाद', text_te: 'రుచి' },{ id: 'c', text: 'Sight', text_hi: 'देखना', text_te: 'చూపు' },{ id: 'd', text: 'Hearing', text_hi: 'सुनना', text_te: 'వినడం' }], correctAnswer: 'd', difficulty: 'easy', type: 'mcq', },
        { id: 4, text: 'Which sense do you use your tongue for?', text_hi: 'आप अपनी जीभ का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ నాలుకను ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Smell', text_hi: 'सूंघना', text_te: 'వాసన' },{ id: 'b', text: 'Hearing', text_hi: 'सुनना', text_te: 'వినడం' },{ id: 'c', text: 'Taste', text_hi: 'स्वाद', text_te: 'రుచి' },{ id: 'd', text: 'Touch', text_hi: 'स्पर्श', text_te: 'స్పర్శ' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
        { id: 5, text: 'Which sense do you use your skin for?', text_hi: 'आप अपनी त्वचा का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ చర్మాన్ని ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Sight', text_hi: 'देखना', text_te: 'చూపు' },{ id: 'b', text: 'Taste', text_hi: 'स्वाद', text_te: 'రుచి' },{ id: 'c', text: 'Smell', text_hi: 'सूंघना', text_te: 'వాసన' },{ id: 'd', text: 'Touch', text_hi: 'स्पर्श', text_te: 'స్పర్శ' }], correctAnswer: 'd', difficulty: 'easy', type: 'mcq', }
    ]
  },
  {
    id: 'biology-level-5',
    subject: 'biology',
    title: 'Level 5',
    title_hi: 'स्तर 5',
    title_te: 'స్థాయి 5',
    description: 'Life cycles of living things.',
    description_hi: 'जीवित चीजों के जीवन चक्र।',
    description_te: 'జీవుల జీవిత చక్రాలు.',
    badgeId: 'lifecycle-legend',
    badge_emoji: '🦋',
    badge_color: 'bg-orange-300 text-orange-800',
    questions: [
        { id: 1, text: 'What is the first stage in a frog\'s life cycle?', text_hi: 'एक मेंढक के जीवन चक्र में पहला चरण क्या है?', text_te: 'కప్ప జీవిత చక్రంలో మొదటి దశ ఏది?', options: [{ id: 'a', text: 'Tadpole', text_hi: 'टैडपोल', text_te: 'టాడ్పోల్' },{ id: 'b', text: 'Froglet', text_hi: 'फ्रॉगलेट', text_te: 'ఫ్రాగ్లెట్' },{ id: 'c', text: 'Egg', text_hi: 'अंडा', text_te: 'గుడ్డు' },{ id: 'd', text: 'Adult Frog', text_hi: 'वयस्क मेंढक', text_te: 'పెద్ద కప్ప' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
        { id: 2, text: 'A caterpillar turns into what?', text_hi: 'एक कैटरपिलर किसमें बदल जाता है?', text_te: 'గొంగళి పురుగు దేనిగా మారుతుంది?', options: [{ id: 'a', text: 'A butterfly', text_hi: 'एक तितली', text_te: 'సీతాకోకచిలుక' },{ id: 'b', text: 'A bee', text_hi: 'एक मधुमक्खी', text_te: 'తేనెటీగ' },{ id: 'c', text: 'A worm', text_hi: 'एक कीड़ा', text_te: 'పురుగు' },{ id: 'd', text: 'A spider', text_hi: 'एक मकड़ी', text_te: 'సాలీడు' }], correctAnswer: 'a', difficulty: 'easy', type: 'mcq', },
        { id: 3, text: 'What does a seed need to grow into a plant?', text_hi: 'एक बीज को पौधे में उगने के लिए क्या चाहिए?', text_te: 'ఒక విత్తనం మొక్కగా పెరగడానికి ఏమి అవసరం?', options: [{ id: 'a', text: 'Water, soil, and sunlight', text_hi: 'पानी, मिट्टी और धूप', text_te: 'నీరు, నేల మరియు సూర్యరశ్మి' },{ id: 'b', text: 'Only water', text_hi: 'केवल पानी', text_te: 'నీరు మాత్రమే' },{ id: 'c', 'text': 'Only soil', text_hi: 'केवल मिट्टी', text_te: 'నేల మాత్రమే' },{ id: 'd', 'text': 'Only sunlight', text_hi: 'केवल धूप', text_te: 'సూర్యరశ్మి మాత్రమే' }], correctAnswer: 'a', difficulty: 'easy', type: 'mcq', },
        { id: 4, text: 'Where do most mammals, like humans, begin their life?', text_hi: 'इंसानों जैसे अधिकांश स्तनधारी अपना जीवन कहाँ से शुरू करते हैं?', text_te: 'మానవుల వంటి చాలా క్షీరదాలు తమ జీవితాన్ని ఎక్కడ ప్రారంభిస్తాయి?', options: [{ id: 'a', text: 'In an egg', text_hi: 'एक अंडे में', text_te: 'గుడ్డులో' },{ id: 'b', text: 'As a seed', text_hi: 'एक बीज के रूप में', text_te: 'విత్తనంగా' },{ id: 'c', text: 'Inside their mother\'s body', text_hi: 'अपनी माँ के शरीर के अंदर', text_te: 'తమ తల్లి శరీరంలో' },{ id: 'd', text: 'In a pond', text_hi: 'एक तालाब में', text_te: 'చెరువులో' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
        { id: 5, text: 'What is the process of a young animal changing form to become an adult called?', text_hi: 'एक युवा जानवर के वयस्क बनने के लिए रूप बदलने की प्रक्रिया को क्या कहा जाता है?', text_te: 'ఒక యువ జంతువు పెద్దదిగా మారడానికి రూపాంతరం చెందే ప్రక్రియను ఏమంటారు?', options: [{ id: 'a', text: 'Growing', text_hi: 'बढ़ना', text_te: 'పెరగడం' },{ id: 'b', text: 'Metamorphosis', text_hi: 'कायापलट', text_te: 'రూపాంతరం' },{ id: 'c', text: 'Aging', text_hi: 'उम्र बढ़ना', text_te: 'వృద్ధాప్యం' },{ id: 'd', text: 'Hatching', text_hi: 'अंडे से निकलना', text_te: 'పొదగడం' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', }
    ]
  },
  {
    id: 'biology-level-6',
    subject: 'biology',
    title: 'Level 6',
    title_hi: 'स्तर 6',
    title_te: 'స్థాయి 6',
    description: 'Arrange the food chain in the correct order.',
    description_hi: 'खाद्य श्रृंखला को सही क्रम में व्यवस्थित करें।',
    description_te: 'ఆహార గొలుసును సరైన క్రమంలో అమర్చండి.',
    badgeId: 'food-chain-champ',
    badge_emoji: '🔗',
    badge_color: 'bg-teal-400 text-teal-900',
    questions: [
        {
            id: 1,
            text: 'Arrange this food chain in the correct order, starting from the energy source.',
            text_hi: 'इस खाद्य श्रृंखला को ऊर्जा स्रोत से शुरू करते हुए सही क्रम में व्यवस्थित करें।',
            text_te: 'ఈ ఆహార గొలుసును శక్తి మూలం నుండి ప్రారంభించి సరైన క్రమంలో అమర్చండి.',
            type: 'food-chain-visual',
            chainItems: [
                { id: 'frog', text: 'Frog', text_hi: 'मेंढक', text_te: 'కప్ప' },
                { id: 'grass', text: 'Grass', text_hi: 'घास', text_te: 'గడ్డి' },
                { id: 'sun', text: 'Sun', text_hi: 'सूरज', text_te: 'సూర్యుడు' },
                { id: 'eagle', text: 'Eagle', text_hi: 'चील', text_te: 'గద్ద' },
                { id: 'grasshopper', text: 'Grasshopper', text_hi: 'टिड्डा', text_te: 'మిడత' },
                { id: 'snake', text: 'Snake', text_hi: 'सांप', text_te: 'పాము' },
            ],
            correctAnswer: 'sun,grass,grasshopper,frog,snake,eagle',
            difficulty: 'hard',
        }
    ]
  },

  // Mathematics Missions
  {
    id: 'mathematics-level-1',
    subject: 'mathematics',
    title: 'Level 1: Treasure Hunt',
    title_hi: 'स्तर 1: खजाने की खोज',
    title_te: 'స్థాయి 1: నిధి వేట',
    description: 'Solve the clues to find the treasure!',
    description_hi: 'खजाना खोजने के लिए सुरागों को हल करें!',
    description_te: 'నిధిని కనుగొనడానికి ఆధారాలను పరిష్కరించండి!',
    badgeId: 'math-master',
    badge_emoji: '🔢',
    badge_color: 'bg-orange-400 text-orange-900',
    questions: [
      {
        id: 1,
        text: "You find the first clue! To open it, solve: 5 × 8. The answer is the number of the next clue.",
        text_hi: "आपको पहला सुराग मिल गया! इसे खोलने के लिए, हल करें: 5 × 8. उत्तर अगले सुराग की संख्या है।",
        text_te: "మీరు మొదటి ఆధారం కనుగొన్నారు! దాన్ని తెరవడానికి, పరిష్కరించండి: 5 × 8. సమాధానం తదుపరి ఆధారం సంఖ్య.",
        type: 'picture-puzzle',
        correctAnswer: '40',
        difficulty: 'easy',
      },
      {
        id: 2,
        text: 'Clue 40 says: "I have 12 apples and give away 5." The number of apples left is the next clue number.',
        text_hi: 'सुराग 40 कहता है: "मेरे पास 12 सेब हैं और मैंने 5 दे दिए।" बचे हुए सेबों की संख्या अगले सुराग की संख्या है।',
        text_te: 'ఆధారం 40 చెబుతుంది: "నా దగ్గర 12 ఆపిల్స్ ఉన్నాయి మరియు 5 ఇచ్చేశాను." మిగిలిన ఆపిల్స్ సంఖ్య తదుపరి ఆధారం సంఖ్య.',
        type: 'picture-puzzle',
        correctAnswer: '7',
        difficulty: 'easy',
      },
      {
        id: 3,
        text: 'Clue 7 is a sequence: 2, 4, 6, 8, ... What is the next number? That number is your next clue!',
        text_hi: 'सुराग 7 एक क्रम है: 2, 4, 6, 8, ... अगला नंबर क्या है? वह नंबर आपका अगला सुराग है!',
        text_te: 'ఆధారం 7 ఒక క్రమం: 2, 4, 6, 8, ... తదుపరి సంఖ్య ఏది? ఆ సంఖ్య మీ తదుపరి ఆధారం!',
        type: 'picture-puzzle',
        correctAnswer: '10',
        difficulty: 'easy',
      },
       {
        id: 4,
        text: 'Clue 10 asks: How many sides does a triangle have? The answer is the final clue to the treasure!',
        text_hi: 'सुराग 10 पूछता है: एक त्रिभुज में कितनी भुजाएँ होती हैं? उत्तर खजाने का अंतिम सुराग है!',
        text_te: 'ఆధారం 10 అడుగుతుంది: ఒక త్రిభుజానికి ఎన్ని భుజాలు ఉంటాయి? సమాధానం నిధికి చివరి ఆధారం!',
        type: 'picture-puzzle',
        correctAnswer: '3',
        difficulty: 'easy',
      },
      {
        id: 5,
        text: "You've reached Clue 3! The treasure is yours! What is 100 divided by 10?",
        text_hi: "आप सुराग 3 पर पहुँच गए हैं! खजाना आपका है! 100 को 10 से विभाजित करने पर क्या मिलता है?",
        text_te: "మీరు ఆధారం 3కి చేరుకున్నారు! నిధి మీదే! 100 ను 10 తో భాగిస్తే ఎంత?",
        type: 'picture-puzzle',
        correctAnswer: '10',
        difficulty: 'easy',
      }
    ]
  },
  {
    id: 'mathematics-level-2',
    subject: 'mathematics',
    title: 'Level 2: Memory Matching',
    title_hi: 'स्तर 2: मेमोरी मैचिंग',
    title_te: 'స్థాయి 2: మెమరీ మ్యాచింగ్',
    description: 'Match the shapes to their properties in this visual puzzle.',
    description_hi: 'इस दृश्य पहेली में आकृतियों को उनके गुणों से मिलाएं।',
    description_te: 'ఈ దృశ్య పజిల్‌లో ఆకారాలను వాటి లక్షణాలతో సరిపోల్చండి.',
    badgeId: 'geometry-genius',
    badge_emoji: '📐',
    badge_color: 'bg-yellow-500 text-yellow-900',
    questions: [
        {
            id: 1,
            text: 'Match the shape to its number of sides. A square has how many sides?',
            text_hi: 'आकृति को उसकी भुजाओं की संख्या से मिलाएं। एक वर्ग में कितनी भुजाएँ होती हैं?',
            text_te: 'ఆకారాన్ని దాని భుజాల సంఖ్యతో సరిపోల్చండి. ఒక చతురస్రానికి ఎన్ని భుజాలు ఉంటాయి?',
            type: 'picture-puzzle',
            imageUrl: 'https://picsum.photos/seed/mathShapes1/400/200',
            imageHint: 'square shape',
            correctAnswer: '4',
            difficulty: 'easy',
        },
        {
            id: 2,
            text: 'Match the shape to its number of sides. A pentagon has how many sides?',
            text_hi: 'आकृति को उसकी भुजाओं की संख्या से मिलाएं। एक पंचकोण में कितनी भुजाएँ होती हैं?',
            text_te: 'ఆకారాన్ని దాని భుజాల సంఖ్యతో సరిపోల్చండి. ఒక పంచభుజికి ఎన్ని భుజాలు ఉంటాయి?',
            type: 'picture-puzzle',
            imageUrl: 'https://picsum.photos/seed/mathShapes2/400/200',
            imageHint: 'pentagon shape',
            correctAnswer: '5',
            difficulty: 'easy',
        },
        {
            id: 3,
            text: 'How many degrees are in a full circle?',
            text_hi: 'एक पूरे वृत्त में कितने डिग्री होते हैं?',
            text_te: 'ఒక పూర్తి వృత్తంలో ఎన్ని డిగ్రీలు ఉంటాయి?',
            type: 'picture-puzzle',
            imageUrl: 'https://picsum.photos/seed/mathShapes3/400/200',
            imageHint: 'circle shape',
            correctAnswer: '360',
            difficulty: 'easy',
        },
    ]
  },
  {
    id: 'mathematics-level-3',
    subject: 'mathematics',
    title: 'Level 3: Equation Jigsaw',
    title_hi: 'स्तर 3: समीकरण आरा',
    title_te: 'స్థాయి 3: సమీకరణ జా',
    description: 'Solve the fraction problems to complete the puzzle.',
    description_hi: 'पहेली को पूरा करने के लिए भिन्न समस्याओं को हल करें।',
    description_te: 'పజిల్‌ను పూర్తి చేయడానికి భిన్న సమస్యలను పరిష్కరించండి.',
    badgeId: 'fraction-fanatic',
    badge_emoji: '🍕',
    badge_color: 'bg-red-400 text-red-900',
    questions: [
        { id: 1, text: 'This is the first piece of the jigsaw. What is 1/2 of 10?', text_hi: 'यह आरा का पहला टुकड़ा है। 10 का 1/2 क्या है?', text_te: 'ఇది జా యొక్క మొదటి ముక్క. 10లో 1/2 ఎంత?', type: 'picture-puzzle', correctAnswer: '5', imageUrl: 'https://picsum.photos/seed/jigsaw1/400/100', imageHint: 'jigsaw puzzle', difficulty: 'easy', },
        { id: 2, text: 'You found the second piece! If a pizza has 8 slices and you eat 2, how many slices are left?', text_hi: 'आपको दूसरा टुकड़ा मिल गया! यदि एक पिज्जा में 8 स्लाइस हैं और आप 2 खाते हैं, तो कितने स्लाइस बचते हैं?', text_te: 'మీరు రెండవ ముక్కను కనుగొన్నారు! ఒక పిజ్జాలో 8 ముక్కలు ఉంటే మరియు మీరు 2 తింటే, ఎన్ని ముక్కలు మిగులుతాయి?', type: 'picture-puzzle', correctAnswer: '6', imageUrl: 'https://picsum.photos/seed/jigsaw2/400/100', imageHint: 'pizza slices', difficulty: 'easy', },
        { id: 3, text: 'The final piece! What is 1/2 + 1/2 equal to?', text_hi: 'अंतिम टुकड़ा! 1/2 + 1/2 किसके बराबर है?', text_te: 'చివరి ముక్క! 1/2 + 1/2 దేనికి సమానం?', type: 'picture-puzzle', correctAnswer: '1', imageUrl: 'https://picsum.photos/seed/jigsaw3/400/100', imageHint: 'math plus', difficulty: 'easy', },
    ]
  },
  {
    id: 'mathematics-level-4',
    subject: 'mathematics',
    title: 'Level 4: Telling time',
    title_hi: 'स्तर 4: समय बताना',
    title_te: 'స్థాయి 4: సమయం చెప్పడం',
    description: 'Telling time.',
    description_hi: 'समय बताना।',
    description_te: 'సమయం చెప్పడం.',
    badgeId: 'time-traveler',
    badge_emoji: '⏰',
    badge_color: 'bg-indigo-400 text-indigo-900',
    questions: [
        { id: 1, text: 'How many minutes are in an hour?', text_hi: 'एक घंटे में कितने मिनट होते हैं?', text_te: 'ఒక గంటలో ఎన్ని నిమిషాలు ఉంటాయి?', type: 'mcq', correctAnswer: 'd', options: [{id: 'a', text: '30', text_hi: '30', text_te: '30'}, {id: 'b', text: '45', text_hi: '45', text_te: '45'}, {id: 'c', text: '50', text_hi: '50', text_te: '50'}, {id: 'd', text: '60', text_hi: '60', text_te: '60'}], difficulty: 'easy', },
        { id: 2, text: 'If it is 2:00, how many minutes until 2:30?', text_hi: 'यदि 2:00 बजे हैं, तो 2:30 तक कितने मिनट हैं?', text_te: 'సమయం 2:00 అయితే, 2:30 వరకు ఎన్ని నిమిషాలు ఉన్నాయి?', type: 'mcq', correctAnswer: 'b', options: [{id: 'a', text: '15', text_hi: '15', text_te: '15'}, {id: 'b', text: '30', text_hi: '30', text_te: '30'}, {id: 'c', text: '45', text_hi: '45', text_te: '45'}, {id: 'd', text: '60', text_hi: '60', text_te: '60'}], difficulty: 'easy', },
        { id: 3, text: 'How many hours are in a day?', text_hi: 'एक दिन में कितने घंटे होते हैं?', text_te: 'ఒక రోజులో ఎన్ని గంటలు ఉంటాయి?', type: 'mcq', correctAnswer: 'c', options: [{id: 'a', text: '12', text_hi: '12', text_te: '12'}, {id: 'b', text: '20', text_hi: '20', text_te: '20'}, {id: 'c', text: '24', text_hi: '24', text_te: '24'}, {id: 'd', text: '36', text_hi: '36', text_te: '36'}], difficulty: 'easy', },
        { id: 4, text: 'If a movie starts at 4:00 and is 2 hours long, what time does it end?', text_hi: 'यदि एक फिल्म 4:00 बजे शुरू होती है और 2 घंटे लंबी है, तो वह किस समय समाप्त होती है?', text_te: 'ఒక సినిమా 4:00 గంటలకు ప్రారంభమై 2 గంటల పాటు ఉంటే, అది ఏ సమయానికి ముగుస్తుంది?', type: 'mcq', correctAnswer: 'b', options: [{id: 'a', text: '5:00', text_hi: '5:00', text_te: '5:00'}, {id: 'b', text: '6:00', text_hi: '6:00', text_te: '6:00'}, {id: 'c', text: '7:00', text_hi: '7:00', text_te: '7:00'}, {id: 'd', text: '8:00', text_hi: '8:00', text_te: '8:00'}], difficulty: 'easy', },
        { id: 5, text: 'How many days are in a week?', text_hi: 'एक सप्ताह में कितने दिन होते हैं?', text_te: 'ఒక వారంలో ఎన్ని రోజులు ఉంటాయి?', type: 'mcq', correctAnswer: 'd', options: [{id: 'a', text: '5', text_hi: '5', text_te: '5'}, {id: 'b', text: '6', text_hi: '6', text_te: '6'}, {id: 'c', text: '10', text_hi: '10', text_te: '10'}, {id: 'd', text: '7', text_hi: '7', text_te: '7'}], difficulty: 'easy', }
    ]
  },
  {
    id: 'mathematics-level-5',
    subject: 'mathematics',
    title: 'Level 5',
    title_hi: 'स्तर 5',
    title_te: 'స్థాయి 5',
    description: 'Basic measurement.',
    description_hi: 'मूल माप।',
    description_te: 'ప్రాథమిక కొలత.',
    badgeId: 'measurement-master',
    badge_emoji: '📏',
    badge_color: 'bg-green-300 text-green-800',
    questions: [
        { id: 1, text: 'A ruler is 30 cm long. How many millimeters is that?', text_hi: 'एक रूलर 30 सेमी लंबा है। यह कितने मिलीमीटर है?', text_te: 'ఒక రూలర్ 30 సెం.మీ పొడవు ఉంది। అది ఎన్ని మిల్లీమీటర్లు?', type: 'mcq', correctAnswer: 'c', options: [{id: 'a', text: '30', text_hi: '30', text_te: '30'}, {id: 'b', text: '3', text_hi: '3', text_te: '3'}, {id: 'c', text: '300', text_hi: '300', text_te: '300'}, {id: 'd', text: '3000', text_hi: '3000', text_te: '3000'}], difficulty: 'easy', },
        { id: 2, text: 'A bag of sugar weighs 1 kilogram. How many grams is that?', text_hi: 'एक चीनी की थैली का वजन 1 किलोग्राम है। यह कितने ग्राम है?', text_te: 'ఒక చక్కెర సంచి బరువు 1 కిలోగ్రామ్। అది ఎన్ని గ్రాములు?', type: 'mcq', correctAnswer: 'd', options: [{id: 'a', text: '10', text_hi: '10', text_te: '10'}, {id: 'b', text: '100', text_hi: '100', text_te: '100'}, {id: 'c', text: '500', text_hi: '500', text_te: '500'}, {id: 'd', text: '1000', text_hi: '1000', text_te: '1000'}], difficulty: 'easy', },
        { id: 3, text: 'A bottle holds 1 liter of water. How many milliliters is that?', text_hi: 'एक बोतल में 1 लीटर पानी आता है। यह कितने मिलीलीटर है?', text_te: 'ఒక సీసాలో 1 లీటర్ నీరు పడుతుంది। అది ఎన్ని మిల్లీలీటర్లు?', type: 'mcq', correctAnswer: 'd', options: [{id: 'a', text: '10', text_hi: '10', text_te: '10'}, {id: 'b', text: '100', text_hi: '100', text_te: '100'}, {id: 'c', text: '500', text_hi: '500', text_te: '500'}, {id: 'd', text: '1000', text_hi: '1000', text_te: '1000'}], difficulty: 'easy', },
        { id: 4, text: 'If you have a rope that is 2 meters long, how many centimeters long is it?', text_hi: 'यदि आपके पास 2 मीटर लंबी रस्सी है, तो वह कितने सेंटीमीटर लंबी है?', text_te: 'మీ దగ్గర 2 మీటర్ల పొడవైన తాడు ఉంటే, అది ఎన్ని సెంటీమీటర్ల పొడవు ఉంటుంది?', type: 'mcq', correctAnswer: 'b', options: [{id: 'a', text: '20', text_hi: '20', text_te: '20'}, {id: 'b', text: '200', text_hi: '200', text_te: '200'}, {id: 'c', text: '2000', text_hi: '2000', text_te: '2000'}, {id: 'd', text: '2', text_hi: '2', text_te: '2'}], difficulty: 'easy', },
        { id: 5, text: 'The distance to the next village is 5 kilometers. How many meters is that?', text_hi: 'अगले गाँव की दूरी 5 किलोमीटर है। यह कितने मीटर है?', text_te: 'తదుపరి గ్రామానికి దూరం 5 కిలోమీటర్లు। అది ఎన్ని మీటర్లు?', type: 'mcq', correctAnswer: 'c', options: [{id: 'a', text: '50', text_hi: '50', text_te: '50'}, {id: 'b', text: '500', text_hi: '500', text_te: '500'}, {id: 'c', text: '5000', text_hi: '5000', text_te: '5000'}, {id: 'd', text: '50000', text_hi: '50000', text_te: '50000'}], difficulty: 'easy', }
    ]
  },
  {
    id: 'mathematics-level-6',
    subject: 'mathematics',
    title: 'Level 6',
    title_hi: 'स्तर 6',
    title_te: 'స్థాయి 6',
    description: 'Solve the picture puzzle.',
    description_hi: 'चित्र पहेली को हल करें।',
    description_te: 'చిత్ర పజిల్‌ను పరిష్కరించండి.',
    badgeId: 'puzzle-pro',
    badge_emoji: '🧩',
    badge_color: 'bg-cyan-400 text-cyan-900',
    questions: [
        {
            id: 1,
            text: 'Based on the image, what is the value of the final equation?',
            text_hi: 'चित्र के आधार पर, अंतिम समीकरण का मान क्या है?',
            text_te: 'చిత్రం ఆధారంగా, చివరి సమీకరణం విలువ ఏమిటి?',
            type: 'picture-puzzle',
            imageUrl: 'https://picsum.photos/seed/mathPuzzle1/400/300',
            imageHint: 'math puzzle',
            correctAnswer: '15',
            difficulty: 'medium',
        }
    ]
  },
  {
    id: 'mathematics-level-7',
    subject: 'mathematics',
    title: 'Level 7: Math Maze',
    title_hi: 'स्तर 7: गणित भूलभुलैया',
    title_te: 'స్థాయి 7: గణిత చిట్టడవి',
    description: 'Solve correctly to move forward. A wrong answer leads to a dead end.',
    description_hi: 'आगे बढ़ने के लिए सही हल करें। एक गलत उत्तर आपको एक मृत अंत तक ले जाता है।',
    description_te: 'ముందుకు సాగడానికి సరిగ్గా పరిష్కరించండి. తప్పు సమాధానం మిమ్మల్ని ఒక ముగింపుకు దారి తీస్తుంది.',
    badgeId: 'maze-master',
    badge_emoji: '🗺️',
    badge_color: 'bg-green-400 text-green-900',
    questions: [
        { id: 1, text: "You're at the maze entrance. To take the first step, solve: 15 × 3", text_hi: "आप भूलभुलैया के प्रवेश द्वार पर हैं। पहला कदम उठाने के लिए, हल करें: 15 × 3", text_te: "మీరు చిట్టడవి ప్రవేశ ద్వారం వద్ద ఉన్నారు. మొదటి అడుగు వేయడానికి, పరిష్కరించండి: 15 × 3", type: 'mcq', correctAnswer: 'b', options: [{id: 'a', text: '35', text_hi: '35', text_te: '35'}, {id: 'b', text: '45', text_hi: '45', text_te: '45'}, {id: 'c', text: '55', text_hi: '55', text_te: '55'}], difficulty: 'easy', },
        { id: 2, text: 'You turn left. The path splits. The correct path is the answer to: 120 ÷ 4', text_hi: 'आप बाईं ओर मुड़ते हैं। रास्ता विभाजित होता है। सही रास्ता इसका उत्तर है: 120 ÷ 4', text_te: 'మీరు ఎడమవైపు తిరుగుతారు. మార్గం విడిపోతుంది. సరైన మార్గం దీనికి సమాధానం: 120 ÷ 4', type: 'mcq', correctAnswer: 'a', options: [{id: 'a', text: '30', text_hi: '30', text_te: '30'}, {id: 'b', text: '40', text_hi: '40', text_te: '40'}, {id: 'c', text: '25', text_hi: '25', text_te: '25'}], difficulty: 'medium', },
        { id: 3, text: "You're getting closer! To cross the bridge, you need to know the square root of 81.", text_hi: "आप करीब आ रहे हैं! पुल पार करने के लिए, आपको 81 का वर्गमूल जानना होगा।", text_te: "మీరు దగ్గరికి వస్తున్నారు! వంతెన దాటడానికి, మీకు 81 యొక్క వర్గమూలం తెలియాలి.", type: 'mcq', correctAnswer: 'c', options: [{id: 'a', text: '7', text_hi: '7', text_te: '7'}, {id: 'b', text: '8', text_hi: '8', text_te: '8'}, {id: 'c', text: '9', text_hi: '9', text_te: '9'}], difficulty: 'medium', },
        { id: 4, text: 'The final door! The key is the answer to: (5 + 3) × 6', text_hi: 'अंतिम दरवाजा! कुंजी इसका उत्तर है: (5 + 3) × 6', text_te: 'చివరి తలుపు! కీ దీనికి సమాధానం: (5 + 3) × 6', type: 'mcq', correctAnswer: 'b', options: [{id: 'a', text: '38', text_hi: '38', text_te: '38'}, {id: 'b', text: '48', text_hi: '48', text_te: '48'}, {id: 'c', text: '56', text_hi: '56', text_te: '56'}], difficulty: 'hard', }
    ]
  },
  {
    id: 'mathematics-level-8',
    subject: 'mathematics',
    title: 'Level 8: Secret Code',
    title_hi: 'स्तर 8: गुप्त कोड',
    title_te: 'స్థాయి 8: రహస్య కోడ్',
    description: 'Each math problem you solve gives you a letter. Unlock the secret word!',
    description_hi: 'आपके द्वारा हल की गई प्रत्येक गणित की समस्या आपको एक पत्र देती है। गुप्त शब्द को अनलॉक करें!',
    description_te: 'మీరు పరిష్కరించే ప్రతి గణిత సమస్య మీకు ఒక అక్షరాన్ని ఇస్తుంది. రహస్య పదాన్ని అన్‌లాక్ చేయండి!',
    badgeId: 'code-cracker',
    badge_emoji: '🔑',
    badge_color: 'bg-gray-500 text-gray-900',
    questions: [
        { id: 1, text: 'First letter: 26 - 13 = ? (The 13th letter of the alphabet)', text_hi: 'पहला अक्षर: 26 - 13 = ? (वर्णमाला का 13वां अक्षर)', text_te: 'మొదటి అక్షరం: 26 - 13 = ? (వర్ణమాల యొక్క 13వ అక్షరం)', type: 'mcq', correctAnswer: 'a', options: [{id: 'a', text: '13 (M)', text_hi: '13 (M)', text_te: '13 (M)'}, {id: 'b', text: '12 (L)', text_hi: '12 (L)', text_te: '12 (L)'}], difficulty: 'easy', },
        { id: 2, text: 'Second letter: 1 × 1 = ? (The 1st letter of the alphabet)', text_hi: 'दूसरा अक्षर: 1 × 1 = ? (वर्णमाला का पहला अक्षर)', text_te: 'రెండవ అక్షరం: 1 × 1 = ? (వర్ణమాల యొక్క 1వ అక్షరం)', type: 'mcq', correctAnswer: 'b', options: [{id: 'a', text: '2 (B)', text_hi: '2 (B)', text_te: '2 (B)'}, {id: 'b', text: '1 (A)', text_hi: '1 (A)', text_te: '1 (A)'}], difficulty: 'easy', },
        { id: 3, text: 'Third letter: 100 ÷ 5 = ? (The 20th letter of the alphabet)', text_hi: 'तीसरा अक्षर: 100 ÷ 5 = ? (वर्णमाला का 20वां अक्षर)', text_te: 'మూడవ అక్షరం: 100 ÷ 5 = ? (వర్ణమాల యొక్క 20వ అక్షరం)', type: 'mcq', correctAnswer: 'a', options: [{id: 'a', text: '20 (T)', text_hi: '20 (T)', text_te: '20 (T)'}, {id: 'b', text: '25 (Y)', text_hi: '25 (Y)', text_te: '25 (Y)'}], difficulty: 'medium', },
        { id: 4, text: 'Fourth letter: 2 × 2 × 2 = ? (The 8th letter of the alphabet)', text_hi: 'चौथा अक्षर: 2 × 2 × 2 = ? (वर्णमाला का 8वां अक्षर)', text_te: 'నాల్గవ అక్షరం: 2 × 2 × 2 = ? (వర్ణమాల యొక్క 8వ అక్షరం)', type: 'mcq', correctAnswer: 'b', options: [{id: 'a', text: '6 (F)', text_hi: '6 (F)', text_te: '6 (F)'}, {id: 'b', text: '8 (H)', text_hi: '8 (H)', text_te: '8 (H)'}], difficulty: 'medium', },
        { id: 5, text: "You've collected the letters M, A, T, H. What is the secret word?", text_hi: "आपने M, A, T, H अक्षर एकत्र किए हैं। गुप्त शब्द क्या है?", text_te: "మీరు M, A, T, H అక్షరాలను సేకరించారు. రహస్య పదం ఏమిటి?", type: 'puzzle', correctAnswer: 'math', difficulty: 'easy', }
    ]
  },
  
  // Chemistry Missions
  {
    id: 'chemistry-level-1',
    subject: 'chemistry',
    title: 'Level 1',
    title_hi: 'स्तर 1',
    title_te: 'స్థాయి 1',
    description: 'Introduction to matter and its states.',
    description_hi: 'पदार्थ और उसकी अवस्थाओं का परिचय।',
    description_te: 'పదార్థం మరియు దాని స్థితుల పరిచయం.',
    badgeId: 'chemistry-creator',
    badge_emoji: '🧪',
    badge_color: 'bg-purple-400 text-purple-900',
    questions: [
      {
        id: 1,
        text: 'What is the chemical symbol for water?',
        text_hi: 'पानी का रासायनिक प्रतीक क्या है?',
        text_te: 'నీటి రసాయన చిహ్నం ఏమిటి?',
        type: 'mcq',
        options: [
          { id: 'a', text: 'O2', text_hi: 'O2', text_te: 'O2' },
          { id: 'b', text: 'CO2', text_hi: 'CO2', text_te: 'CO2' },
          { id: 'c', text: 'H2O', text_hi: 'H2O', text_te: 'H2O' },
          { id: 'd', 'text': 'NaCl', text_hi: 'NaCl', text_te: 'NaCl' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
      },
       {
        id: 2,
        text: 'Which of the following is a solid?',
        text_hi: 'निम्नलिखित में से कौन सा ठोस है?',
        text_te: 'కింది వాటిలో ఏది ఘనపదార్థం?',
        type: 'mcq',
        options: [
          { id: 'a', text: 'Milk', text_hi: 'दूध', text_te: 'పాలు' },
          { id: 'b', text: 'Air', text_hi: 'वायु', text_te: 'గాలి' },
          { id: 'c', text: 'Ice', text_hi: 'बर्फ', text_te: 'మంచు' },
          { id: 'd', 'text': 'Steam', text_hi: 'भाप', text_te: 'ఆవిరి' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
      },
       {
        id: 3,
        text: 'The process of a liquid turning into a gas is called...',
        text_hi: 'एक तरल के गैस में बदलने की प्रक्रिया को क्या कहा जाता है...',
        text_te: 'ద్రవం వాయువుగా మారే ప్రక్రియను ఏమంటారు...',
        type: 'mcq',
        options: [
          { id: 'a', text: 'Freezing', text_hi: 'जमना', text_te: 'గడ్డకట్టడం' },
          { id: 'b', text: 'Melting', text_hi: 'पिघलना', text_te: 'కరిగడం' },
          { id: 'c', text: 'Condensation', text_hi: 'संघनन', text_te: 'సాంద్రీకరణ' },
          { id: 'd', 'text': 'Evaporation', text_hi: 'वाष्पीकरण', text_te: 'భాష్పీభవనం' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
      },
       {
        id: 4,
        text: 'What is the smallest particle of a chemical element?',
        text_hi: 'एक रासायनिक तत्व का सबसे छोटा कण क्या है?',
        text_te: 'ఒక రసాయన మూలకం యొక్క అతి చిన్న కణం ఏది?',
        type: 'mcq',
        options: [
          { id: 'a', text: 'Molecule', text_hi: 'अणु', text_te: 'అణువు' },
          { id: 'b', text: 'Atom', text_hi: 'परमाणु', text_te: 'పరమాణువు' },
          { id: 'c', text: 'Compound', text_hi: 'यौगिक', text_te: 'సమ్మేళనం' },
          { id: 'd', 'text': 'Mixture', text_hi: 'मिश्रण', text_te: 'మిశ్రమం' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
      },
       {
        id: 5,
        text: 'The air we breathe is a...',
        text_hi: 'हम जो हवा में सांस लेते हैं वह एक...',
        text_te: 'మనం పీల్చే గాలి ఒక...',
        type: 'mcq',
        options: [
          { id: 'a', text: 'Solid', text_hi: 'ठोस', text_te: 'ఘనపదార్థం' },
          { id: 'b', text: 'Liquid', text_hi: 'तरल', text_te: 'ద్రవం' },
          { id: 'c', text: 'Mixture of gases', text_hi: 'गैसों का मिश्रण', text_te: 'వాయువుల మిశ్రమం' },
          { id: 'd', 'text': 'Compound', text_hi: 'यौगिक', text_te: 'సమ్మేళనం' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
      }
    ],
  },
  {
    id: 'chemistry-level-2',
    subject: 'chemistry',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    description: 'Understanding acids and bases.',
    description_hi: 'अम्ल और क्षार को समझना।',
    description_te: 'ఆమ్లాలు మరియు క్షారాలను అర్థం చేసుకోవడం.',
    badgeId: 'ph-pro',
    badge_emoji: '⚗️',
    badge_color: 'bg-pink-400 text-pink-900',
    questions: [
      {
        id: 1,
        text: 'What does a pH of 7 indicate?',
        text_hi: '7 का पीएच क्या दर्शाता है?',
        text_te: '7 యొక్క pH ఏమి సూచిస్తుంది?',
        type: 'mcq',
        options: [
          { id: 'a', text: 'Strongly Acidic', text_hi: 'अत्यधिक अम्लीय', text_te: 'బలమైన ఆమ్లత్వం' },
          { id: 'b', text: 'Neutral', text_hi: 'उदासीन', text_te: 'తటస్థ' },
          { id: 'c', text: 'Strongly Basic', text_hi: 'अत्यधिक क्षारीय', text_te: 'బలమైన క్షారత్వం' },
          { id: 'd', 'text': 'Slightly Acidic', text_hi: 'थोड़ा अम्लीय', text_te: 'కొద్దిగా ఆమ్లత్వం' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
      },
       {
        id: 2,
        text: 'Which substance would taste sour?',
        text_hi: 'कौन सा पदार्थ खट्टा लगेगा?',
        text_te: 'ఏ పదార్థం పుల్లగా ఉంటుంది?',
        type: 'mcq',
        options: [
          { id: 'a', text: 'Soap', text_hi: 'साबुन', text_te: 'సబ్బు' },
          { id: 'b', text: 'Sugar', text_hi: 'चीनी', text_te: 'చక్కెర' },
          { id: 'c', text: 'Salt', text_hi: 'नमक', text_te: 'లవణం' },
          { id: 'd', 'text': 'Lemon Juice', text_hi: 'नींबू का रस', text_te: 'నిమ్మరసం' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
      },
       {
        id: 3,
        text: 'Baking soda is an example of a...',
        text_hi: 'बेकिंग सोडा किसका उदाहरण है...',
        text_te: 'బేకింగ్ సోడా దేనికి ఉదాహరణ...',
        type: 'mcq',
        options: [
          { id: 'a', text: 'Acid', text_hi: 'अम्ल', text_te: 'ఆమ్లం' },
          { id: 'b', text: 'Base', text_hi: 'क्षार', text_te: 'క్షారం' },
          { id: 'c', text: 'Salt', text_hi: 'नमक', text_te: 'లవణం' },
          { id: 'd', 'text': 'Pure substance', text_hi: 'शुद्ध पदार्थ', text_te: 'స్వచ్ఛమైన పదార్థం' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
      },
       {
        id: 4,
        text: 'Litmus paper turns what color in an acid?',
        text_hi: 'लिटमस पेपर अम्ल में किस रंग का हो जाता है?',
        text_te: 'ఆమ్లంలో లిట్మస్ పేపర్ ఏ రంగులోకి మారుతుంది?',
        type: 'mcq',
        options: [
          { id: 'a', text: 'Blue', text_hi: 'नीला', text_te: 'నీలం' },
          { id: 'b', text: 'Green', text_hi: 'हरा', text_te: 'ఆకుపచ్చ' },
          { id: 'c', text: 'Red', text_hi: 'लाल', text_te: 'ఎరుపు' },
          { id: 'd', 'text': 'Yellow', text_hi: 'पीला', text_te: 'పసుపు' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
      },
       {
        id: 5,
        text: 'What is formed when an acid and a base react together?',
        text_hi: 'जब एक अम्ल और एक क्षार एक साथ प्रतिक्रिया करते हैं तो क्या बनता है?',
        text_te: 'ఆమ్లం మరియు క్షారం కలిసి చర్య జరిపినప్పుడు ఏమి ఏర్పడుతుంది?',
        type: 'mcq',
        options: [
          { id: 'a', text: 'A stronger acid', text_hi: 'एक मजबूत अम्ल', text_te: 'మరింత బలమైన ఆమ్లం' },
          { id: 'b', text: 'A stronger base', text_hi: 'एक मजबूत क्षार', text_te: 'మరింత బలమైన క్షారం' },
          { id: 'c', text: 'A neutral substance', text_hi: 'एक उदासीन पदार्थ', text_te: 'ఒక తటస్థ పదార్థం' },
          { id: 'd', 'text': 'Salt and water', text_hi: 'नमक और पानी', text_te: 'లవణం మరియు నీరు' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
      }
    ],
  },
  {
    id: 'chemistry-level-3',
    subject: 'chemistry',
    title: 'Level 3',
    title_hi: 'स्तर 3',
    title_te: 'స్థాయి 3',
    description: 'The periodic table.',
    description_hi: 'आवर्त सारणी।',
    description_te: 'ఆవర్తన పట్టిక.',
    badgeId: 'element-explorer',
    badge_emoji: 'Uuo',
    badge_color: 'bg-green-300 text-green-800',
    questions: [
        { id: 1, text: 'What is the symbol for the element Oxygen?', text_hi: 'ऑक्सीजन तत्व का प्रतीक क्या है?', text_te: 'ఆక్సిజన్ మూలకం యొక్క చిహ్నం ఏమిటి?', type: 'mcq', options: [{ id: 'a', text: 'O', text_hi: 'O', text_te: 'O' },{ id: 'b', text: 'Ox', text_hi: 'Ox', text_te: 'Ox' },{ id: 'c', text: 'Oxy', text_hi: 'Oxy', text_te: 'Oxy' },{ id: 'd', text: 'O2', text_hi: 'O2', text_te: 'O2' }], correctAnswer: 'a', difficulty: 'easy', },
        { id: 2, text: 'What is the symbol for Gold?', text_hi: 'सोने का प्रतीक क्या है?', text_te: 'బంగారం యొక్క చిహ్నం ఏమిటి?', type: 'mcq', options: [{ id: 'a', text: 'Go', text_hi: 'Go', text_te: 'Go' },{ id: 'b', text: 'Gd', text_hi: 'Gd', text_te: 'Gd' },{ id: 'c', text: 'Au', text_hi: 'Au', text_te: 'Au' },{ id: 'd', text: 'Ag', text_hi: 'Ag', text_te: 'Ag' }], correctAnswer: 'c', difficulty: 'easy', },
        { id: 3, text: 'Which element is a noble gas?', text_hi: 'कौन सा तत्व एक उत्कृष्ट गैस है?', text_te: 'ఏ మూలకం ఒక ఉత్కృష్ట వాయువు?', type: 'mcq', options: [{ id: 'a', text: 'Hydrogen', text_hi: 'हाइड्रोजन', text_te: 'హైడ్రోజన్' },{ id: 'b', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్' },{ id: 'c', text: 'Helium', text_hi: 'हीलियम', text_te: 'హీలియం' },{ id: 'd', text: 'Carbon', text_hi: 'कार्बन', text_te: 'కార్బన్' }], correctAnswer: 'c', difficulty: 'easy', },
        { id: 4, text: 'What element is essential for life and is found in all organic compounds?', text_hi: 'कौन सा तत्व जीवन के लिए आवश्यक है और सभी कार्बनिक यौगिकों में पाया जाता है?', text_te: 'జీవితానికి అవసరమైన మరియు అన్ని సేంద్రీయ సమ్మేళనాలలో కనిపించే మూలకం ఏది?', type: 'mcq', options: [{ id: 'a', text: 'Carbon', text_hi: 'कार्बन', text_te: 'కార్బన్' },{ id: 'b', text: 'Nitrogen', text_hi: 'नाइट्रोजन', text_te: 'నత్రజని' },{ id: 'c', text: 'Iron', text_hi: 'लोहा', text_te: 'ఇనుము' },{ id: 'd', text: 'Silicon', text_hi: 'सिलिकॉन', text_te: 'సిలికాన్' }], correctAnswer: 'a', difficulty: 'easy', },
        { id: 5, text: 'What is the symbol for Silver?', text_hi: 'चांदी का प्रतीक क्या है?', text_te: 'వెండి యొక్క చిహ్నం ఏమిటి?', type: 'mcq', options: [{ id: 'a', text: 'Si', text_hi: 'Si', text_te: 'Si' },{ id: 'b', text: 'Sl', text_hi: 'Sl', text_te: 'Sl' },{ id: 'c', text: 'Au', text_hi: 'Au', text_te: 'Au' },{ id: 'd', text: 'Ag', text_hi: 'Ag', text_te: 'Ag' }], correctAnswer: 'd', difficulty: 'easy', }
    ]
  },
  {
    id: 'chemistry-level-4',
    subject: 'chemistry',
    title: 'Level 4',
    title_hi: 'स्तर 4',
    title_te: 'స్థాయి 4',
    description: 'Simple chemical reactions.',
    description_hi: 'सरल रासायनिक प्रतिक्रियाएं।',
    description_te: 'సాధారణ రసాయన ప్రతిచర్యలు.',
    badgeId: 'reaction-ruler',
    badge_emoji: '💥',
    badge_color: 'bg-orange-400 text-orange-900',
    questions: [
        { id: 1, text: 'What happens when you mix baking soda and vinegar?', text_hi: 'जब आप बेकिंग सोडा और सिरका मिलाते हैं तो क्या होता है?', text_te: 'మీరు బేకింగ్ సోడా మరియు వెనిగర్ కలిపినప్పుడు ఏమి జరుగుతుంది?', type: 'mcq', options: [{ id: 'a', text: 'It gets cold', text_hi: 'यह ठंडा हो जाता है', text_te: 'ఇది చల్లగా అవుతుంది' },{ id: 'b', text: 'It turns solid', text_hi: 'यह ठोस हो जाता है', text_te: 'ఇది ఘనంగా మారుతుంది' },{ id: 'c', 'text': 'It fizzes and bubbles', text_hi: 'यह फ़िज़ और बुलबुले बनाता है', text_te: 'ఇది బుడగలు వస్తుంది' },{ id: 'd', 'text': 'Nothing', text_hi: 'कुछ नहीं', text_te: 'ఏమీ లేదు' }], correctAnswer: 'c', difficulty: 'easy', },
        { id: 2, text: 'What is rust?', text_hi: 'जंग क्या है?', text_te: 'తుప్పు అంటే ఏమిటి?', type: 'mcq', options: [{ id: 'a', text: 'Iron reacting with oxygen', text_hi: 'लोहे की ऑक्सीजन के साथ प्रतिक्रिया', text_te: 'ఆక్సిజన్‌తో ఇనుము చర్య' },{ id: 'b', text: 'Iron melting', text_hi: 'लोहे का पिघलना', text_te: 'ఇనుము కరగడం' },{ id: 'c', text: 'Iron painted red', text_hi: 'लोहे को लाल रंग से रंगा गया', text_te: 'ఎరుపు రంగు వేసిన ఇనుము' },{ id: 'd', text: 'Iron getting wet', text_hi: 'लोहे का गीला होना', text_te: 'ఇనుము తడిసిపోవడం' }], correctAnswer: 'a', difficulty: 'easy', },
        { id: 3, text: 'Burning wood is an example of a...', text_hi: 'लकड़ी जलाना किसका उदाहरण है...', text_te: 'చెక్కను కాల్చడం దేనికి ఉదాహరణ...', type: 'mcq', options: [{ id: 'a', text: 'Physical change', text_hi: 'भौतिक परिवर्तन', text_te: 'భౌతిక మార్పు' },{ id: 'b', text: 'Chemical change', text_hi: 'रासायनिक परिवर्तन', text_te: 'రసాయన మార్పు' },{ id: 'c', text: 'State change', text_hi: 'अवस्था परिवर्तन', text_te: 'స్థితి మార్పు' },{ id: 'd', text: 'Melting process', text_hi: 'पिघलने की प्रक्रिया', text_te: 'కరగే ప్రక్రియ' }], correctAnswer: 'b', difficulty: 'easy', },
        { id: 4, text: 'What gas is produced when plants perform photosynthesis?', text_hi: 'जब पौधे प्रकाश संश्लेषण करते हैं तो कौन सी गैस उत्पन्न होती है?', text_te: 'మొక్కలు కిరణజన్య సంయోగక్రియ చేసినప్పుడు ఏ వాయువు ఉత్పత్తి అవుతుంది?', type: 'mcq', options: [{ id: 'a', text: 'Carbon Dioxide', text_hi: 'कार्बन डाइऑक्साइड', text_te: 'కార్బన్ డయాక్సైడ్' },{ id: 'b', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్' },{ id: 'c', text: 'Nitrogen', text_hi: 'नाइट्रोजन', text_te: 'నత్రజని' },{ id: 'd', text: 'Hydrogen', text_hi: 'हाइड्रोजन', text_te: 'హైడ్రోజన్' }], correctAnswer: 'b', difficulty: 'easy', },
        { id: 5, text: 'Melting an ice cube is an example of a...', text_hi: 'एक बर्फ के टुकड़े को पिघलाना किसका उदाहरण है...', text_te: 'ఒక ఐస్ క్యూబ్‌ను కరిగించడం దేనికి ఉదాహరణ...', type: 'mcq', options: [{ id: 'a', text: 'Physical change', text_hi: 'भौतिक परिवर्तन', text_te: 'భౌతిక మార్పు' },{ id: 'b', text: 'Chemical change', text_hi: 'रासायनिक परिवर्तन', text_te: 'రసాయన మార్పు' },{ id: 'c', text: 'New substance forming', text_hi: 'नया पदार्थ बनना', text_te: 'కొత్త పదార్థం ఏర్పడటం' },{ id: 'd', text: 'A reaction', text_hi: 'एक प्रतिक्रिया', text_te: 'ప్రతిచర్య' }], correctAnswer: 'a', difficulty: 'easy', }
    ]
  },
  {
    id: 'chemistry-level-5',
    subject: 'chemistry',
    title: 'Level 5',
    title_hi: 'स्तर 5',
    title_te: 'స్థాయి 5',
    description: 'Everyday materials.',
    description_hi: 'रोजमर्रा की सामग्री।',
    description_te: 'రోజువారీ పదార్థాలు.',
    badgeId: 'material-maven',
    badge_emoji: '🧱',
    badge_color: 'bg-red-300 text-red-800',
    questions: [
        { id: 1, text: 'Which of these materials comes from a tree?', text_hi: 'इनमें से कौन सी सामग्री एक पेड़ से आती है?', text_te: 'ఈ పదార్థాలలో ఏది చెట్టు నుండి వస్తుంది?', type: 'mcq', options: [{ id: 'a', text: 'Plastic', text_hi: 'प्लास्टिक', text_te: 'ప్లాస్టిక్' },{ id: 'b', text: 'Glass', text_hi: 'कांच', text_te: 'గాజు' },{ id: 'c', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' },{ id: 'd', text: 'Metal', text_hi: 'धातु', text_te: 'లోహం' }], correctAnswer: 'c', difficulty: 'easy', },
        { id: 2, text: 'Glass is made from what main material?', text_hi: 'कांच किस मुख्य सामग्री से बनता है?', text_te: 'గాజు ఏ ప్రధాన పదార్థం నుండి తయారవుతుంది?', type: 'mcq', options: [{ id: 'a', text: 'Sand', text_hi: 'रेत', text_te: 'ఇసుక' },{ id: 'b', text: 'Clay', text_hi: 'मिट्टी', text_te: 'మట్టి' },{ id: 'c', text: 'Oil', text_hi: 'तेल', text_te: 'నూనె' },{ id: 'd', text: 'Water', text_hi: 'पानी', text_te: 'నీరు' }], correctAnswer: 'a', difficulty: 'easy', },
        { id: 3, text: 'Plastic is typically made from...', text_hi: 'प्लास्टिक आमतौर पर किससे बनता है...', text_te: 'ప్లాస్టిక్ సాధారణంగా దేని నుండి తయారవుతుంది...', type: 'mcq', options: [{ id: 'a', text: 'Plants', text_hi: 'पौधे', text_te: 'మొక్కలు' },{ id: 'b', text: 'Rocks', text_hi: 'चट्टानें', text_te: 'రాళ్ళు' },{ id: 'c', text: 'Animals', text_hi: 'जानवर', text_te: 'జంతువులు' },{ id: 'd', text: 'Oil (petroleum)', text_hi: 'तेल (पेट्रोलियम)', text_te: 'చమురు (పెట్రోలియం)' }], correctAnswer: 'd', difficulty: 'easy', },
        { id: 4, text: 'Which of these is a metal?', text_hi: 'इनमें से कौन सी एक धातु है?', text_te: 'వీటిలో ఏది లోహం?', type: 'mcq', options: [{ id: 'a', text: 'Cotton', text_hi: 'कपास', text_te: 'పత్తి' },{ id: 'b', 'text': 'Porcelain', text_hi: 'पोर्सिलेन', text_te: 'పింగాణీ' },{ id: 'c', 'text': 'Aluminum', text_hi: 'एल्यूमीनियम', text_te: 'అల్యూమినియం' },{ id: 'd', 'text': 'Cardboard', text_hi: 'कार्डबोर्ड', text_te: 'కార్డ్‌బోర్డ్' }], correctAnswer: 'c', difficulty: 'easy', },
        { id: 5, text: 'What property allows a rubber band to stretch and return to its original shape?', text_hi: 'कौन सा गुण एक रबर बैंड को खींचने और अपने मूल आकार में लौटने की अनुमति देता है?', text_te: 'ఏ లక్షణం ఒక రబ్బరు బ్యాండ్‌ను సాగదీసి దాని అసలు ఆకారానికి తిరిగి రావడానికి అనుమతిస్తుంది?', type: 'mcq', options: [{ id: 'a', text: 'Hardness', text_hi: 'कठोरता', text_te: 'కఠినత్వం' },{ id: 'b', text: 'Elasticity', text_hi: 'लोच', text_te: 'స్థితిస్థాపకత' },{ id: 'c', text: 'Transparency', text_hi: 'पारदर्शिता', text_te: 'పారదర్శకత' },{ id: 'd', text: 'Brittleness', text_hi: 'भंगुरता', text_te: 'పెళుసుదనం' }], correctAnswer: 'b', difficulty: 'easy', }
    ]
  },
  // English Missions
  {
    id: 'english-level-1',
    subject: 'english',
    title: 'Level 1',
    title_hi: 'स्तर 1',
    title_te: 'స్థాయి 1',
    description: 'Nouns and Verbs',
    description_hi: 'संज्ञा और क्रिया',
    description_te: 'నామవాచకాలు మరియు క్రియలు',
    badgeId: 'grammar-guru',
    badge_emoji: '📚',
    badge_color: 'bg-red-400 text-red-900',
    questions: [
      {
        id: 1,
        text: 'Which word is a noun? The quick brown fox jumps over the lazy dog.',
        text_hi: 'कौन सा शब्द संज्ञा है? तेज भूरी लोमड़ी आलसी कुत्ते पर कूदती है।',
        text_te: 'ఏ పదం నామవాచకం? చురుకైన గోధుమ నక్క సోమరి కుక్కపైకి దూకుతుంది.',
        options: [
          { id: 'a', text: 'quick', text_hi: 'तेज', text_te: 'చురుకైన' },
          { id: 'b', text: 'jumps', text_hi: 'कूदती है', text_te: 'దూకుతుంది' },
          { id: 'c', text: 'fox', text_hi: 'लोमड़ी', text_te: 'నక్క' },
          { id: 'd', text: 'lazy', text_hi: 'आलसी', text_te: 'సోమరి' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 2,
        text: 'Which word is a verb? The bird sings a beautiful song.',
        text_hi: 'कौन सा शब्द क्रिया है? पक्षी एक सुंदर गीत गाता है।',
        text_te: 'ఏ పదం క్రియ? పక్షి ఒక అందమైన పాట పాడుతుంది.',
        options: [
          { id: 'a', text: 'bird', text_hi: 'पक्षी', text_te: 'పక్షి' },
          { id: 'b', text: 'sings', text_hi: 'गाता है', text_te: 'పాడుతుంది' },
          { id: 'c', text: 'beautiful', text_hi: 'सुंदर', text_te: 'అందమైన' },
          { id: 'd', text: 'song', text_hi: 'गीत', text_te: 'పాట' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 3,
        text: 'Identify the noun in this sentence: My school is very big.',
        text_hi: 'इस वाक्य में संज्ञा को पहचानें: मेरा स्कूल बहुत बड़ा है।',
        text_te: 'ఈ వాక్యంలో నామవాచకాన్ని గుర్తించండి: నా పాఠశాల చాలా పెద్దది.',
        options: [
          { id: 'a', text: 'My', text_hi: 'मेरा', text_te: 'నా' },
          { id: 'b', text: 'is', text_hi: 'है', text_te: 'ఉంది' },
          { id: 'c', text: 'very', text_hi: 'बहुत', text_te: 'చాలా' },
          { id: 'd', text: 'school', text_hi: 'स्कूल', text_te: 'పాఠశాల' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 4,
        text: 'Identify the verb in this sentence: They run very fast.',
        text_hi: 'इस वाक्य में क्रिया को पहचानें: वे बहुत तेज दौड़ते हैं।',
        text_te: 'ఈ వాక్యంలో క్రియను గుర్తించండి: వారు చాలా వేగంగా పరుగెత్తుతారు.',
        options: [
          { id: 'a', text: 'They', text_hi: 'वे', text_te: 'వారు' },
          { id: 'b', text: 'run', text_hi: 'दौड़ते हैं', text_te: 'పరుగెత్తుతారు' },
          { id: 'c', text: 'very', text_hi: 'बहुत', text_te: 'చాలా' },
          { id: 'd', text: 'fast', text_hi: 'तेज', text_te: 'వేగంగా' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 5,
        text: 'Which of the following is a noun?',
        text_hi: 'निम्नलिखित में से कौन सा एक संज्ञा है?',
        text_te: 'కింది వాటిలో ఏది నామవాచకం?',
        options: [
          { id: 'a', text: 'eat', text_hi: 'खाना', text_te: 'తినడం' },
          { id: 'b', text: 'sleep', text_hi: 'सोना', text_te: 'నిద్రపోవడం' },
          { id: 'c', text: 'happy', text_hi: 'खुश', text_te: 'సంతోషంగా' },
          { id: 'd', text: 'table', text_hi: 'मेज', text_te: 'బల్ల' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        type: 'mcq',
      }
    ]
  },
  {
    id: 'english-level-2',
    subject: 'english',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    description: 'Adjectives and Adverbs',
    description_hi: 'विशेषण और क्रियाविशेषण',
    description_te: 'విశేషణాలు మరియు క్రియా విశేషణాలు',
    badgeId: 'adjective-ace',
    badge_emoji: '✨',
    badge_color: 'bg-pink-400 text-pink-900',
    questions: [
      {
        id: 1,
        text: 'Which word is an adjective? The tall man opened the heavy door.',
        text_hi: 'कौन सा शब्द विशेषण है? लंबे आदमी ने भारी दरवाजा खोला।',
        text_te: 'ఏ పదం విశేషణం? పొడవాటి మనిషి బరువైన తలుపు తెరిచాడు.',
        options: [
          { id: 'a', text: 'man', text_hi: 'आदमी', text_te: 'మనిషి' },
          { id: 'b', text: 'opened', text_hi: 'खोला', text_te: 'తెరిచాడు' },
          { id: 'c', text: 'heavy', text_hi: 'भारी', text_te: 'బరువైన' },
          { id: 'd', text: 'door', text_hi: 'दरवाजा', text_te: 'తలుపు' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 2,
        text: 'Which word is an adverb? The cat walked quietly across the floor.',
        text_hi: 'कौन सा शब्द क्रियाविशेषण है? बिल्ली फर्श पर चुपचाप चली।',
        text_te: 'ఏ పదం క్రియా విశేషణం? పిల్లి నిశ్శబ్దంగా నేలపై నడిచింది.',
        options: [
          { id: 'a', text: 'cat', text_hi: 'बिल्ली', text_te: 'పిల్లి' },
          { id: 'b', text: 'walked', text_hi: 'चली', text_te: 'నడిచింది' },
          { id: 'c', text: 'quietly', text_hi: 'चुपचाप', text_te: 'నిశ్శబ్దంగా' },
          { id: 'd', text: 'floor', text_hi: 'फर्श', text_te: 'నేల' },
        ],
        correctAnswer: 'c',
        difficulty: 'medium',
        type: 'mcq',
      }
    ]
  },
  {
    id: 'english-level-3',
    subject: 'english',
    title: 'Level 3',
    title_hi: 'स्तर 3',
    title_te: 'స్థాయి 3',
    description: 'Prepositions',
    description_hi: 'पूर्वसर्ग',
    description_te: 'విభక్తి ప్రత్యయాలు',
    badgeId: 'preposition-pro',
    badge_emoji: '📍',
    badge_color: 'bg-yellow-400 text-yellow-900',
    questions: [
      {
        id: 1,
        text: 'Choose the correct preposition: The book is ___ the table.',
        text_hi: 'सही पूर्वसर्ग चुनें: किताब ___ मेज पर है।',
        text_te: 'సరైన విభక్తిని ఎంచుకోండి: పుస్తకం ___ బల్లపై ఉంది.',
        options: [
          { id: 'a', text: 'in', text_hi: 'में', text_te: 'లో' },
          { id: 'b', text: 'on', text_hi: 'पर', text_te: 'పై' },
          { id: 'c', text: 'under', text_hi: 'नीचे', text_te: 'కింద' },
          { id: 'd', text: 'over', text_hi: 'ऊपर', text_te: 'పైన' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 2,
        text: 'Choose the correct preposition: The fish is swimming ___ the water.',
        text_hi: 'सही पूर्वसर्ग चुनें: मछली ___ पानी में तैर रही है।',
        text_te: 'సరైన విభక్తిని ఎంచుకోండి: చేప ___ నీటిలో ఈదుతోంది.',
        options: [
          { id: 'a', text: 'on', text_hi: 'पर', text_te: 'పై' },
          { id: 'b', text: 'over', text_hi: 'ऊपर', text_te: 'పైన' },
          { id: 'c', text: 'in', text_hi: 'में', text_te: 'లో' },
          { id: 'd', text: 'through', text_hi: 'के माध्यम से', text_te: 'ద్వారా' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        type: 'mcq',
      }
    ]
  },
  {
    id: 'english-level-4',
    subject: 'english',
    title: 'Level 4',
    title_hi: 'स्तर 4',
    title_te: 'స్థాయి 4',
    description: 'Simple Tenses',
    description_hi: 'सरल काल',
    description_te: 'సాధారణ కాలాలు',
    badgeId: 'tense-titan',
    badge_emoji: '⏳',
    badge_color: 'bg-blue-400 text-blue-900',
    questions: [
      {
        id: 1,
        text: 'Which sentence is in the past tense? She ___ to the store.',
        text_hi: 'कौन सा वाक्य भूतकाल में है? वह ___ दुकान पर गई।',
        text_te: 'ఏ వాక్యం భూతకాలంలో ఉంది? ఆమె ___ దుకాణానికి వెళ్ళింది.',
        options: [
          { id: 'a', text: 'go', text_hi: 'जाती है', text_te: 'వెళుతుంది' },
          { id: 'b', text: 'goes', text_hi: 'जाती है', text_te: 'వెళుతుంది' },
          { id: 'c', text: 'went', text_hi: 'गई', text_te: 'వెళ్ళింది' },
          { id: 'd', text: 'going', text_hi: 'जा रही है', text_te: 'వెళుతోంది' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 2,
        text: 'Which sentence is in the future tense? He ___ his homework tomorrow.',
        text_hi: 'कौन सा वाक्य भविष्य काल में है? वह कल अपना होमवर्क ___।',
        text_te: 'ఏ వాక్యం భవిష్యత్ కాలంలో ఉంది? అతను రేపు తన హోంవర్క్ ___ చేస్తాడు.',
        options: [
          { id: 'a', text: 'did', text_hi: 'किया', text_te: 'చేశాడు' },
          { id: 'b', text: 'does', text_hi: 'करता है', text_te: 'చేస్తాడు' },
          { id: 'c', text: 'doing', text_hi: 'कर रहा है', text_te: 'చేస్తున్నాడు' },
          { id: 'd', text: 'will do', text_hi: 'करेगा', text_te: 'చేస్తాడు' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        type: 'mcq',
      }
    ]
  },
  {
    id: 'english-level-5',
    subject: 'english',
    title: 'Level 5',
    title_hi: 'स्तर 5',
    title_te: 'స్థాయి 5',
    description: 'Sentence Building',
    description_hi: 'वाक्य निर्माण',
    description_te: 'వాక్య నిర్మాణం',
    badgeId: 'sentence-star',
    badge_emoji: '✍️',
    badge_color: 'bg-green-400 text-green-900',
    questions: [
      {
        id: 1,
        text: 'What is the subject of this sentence? The dog chased the ball.',
        text_hi: 'इस वाक्य का विषय क्या है? कुत्ते ने गेंद का पीछा किया।',
        text_te: 'ఈ వాక్యం యొక్క కర్త ఎవరు? కుక్క బంతిని వెంబడించింది.',
        options: [
          { id: 'a', text: 'The dog', text_hi: 'कुत्ता', text_te: 'కుక్క' },
          { id: 'b', text: 'chased', text_hi: 'पीछा किया', text_te: 'వెంబడించింది' },
          { id: 'c', text: 'the ball', text_hi: 'गेंद', text_te: 'బంతి' },
        ],
        correctAnswer: 'a',
        difficulty: 'easy',
        type: 'mcq',
      },
      {
        id: 2,
        text: 'What is the predicate of this sentence? The girl reads a book.',
        text_hi: 'इस वाक्य का विधेय क्या है? लड़की एक किताब पढ़ती है।',
        text_te: 'ఈ వాక్యం యొక్క विधेయం ఏమిటి? అమ్మాయి ఒక పుస్తకం చదువుతుంది.',
        options: [
          { id: 'a', text: 'The girl', text_hi: 'लड़की', text_te: 'అమ్మాయి' },
          { id: 'b', text: 'reads a book', text_hi: 'एक किताब पढ़ती है', text_te: 'ఒక పుస్తకం చదువుతుంది' },
          { id: 'c', text: 'a book', text_hi: 'एक किताब', text_te: 'ఒక పుస్తకం' },
        ],
        correctAnswer: 'b',
        difficulty: 'medium',
        type: 'mcq',
      }
    ]
  },
  // GK Missions
  {
    id: 'gk-level-1',
    subject: 'gk',
    title: 'Level 1: World Basics',
    title_hi: 'स्तर 1: विश्व की मूल बातें',
    title_te: 'స్థాయి 1: ప్రపంచ ప్రాథమికాలు',
    description: 'Test your knowledge of countries and landmarks.',
    description_hi: 'देशों और स्थलों के बारे में अपने ज्ञान का परीक्षण करें।',
    description_te: 'దేశాలు మరియు ప్రదేశాల గురించి మీ జ్ఞానాన్ని పరీక్షించుకోండి.',
    badgeId: 'world-explorer',
    badge_emoji: '🌎',
    badge_color: 'bg-blue-400 text-blue-900',
    questions: [
      { id: 1, text: 'What is the capital of India?', text_hi: 'भारत की राजधानी क्या है?', text_te: 'భారతదేశ రాజధాని ఏది?', options: [{ id: 'a', text: 'Mumbai', text_hi: 'मुंबई', text_te: 'ముంబై' }, { id: 'b', text: 'New Delhi', text_hi: 'नई दिल्ली', text_te: 'న్యూఢిల్లీ' }, { id: 'c', text: 'Kolkata', text_hi: 'कोलकाता', text_te: 'కోల్‌కతా' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
      { id: 2, text: 'In which country would you find the Eiffel Tower?', text_hi: 'एफिल टॉवर आपको किस देश में मिलेगा?', text_te: 'ఈఫిల్ టవర్ ఏ దేశంలో ఉంది?', options: [{ id: 'a', text: 'Italy', text_hi: 'इटली', text_te: 'ఇటలీ' }, { id: 'b', text: 'Spain', text_hi: 'स्पेन', text_te: 'స్పెయిన్' }, { id: 'c', text: 'France', text_hi: 'फ्रांस', text_te: 'ఫ్రాన్స్' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
      { id: 3, text: 'What is the largest continent by area?', text_hi: 'क्षेत्रफल के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?', text_te: 'విస్తీర్ణం ప్రకారం అతిపెద్ద ఖండం ఏది?', options: [{ id: 'a', text: 'Africa', text_hi: 'अफ्रीका', text_te: 'ఆఫ్రికా' }, { id: 'b', text: 'Asia', text_hi: 'एशिया', text_te: 'ఆసియా' }, { id: 'c', text: 'North America', text_hi: 'उत्तरी अमेरिका', text_te: 'ఉత్తర అమెరికా' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
    ]
  },
  {
    id: 'gk-level-2',
    subject: 'gk',
    title: 'Level 2: Famous People',
    title_hi: 'स्तर 2: प्रसिद्ध लोग',
    title_te: 'స్థాయి 2: ప్రసిద్ధ వ్యక్తులు',
    description: 'How well do you know these famous personalities?',
    description_hi: 'आप इन प्रसिद्ध हस्तियों को कितनी अच्छी तरह जानते हैं?',
    description_te: 'ఈ ప్రసిద్ధ వ్యక్తుల గురించి మీకు ఎంతవరకు తెలుసు?',
    badgeId: 'history-buff',
    badge_emoji: '🧑‍🔬',
    badge_color: 'bg-yellow-400 text-yellow-900',
    questions: [
      { id: 1, text: 'Who is known as the "Father of the Nation" in India?', text_hi: 'भारत में "राष्ट्रपिता" के रूप में किसे जाना जाता है?', text_te: 'భారతదేశంలో "జాతిపిత" అని ఎవరిని పిలుస్తారు?', options: [{ id: 'a', text: 'Jawaharlal Nehru', text_hi: 'जवाहरलाल नेहरू', text_te: 'జవహర్‌లాల్ నెహ్రూ' }, { id: 'b', text: 'Sardar Patel', text_hi: 'सरदार पटेल', text_te: 'సర్దార్ పటేల్' }, { id: 'c', text: 'Mahatma Gandhi', text_hi: 'महात्मा गांधी', text_te: 'మహాత్మా గాంధీ' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq', },
      { id: 2, text: 'Who developed the theory of relativity?', text_hi: 'सापेक्षता का सिद्धांत किसने विकसित किया?', text_te: 'సాపేక్షతా సిద్ధాంతాన్ని ఎవరు అభివృద్ధి చేశారు?', options: [{ id: 'a', text: 'Isaac Newton', text_hi: 'आइज़क न्यूटन', text_te: 'ఐజాక్ న్యూటన్' }, { id: 'b', text: 'Albert Einstein', text_hi: 'अल्बर्ट आइंस्टीन', text_te: 'ఆల్బర్ట్ ఐన్‌స్టీన్' }, { id: 'c', text: 'Galileo Galilei', text_hi: 'गैलीलियो गैलिली', text_te: 'గెలీలియో గెలీలీ' }], correctAnswer: 'b', difficulty: 'medium', type: 'mcq', },
    ]
  },
  {
    id: 'gk-level-3',
    subject: 'gk',
    title: 'Level 3: World Geography',
    title_hi: 'स्तर 3: विश्व भूगोल',
    title_te: 'స్థాయి 3: ప్రపంచ భూగోళశాస్త్రం',
    description: 'Explore the mountains, rivers, and deserts of the world.',
    description_hi: 'दुनिया के पहाड़ों, नदियों और रेगिस्तानों का अन्वेषण करें।',
    description_te: 'ప్రపంచంలోని పర్వతాలు, నదులు మరియు ఎడారులను అన్వేషించండి.',
    badgeId: 'geography-guru',
    badge_emoji: '🗺️',
    badge_color: 'bg-green-400 text-green-900',
    questions: [
      { id: 1, text: 'Which is the longest river in the world?', text_hi: 'दुनिया की सबसे लंबी नदी कौन सी है?', text_te: 'ప్రపంచంలో అత్యంత పొడవైన నది ఏది?', options: [{ id: 'a', text: 'Amazon', text_hi: 'अमेज़ॅन', text_te: 'అమెజాన్' }, { id: 'b', text: 'Nile', text_hi: 'नील', text_te: 'నైలు' }, { id: 'c', text: 'Ganges', text_hi: 'गंगा', text_te: 'గంగా' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
      { id: 2, text: 'What is the largest desert in the world?', text_hi: 'दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?', text_te: 'ప్రపంచంలో అతిపెద్ద ఎడారి ఏది?', options: [{ id: 'a', text: 'Sahara Desert', text_hi: 'सहारा रेगिस्तान', text_te: 'సహారా ఎడారి' }, { id: 'b', text: 'Gobi Desert', text_hi: 'गोबी रेगिस्तान', text_te: 'గోబీ ఎడారి' }, { id: 'c', text: 'Antarctic Polar Desert', text_hi: 'अंटार्कटिक ध्रुवीय रेगिस्तान', text_te: 'అంటార్కిటిక్ ధ్రువ ఎడారి' }], correctAnswer: 'c', difficulty: 'hard', type: 'mcq', },
    ]
  },
  {
    id: 'gk-level-4',
    subject: 'gk',
    title: 'Level 4: Sports',
    title_hi: 'स्तर 4: खेल',
    title_te: 'స్థాయి 4: క్రీడలు',
    description: 'How much do you know about the world of sports?',
    description_hi: 'आप खेल की दुनिया के बारे में कितना जानते हैं?',
    description_te: 'క్రీడల ప్రపంచం గురించి మీకు ఎంత తెలుసు?',
    badgeId: 'sports-star',
    badge_emoji: '🏏',
    badge_color: 'bg-red-400 text-red-900',
    questions: [
      { id: 1, text: 'How many players are on a cricket team?', text_hi: 'एक क्रिकेट टीम में कितने खिलाड़ी होते हैं?', text_te: 'ఒక క్రికెట్ జట్టులో ఎంతమంది ఆటగాళ్ళు ఉంటారు?', options: [{ id: 'a', text: '9', text_hi: '9', text_te: '9' }, { id: 'b', text: '11', text_hi: '11', text_te: '11' }, { id: 'c', text: '13', text_hi: '13', text_te: '13' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
      { id: 2, text: 'The Olympic Games are held every how many years?', text_hi: 'ओलंपिक खेल हर कितने साल में आयोजित किए जाते हैं?', text_te: 'ఒలింపిక్ క్రీడలు ఎన్ని సంవత్సరాలకు ఒకసారి జరుగుతాయి?', options: [{ id: 'a', text: '2 years', text_hi: '2 साल', text_te: '2 సంవత్సరాలు' }, { id: 'b', text: '4 years', text_hi: '4 साल', text_te: '4 సంవత్సరాలు' }, { id: 'c', text: '6 years', text_hi: '6 साल', text_te: '6 సంవత్సరాలు' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq', },
    ]
  },
  {
    id: 'gk-level-5',
    subject: 'gk',
    title: 'Level 5: Science & Discovery',
    title_hi: 'स्तर 5: विज्ञान और खोज',
    title_te: 'స్థాయి 5: సైన్స్ & ఆవిష్కరణ',
    description: 'Learn about amazing scientific discoveries.',
    description_hi: 'अद्भुत वैज्ञानिक खोजों के बारे में जानें।',
    description_te: 'అద్భుతమైన శాస్త్రీయ ఆవిష్కరణల గురించి తెలుసుకోండి.',
    badgeId: 'science-savant',
    badge_emoji: '🔭',
    badge_color: 'bg-purple-400 text-purple-900',
    questions: [
      { id: 1, text: 'What planet is known as the Red Planet?', text_hi: 'किस ग्रह को लाल ग्रह के रूप में जाना जाता है?', text_te: 'ఏ గ్రహాన్ని ఎర్ర గ్రహం అని పిలుస్తారు?', options: [{ id: 'a', text: 'Mars', text_hi: 'मंगल', text_te: 'అంగారకుడు' }, { id: 'b', text: 'Jupiter', text_hi: 'बृहस्पति', text_te: 'బృహస్పతి' }, { id: 'c', text: 'Venus', text_hi: 'शुक्र', text_te: 'శుక్రుడు' }], correctAnswer: 'a', difficulty: 'easy', type: 'mcq', },
      { id: 2, text: 'Who discovered penicillin?', text_hi: 'पेनिसिलिन की खोज किसने की?', text_te: 'పెన్సిలిన్‌ను ఎవరు కనుగొన్నారు?', options: [{ id: 'a', text: 'Marie Curie', text_hi: 'मैरी क्यूरी', text_te: 'మేరీ క్యూరీ' }, { id: 'b', text: 'Alexander Fleming', text_hi: 'अलेक्जेंडर फ्लेमिंग', text_te: 'అలెగ్జాండర్ ఫ్లెమింగ్' }, { id: 'c', text: 'Louis Pasteur', text_hi: 'लुई पाश्चर', text_te: 'లూయిస్ పాశ్చర్' }], correctAnswer: 'b', difficulty: 'medium', type: 'mcq', },
    ]
  }
];

export type Ingredient = {
    name_en: string;
    name_hi: string;
    name_te: string;
}

export type Experiment = {
  id: string;
  title: string;
  title_hi: string;
  title_te: string;
  description: string;
  description_hi: string;
  description_te: string;
  imageUrl: string;
  imageHint: string;
  ingredients: Ingredient[];
  steps: {
    title: string;
    title_hi: string;
    title_te: string;
    description: string;
    description_hi: string;
    description_te: string;
    imageUrl: string;
    imageHint: string;
  }[];
};

export const experiments: Experiment[] = [
    {
        id: 'volcano-1',
        title: 'Build a Baking Soda Volcano',
        title_hi: 'बेकिंग सोडा ज्वालामुखी बनाएं',
        title_te: 'బేకింగ్ సోడా అగ్నిపర్వతాన్ని నిర్మించండి',
        description: 'A classic and safe experiment to demonstrate a chemical reaction.',
        description_hi: 'एक रासायनिक प्रतिक्रिया प्रदर्शित करने के लिए एक क्लासिक और सुरक्षित प्रयोग।',
        description_te: 'ఒక రసాయన ప్రతిచర్యను ప్రదర్శించడానికి ఒక క్లాసిక్ మరియు సురక్షితమైన ప్రయోగం.',
        imageUrl: 'https://picsum.photos/seed/exp1/600/400',
        imageHint: 'DIY volcano',
        ingredients: [
            { name_en: 'Empty plastic bottle', name_hi: 'खाली प्लास्टिक की बोतल', name_te: 'ఖాళీ ప్లాస్టిక్ సీసా' },
            { name_en: 'Clay or soil', name_hi: 'मिट्टी या मिट्टी', name_te: 'బంకమన్ను లేదా మట్టి' },
            { name_en: 'Baking soda', name_hi: 'बेकिंग सोडा', name_te: 'బేకింగ్ సోడా' },
            { name_en: 'Vinegar', name_hi: 'सिरका', name_te: 'వెనిగర్' },
            { name_en: 'Red food coloring', name_hi: 'लाल खाद्य रंग', name_te: 'ఎరుపు ఫుడ్ కలరింగ్' },
            { name_en: 'Dish soap', name_hi: 'डिश सोप', name_te: 'డిష్ సోప్' },
            { name_en: 'Warm water', name_hi: 'गरम पानी', name_te: 'గోరువెచ్చని నీరు' },
        ],
        steps: [
            {
                title: 'Step 1: Build the Cone',
                title_hi: 'चरण 1: शंकु बनाएं',
                title_te: 'దశ 1: కోన్‌ను నిర్మించండి',
                description: 'Use a plastic bottle and build a cone around it using clay or soil.',
                description_hi: 'एक प्लास्टिक की बोतल का उपयोग करें और उसके चारों ओर मिट्टी या मिट्टी का उपयोग करके एक शंकु बनाएं।',
                description_te: 'ఒక ప్లాస్టిక్ సీసాను ఉపయోగించి దాని చుట్టూ బంకమన్ను లేదా మట్టిని ఉపయోగించి ఒక కోన్‌ను నిర్మించండి.',
                imageUrl: 'https://picsum.photos/seed/exp1-step1/600/400',
                imageHint: 'clay bottle',
            },
            {
                title: 'Step 2: Add Ingredients',
                title_hi: 'चरण 2: सामग्री डालें',
                title_te: 'దశ 2: పదార్థాలను జోడించండి',
                description: 'Fill the bottle halfway with warm water, add a few drops of dish soap and red food coloring.',
                description_hi: 'बोतल को गर्म पानी से आधा भरें, डिश सोप की कुछ बूँदें और लाल खाद्य रंग डालें।',
                description_te: 'సీసాను సగం వరకు గోరువెచ్చని నీటితో నింపండి, కొన్ని చుక్కల డిష్ సోప్ మరియు ఎరుపు ఫుడ్ కలరింగ్ జోడించండి.',
                imageUrl: 'https://picsum.photos/seed/exp1-step2/600/400',
                imageHint: 'mixing liquids',
            },
            {
                title: 'Step 3: Add Baking Soda',
                title_hi: 'चरण 3: बेकिंग सोडा डालें',
                title_te: 'దశ 3: బేకింగ్ సోడా జోడించండి',
                description: 'Add 2 tablespoons of baking soda to the liquid and stir it.',
                description_hi: 'तरल में 2 बड़े चम्मच बेकिंग सोडा डालें और इसे हिलाएं।',
                description_te: 'ద్రవంలో 2 టేబుల్ స్పూన్ల బేకింగ్ సోడా వేసి కలపండి.',
                imageUrl: 'https://picsum.photos/seed/exp1-step3/600/400',
                imageHint: 'baking soda',
            },
            {
                title: 'Step 4: The Eruption!',
                title_hi: 'चरण 4: विस्फोट!',
                title_te: 'దశ 4: విస్ఫోటనం!',
                description: 'Pour vinegar into the bottle and watch your volcano erupt!',
                description_hi: 'बोतल में सिरका डालें और अपने ज्वालामुखी को फटते हुए देखें!',
                description_te: 'సీసాలో వెనిగర్ పోసి మీ అగ్నిపర్వతం విస్ఫోటనం చెందడాన్ని చూడండి!',
                imageUrl: 'https://picsum.photos/seed/exp1-step4/600/400',
                imageHint: 'volcano erupting',
            },
        ]
    },
    {
        id: 'physics-density-tower',
        title: 'Colorful Density Tower',
        title_hi: 'रंगीन घनत्व टॉवर',
        title_te: 'రంగుల సాంద్రత టవర్',
        description: 'Learn about density by stacking different liquids.',
        description_hi: 'विभिन्न तरल पदार्थों को ढेर करके घनत्व के बारे में जानें।',
        description_te: 'వివిధ ద్రవాలను పేర్చడం ద్వారా సాంద్రత గురించి తెలుసుకోండి.',
        imageUrl: 'https://picsum.photos/seed/exp2/600/400',
        imageHint: 'colorful liquids',
        ingredients: [
            { name_en: 'Tall, clear glass or jar', name_hi: 'लंबा, साफ गिलास या जार', name_te: 'పొడవైన, స్పష్టమైన గాజు లేదా కూజా' },
            { name_en: 'Honey', name_hi: 'शहद', name_te: 'తేనె' },
            { name_en: 'Dish soap', name_hi: 'डिश सोप', name_te: 'డిష్ సోప్' },
            { name_en: 'Water (with food coloring)', name_hi: 'पानी (खाद्य रंग के साथ)', name_te: 'నీరు (ఫుడ్ కలరింగ్‌తో)' },
            { name_en: 'Vegetable oil', name_hi: 'వనస్పతి నూనె', name_te: 'వనస్పతి నూనె' },
            { name_en: 'Small objects (grape, plastic bead)', name_hi: 'छोटी वस्तुएं (अंगूर, प्लास्टिक मोती)', name_te: 'చిన్న వస్తువులు (ద్రాక్ష, ప్లాస్టిక్ పూస)' },
        ],
        steps: [
            {
                title: 'Step 1: Pour the Honey',
                title_hi: 'चरण 1: शहद डालें',
                title_te: 'దశ 1: తేనె పోయాలి',
                description: 'Carefully pour honey into the glass, making sure it doesn\'t touch the sides.',
                description_hi: 'सावधानी से गिलास में शहद डालें, यह सुनिश्चित करते हुए कि यह किनारों को न छुए।',
                description_te: 'గాజులో తేనెను జాగ్రత్తగా పోయాలి, అది అంచులకు తగలకుండా చూసుకోండి.',
                imageUrl: 'https://picsum.photos/seed/exp2-step1/600/400',
                imageHint: 'pouring honey',
            },
            {
                title: 'Step 2: Add Dish Soap',
                title_hi: 'चरण 2: डिश सोप डालें',
                title_te: 'దశ 2: డిష్ సోప్ జోడించండి',
                description: 'Slowly pour the dish soap on top of the honey. It should sit on top.',
                description_hi: 'धीरे-धीरे शहद के ऊपर डिश सोप डालें। यह ऊपर बैठना चाहिए।',
                description_te: 'తేనె పైన నెమ్మదిగా డిష్ సోప్ పోయాలి. అది పైన కూర్చోవాలి.',
                imageUrl: 'https://picsum.photos/seed/exp2-step2/600/400',
                imageHint: 'pouring soap',
            },
            {
                title: 'Step 3: Add Colored Water',
                title_hi: 'चरण 3: रंगीन पानी डालें',
                title_te: 'దశ 3: రంగు నీటిని జోడించండి',
                description: 'Gently add the colored water. Tilt the glass and pour slowly down the side.',
                description_hi: 'धीरे-धीरे रंगीन पानी डालें। गिलास को झुकाएं और धीरे-धीरे किनारे से नीचे डालें।',
                description_te: 'రంగు నీటిని మెల్లగా జోడించండి. గాజును వంచి, నెమ్మదిగా అంచు నుండి క్రిందికి పోయాలి.',
                imageUrl: 'https://picsum.photos/seed/exp2-step3/600/400',
                imageHint: 'pouring water',
            },
            {
                title: 'Step 4: Add Vegetable Oil',
                title_hi: 'चरण 4: वनस्पति तेल डालें',
                title_te: 'దశ 4: వనస్పతి నూనె జోడించండి',
                description: 'Finally, slowly pour in the vegetable oil. It will form the top layer.',
                description_hi: 'अंत में, धीरे-धीरे वनस्पति तेल डालें। यह सबसे ऊपरी परत बनाएगा।',
                description_te: 'చివరగా, నెమ్మదిగా వనస్పతి నూనె పోయాలి. ఇది పై పొరను ఏర్పరుస్తుంది.',
                imageUrl: 'https://picsum.photos/seed/exp2-step4/600/400',
                imageHint: 'pouring oil',
            },
            {
                title: 'Step 5: Test the Layers',
                title_hi: 'चरण 5: परतों का परीक्षण करें',
                title_te: 'దశ 5: పొరలను పరీక్షించండి',
                description: 'Gently drop small objects into the tower. See where they stop! The grape will sink lower than the plastic bead because it is more dense.',
                description_hi: 'धीरे-धीरे टॉवर में छोटी वस्तुएं गिराएं। देखें कि वे कहाँ रुकते हैं! अंगूर प्लास्टिक के मोती से नीचे डूब जाएगा क्योंकि यह अधिक घना है।',
                description_te: 'టవర్‌లో చిన్న వస్తువులను మెల్లగా వదలండి. అవి ఎక్కడ ఆగిపోతాయో చూడండి! ద్రాక్ష ప్లాస్టిక్ పూస కంటే తక్కువగా మునిగిపోతుంది ఎందుకంటే ఇది ఎక్కువ సాంద్రత కలిగి ఉంటుంది.',
                imageUrl: 'https://picsum.photos/seed/exp2-step5/600/400',
                imageHint: 'density tower',
            },
        ]
    }
];

export const competitionQuestions: Question[] = [
    // Physics
    { id: 1, subject: 'physics', text: 'What does "velocity" measure?', text_hi: 'वेग क्या मापता है?', text_te: 'వేగం దేనిని కొలుస్తుంది?', options: [{ id: 'a', text: 'Speed only', text_hi: 'केवल गति', text_te: 'వేగం మాత్రమే' }, { id: 'b', text: 'Direction only', text_hi: 'केवल दिशा', text_te: 'దిశ మాత్రమే' }, { id: 'c', text: 'Speed and direction', text_hi: 'गति और दिशा', text_te: 'వేగం మరియు దిశ' }, { id: 'd', text: 'Acceleration', text_hi: 'त्वरण', text_te: 'త్వరణం' }], correctAnswer: 'c', difficulty: 'medium', type: 'mcq' },
    { id: 2, subject: 'physics', text: 'Which of these is the best conductor of electricity?', text_hi: 'इनमें से कौन सा बिजली का सबसे अच्छा सुचालक है?', text_te: 'వీటిలో ఏది విద్యుత్తుకు ఉత్తమ వాహకం?', options: [{ id: 'a', text: 'Silver', text_hi: 'चांदी', text_te: 'వెండి' }, { id: 'b', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' }, { id: 'c', text: 'Glass', text_hi: 'कांच', text_te: 'గాజు' }, { id: 'd', text: 'Rubber', text_hi: 'रबर', text_te: 'రబ్బరు' }], correctAnswer: 'a', difficulty: 'medium', type: 'mcq' },
    
    // Chemistry
    { id: 3, subject: 'chemistry', text: 'What is the most abundant element in the Earth\'s atmosphere?', text_hi: 'पृथ्वी के वायुमंडल में सबसे प्रचुर तत्व कौन सा है?', text_te: 'భూమి వాతావరణంలో అత్యంత సమృద్ధిగా ఉన్న మూలకం ఏది?', options: [{ id: 'a', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్' }, { id: 'b', text: 'Carbon', text_hi: 'कार्बन', text_te: 'కార్బన్' }, { id: 'c', text: 'Nitrogen', text_hi: 'नाइट्रोजन', text_te: 'నత్రజని' }, { id: 'd', text: 'Argon', text_hi: 'आर्गन', text_te: 'ఆర్గాన్' }], correctAnswer: 'c', difficulty: 'medium', type: 'mcq' },
    { id: 4, subject: 'chemistry', text: 'What happens in an oxidation reaction?', text_hi: 'ऑक्सीकरण अभिक्रिया में क्या होता है?', text_te: 'ఆక్సీకరణ చర్యలో ఏమి జరుగుతుంది?', options: [{ id: 'a', text: 'Loss of electrons', text_hi: 'इलेक्ट्रॉनों का क्षय', text_te: 'ఎలక్ట్రాన్ల నష్టం' }, { id: 'b', text: 'Gain of electrons', text_hi: 'इलेक्ट्रॉनों का लाभ', text_te: 'ఎలక్ట్రాన్ల లాభం' }, { id: 'c', text: 'Loss of protons', text_hi: 'प्रोटॉनों का क्षय', text_te: 'ప్రోటాన్ల నష్టం' }, { id: 'd', text: 'Gain of protons', text_hi: 'प्रोटॉनों का लाभ', text_te: 'ప్రోటాన్ల లాభం' }], correctAnswer: 'a', difficulty: 'hard', type: 'mcq' },

    // Biology
    { id: 5, subject: 'biology', text: 'What is the powerhouse of the cell?', text_hi: 'कोशिका का पावरहाउस क्या है?', text_te: 'కణానికి పవర్‌హౌస్ ఏది?', options: [{ id: 'a', text: 'Nucleus', text_hi: 'नाभिक', text_te: 'కేంద్రకం' }, { id: 'b', text: 'Ribosome', text_hi: 'राइबोसोम', text_te: 'రైబోజోమ్' }, { id: 'c', text: 'Mitochondria', text_hi: 'माइटोकॉन्ड्रिया', text_te: 'మైటోకాండ్రియా' }, { id: 'd', text: 'Cell Wall', text_hi: 'कोशिका भित्ति', text_te: 'కణ గోడ' }], correctAnswer: 'c', difficulty: 'medium', type: 'mcq' },
    { id: 6, subject: 'biology', text: 'Which of these is a mammal?', text_hi: 'इनमें से कौन सा एक स्तनपायी है?', text_te: 'వీటిలో ఏది క్షీరదం?', options: [{ id: 'a', text: 'Shark', text_hi: 'शार्क', text_te: 'షార్క్' }, { id: 'b', text: 'Whale', text_hi: 'व्हेल', text_te: 'తిమింగలం' }, { id: 'c', text: 'Lizard', text_hi: 'छिपकली', text_te: 'బల్లి' }, { id: 'd', text: 'Frog', text_hi: 'मेंढक', text_te: 'కప్ప' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq' },

    // Mathematics
    { id: 7, subject: 'mathematics', text: 'What is the value of Pi (π) approximately?', text_hi: 'पाई (π) का मान लगभग क्या है?', text_te: 'పై (π) విలువ సుమారుగా ఎంత?', options: [{ id: 'a', text: '3.14', text_hi: '3.14', text_te: '3.14' }, { id: 'b', text: '2.71', text_hi: '2.71', text_te: '2.71' }, { id: 'c', text: '1.61', text_hi: '1.61', text_te: '1.61' }, { id: 'd', text: '4.20', text_hi: '4.20', text_te: '4.20' }], correctAnswer: 'a', difficulty: 'easy', type: 'mcq' },
    { id: 8, subject: 'mathematics', text: 'If a triangle has angles 90°, 45°, what is the third angle?', text_hi: 'यदि एक त्रिभुज के कोण 90°, 45° हैं, तो तीसरा कोण क्या है?', text_te: 'ఒక త్రిభుజం యొక్క కోణాలు 90°, 45° అయితే, మూడవ కోణం ఎంత?', options: [{ id: 'a', text: '30°', text_hi: '30°', text_te: '30°' }, { id: 'b', text: '45°', text_hi: '45°', text_te: '45°' }, { id: 'c', text: '60°', text_hi: '60°', text_te: '60°' }, { id: 'd', text: '90°', text_hi: '90°', text_te: '90°' }], correctAnswer: 'b', difficulty: 'medium', type: 'mcq' },

    // Mega STEM (Mix)
    { id: 9, subject: 'mega', text: 'What force opposes motion between two surfaces in contact?', text_hi: 'संपर्क में दो सतहों के बीच गति का विरोध कौन सा बल करता है?', text_te: 'సంపర్కంలో ఉన్న రెండు ఉపరితలాల మధ్య చలనాన్ని ఏ శక్తి వ్యతిరేకిస్తుంది?', options: [{ id: 'a', text: 'Gravity', text_hi: 'गुरुत्वाकर्षण', text_te: 'గురుత్వాకర్షణ' }, { id: 'b', text: 'Friction', text_hi: 'घर्षण', text_te: 'ఘర్షణ' }, { id: 'c', text: 'Magnetism', text_hi: 'चुंबकत्व', text_te: 'అయస్కాంతత్వం' }, { id: 'd', text: 'Tension', text_hi: 'तनाव', text_te: 'తన్యత' }], correctAnswer: 'b', difficulty: 'easy', type: 'mcq' },
    { id: 10, subject: 'mega', text: 'Which gas is essential for respiration?', text_hi: 'श्वसन के लिए कौन सी गैस आवश्यक है?', text_te: 'శ్వాసక్రియకు ఏ వాయువు అవసరం?', options: [{ id: 'a', text: 'Nitrogen', text_hi: 'नाइट्रोजन', text_te: 'నత్రజని' }, { id: 'b', text: 'Carbon Dioxide', text_hi: 'कार्बन डाइऑक्साइड', text_te: 'కార్బన్ డయాక్సైడ్' }, { id: 'c', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్' }, { id: 'd', 'text': 'Helium', text_hi: 'हीलियम', text_te: 'హీలియం' }], correctAnswer: 'c', difficulty: 'easy', type: 'mcq' },
    { id: 11, subject: 'mega', text: 'What is H2SO4 commonly known as?', text_hi: 'H2SO4 को सामान्यतः किस नाम से जाना जाता है?', text_te: 'H2SO4 సాధారణంగా ఏమని పిలువబడుతుంది?', options: [{ id: 'a', text: 'Vinegar', text_hi: 'सिरका', text_te: 'వెనిగర్' }, { id: 'b', text: 'Sulfuric Acid', text_hi: 'सल्फ्यूरिक एसिड', text_te: 'సల్ఫ్యూరిక్ ఆమ్లం' }, { id: 'c', text: 'Table Salt', text_hi: 'साधारण नमक', text_te: 'సాధారణ ఉప్పు' }, { id: 'd', text: 'Baking Soda', text_hi: 'बेकिंग सोडा', text_te: 'బేకింగ్ సోడా' }], correctAnswer: 'b', difficulty: 'hard', type: 'mcq' },
    { id: 12, subject: 'mega', text: 'How many bones are in the adult human body?', text_hi: 'वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?', text_te: 'వయోజన మానవ శరీరంలో ఎన్ని ఎముకలు ఉంటాయి?', options: [{ id: 'a', text: '206', text_hi: '206', text_te: '206' }, { id: 'b', text: '300', text_hi: '300', text_te: '300' }, { id: 'c', text: '152', text_hi: '152', text_te: '152' }, { id: 'd', text: '256', text_hi: '256', text_te: '256' }], correctAnswer: 'a', difficulty: 'easy', type: 'mcq' },
];
    

    




