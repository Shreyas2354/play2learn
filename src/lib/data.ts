





export type Question = {
  id: number;
  text: string;
  text_hi: string;
  text_te: string;
  options?: { id: string; text: string; text_hi: string; text_te: string; }[];
  chainItems?: { id: string; text: string; text_hi: string; text_te: string; }[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  hints_hi: string[];
  hints_te: string[];
  type?: 'mcq' | 'puzzle' | 'food-chain' | 'food-chain-visual' | 'picture-puzzle';
  imageUrl?: string;
  imageHint?: string;
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
  subject: 'physics' | 'biology' | 'chemistry' | 'technology' | 'engineering' | 'mathematics' | 'english';
};

export type Subject = {
    id: 'physics' | 'biology' | 'chemistry' | 'technology' | 'engineering' | 'mathematics' | 'english';
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
        hints: [
            "It's named after a famous scientist.",
            "Think about the laws of motion.",
            "The symbol for this unit is 'N'."
        ],
        hints_hi: [
            "इसका नाम एक प्रसिद्ध वैज्ञानिक के नाम पर रखा गया है।",
            "गति के नियमों के बारे में सोचें।",
            "इस इकाई का प्रतीक 'N' है।"
        ],
        hints_te: [
            "దీనికి ఒక ప్రసిద్ధ శాస్త్రవేత్త పేరు పెట్టారు.",
            "చలన నియమాల గురించి ఆలోచించండి.",
            "ఈ యూనిట్ యొక్క చిహ్నం 'N'."
        ],
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
        hints: [
            "Inertia is the resistance to change in motion.",
            "This law states that an object at rest stays at rest unless acted upon by a force.",
            "It's the very first one he came up with."
        ],
        hints_hi: [
            "जड़त्व गति में परिवर्तन का प्रतिरोध है।",
            "यह नियम कहता है कि कोई वस्तु तब तक स्थिर रहती है जब तक उस पर कोई बल न लगाया जाए।",
            "यह सबसे पहला नियम है जो उन्होंने दिया था।"
        ],
        hints_te: [
            "జడత్వం అంటే చలనంలో మార్పుకు నిరోధకత.",
            "ఈ నియమం ప్రకారం, ఒక వస్తువుపై బలం ప్రయోగించనంత వరకు అది నిశ్చల స్థితిలో ఉంటుంది.",
            "అతను కనిపెట్టిన మొట్టమొదటిది ఇదే."
        ],
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
        hints: [
            "For every action, there is an equal and opposite reaction.",
            "Think about action-reaction pairs.",
            "This law explains how rockets work."
        ],
        hints_hi: [
            "हर क्रिया की बराबर और विपरीत प्रतिक्रिया होती है।",
            "क्रिया-प्रतिक्रिया जोड़ी के बारे में सोचें।",
            "यह नियम बताता है कि रॉकेट कैसे काम करते हैं।"
        ],
        hints_te: [
            "ప్రతి చర్యకు, సమానమైన మరియు వ్యతిరేక ప్రతిచర్య ఉంటుంది.",
            "చర్య-ప్రతిచర్య జతల గురించి ఆలోచించండి.",
            "ఈ నియమం రాకెట్లు ఎలా పనిచేస్తాయో వివరిస్తుంది."
        ],
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
        hints: [
            "Remember the formula: Force = mass × acceleration.",
            "Multiply the mass of the object by its acceleration.",
            "10 multiplied by 5 gives you the answer."
        ],
        hints_hi: [
            "सूत्र याद रखें: बल = द्रव्यमान × त्वरण।",
            "वस्तु के द्रव्यमान को उसके त्वरण से गुणा करें।",
            "10 को 5 से गुणा करने पर आपको उत्तर मिल जाएगा।"
        ],
        hints_te: [
            "సూత్రాన్ని గుర్తుంచుకోండి: శక్తి = ద్రవ్యరాశి × త్వరణం.",
            "వస్తువు యొక్క ద్రవ్యరాశిని దాని త్వరణంతో గుణించండి.",
            "10 ని 5 తో గుణిస్తే మీకు సమాధానం వస్తుంది."
        ],
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
        hints: [
            "It's what keeps you on the ground.",
            "An apple famously fell on a scientist's head, leading to this discovery.",
            "It's the same force that keeps the moon orbiting the Earth."
        ],
        hints_hi: [
            "यह वही है जो आपको जमीन पर रखता है।",
            "एक सेब एक वैज्ञानिक के सिर पर गिरा, जिससे यह खोज हुई।",
            "यह वही बल है जो चंद्रमा को पृथ्वी के चारों ओर परिक्रमा कराता है।"
        ],
        hints_te: [
            "ఇది మిమ్మల్ని నేలపై ఉంచేది.",
            "ఒక ఆపిల్ ఒక శాస్త్రవేత్త తలపై పడింది, ఇది ఈ ఆవిష్కరణకు దారితీసింది.",
            "ఇది చంద్రుడిని భూమి చుట్టూ తిరిగేలా చేసే అదే శక్తి."
        ],
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
            hints: ["It's named after James Prescott Joule.", "It measures work or energy.", "Symbol is 'J'."],
            hints_hi: ["इसका नाम जेम्स प्रेस्कॉट जूल के नाम पर रखा गया है।", "यह कार्य या ऊर्जा को मापता है।", "प्रतीक 'J' है।"],
            hints_te: ["దీనికి జేమ్స్ ప్రెస్కాట్ జౌల్ పేరు పెట్టారు.", "ఇది పని లేదా శక్తిని కొలుస్తుంది.", "చిహ్నం 'J'."]
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
            hints: ["It depends on the object's mass and speed.", "The faster it moves, the more of this energy it has.", "K.E. = 1/2 * m * v^2"],
            hints_hi: ["यह वस्तु के द्रव्यमान और गति पर निर्भर करता है।", "जितनी तेजी से यह चलता है, उतनी ही अधिक यह ऊर्जा होती है।", "K.E. = 1/2 * m * v^2"],
            hints_te: ["ఇది వస్తువు యొక్క ద్రవ్యరాశి మరియు వేగంపై ఆధారపడి ఉంటుంది.", "అది ఎంత వేగంగా కదులుతుందో, అంత ఎక్కువ ఈ శక్తి ఉంటుంది.", "K.E. = 1/2 * m * v^2"]
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
            hints: ["It is stored energy.", "It is due to the book's position or height.", "If it falls, this energy converts to kinetic energy."],
            hints_hi: ["यह संग्रहीत ऊर्जा है।", "यह पुस्तक की स्थिति या ऊंचाई के कारण है।", "यदि यह गिरता है, तो यह ऊर्जा गतिज ऊर्जा में परिवर्तित हो जाती है।"],
            hints_te: ["ఇది నిల్వ చేయబడిన శక్తి.", "ఇది పుస్తకం యొక్క స్థానం లేదా ఎత్తు కారణంగా ఉంటుంది.", "అది కింద పడితే, ఈ శక్తి గతిజ శక్తిగా మారుతుంది."]
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
            hints: ["It's a fossil fuel.", "It takes millions of years to form.", "Burning it releases carbon dioxide."],
            hints_hi: ["यह एक जीवाश्म ईंधन है।", "इसे बनने में लाखों साल लगते हैं।", "इसे जलाने से कार्बन डाइऑक्साइड निकलती है।"],
            hints_te: ["ఇది ఒక శిలాజ ఇంధనం.", "ఇది ఏర్పడటానికి లక్షలాది సంవత్సరాలు పడుతుంది.", "దానిని కాల్చడం వల్ల కార్బన్ డయాక్సైడ్ విడుదల అవుతుంది."]
        },
        {
            id: 5,
            text: 'Energy cannot be created or destroyed, only transformed. This is the law of...',
            text_hi: 'ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है, केवल रूपांतरित किया जा सकता है। यह किसका नियम है...',
            text_te: 'శక్తిని సృష్టించడం లేదా నాశనం చేయడం సాధ్యం కాదు, కేవలం రూపాంతరం చెందుతుంది. ఇది దేని నియమం...',
            options: [
                { id: 'a', text: 'Conservation of Energy', text_hi: 'ऊर्जा संरक्षण', text_te: 'శక్తి పరిరక్షణ' },
                { id: 'b', text: 'Conservation of Mass', text_hi: 'द्रव्यमान संरक्षण', text_te: 'ద్రవ్యరాశి పరిరక్షణ' },
                { id: 'c', text: 'Thermodynamics', text_hi: 'ऊष्मप्रवैगिकी', text_te: 'ఉష్ణగతికశాస్త్రం' },
                { id: 'd', text: 'Gravity', text_hi: 'गुरुत्वाकर्षण', text_te: 'గురుత్వాకర్షణ' },
            ],
            correctAnswer: 'a',
            difficulty: 'easy',
            hints: ["It's a fundamental principle in physics.", "The total energy in a closed system remains constant.", "The first word is 'Conservation'."],
            hints_hi: ["यह भौतिकी का एक मौलिक सिद्धांत है।", "एक बंद प्रणाली में कुल ऊर्जा स्थिर रहती है।", "पहला शब्द 'संरक्षण' है।"],
            hints_te: ["ఇది భౌతికశాస్త్రంలో ఒక ప్రాథమిక సూత్రం.", "ఒక సంవృత వ్యవస్థలో మొత్తం శక్తి స్థిరంగా ఉంటుంది.", "మొదటి పదం 'పరిరక్షణ'."]
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
        { id: 1, text: 'Which of these is a source of light?', text_hi: 'इनमें से कौन प्रकाश का स्रोत है?', text_te: 'వీటిలో కాంతి మూలం ఏది?', options: [{ id: 'a', text: 'Moon', text_hi: 'चांद', text_te: 'చంద్రుడు' },{ id: 'b', text: 'Sun', text_hi: 'सूरज', text_te: 'సూర్యుడు' },{ id: 'c', text: 'Mirror', text_hi: 'आईना', text_te: 'అద్దం' },{ id: 'd', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' }], correctAnswer: 'b', difficulty: 'easy', hints: ['It is a star.', 'It gives us daylight.', 'It is very hot.'], hints_hi: ['यह एक तारा है।', 'यह हमें दिन का प्रकाश देता है।', 'यह बहुत गर्म है।'], hints_te: ['ఇది ఒక నక్షత్రం.', 'ఇది మనకు పగటి వెలుగును ఇస్తుంది.', 'ఇది చాలా వేడిగా ఉంటుంది.'] },
        { id: 2, text: 'What is a shadow?', text_hi: 'छाया क्या है?', text_te: 'నీడ అంటే ఏమిటి?', options: [{ id: 'a', text: 'A type of light', text_hi: 'एक प्रकार का प्रकाश', text_te: 'ఒక రకమైన కాంతి' },{ id: 'b', text: 'An area where light is blocked', text_hi: 'एक क्षेत्र जहां प्रकाश अवरुद्ध है', text_te: 'కాంతి నిరోధించబడిన ప్రాంతం' },{ id: 'c', text: 'A reflection', text_hi: 'एक प्रतिबिंब', text_te: 'ప్రతిబింబం' },{ id: 'd', text: 'A source of heat', text_hi: 'गर्मी का स्रोत', text_te: 'వేడి మూలం' }], correctAnswer: 'b', difficulty: 'easy', hints: ['It is always dark.', 'You can make one with your hand.', 'It forms behind an object.'], hints_hi: ['यह हमेशा अंधेरा होता है।', 'आप इसे अपने हाथ से बना सकते हैं।', 'यह एक वस्तु के पीछे बनता है।'], hints_te: ['ఇది ఎల్లప్పుడూ చీకటిగా ఉంటుంది.', 'మీరు దానిని మీ చేతితో చేయవచ్చు.', 'ఇది ఒక వస్తువు వెనుక ఏర్పడుతుంది.'] },
        { id: 3, text: 'Which material is transparent?', text_hi: 'कौन सी सामग्री पारदर्शी है?', text_te: 'ఏ పదార్థం పారదర్శకంగా ఉంటుంది?', options: [{ id: 'a', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' },{ id: 'b', text: 'Brick', text_hi: 'ईंट', text_te: 'ఇటుక' },{ id: 'c', text: 'Glass', text_hi: 'कांच', text_te: 'గాజు' },{ id: 'd', text: 'Paper', text_hi: 'कागज', text_te: 'కాగితం' }], correctAnswer: 'c', difficulty: 'easy', hints: ['You can see clearly through it.', 'Windows are made of it.', 'It can break easily.'], hints_hi: ['आप इसके आर-पार साफ-साफ देख सकते हैं।', 'खिड़कियां इसी से बनी होती हैं।', 'यह आसानी से टूट सकता है।'], hints_te: ['మీరు దాని ద్వారా స్పష్టంగా చూడవచ్చు.', 'కిటికీలు దానితో తయారవుతాయి.', 'ఇది సులభంగా పగిలిపోతుంది.'] },
        { id: 4, text: 'What do we call the bending of light?', text_hi: 'प्रकाश के मुड़ने को हम क्या कहते हैं?', text_te: 'కాంతి వంగడాన్ని మనం ఏమంటాము?', options: [{ id: 'a', text: 'Reflection', text_hi: 'परावर्तन', text_te: 'ప్రతిబింబం' },{ id: 'b', text: 'Refraction', text_hi: 'अपवर्तन', text_te: 'వక్రీభవనం' },{ id: 'c', text: 'Absorption', text_hi: 'अवशोषण', text_te: 'శోషణ' },{ id: 'd', text: 'Shadow', text_hi: 'छाया', text_te: 'నీడ' }], correctAnswer: 'b', difficulty: 'easy', hints: ['It happens when light passes from air to water.', 'A straw in a glass of water looks bent because of this.', 'Lenses in glasses use this principle.'], hints_hi: ['यह तब होता है जब प्रकाश हवा से पानी में जाता है।', 'इसी वजह से पानी के गिलास में एक स्ट्रॉ मुड़ी हुई दिखती है।', 'चश्मे में लेंस इसी सिद्धांत का उपयोग करते हैं।'], hints_te: ['కాంతి గాలి నుండి నీటిలోకి వెళ్ళినప్పుడు ఇది జరుగుతుంది.', 'ఒక గ్లాసు నీటిలో ఒక గడ్డి దీనివల్ల వంగినట్లు కనిపిస్తుంది.', 'కళ్ళజోడులోని కటకాలు ఈ సూత్రాన్ని ఉపయోగిస్తాయి.'] },
        { id: 5, text: 'What colors make up white light?', text_hi: 'सफेद प्रकाश किन रंगों से बना है?', text_te: 'తెలుపు కాంతి ఏ రంగులతో తయారైంది?', options: [{ id: 'a', text: 'Red, Green, Blue', text_hi: 'लाल, हरा, नीला', text_te: 'ఎరుపు, ఆకుపచ్చ, నీలం' },{ id: 'b', text: 'All colors of the rainbow', text_hi: 'इंद्रधनुष के सभी रंग', text_te: 'ఇంద్రధనస్సు యొక్క అన్ని రంగులు' },{ id: 'c', text: 'Black and White', text_hi: 'काला और सफेद', text_te: 'నలుపు మరియు తెలుపు' },{ id: 'd', text: 'Yellow and Blue', text_hi: 'पीला और नीला', text_te: 'పసుపు మరియు నీలం' }], correctAnswer: 'b', difficulty: 'easy', hints: ['Think of a prism.', 'You can see it after it rains.', 'It is often represented by the acronym ROYGBIV.'], hints_hi: ['एक प्रिज्म के बारे में सोचें।', 'आप इसे बारिश के बाद देख सकते हैं।', 'इसे अक्सर ROYGBIV संक्षिप्त नाम से दर्शाया जाता है।'], hints_te: ['ప్రిజం గురించి ఆలోచించండి.', 'వర్షం తర్వాత మీరు దానిని చూడవచ్చు.', 'దీనిని తరచుగా ROYGBIV అనే సంక్షిప్త నామంతో సూచిస్తారు.'] }
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
        { id: 1, text: 'How is sound made?', text_hi: 'ध्वनि कैसे बनती है?', text_te: 'ధ్వని ఎలా తయారవుతుంది?', options: [{ id: 'a', text: 'By light', text_hi: 'प्रकाश से', text_te: 'కాంతి ద్వారా' },{ id: 'b', text: 'By vibrations', text_hi: 'कंपन से', text_te: 'కంపనల ద్వారా' },{ id: 'c', text: 'By heat', text_hi: 'गर्मी से', text_te: 'వేడి ద్వారా' },{ id: 'd', text: 'By silence', text_hi: 'शांति से', text_te: 'నిశ్శబ్దం ద్వారా' }], correctAnswer: 'b', difficulty: 'easy', hints: ['It travels in waves.', 'Plucking a guitar string is an example.', 'You can feel it in your throat when you speak.'], hints_hi: ['यह तरंगों में यात्रा करता है।', 'गिटार की तार छेड़ना इसका एक उदाहरण है।', 'बोलते समय आप इसे अपने गले में महसूस कर सकते हैं।'], hints_te: ['ఇది తరంగాలలో ప్రయాణిస్తుంది.', 'గిటార్ తీగను మీటడం ఒక ఉదాహరణ.', 'మీరు మాట్లాడేటప్పుడు మీ గొంతులో దానిని అనుభూతి చెందవచ్చు.'] },
        { id: 2, text: 'Sound travels fastest through...', text_hi: 'ध्वनि सबसे तेज किसमें यात्रा करती है...', text_te: 'ధ్వని దేనిలో వేగంగా ప్రయాణిస్తుంది...', options: [{ id: 'a', text: 'Solids', text_hi: 'ठोस', text_te: 'ఘనపదార్థాలు' },{ id: 'b', text: 'Liquids', text_hi: 'तरल पदार्थ', text_te: 'ద్రవాలు' },{ id: 'c', text: 'Gases', text_hi: 'गैसें', text_te: 'వాయువులు' },{ id: 'd', text: 'Vacuum (space)', text_hi: 'निर्वात (अंतरिक्ष)', text_te: 'వాక్యూమ్ (అంతరిక్షం)' }], correctAnswer: 'a', difficulty: 'easy', hints: ['Particles are packed closest together in this state.', 'Sound needs a medium to travel through.', 'It travels slowest through gases.'], hints_hi: ['इस अवस्था में कण सबसे करीब से भरे होते हैं।', 'ध्वनि को यात्रा करने के लिए एक माध्यम की आवश्यकता होती है।', 'यह गैसों के माध्यम से सबसे धीमी गति से यात्रा करती है।'], hints_te: ['ఈ స్థితిలో కణాలు అత్యంత దగ్గరగా ఉంటాయి.', 'ధ్వని ప్రయాణించడానికి ఒక మాధ్యమం అవసరం.', 'ఇది వాయువుల ద్వారా నెమ్మదిగా ప్రయాణిస్తుంది.'] },
        { id: 3, text: 'What is the highness or lowness of a sound called?', text_hi: 'ध्वनि की उच्चता या निम्नता को क्या कहा जाता है?', text_te: 'ధ్వని యొక్క హెచ్చుతగ్గులను ఏమంటారు?', options: [{ id: 'a', text: 'Volume', text_hi: 'आयतन', text_te: 'వాల్యూమ్' },{ id: 'b', text: 'Pitch', text_hi: 'पिच', text_te: 'పిచ్' },{ id: 'c', text: 'Tempo', text_hi: 'गति', text_te: 'టెంపో' },{ id: 'd', text: 'Rhythm', text_hi: 'ताल', text_te: 'లయ' }], correctAnswer: 'b', difficulty: 'easy', hints: ['A small bird makes a high one, a big dog makes a low one.', 'It is related to frequency.', 'Singers practice controlling this.'], hints_hi: ['एक छोटा पक्षी ऊँची आवाज निकालता है, एक बड़ा कुत्ता नीची आवाज निकालता है।', 'यह आवृत्ति से संबंधित है।', 'गायक इसे नियंत्रित करने का अभ्यास करते हैं।'], hints_te: ['ఒక చిన్న పక్షి ఎత్తైన స్వరాన్ని, ఒక పెద్ద కుక్క తక్కువ స్వరాన్ని చేస్తుంది.', 'ఇది ఫ్రీక్వెన్సీకి సంబంధించినది.', 'గాయకులు దీనిని నియంత్రించడం అభ్యాసం చేస్తారు.'] },
        { id: 4, text: 'What do we call a sound that is reflected back?', text_hi: 'परावर्तित होकर वापस आने वाली ध्वनि को हम क्या कहते हैं?', text_te: 'ప్రతిధ్వనించే ధ్వనిని మనం ఏమంటాము?', options: [{ id: 'a', text: 'An echo', text_hi: 'एक प्रतिध्वनि', text_te: 'ప్రతిధ్వని' },{ id: 'b', text: 'A shadow', text_hi: 'एक छाया', text_te: 'నీడ' },{ id: 'c', text: 'A pitch', text_hi: 'एक पिच', text_te: 'పిచ్' },{ id: 'd', text: 'A vibration', text_hi: 'एक कंपन', text_te: 'కంపనం' }], correctAnswer: 'a', difficulty: 'easy', hints: ['You can hear it in a large empty room or a cave.', 'It is like a sound "bounce".', 'You might shout "Hello!" and hear it back.'], hints_hi: ['आप इसे एक बड़े खाली कमरे या गुफा में सुन सकते हैं।', 'यह एक ध्वनि "उछाल" की तरह है।', 'आप "नमस्ते!" चिल्ला सकते हैं और इसे वापस सुन सकते हैं।'], hints_te: ['మీరు దానిని ఒక పెద్ద ఖాళీ గదిలో లేదా గుహలో వినవచ్చు.', 'ఇది ఒక ధ్వని "బౌన్స్" లాంటిది.', 'మీరు "హలో!" అని అరిచి దానిని తిరిగి వినవచ్చు.'] },
        { id: 5, text: 'Sound cannot travel in...', text_hi: 'ध्वनि किसमें यात्रा नहीं कर सकती...', text_te: 'ధ్వని దేనిలో ప్రయాణించదు...', options: [{ id: 'a', text: 'Water', text_hi: 'पानी', text_te: 'నీరు' },{ id: 'b', text: 'Air', text_hi: 'वायु', text_te: 'గాలి' },{ id: 'c', text: 'Space', text_hi: 'अंतरिक्ष', text_te: 'అంతరిక్షం' },{ id: 'd', text: 'Iron', text_hi: 'लोहा', text_te: 'ఇనుము' }], correctAnswer: 'c', difficulty: 'easy', hints: ['There are no particles to vibrate there.', 'It is a vacuum.', 'In space, no one can hear you scream.'], hints_hi: ['वहाँ कंपन करने के लिए कोई कण नहीं हैं।', 'यह एक निर्वात है।', 'अंतरिक्ष में, कोई भी आपको चिल्लाते हुए नहीं सुन सकता।'], hints_te: ['అక్కడ కంపింపడానికి కణాలు లేవు.', 'ఇది ఒక వాక్యూమ్.', 'అంతరిక్షంలో, మీరు అరిచినా ఎవరూ వినలేరు.'] }
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
        { id: 1, text: 'What flows through wires to power a light bulb?', text_hi: 'एक लाइट बल्ब को बिजली देने के लिए तारों से क्या बहता है?', text_te: 'ఒక లైట్ బల్బును శక్తివంతం చేయడానికి తీగల ద్వారా ఏమి ప్రవహిస్తుంది?', options: [{ id: 'a', text: 'Water', text_hi: 'पानी', text_te: 'నీరు' },{ id: 'b', text: 'Air', text_hi: 'वायु', text_te: 'గాలి' },{ id: 'c', text: 'Electricity', text_hi: 'बिजली', text_te: 'విద్యుత్' },{ id: 'd', text: 'Sound', text_hi: 'ध्वनि', text_te: 'ధ్వని' }], correctAnswer: 'c', difficulty: 'easy', hints: ['It is a form of energy.', 'It is made of moving electrons.', 'It can be dangerous.'], hints_hi: ['यह ऊर्जा का एक रूप है।', 'यह गतिमान इलेक्ट्रॉनों से बना है।', 'यह खतरनाक हो सकता है।'], hints_te: ['ఇది ఒక శక్తి రూపం.', 'ఇది కదిలే ఎలక్ట్రాన్లతో తయారైంది.', 'ఇది ప్రమాదకరమైనది కావచ్చు.'] },
        { id: 2, text: 'A path for electricity to flow is called a...', text_hi: 'बिजली के बहने के रास्ते को क्या कहा जाता है...', text_te: 'విద్యుత్ ప్రవహించే మార్గాన్ని ఏమంటారు...', options: [{ id: 'a', text: 'Circuit', text_hi: 'सर्किट', text_te: 'సర్క్యూట్' },{ id: 'b', text: 'River', text_hi: 'नदी', text_te: 'నది' },{ id: 'c', text: 'Road', text_hi: 'सड़क', text_te: 'రహదారి' },{ id: 'd', text: 'Pipe', text_hi: 'पाइप', text_te: 'పైపు' }], correctAnswer: 'a', difficulty: 'easy', hints: ['It must be a complete loop.', 'A switch can open or close it.', 'It contains a power source like a battery.'], hints_hi: ['यह एक पूरा लूप होना चाहिए।', 'एक स्विच इसे खोल या बंद कर सकता है।', 'इसमें बैटरी जैसा शक्ति स्रोत होता है।'], hints_te: ['ఇది ఒక పూర్తి లూప్ అయి ఉండాలి.', 'ఒక స్విచ్ దానిని తెరవగలదు లేదా మూసివేయగలదు.', 'ఇందులో బ్యాటరీ వంటి శక్తి వనరు ఉంటుంది.'] },
        { id: 3, text: 'Which material is a good conductor of electricity?', text_hi: 'कौन सी सामग्री बिजली का अच्छा सुचालक है?', text_te: 'ఏ పదార్థం విద్యుత్ యొక్క మంచి వాహకం?', options: [{ id: 'a', text: 'Rubber', text_hi: 'रबर', text_te: 'రబ్బరు' },{ id: 'b', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' },{ id: 'c', text: 'Plastic', text_hi: 'प्लास्टिक', text_te: 'ప్లాస్టిక్' },{ id: 'd', text: 'Copper', text_hi: 'तांबा', text_te: 'రాగి' }], correctAnswer: 'd', difficulty: 'easy', hints: ['It is a type of metal.', 'Wires are often made of it.', 'It has a reddish-brown color.'], hints_hi: ['यह एक प्रकार की धातु है।', 'तार अक्सर इसी से बने होते हैं।', 'इसका रंग लाल-भूरा होता है।'], hints_te: ['ఇది ఒక రకమైన లోహం.', 'తీగలు తరచుగా దానితో తయారవుతాయి.', 'ఇది ఎరుపు-గోధుమ రంగులో ఉంటుంది.'] },
        { id: 4, text: 'A material that does NOT let electricity pass through it is called...', text_hi: 'एक सामग्री जो बिजली को अपने से गुजरने नहीं देती है, उसे क्या कहा जाता है...', text_te: 'విద్యుత్తును తన గుండా వెళ్ళనివ్వని పదార్థాన్ని ఏమంటారు...', options: [{ id: 'a', text: 'A conductor', text_hi: 'एक सुचालक', text_te: 'వాహకం' },{ id: 'b', text: 'An insulator', text_hi: 'एक इन्सुलेटर', text_te: 'ఇన్సులేటర్' },{ id: 'c', text: 'A battery', text_hi: 'एक बैटरी', text_te: 'బ్యాటరీ' },{ id: 'd', text: 'A wire', text_hi: 'एक तार', text_te: 'తీగ' }], correctAnswer: 'b', difficulty: 'easy', hints: ['Rubber and plastic are examples.', 'It is used for safety.', 'It stops the flow of electricity.'], hints_hi: ['रबर और प्लास्टिक इसके उदाहरण हैं।', 'इसका उपयोग सुरक्षा के लिए किया जाता है।', 'यह बिजली के प्रवाह को रोकता है।'], hints_te: ['రబ్బరు మరియు ప్లాస్టిక్ ఉదాహరణలు.', 'ఇది భద్రత కోసం ఉపయోగించబడుతుంది.', 'ఇది విద్యుత్ ప్రవాహాన్ని ఆపుతుంది.'] },
        { id: 5, text: 'What provides the power in a simple circuit?', text_hi: 'एक साधारण सर्किट में शक्ति कौन प्रदान करता है?', text_te: 'ఒక సాధారణ సర్క్యూట్‌లో శక్తిని ఏది అందిస్తుంది?', options: [{ id: 'a', text: 'The light bulb', text_hi: 'लाइट बल्ब', text_te: 'లైట్ బల్బ్' },{ id: 'b', text: 'The switch', text_hi: 'स्विच', text_te: 'స్విచ్' },{ id: 'c', text: 'The wire', text_hi: 'तार', text_te: 'తీగ' },{ id: 'd', text: 'The battery', text_hi: 'बैटरी', text_te: 'బ్యాటరీ' }], correctAnswer: 'd', difficulty: 'easy', hints: ['It has a positive and a negative end.', 'You put them in toys and remote controls.', 'It stores chemical energy.'], hints_hi: ['इसका एक सकारात्मक और एक नकारात्मक सिरा होता है।', 'आप उन्हें खिलौनों और रिमोट कंट्रोल में डालते हैं।', 'यह रासायनिक ऊर्जा संग्रहीत करता है।'], hints_te: ['దీనికి ధన మరియు రుణ ధ్రువాలు ఉంటాయి.', 'మీరు వాటిని బొమ్మలు మరియు రిమోట్ కంట్రోల్‌లలో ఉంచుతారు.', 'ఇది రసాయన శక్తిని నిల్వ చేస్తుంది.'] }
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
        hints: [
            "It involves sunlight, water, and carbon dioxide.",
            "The word 'photo' means light.",
            "This process releases oxygen into the air."
        ],
        hints_hi: [
            "इसमें सूर्य का प्रकाश, पानी और कार्बन डाइऑक्साइड शामिल हैं।",
            "'फोटो' शब्द का अर्थ प्रकाश है।",
            "यह प्रक्रिया हवा में ऑक्सीजन छोड़ती है।"
        ],
        hints_te: [
            "దీనిలో సూర్యరశ్మి, నీరు మరియు కార్బన్ డయాక్సైడ్ ఉంటాయి.",
            "'ఫోటో' అనే పదానికి కాంతి అని అర్థం.",
            "ఈ ప్రక్రియ గాలిలోకి ఆక్సిజన్‌ను విడుదల చేస్తుంది."
        ],
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
        hints: [
            "It's the gas that humans and animals breathe out.",
            "Its chemical formula is CO2.",
            "Too much of this gas contributes to the greenhouse effect."
        ],
        hints_hi: [
            "यह वह गैस है जिसे मनुष्य और जानवर बाहर निकालते हैं।",
            "इसका रासायनिक सूत्र CO2 है।",
            "इस गैस की अधिकता ग्रीनहाउस प्रभाव में योगदान करती है।"
        ],
        hints_te: [
            "ఇది మానవులు మరియు జంతువులు ఊపిరి పీల్చుకునే వాయువు.",
            "దీని రసాయన సూత్రం CO2.",
            "ఈ వాయువు ఎక్కువగా ఉండటం గ్రీన్‌హౌస్ ప్రభావానికి దోహదం చేస్తుంది."
        ],
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
        hints: [
            "This part is usually underground.",
            "It acts like an anchor for the plant.",
            "Think of it like a straw for the plant."
        ],
        hints_hi: [
            "यह हिस्सा आमतौर पर भूमिगत होता है।",
            "यह पौधे के लिए एक लंगर की तरह काम करता है।",
            "इसे पौधे के लिए एक स्ट्रॉ की तरह समझें।"
        ],
        hints_te: [
            "ఈ భాగం సాధారణంగా భూగర్భంలో ఉంటుంది.",
            "ఇది మొక్కకు యాంకర్ లాగా పనిచేస్తుంది.",
            "ఇది మొక్కకు స్ట్రా లాగా ఆలోచించండి."
        ],
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
        hints: [
            "It's why most plants look green.",
            "It's located in the chloroplasts of plant cells.",
            "It sounds a bit like 'chloroform'."
        ],
        hints_hi: [
            "इसी वजह से ज़्यादातर पौधे हरे दिखते हैं।",
            "यह पौधे की कोशिकाओं के क्लोरोप्लास्ट में स्थित होता है।",
            "यह 'क्लोरोफॉर्म' जैसा लगता है।"
        ],
        hints_te: [
            "చాలా మొక్కలు ఆకుపచ్చగా కనిపించడానికి ఇదే కారణం.",
            "ఇది మొక్కల కణాల క్లోరోప్లాస్ట్‌లలో ఉంటుంది.",
            "ఇది 'క్లోరోఫాం' లాగా వినిపిస్తుంది."
        ],
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
        hints: [
            "It's the gas that humans need to breathe.",
            "Trees are often called the 'lungs of the Earth' because they produce this.",
            "Its chemical symbol is O2."
        ],
        hints_hi: [
            "यह वह गैस है जिसकी इंसानों को सांस लेने के लिए ज़रूरत होती है।",
            "पेड़ों को अक्सर 'पृथ्वी के फेफड़े' कहा जाता है क्योंकि वे इसका उत्पादन करते हैं।",
            "इसका रासायनिक प्रतीक O2 है।"
        ],
        hints_te: [
            "మానవులు శ్వాసించడానికి అవసరమైన వాయువు ఇది.",
            "చెట్లను తరచుగా 'భూమి యొక్క ఊపిరితిత్తులు' అని పిలుస్తారు ఎందుకంటే అవి దీనిని ఉత్పత్తి చేస్తాయి.",
            "దీని రసాయన చిహ్నం O2."
        ],
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
            hints: ["It's a muscle located in your chest.", "It beats about 100,000 times a day.", "It's part of the circulatory system."],
            hints_hi: ["यह आपकी छाती में स्थित एक मांसपेशी है।", "यह दिन में लगभग 100,000 बार धड़कता है।", "यह परिसंचरण तंत्र का हिस्सा है।"],
            hints_te: ["ఇది మీ ఛాతీలో ఉన్న కండరం.", "ఇది రోజుకు సుమారు 100,000 సార్లు కొట్టుకుంటుంది.", "ఇది ప్రసరణ వ్యవస్థలో భాగం."]
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
            hints: ["It involves inhaling oxygen and exhaling carbon dioxide.", "You have two of them.", "It's part of the respiratory system."],
            hints_hi: ["इसमें ऑक्सीजन लेना और कार्बन डाइऑक्साइड छोड़ना शामिल है।", "आपके पास उनमें से दो हैं।", "यह श्वसन प्रणाली का हिस्सा है।"],
            hints_te: ["ఇది ఆక్సిజన్‌ను పీల్చడం మరియు కార్బన్ డయాక్సైడ్‌ను వదలడం beinhaltet.", "మీకు వాటిలో రెండు ఉన్నాయి.", "ఇది శ్వాస వ్యవస్థలో భాగం."]
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
            hints: ["It includes the stomach and intestines.", "It extracts nutrients from what you eat.", "The process starts in your mouth."],
            hints_hi: ["इसमें पेट और आंतें शामिल हैं।", "यह आपके खाने से पोषक तत्व निकालता है।", "यह प्रक्रिया आपके मुंह से शुरू होती है।"],
            hints_te: ["ఇందులో కడుపు మరియు ప్రేగులు ఉంటాయి.", "ఇది మీరు తినే దాని నుండి పోషకాలను సంగ్రహిస్తుంది.", "ఈ ప్రక్రియ మీ నోటిలో మొదలవుతుంది."]
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
            hints: ["It's protected by the skull.", "It's part of the nervous system.", "It helps you think, learn, and feel."],
            hints_hi: ["यह खोपड़ी द्वारा संरक्षित है।", "यह तंत्रिका तंत्र का हिस्सा है।", "यह आपको सोचने, सीखने और महसूस करने में मदद करता है।"],
            hints_te: ["ఇది పుర్రె ద్వారా రక్షించబడింది.", "ఇది నాడీ వ్యవస్థలో భాగం.", "ఇది మీకు ఆలోచించడానికి, నేర్చుకోవడానికి మరియు అనుభూతి చెందడానికి సహాయపడుతుంది."]
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
            hints: ["It gives your body its shape.", "It protects your internal organs.", "An adult human has 206 bones in this system."],
            hints_hi: ["यह आपके शरीर को उसका आकार देता है।", "यह आपके आंतरिक अंगों की रक्षा करता है।", "एक वयस्क मानव में इस प्रणाली में 206 हड्डियाँ होती हैं।"],
            hints_te: ["ఇది మీ శరీరానికి దాని ఆకారాన్ని ఇస్తుంది.", "ఇది మీ అంతర్గత అవయవాలను రక్షిస్తుంది.", "ఒక వయోజన మానవునికి ఈ వ్యవస్థలో 206 ఎముకలు ఉంటాయి."]
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
        { id: 1, text: 'Which animal is the king of the jungle?', text_hi: 'जंगल का राजा कौन सा जानवर है?', text_te: 'అడవికి రాజు ఏ జంతువు?', options: [{ id: 'a', text: 'Tiger', text_hi: 'बाघ', text_te: 'పులి' },{ id: 'b', text: 'Elephant', text_hi: 'हाथी', text_te: 'ఏనుగు' },{ id: 'c', text: 'Lion', text_hi: 'शेर', text_te: 'సింహం' },{ id: 'd', text: 'Bear', text_hi: 'भालू', text_te: 'ఎలుగుబంటి' }], correctAnswer: 'c', difficulty: 'easy', hints: ['It has a large mane.', 'It roars loudly.', 'It lives in a pride.'], hints_hi: ['इसकी एक बड़ी अयाल होती है।', 'यह जोर से दहाड़ता है।', 'यह एक झुंड में रहता है।'], hints_te: ['దానికి పెద్ద జూలు ఉంటుంది.', 'అది గట్టిగా గర్జిస్తుంది.', 'అది గుంపులో నివసిస్తుంది.'] },
        { id: 2, text: 'Which of these animals can fly?', text_hi: 'इनमें से कौन सा जानवर उड़ सकता है?', text_te: 'ఈ జంతువులలో ఏది ఎగరగలదు?', options: [{ id: 'a', text: 'Penguin', text_hi: 'पेंगुइन', text_te: 'పెంగ్విన్' },{ id: 'b', text: 'Ostrich', text_hi: 'शुतुरमुर्ग', text_te: 'ఉష్ట్రపక్షి' },{ id: 'c', text: 'Bat', text_hi: 'चमगादड़', text_te: 'గబ్బిలం' },{ id: 'd', text: 'Chicken', text_hi: 'मुर्गी', text_te: 'కోడి' }], correctAnswer: 'c', difficulty: 'easy', hints: ['It is a mammal.', 'It is nocturnal.', 'It uses echolocation.'], hints_hi: ['यह एक स्तनपायी है।', 'यह निशाचर है।', 'यह इकोलोకేషన్‌ను ఉపయోగిస్తుంది।'], hints_te: ['ఇది ఒక క్షీరదం.', 'ఇది నిశాచరమైనది.', 'ఇది ఎకోలోకేషన్‌ను ఉపయోగిస్తుంది.'] },
        { id: 3, text: 'What is a baby dog called?', text_hi: 'कुत्ते के बच्चे को क्या कहते हैं?', text_te: 'కుక్క పిల్లను ఏమంటారు?', options: [{ id: 'a', text: 'Kitten', text_hi: 'बिल्ली का बच्चा', text_te: 'పిల్లి పిల్ల' },{ id: 'b', text: 'Puppy', text_hi: 'पिल्ला', text_te: 'కుక్క పిల్ల' },{ id: 'c', text: 'Calf', text_hi: 'बछड़ा', text_te: 'దూడ' },{ id: 'd', text: 'Cub', text_hi: 'शावक', text_te: 'పిల్ల' }], correctAnswer: 'b', difficulty: 'easy', hints: ['It is very playful.', 'It barks.', 'It grows up to be a dog.'], hints_hi: ['यह बहुत चंचल होता है।', 'यह भौंकता है।', 'यह बड़ा होकर कुत्ता बनता है।'], hints_te: ['ఇది చాలా సరదాగా ఉంటుంది.', 'ఇది మొరుగుతుంది.', 'ఇది పెరిగి కుక్క అవుతుంది.'] },
        { id: 4, text: 'Which animal is known for changing its color?', text_hi: 'कौन सा जानवर अपना रंग बदलने के लिए जाना जाता है?', text_te: 'ఏ జంతువు తన రంగును మార్చడానికి ప్రసిద్ధి చెందింది?', options: [{ id: 'a', text: 'Frog', text_hi: 'मेंढक', text_te: 'కప్ప' },{ id: 'b', text: 'Chameleon', text_hi: 'गिरगिट', text_te: 'ఊసరవెల్లి' },{ id: 'c', text: 'Snake', text_hi: 'सांप', text_te: 'పాము' },{ id: 'd', text: 'Lizard', text_hi: 'छिपकली', text_te: 'బల్లి' }], correctAnswer: 'b', difficulty: 'easy', hints: ['It helps them blend in.', 'They have long tongues.', 'It is a type of lizard.'], hints_hi: ['यह उन्हें घुलने-मिलने में मदद करता है।', 'उनकी जीभ लंबी होती है।', 'यह एक प्रकार की छिपकली है।'], hints_te: ['ఇది వారికి కలిసిపోవడానికి సహాయపడుతుంది.', 'వాటికి పొడవైన నాలుకలు ఉంటాయి.', 'ఇది ఒక రకమైన బల్లి.'] },
        { id: 5, text: 'What do you call an animal that only eats plants?', text_hi: 'जो जानवर केवल पौधे खाता है उसे आप क्या कहते हैं?', text_te: 'మొక్కలను మాత్రమే తినే జంతువును ఏమంటారు?', options: [{ id: 'a', text: 'Carnivore', text_hi: 'मांसाहारी', text_te: 'మాంసాహారి' },{ id: 'b', text: 'Omnivore', text_hi: 'सर्वाहारी', text_te: 'సర్వభక్షకి' },{ id: 'c', text: 'Herbivore', text_hi: 'शाकाहारी', text_te: 'శాఖాహారి' },{ id: 'd', text: 'Insectivore', text_hi: 'कीटभक्षी', text_te: 'కీటకాహారి' }], correctAnswer: 'c', difficulty: 'easy', hints: ['Cows and deer are examples.', '"Herb" means plant.', 'They do not eat meat.'], hints_hi: ['गाय और हिरण इसके उदाहरण हैं।', '"हर्ब" शब्द का अर्थ है पौधा।', 'वे मांस नहीं खाते हैं।'], hints_te: ['ఆవులు మరియు జింకలు ఉదాహరణలు.', '"హెర్బ్" అనే పదానికి మొక్క అని అర్థం.', 'అవి మాంసం తినవు.'] }
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
        { id: 1, text: 'Which sense do you use your eyes for?', text_hi: 'आप अपनी आंखों का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ కళ్ళను ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Hearing', text_hi: 'सुनना', text_te: 'వినడం' },{ id: 'b', text: 'Smell', text_hi: 'सूंघना', text_te: 'వాసన' },{ id: 'c', text: 'Sight', text_hi: 'देखना', text_te: 'చూపు' },{ id: 'd', text: 'Touch', text_hi: 'स्पर्श', text_te: 'స్పర్శ' }], correctAnswer: 'c', difficulty: 'easy', hints: ['It helps you see colors.', 'It helps you read books.', 'You cannot do it in the dark.'], hints_hi: ['यह आपको रंग देखने में मदद करता है।', 'यह आपको किताबें पढ़ने में मदद करता है।', 'आप इसे अंधेरे में नहीं कर सकते।'], hints_te: ['ఇది మీకు రంగులను చూడటానికి సహాయపడుతుంది.', 'ఇది మీకు పుస్తకాలు చదవడానికి సహాయపడుతుంది.', 'మీరు దానిని చీకటిలో చేయలేరు.'] },
        { id: 2, text: 'Which sense do you use your nose for?', text_hi: 'आप अपनी नाक का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ ముక్కును ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Taste', text_hi: 'स्वाद', text_te: 'రుచి' },{ id: 'b', text: 'Smell', text_hi: 'सूंघना', text_te: 'వాసన' },{ id: 'c', text: 'Hearing', text_hi: 'सुनना', text_te: 'వినడం' },{ id: 'd', text: 'Sight', text_hi: 'देखना', text_te: 'చూపు' }], correctAnswer: 'b', difficulty: 'easy', hints: ['It helps you enjoy flowers.', 'It can warn you of spoiled food.', 'A dog has a very good sense of this.'], hints_hi: ['यह आपको फूलों का आनंद लेने में मदद करता है।', 'यह आपको खराब भोजन की चेतावनी दे सकता है।', 'एक कुत्ते में यह इंद्रिय बहुत अच्छी होती है।'], hints_te: ['ఇది మీకు పువ్వులను ఆస్వాదించడానికి సహాయపడుతుంది.', 'ఇది మీకు పాడైపోయిన ఆహారం గురించి హెచ్చరించగలదు.', 'కుక్కకు ఈ ఇంద్రియం చాలా బాగుంటుంది.'] },
        { id: 3, text: 'Which sense do you use your ears for?', text_hi: 'आप अपने कानों का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ చెవులను ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Touch', text_hi: 'स्पर्श', text_te: 'స్పర్శ' },{ id: 'b', text: 'Taste', text_hi: 'स्वाद', text_te: 'రుచి' },{ id: 'c', text: 'Sight', text_hi: 'देखना', text_te: 'చూపు' },{ id: 'd', text: 'Hearing', text_hi: 'सुनना', text_te: 'వినడం' }], correctAnswer: 'd', difficulty: 'easy', hints: ['It helps you listen to music.', 'It helps you hear people talking.', 'Loud noises can hurt it.'], hints_hi: ['यह आपको संगीत सुनने में मदद करता है।', 'यह आपको लोगों को बात करते हुए सुनने में मदद करता है।', 'तेज आवाजें इसे चोट पहुंचा सकती हैं।'], hints_te: ['ఇది మీకు సంగీతం వినడానికి సహాయపడుతుంది.', 'ఇది మీకు ప్రజలు మాట్లాడటం వినడానికి సహాయపడుతుంది.', 'గట్టి శబ్దాలు దానిని గాయపరచగలవు.'] },
        { id: 4, text: 'Which sense do you use your tongue for?', text_hi: 'आप अपनी जीभ का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ నాలుకను ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Smell', text_hi: 'सूंघना', text_te: 'వాసన' },{ id: 'b', text: 'Hearing', text_hi: 'सुनना', text_te: 'వినడం' },{ id: 'c', text: 'Taste', text_hi: 'स्वाद', text_te: 'రుచి' },{ id: 'd', text: 'Touch', text_hi: 'स्पर्श', text_te: 'స్పర్శ' }], correctAnswer: 'c', difficulty: 'easy', hints: ['It can detect sweet, sour, salty, and bitter.', 'It helps you enjoy food.', 'It works with your sense of smell.'], hints_hi: ['यह मीठा, खट्टा, नमकीन और कड़वा पता लगा सकता है।', 'यह आपको भोजन का आनंद लेने में मदद करता है।', 'यह आपकी सूंघने की इंद्रिय के साथ काम करता है।'], hints_te: ['ఇది తీపి, పులుపు, ఉప్పు మరియు చేదును గుర్తించగలదు.', 'ఇది మీకు ఆహారాన్ని ఆస్వాదించడానికి సహాయపడుతుంది.', 'ఇది మీ వాసన ఇంద్రియంతో కలిసి పనిచేస్తుంది.'] },
        { id: 5, text: 'Which sense do you use your skin for?', text_hi: 'आप अपनी त्वचा का उपयोग किस इंद्रिय के लिए करते हैं?', text_te: 'మీరు మీ చర్మాన్ని ఏ ఇంద్రియం కోసం ఉపయోగిస్తారు?', options: [{ id: 'a', text: 'Sight', text_hi: 'देखना', text_te: 'చూపు' },{ id: 'b', text: 'Taste', text_hi: 'स्वाद', text_te: 'రుచి' },{ id: 'c', text: 'Smell', text_hi: 'सूंघना', text_te: 'వాసన' },{ id: 'd', text: 'Touch', text_hi: 'स्पर्श', text_te: 'స్పర్శ' }], correctAnswer: 'd', difficulty: 'easy', hints: ['It helps you feel hot and cold.', 'It helps you feel if something is soft or hard.', 'It is your body\'s largest organ.'], hints_hi: ['यह आपको गर्म और ठंडा महसूस करने में मदद करता है।', 'यह आपको महसूस करने में मदद करता है कि कोई चीज नरम है या कठोर।', 'यह आपके शरीर का सबसे बड़ा अंग है।'], hints_te: ['ఇది మీకు వేడి మరియు చల్లదనాన్ని అనుభూతి చెందడానికి సహాయపడుతుంది.', 'ఇది మీకు ఏదైనా మృదువుగా ఉందా లేదా గట్టిగా ఉందా అని అనుభూతి చెందడానికి సహాయపడుతుంది.', 'ఇది మీ శరీరం యొక్క అతిపెద్ద అవయవం.'] }
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
        { id: 1, text: 'What is the first stage in a frog\'s life cycle?', text_hi: 'एक मेंढक के जीवन चक्र में पहला चरण क्या है?', text_te: 'కప్ప జీవిత చక్రంలో మొదటి దశ ఏది?', options: [{ id: 'a', text: 'Tadpole', text_hi: 'टैडपोल', text_te: 'టాడ్పోల్' },{ id: 'b', text: 'Froglet', text_hi: 'फ्रॉगलेट', text_te: 'ఫ్రాగ్లెట్' },{ id: 'c', text: 'Egg', text_hi: 'अंडा', text_te: 'గుడ్డు' },{ id: 'd', text: 'Adult Frog', text_hi: 'वयस्क मेंढक', text_te: 'పెద్ద కప్ప' }], correctAnswer: 'c', difficulty: 'easy', hints: ['They are laid in water.', 'They are often in a jelly-like mass.', 'They hatch into tadpoles.'], hints_hi: ['वे पानी में रखे जाते हैं।', 'वे अक्सर जेली जैसी द्रव्यमान में होते हैं।', 'वे टैडपोल में निकलते हैं।'], hints_te: ['అవి నీటిలో పెట్టబడతాయి.', 'అవి తరచుగా జెల్లీ లాంటి ద్రవ్యరాశిలో ఉంటాయి.', 'అవి టాడ్పోల్స్‌గా పొదుగుతాయి.'] },
        { id: 2, text: 'A caterpillar turns into what?', text_hi: 'एक कैटरपिलर किसमें बदल जाता है?', text_te: 'గొంగళి పురుగు దేనిగా మారుతుంది?', options: [{ id: 'a', text: 'A butterfly', text_hi: 'एक तितली', text_te: 'సీతాకోకచిలుక' },{ id: 'b', text: 'A bee', text_hi: 'एक मधुमक्खी', text_te: 'తేనెటీగ' },{ id: 'c', text: 'A worm', text_hi: 'एक कीड़ा', text_te: 'పురుగు' },{ id: 'd', text: 'A spider', text_hi: 'एक मकड़ी', text_te: 'సాలీడు' }], correctAnswer: 'a', difficulty: 'easy', hints: ['It first forms a chrysalis.', 'It has colorful wings.', 'It flies from flower to flower.'], hints_hi: ['यह पहले एक क्रिसलिस बनाता है।', 'इसके रंगीन पंख होते हैं।', 'यह फूल से फूल तक उड़ता है।'], hints_te: ['ఇది మొదట క్రిసాలిస్‌ను ఏర్పరుస్తుంది.', 'దానికి రంగురంగుల రెక్కలు ఉంటాయి.', 'ఇది పువ్వు నుండి పువ్వుకు ఎగురుతుంది.'] },
        { id: 3, text: 'What does a seed need to grow into a plant?', text_hi: 'एक बीज को पौधे में उगने के लिए क्या चाहिए?', text_te: 'ఒక విత్తనం మొక్కగా పెరగడానికి ఏమి అవసరం?', options: [{ id: 'a', text: 'Water, soil, and sunlight', text_hi: 'पानी, मिट्टी और धूप', text_te: 'నీరు, నేల మరియు సూర్యరశ్మి' },{ id: 'b', text: 'Only water', text_hi: 'केवल पानी', text_te: 'నీరు మాత్రమే' },{ id: 'c', 'text': 'Only soil', text_hi: 'केवल मिट्टी', text_te: 'నేల మాత్రమే' },{ id: 'd', 'text': 'Only sunlight', text_hi: 'केवल धूप', text_te: 'సూర్యరశ్మి మాత్రమే' }], correctAnswer: 'a', difficulty: 'easy', hints: ['It needs something to drink.', 'It needs a place to put down roots.', 'It needs energy from the sun.'], hints_hi: ['इसे पीने के लिए कुछ चाहिए।', 'इसे जड़ें जमाने के लिए एक जगह चाहिए।', 'इसे सूर्य से ऊर्जा चाहिए।'], hints_te: ['దానికి తాగడానికి ఏదైనా కావాలి.', 'దానికి వేళ్ళు వేయడానికి ఒక స్థలం కావాలి.', 'దానికి సూర్యుని నుండి శక్తి కావాలి.'] },
        { id: 4, text: 'Where do most mammals, like humans, begin their life?', text_hi: 'इंसानों जैसे अधिकांश स्तनधारी अपना जीवन कहाँ से शुरू करते हैं?', text_te: 'మానవుల వంటి చాలా క్షీరదాలు తమ జీవితాన్ని ఎక్కడ ప్రారంభిస్తాయి?', options: [{ id: 'a', text: 'In an egg', text_hi: 'एक अंडे में', text_te: 'గుడ్డులో' },{ id: 'b', text: 'As a seed', text_hi: 'एक बीज के रूप में', text_te: 'విత్తనంగా' },{ id: 'c', text: 'Inside their mother\'s body', text_hi: 'अपनी माँ के शरीर के अंदर', text_te: 'తమ తల్లి శరీరంలో' },{ id: 'd', text: 'In a pond', text_hi: 'एक तालाब में', text_te: 'చెరువులో' }], correctAnswer: 'c', difficulty: 'easy', hints: ['They are born live.', 'They drink their mother\'s milk.', 'It is not like birds or reptiles.'], hints_hi: ['वे जीवित पैदा होते हैं।', 'वे अपनी माँ का दूध पीते हैं।', 'यह पक्षियों या सरीसृपों की तरह नहीं है।'], hints_te: ['అవి సజీవంగా పుడతాయి.', 'అవి తమ తల్లి పాలు తాగుతాయి.', 'ఇది పక్షులు లేదా సరీసృపాల లాంటిది కాదు.'] },
        { id: 5, text: 'What is the process of a young animal changing form to become an adult called?', text_hi: 'एक युवा जानवर के वयस्क बनने के लिए रूप बदलने की प्रक्रिया को क्या कहा जाता है?', text_te: 'ఒక యువ జంతువు పెద్దదిగా మారడానికి రూపాంతరం చెందే ప్రక్రియను ఏమంటారు?', options: [{ id: 'a', text: 'Growing', text_hi: 'बढ़ना', text_te: 'పెరగడం' },{ id: 'b', text: 'Metamorphosis', text_hi: 'कायापलट', text_te: 'రూపాంతరం' },{ id: 'c', text: 'Aging', text_hi: 'उम्र बढ़ना', text_te: 'వృద్ధాప్యం' },{ id: 'd', text: 'Hatching', text_hi: 'अंडे से निकलना', text_te: 'పొదగడం' }], correctAnswer: 'b', difficulty: 'easy', hints: ['A caterpillar to a butterfly is an example.', 'A tadpole to a frog is another example.', 'It means "to change form".'], hints_hi: ['एक कैटरपिलर से तितली बनना इसका एक उदाहरण है।', 'एक टैडपोल से मेंढक बनना एक और उदाहरण है।', 'इसका अर्थ है "रूप बदलना"।'], hints_te: ['గొంగళి పురుగు నుండి సీతాకోకచిలుక ఒక ఉదాహరణ.', 'టాడ్పోల్ నుండి కప్ప మరొక ఉదాహరణ.', 'దీని అర్థం "రూపం మార్చడం".'] }
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
            hints: ["Everything starts with energy from the sun.", "What eats grass?", "Think about what a frog eats, and what might eat a frog."],
            hints_hi: ["सब कुछ सूर्य से ऊर्जा से शुरू होता है।", "घास कौन खाता है?", "सोचें कि मेंढक क्या खाता है, और मेंढक को क्या खा सकता है।"],
            hints_te: ["ప్రతిదీ సూర్యుని నుండి వచ్చే శక్తితో మొదలవుతుంది.", "గడ్డిని ఎవరు తింటారు?", "కప్ప ఏమి తింటుంది, మరియు కప్పను ఏది తినగలదో ఆలోచించండి."]
        }
    ]
  },

  // Mathematics Missions
  {
    id: 'mathematics-level-1',
    subject: 'mathematics',
    title: 'Level 1',
    title_hi: 'स्तर 1',
    title_te: 'స్థాయి 1',
    description: 'Basic arithmetic skills.',
    description_hi: 'मूल अंकगणितीय कौशल।',
    description_te: 'ప్రాథమిక అంకగణిత నైపుణ్యాలు.',
    badgeId: 'math-master',
    badge_emoji: '🔢',
    badge_color: 'bg-orange-400 text-orange-900',
    questions: [
      {
        id: 1,
        text: 'What is 5 multiplied by 8?',
        text_hi: '5 को 8 से गुणा करने पर क्या मिलता है?',
        text_te: '5 ను 8 తో గుణిస్తే ఎంత?',
        type: 'mcq',
        options: [
            { id: 'a', text: '35', text_hi: '35', text_te: '35' },
            { id: 'b', text: '40', text_hi: '40', text_te: '40' },
            { id: 'c', text: '45', text_hi: '45', text_te: '45' },
            { id: 'd', text: '50', text_hi: '50', text_te: '50' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: [
            "Think of counting by 5, eight times.",
            "The number ends in a zero.",
            "It's four tens."
        ],
        hints_hi: [
            "5 को आठ बार गिनने के बारे में सोचें।",
            "संख्या शून्य में समाप्त होती है।",
            "यह चार दहाई है।"
        ],
        hints_te: [
            "5 ను ఎనిమిది సార్లు లెక్కించడం గురించి ఆలోచించండి.",
            "సంఖ్య సున్నాతో ముగుస్తుంది.",
            "ఇది నాలుగు పదులు."
        ],
      },
      {
        id: 2,
        text: 'If you have 12 apples and you give away 5, how many do you have left?',
        text_hi: 'यदि आपके पास 12 सेब हैं और आप 5 दे देते हैं, तो आपके पास कितने बचते हैं?',
        text_te: 'మీ దగ్గర 12 ఆపిల్స్ ఉంటే మరియు మీరు 5 ఇచ్చేస్తే, మీ దగ్గర ఎన్ని మిగులుతాయి?',
        type: 'mcq',
        options: [
            { id: 'a', text: '6', text_hi: '6', text_te: '6' },
            { id: 'b', text: '7', text_hi: '7', text_te: '7' },
            { id: 'c', text: '8', text_hi: '8', text_te: '8' },
            { id: 'd', text: '9', text_hi: '9', text_te: '9' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: [
            "This is a subtraction problem.",
            "Count backwards from 12, five times.",
            "12 - 5 = ?"
        ],
        hints_hi: [
            "यह एक घटाव की समस्या है।",
            "12 से पांच बार पीछे की ओर गिनें।",
            "12 - 5 = ?"
        ],
        hints_te: [
            "ఇది ఒక తీసివేత సమస్య.",
            "12 నుండి ఐదు సార్లు వెనక్కి లెక్కించండి.",
            "12 - 5 = ?"
        ],
      },
      {
        id: 3,
        text: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
        text_hi: 'इस क्रम में अगली संख्या क्या है: 2, 4, 6, 8, ...?',
        text_te: 'ఈ క్రమంలో తదుపరి సంఖ్య ఏది: 2, 4, 6, 8, ...?',
        type: 'mcq',
        options: [
            { id: 'a', text: '9', text_hi: '9', text_te: '9' },
            { id: 'b', text: '10', text_hi: '10', text_te: '10' },
            { id: 'c', text: '11', text_hi: '11', text_te: '11' },
            { id: 'd', text: '12', text_hi: '12', text_te: '12' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: [
            "The numbers are increasing by the same amount each time.",
            "These are all even numbers.",
            "What is 8 + 2?"
        ],
        hints_hi: [
            "संख्या हर बार समान मात्रा में बढ़ रही हैं।",
            "ये सभी सम संख्याएँ हैं।",
            "8 + 2 क्या है?"
        ],
        hints_te: [
            "ప్రతిసారీ సంఖ్యలు ఒకే మొత్తంలో పెరుగుతున్నాయి.",
            "ఇవి అన్నీ సరి సంఖ్యలు.",
            "8 + 2 ఎంత?"
        ],
      },
       {
        id: 4,
        text: 'How many sides does a triangle have?',
        text_hi: 'एक त्रिभुज में कितनी भुजाएँ होती हैं?',
        text_te: 'ఒక త్రిభుజానికి ఎన్ని భుజాలు ఉంటాయి?',
        type: 'mcq',
         options: [
            { id: 'a', text: '3', text_hi: '3', text_te: '3' },
            { id: 'b', text: '4', text_hi: '4', text_te: '4' },
            { id: 'c', text: '5', text_hi: '5', text_te: '5' },
            { id: 'd', text: '6', text_hi: '6', text_te: '6' },
        ],
        correctAnswer: 'a',
        difficulty: 'easy',
        hints: [
            "The name 'triangle' has a clue in it.",
            "'Tri' means three.",
            "Count the corners of a slice of pizza."
        ],
        hints_hi: [
            "'त्रिभुज' नाम में एक सुराग है।",
            "'त्रि' का अर्थ है तीन।",
            "पिज़्ज़ा के एक टुकड़े के कोनों को गिनें।"
        ],
        hints_te: [
            "'త్రిభుజం' అనే పేరులోనే ఒక క్లూ ఉంది.",
            "'త్రి' అంటే మూడు.",
            "పిజ్జా ముక్క యొక్క మూలలను లెక్కించండి."
        ],
      },
      {
        id: 5,
        text: 'What is 100 divided by 10?',
        text_hi: '100 को 10 से विभाजित करने पर क्या मिलता है?',
        text_te: '100 ను 10 తో భాగిస్తే ఎంత?',
        type: 'mcq',
        options: [
            { id: 'a', text: '1', text_hi: '1', text_te: '1' },
            { id: 'b', text: '10', text_hi: '10', text_te: '10' },
            { id: 'c', text: '20', text_hi: '20', text_te: '20' },
            { id: 'd', text: '100', text_hi: '100', text_te: '100' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: [
            "How many times does 10 go into 100?",
            "Just remove one of the zeros from 100.",
            "10 × ? = 100"
        ],
        hints_hi: [
            "100 में 10 कितनी बार जाता है?",
            "100 से बस एक शून्य हटा दें।",
            "10 × ? = 100"
        ],
        hints_te: [
            "10, 100 లోకి ఎన్నిసార్లు వెళుతుంది?",
            "100 నుండి ఒక సున్నాను తీసివేయండి.",
            "10 × ? = 100"
        ],
      }
    ]
  },
  {
    id: 'mathematics-level-2',
    subject: 'mathematics',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    description: 'Shapes and basic geometry.',
    description_hi: 'आकृतियाँ और मूल ज्यामिति।',
    description_te: 'ఆకారాలు మరియు ప్రాథమిక జ్యామితి.',
    badgeId: 'geometry-genius',
    badge_emoji: '📐',
    badge_color: 'bg-yellow-500 text-yellow-900',
    questions: [
        {
            id: 1,
            text: 'How many sides does a square have?',
            text_hi: 'एक वर्ग में कितनी भुजाएँ होती हैं?',
            text_te: 'ఒక చతురస్రానికి ఎన్ని భుజాలు ఉంటాయి?',
            type: 'puzzle',
            correctAnswer: '4',
            difficulty: 'easy',
            hints: ["All its sides are equal in length.", "It has four right angles.", "Think of a chessboard square."],
            hints_hi: ["इसकी सभी भुजाएँ लंबाई में बराबर होती हैं।", "इसके चार समकोण होते हैं।", "एक शतरंज की बिसात के वर्ग के बारे में सोचें।"],
            hints_te: ["దాని అన్ని భుజాలు సమాన పొడవు కలిగి ఉంటాయి.", "దానికి నాలుగు లంబ కోణాలు ఉంటాయి.", "చదరంగపు చతురస్రం గురించి ఆలోచించండి."]
        },
        {
            id: 2,
            text: 'A pentagon has how many sides?',
            text_hi: 'एक पंचकोण में कितनी भुजाएँ होती हैं?',
            text_te: 'ఒక పంచభుజికి ఎన్ని భుజాలు ఉంటాయి?',
            type: 'puzzle',
            correctAnswer: '5',
            difficulty: 'easy',
            hints: ["'Penta' means five.", "Think of the famous building in Washington D.C.", "It has five angles."],
            hints_hi: ["'पेंटा' का अर्थ है पांच।", "वाशिंगटन डी.सी. की प्रसिद्ध इमारत के बारे में सोचें।", "इसके पांच कोण होते हैं।"],
            hints_te: ["'పెంటా' అంటే ఐదు.", "వాషింగ్టన్ డి.సి.లోని ప్రసిద్ధ భవనం గురించి ఆలోచించండి.", "దానికి ఐదు కోణాలు ఉంటాయి."]
        },
        {
            id: 3,
            text: 'How many degrees are in a circle?',
            text_hi: 'एक वृत्त में कितने डिग्री होते हैं?',
            text_te: 'ఒక వృత్తంలో ఎన్ని డిగ్రీలు ఉంటాయి?',
            type: 'puzzle',
            correctAnswer: '360',
            difficulty: 'easy',
            hints: ["A right angle is 90 degrees.", "Four right angles make a full turn.", "Think of a full rotation."],
            hints_hi: ["एक समकोण 90 डिग्री का होता है।", "चार समकोण एक पूरा घुमाव बनाते हैं।", "एक पूर्ण घुमाव के बारे में सोचें।"],
            hints_te: ["లంబ కోణం 90 డిగ్రీలు.", "నాలుగు లంబ కోణాలు పూర్తి మలుపును చేస్తాయి.", "పూర్తి భ్రమణం గురించి ఆలోచించండి."]
        },
        {
            id: 4,
            text: 'What is the area of a rectangle with a length of 5 cm and a width of 3 cm?',
            text_hi: '5 सेमी लंबाई और 3 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?',
            text_te: '5 సెం.మీ పొడవు మరియు 3 సెం.మీ వెడల్పు ఉన్న దీర్ఘచతురస్రం యొక్క వైశాల్యం ఎంత?',
            type: 'puzzle',
            correctAnswer: '15',
            difficulty: 'easy',
            hints: ["Area is length multiplied by width.", "What is 5 times 3?", "The unit will be square centimeters."],
            hints_hi: ["क्षेत्रफल लंबाई को चौड़ाई से गुणा करने पर मिलता है।", "5 गुना 3 क्या है?", "इकाई वर्ग सेंटीमीटर होगी।"],
            hints_te: ["వైశాల్యం పొడవును వెడల్పుతో గుణించడం.", "5 రెట్లు 3 ఎంత?", "ప్రమాణం చదరపు సెంటీమీటర్లు ఉంటుంది."]
        },
        {
            id: 5,
            text: 'How many vertices (corners) does a cube have?',
            text_hi: 'एक घन में कितने कोने होते हैं?',
            text_te: 'ఒక ఘనానికి ఎన్ని శీర్షాలు (మూలలు) ఉంటాయి?',
            type: 'puzzle',
            correctAnswer: '8',
            difficulty: 'easy',
            hints: ["Think of a dice.", "Count the points where the edges meet.", "It has a top face and a bottom face."],
            hints_hi: ["एक पासे के बारे में सोचें।", "उन बिंदुओं को गिनें जहां किनारे मिलते हैं।", "इसका एक ऊपरी फलक और एक निचला फलक होता है।"],
            hints_te: ["ఒక పాచిక గురించి ఆలోచించండి.", "అంచులు కలిసే బిందువులను లెక్కించండి.", "దానికి పై ముఖం మరియు కింది ముఖం ఉంటాయి."]
        }
    ]
  },
  {
    id: 'mathematics-level-3',
    subject: 'mathematics',
    title: 'Level 3',
    title_hi: 'स्तर 3',
    title_te: 'స్థాయి 3',
    description: 'Introduction to fractions.',
    description_hi: 'भिन्नों का परिचय।',
    description_te: 'భిన్నాలకు పరిచయం.',
    badgeId: 'fraction-fanatic',
    badge_emoji: '🍕',
    badge_color: 'bg-red-400 text-red-900',
    questions: [
        { id: 1, text: 'What is 1/2 of 10?', text_hi: '10 का 1/2 क्या है?', text_te: '10లో 1/2 ఎంత?', type: 'puzzle', correctAnswer: '5', difficulty: 'easy', hints: ['It means 10 divided by 2.', 'If you have 10 sweets and share them equally with a friend, how many do you each get?', 'It is half of ten.'], hints_hi: ['इसका मतलब है 10 को 2 से विभाजित करना।', 'यदि आपके पास 10 मिठाइयाँ हैं और आप उन्हें एक दोस्त के साथ बराबर साझा करते हैं, तो प्रत्येक को कितनी मिलती हैं?', 'यह दस का आधा है।'], hints_te: ['అంటే 10 ను 2 తో భాగించడం.', 'మీ దగ్గర 10 స్వీట్లు ఉంటే మరియు వాటిని స్నేహితుడితో సమానంగా పంచుకుంటే, ప్రతి ఒక్కరికి ఎన్ని వస్తాయి?', 'ఇది పదిలో సగం.'] },
        { id: 2, text: 'If a pizza has 8 slices and you eat 2, how many slices are left?', text_hi: 'यदि एक पिज्जा में 8 स्लाइस हैं और आप 2 खाते हैं, तो कितने स्लाइस बचते हैं?', text_te: 'ఒక పిజ్జాలో 8 ముక్కలు ఉంటే మరియు మీరు 2 తింటే, ఎన్ని ముక్కలు మిగులుతాయి?', type: 'puzzle', correctAnswer: '6', difficulty: 'easy', hints: ['This is a subtraction problem.', '8 - 2 = ?', 'Count the remaining pieces.'], hints_hi: ['यह एक घटाव की समस्या है।', '8 - 2 = ?', 'शेष टुकड़ों को गिनें।'], hints_te: ['ఇది ఒక తీసివేత సమస్య.', '8 - 2 = ?', 'మిగిలిన ముక్కలను లెక్కించండి.'] },
        { id: 3, text: 'What is 1/2 + 1/2 equal to?', text_hi: '1/2 + 1/2 किसके बराबर है?', text_te: '1/2 + 1/2 దేనికి సమానం?', type: 'puzzle', correctAnswer: '1', difficulty: 'easy', hints: ['Two halves make a whole.', 'If you have half a pizza and get another half, you have a whole pizza.', 'The answer is a whole number.'], hints_hi: ['दो आधे मिलकर एक पूरा बनाते हैं।', 'यदि आपके पास आधा पिज्जा है और आपको दूसरा आधा मिलता है, तो आपके पास एक पूरा पिज्जा है।', 'उत्तर एक पूर्ण संख्या है।'], hints_te: ['రెండు సగాలు ఒక పూర్తిని చేస్తాయి.', 'మీ దగ్గర సగం పిజ్జా ఉంటే మరియు మరొక సగం వస్తే, మీ దగ్గర పూర్తి పిజ్జా ఉంటుంది.', 'సమాధానం ఒక పూర్ణ సంఖ్య.'] },
        { id: 4, text: 'If a cake is cut into 4 equal pieces and you eat 1 piece, what fraction is left? (Enter as x/y)', text_hi: 'यदि एक केक को 4 बराबर टुकड़ों में काटा जाता है और आप 1 टुकड़ा खाते हैं, तो कितना भिन्न बचता है? (x/y के रूप में दर्ज करें)', text_te: 'ఒక కేకును 4 సమాన ముక్కలుగా కట్ చేసి మీరు 1 ముక్క తింటే, ఎంత భిన్నం మిగులుతుంది? (x/y గా నమోదు చేయండి)', type: 'puzzle', correctAnswer: '3/4', difficulty: 'easy', hints: ['How many pieces are remaining?', 'The total number of pieces is the bottom number.', 'You started with 4/4.'], hints_hi: ['कितने टुकड़े शेष हैं?', 'टुकड़ों की कुल संख्या नीचे की संख्या है।', 'आपने 4/4 से शुरू किया था।'], hints_te: ['ఎన్ని ముక్కలు మిగిలి ఉన్నాయి?', 'మొత్తం ముక్కల సంఖ్య కింది సంఖ్య.', 'మీరు 4/4 తో ప్రారంభించారు.'] },
        { id: 5, text: 'How many quarters are in a whole?', text_hi: 'एक पूरे में कितने चौथाई होते हैं?', text_te: 'ఒక పూర్తిలో ఎన్ని పావులు ఉంటాయి?', type: 'puzzle', correctAnswer: '4', difficulty: 'easy', hints: ['A quarter is 1/4.', 'How many 1/4 pieces make a whole cake?', 'Think about 4 slices of pizza.'], hints_hi: ['एक चौथाई 1/4 है।', 'कितने 1/4 टुकड़े एक पूरा केक बनाते हैं?', 'पिज्जा के 4 स्लाइस के बारे में सोचें।'], hints_te: ['పావు 1/4.', 'ఎన్ని 1/4 ముక్కలు పూర్తి కేకును చేస్తాయి?', 'పిజ్జా యొక్క 4 ముక్కల గురించి ఆలోచించండి.'] }
    ]
  },
  {
    id: 'mathematics-level-4',
    subject: 'mathematics',
    title: 'Level 4',
    title_hi: 'स्तर 4',
    title_te: 'స్థాయి 4',
    description: 'Telling time.',
    description_hi: 'समय बताना।',
    description_te: 'సమయం చెప్పడం.',
    badgeId: 'time-traveler',
    badge_emoji: '⏰',
    badge_color: 'bg-indigo-400 text-indigo-900',
    questions: [
        { id: 1, text: 'How many minutes are in an hour?', text_hi: 'एक घंटे में कितने मिनट होते हैं?', text_te: 'ఒక గంటలో ఎన్ని నిమిషాలు ఉంటాయి?', type: 'puzzle', correctAnswer: '60', difficulty: 'easy', hints: ['Count by 5s around the clock face.', 'The long hand on a clock counts these.', 'There are 60 seconds in a minute.'], hints_hi: ['घड़ी के चेहरे के चारों ओर 5 से गिनें।', 'घड़ी पर लंबी सुई इन्हें गिनती है।', 'एक मिनट में 60 सेकंड होते हैं।'], hints_te: ['గడియారం ముఖం చుట్టూ 5ల ద్వారా లెక్కించండి.', 'గడియారంపై పొడవైన ముల్లు వీటిని లెక్కిస్తుంది.', 'ఒక నిమిషంలో 60 సెకన్లు ఉంటాయి.'] },
        { id: 2, text: 'If it is 2:00, how many minutes until 2:30?', text_hi: 'यदि 2:00 बजे हैं, तो 2:30 तक कितने मिनट हैं?', text_te: 'సమయం 2:00 అయితే, 2:30 వరకు ఎన్ని నిమిషాలు ఉన్నాయి?', type: 'puzzle', correctAnswer: '30', difficulty: 'easy', hints: ['This is half an hour.', 'The minute hand moves from the 12 to the 6.', '30 - 0 = ?'], hints_hi: ['यह आधा घंटा है।', 'मिनट की सुई 12 से 6 तक जाती है।', '30 - 0 = ?'], hints_te: ['ఇది అరగంట.', 'నిమిషాల ముల్లు 12 నుండి 6 వరకు కదులుతుంది.', '30 - 0 = ?'] },
        { id: 3, text: 'How many hours are in a day?', text_hi: 'एक दिन में कितने घंटे होते हैं?', text_te: 'ఒక రోజులో ఎన్ని గంటలు ఉంటాయి?', type: 'puzzle', correctAnswer: '24', difficulty: 'easy', hints: ['It includes both daytime and nighttime.', 'A clock goes around twice.', 'It is two sets of 12 hours.'], hints_hi: ['इसमें दिन और रात दोनों शामिल हैं।', 'एक घड़ी दो बार घूमती है।', 'यह 12 घंटे के दो सेट हैं।'], hints_te: ['ఇందులో పగలు మరియు రాత్రి రెండూ ఉంటాయి.', 'ఒక గడియారం రెండుసార్లు చుట్టూ తిరుగుతుంది.', 'ఇది 12 గంటల రెండు సెట్లు.'] },
        { id: 4, text: 'If a movie starts at 4:00 and is 2 hours long, what time does it end?', text_hi: 'यदि एक फिल्म 4:00 बजे शुरू होती है और 2 घंटे लंबी है, तो वह किस समय समाप्त होती है?', text_te: 'ఒక సినిమా 4:00 గంటలకు ప్రారంభమై 2 గంటల పాటు ఉంటే, అది ఏ సమయానికి ముగుస్తుంది?', type: 'puzzle', correctAnswer: '6:00', difficulty: 'easy', hints: ['Add 2 hours to the start time.', 'What is 4 + 2?', 'Count two hours forward from 4:00.'], hints_hi: ['शुरूआत के समय में 2 घंटे जोड़ें।', '4 + 2 क्या है?', '4:00 से दो घंटे आगे गिनें।'], hints_te: ['ప్రారంభ సమయానికి 2 గంటలు జోడించండి.', '4 + 2 ఎంత?', '4:00 నుండి రెండు గంటలు ముందుకు లెక్కించండి.'] },
        { id: 5, text: 'How many days are in a week?', text_hi: 'एक सप्ताह में कितने दिन होते हैं?', text_te: 'ఒక వారంలో ఎన్ని రోజులు ఉంటాయి?', type: 'puzzle', correctAnswer: '7', difficulty: 'easy', hints: ['Starts with Sunday or Monday.', 'Includes the weekend.', 'Can you name them all?'], hints_hi: ['रविवार या सोमवार से शुरू होता है।', 'सप्ताहांत शामिल है।', 'क्या आप उन सभी का नाम बता सकते हैं?'], hints_te: ['ఆదివారం లేదా సోమవారంతో ప్రారంభమవుతుంది.', 'వారాంతం ఉంటుంది.', 'మీరు వాటన్నిటినీ పేరు పెట్టగలరా?'] }
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
        { id: 1, text: 'A ruler is 30 cm long. How many millimeters is that?', text_hi: 'एक रूलर 30 सेमी लंबा है। यह कितने मिलीमीटर है?', text_te: 'ఒక రూలర్ 30 సెం.మీ పొడవు ఉంది। అది ఎన్ని మిల్లీమీటర్లు?', type: 'puzzle', correctAnswer: '300', difficulty: 'easy', hints: ['There are 10 millimeters in a centimeter.', 'Multiply the number of centimeters by 10.', '30 x 10 = ?'], hints_hi: ['एक सेंटीमीटर में 10 मिलीमीटर होते हैं।', 'सेंटीमीटर की संख्या को 10 से गुणा करें।', '30 x 10 = ?'], hints_te: ['ఒక సెంటీమీటర్‌లో 10 మిల్లీమీటర్లు ఉంటాయి.', 'సెంటీమీటర్ల సంఖ్యను 10 తో గుణించండి.', '30 x 10 = ?'] },
        { id: 2, text: 'A bag of sugar weighs 1 kilogram. How many grams is that?', text_hi: 'एक चीनी की थैली का वजन 1 किलोग्राम है। यह कितने ग्राम है?', text_te: 'ఒక చక్కెర సంచి బరువు 1 కిలోగ్రామ్। అది ఎన్ని గ్రాములు?', type: 'puzzle', correctAnswer: '1000', difficulty: 'easy', hints: ['"Kilo" means one thousand.', 'There are 1000 grams in a kilogram.', 'It is a 1 followed by three zeros.'], hints_hi: ['"किलो" का अर्थ है एक हजार।', 'एक किलोग्राम में 1000 ग्राम होते हैं।', 'यह 1 के बाद तीन शून्य है।'], hints_te: ['"కిలో" అంటే వెయ్యి.', 'ఒక కిలోగ్రామ్‌లో 1000 గ్రాములు ఉంటాయి.', 'ఇది 1 తర్వాత మూడు సున్నాలు.'] },
        { id: 3, text: 'A bottle holds 1 liter of water. How many milliliters is that?', text_hi: 'एक बोतल में 1 लीटर पानी आता है। यह कितने मिलीलीटर है?', text_te: 'ఒక సీసాలో 1 లీటర్ నీరు పడుతుంది। అది ఎన్ని మిల్లీలీటర్లు?', type: 'puzzle', correctAnswer: '1000', difficulty: 'easy', hints: ['"Milli" means one-thousandth.', 'A large bottle of soda is often 1 or 2 liters.', 'It measures volume.'], hints_hi: ['"मिली" का अर्थ है एक-हजारवां।', 'सोडा की एक बड़ी बोतल अक्सर 1 या 2 लीटर की होती है।', 'यह आयतन मापता है।'], hints_te: ['"మిల్లీ" అంటే వెయ్యవ వంతు.', 'ఒక పెద్ద సోడా బాటిల్ తరచుగా 1 లేదా 2 లీటర్లు ఉంటుంది.', 'ఇది ఘనపరిమాణాన్ని కొలుస్తుంది.'] },
        { id: 4, text: 'If you have a rope that is 2 meters long, how many centimeters long is it?', text_hi: 'यदि आपके पास 2 मीटर लंबी रस्सी है, तो वह कितने सेंटीमीटर लंबी है?', text_te: 'మీ దగ్గర 2 మీటర్ల పొడవైన తాడు ఉంటే, అది ఎన్ని సెంటీమీటర్ల పొడవు ఉంటుంది?', type: 'puzzle', correctAnswer: '200', difficulty: 'easy', hints: ['There are 100 centimeters in a meter.', 'Multiply the number of meters by 100.', '2 x 100 = ?'], hints_hi: ['एक मीटर में 100 सेंटीमीटर होते हैं।', 'मीटर की संख्या को 100 से गुणा करें।', '2 x 100 = ?'], hints_te: ['ఒక మీటర్‌లో 100 సెంటీమీటర్లు ఉంటాయి.', 'మీటర్ల సంఖ్యను 100 తో గుణించండి.', '2 x 100 = ?'] },
        { id: 5, text: 'The distance to the next village is 5 kilometers. How many meters is that?', text_hi: 'अगले गाँव की दूरी 5 किलोमीटर है। यह कितने मीटर है?', text_te: 'తదుపరి గ్రామానికి దూరం 5 కిలోమీటర్లు। అది ఎన్ని మీటర్లు?', type: 'puzzle', correctAnswer: '5000', difficulty: 'easy', hints: ['There are 1000 meters in a kilometer.', '"Kilo" means one thousand.', '5 x 1000 = ?'], hints_hi: ['एक किलोमीटर में 1000 मीटर होते हैं।', '"किलो" का अर्थ है एक हजार।', '5 x 1000 = ?'], hints_te: ['ఒక కిలోమీటర్‌లో 1000 మీటర్లు ఉంటాయి.', '"కిలో" అంటే వెయ్యి.', '5 x 1000 = ?'] }
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
            hints: ["First, figure out the value of one apple.", "Three apples equal 30. So one apple is?", "If an apple is 10, and apple + bananas + bananas = 18, what is the value of a banana bunch?"],
            hints_hi: ["पहले, एक सेब का मूल्य निकालें।", "तीन सेब 30 के बराबर हैं। तो एक सेब का मूल्य क्या है?", "यदि एक सेब 10 है, और सेब + केले + केले = 18, तो एक केले के गुच्छे का मूल्य क्या है?"],
            hints_te: ["మొదట, ఒక ఆపిల్ విలువను కనుగొనండి.", "మూడు ఆపిల్స్ 30కి సమానం. కాబట్టి ఒక ఆపిల్ విలువ ఎంత?", "ఒకవేళ ఆపిల్ 10 అయితే, మరియు ఆపిల్ + అరటిపండ్లు + అరటిపండ్లు = 18 అయితే, ఒక అరటిపండు గుత్తి విలువ ఎంత?"]
        }
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
        options: [
          { id: 'a', text: 'O2', text_hi: 'O2', text_te: 'O2' },
          { id: 'b', text: 'CO2', text_hi: 'CO2', text_te: 'CO2' },
          { id: 'c', text: 'H2O', text_hi: 'H2O', text_te: 'H2O' },
          { id: 'd', 'text': 'NaCl', text_hi: 'NaCl', text_te: 'NaCl' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        hints: ["It's made of two hydrogen atoms and one oxygen atom.", "Think 'dihydrogen monoxide'.", "It's essential for all known forms of life."],
        hints_hi: ["यह दो हाइड्रोजन परमाणुओं और एक ऑक्सीजन परमाणु से बना है।", "'डाइहाइड्रोजन मोनोऑक्साइड' सोचें।", "यह जीवन के सभी ज्ञात रूपों के लिए आवश्यक है।"],
        hints_te: ["ఇది రెండు హైడ్రోజన్ పరమాణువులు మరియు ఒక ఆక్సిజన్ పరమాణువుతో తయారైంది.", "'డైహైడ్రోజన్ మోనాక్సైడ్' అని ఆలోచించండి.", "ఇది తెలిసిన అన్ని జీవ రూపాలకు అవసరం."]
      },
       {
        id: 2,
        text: 'Which of the following is a solid?',
        text_hi: 'निम्नलिखित में से कौन सा ठोस है?',
        text_te: 'కింది వాటిలో ఏది ఘనపదార్థం?',
        options: [
          { id: 'a', text: 'Milk', text_hi: 'दूध', text_te: 'పాలు' },
          { id: 'b', text: 'Air', text_hi: 'वायु', text_te: 'గాలి' },
          { id: 'c', text: 'Ice', text_hi: 'बर्फ', text_te: 'మంచు' },
          { id: 'd', 'text': 'Steam', text_hi: 'भाप', text_te: 'ఆవిరి' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        hints: ["It's the frozen form of water.", "It is hard and holds its shape.", "Its temperature is 0 degrees Celsius or below."],
        hints_hi: ["यह पानी का जमा हुआ रूप है।", "यह कठोर होता है और अपना आकार बनाए रखता है।", "इसका तापमान 0 डिग्री सेल्सियस या उससे कम होता है।"],
        hints_te: ["ఇది నీటి గడ్డకట్టిన రూపం.", "ఇది గట్టిగా ఉంటుంది మరియు దాని ఆకారాన్ని కలిగి ఉంటుంది.", "దాని ఉష్ణోగ్రత 0 డిగ్రీల సెల్సియస్ లేదా అంతకంటే తక్కువ."]
      },
       {
        id: 3,
        text: 'The process of a liquid turning into a gas is called...',
        text_hi: 'एक तरल के गैस में बदलने की प्रक्रिया को क्या कहा जाता है...',
        text_te: 'ద్రవం వాయువుగా మారే ప్రక్రియను ఏమంటారు...',
        options: [
          { id: 'a', text: 'Freezing', text_hi: 'जमना', text_te: 'గడ్డకట్టడం' },
          { id: 'b', text: 'Melting', text_hi: 'पिघलना', text_te: 'కరిగడం' },
          { id: 'c', text: 'Condensation', text_hi: 'संघनन', text_te: 'సాంద్రీకరణ' },
          { id: 'd', 'text': 'Evaporation', text_hi: 'वाष्पीकरण', text_te: 'భాష్పీభవనం' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        hints: ["It happens when you boil water.", "Puddles disappear on a sunny day because of this.", "It's the opposite of condensation."],
        hints_hi: ["यह तब होता है जब आप पानी उबालते हैं।", "धूप वाले दिन इसी वजह से पोखर गायब हो जाते हैं।", "यह संघनन के विपरीत है।"],
        hints_te: ["మీరు నీటిని మరిగించినప్పుడు ఇది జరుగుతుంది.", "ఎండ రోజున గుంటలు దీనివల్ల అదృశ్యమవుతాయి.", "ఇది సాంద్రీకరణకు వ్యతిరేకం."]
      },
       {
        id: 4,
        text: 'What is the smallest particle of a chemical element?',
        text_hi: 'एक रासायनिक तत्व का सबसे छोटा कण क्या है?',
        text_te: 'ఒక రసాయన మూలకం యొక్క అతి చిన్న కణం ఏది?',
        options: [
          { id: 'a', text: 'Molecule', text_hi: 'अणु', text_te: 'అణువు' },
          { id: 'b', text: 'Atom', text_hi: 'परमाणु', text_te: 'పరమాణువు' },
          { id: 'c', text: 'Compound', text_hi: 'यौगिक', text_te: 'సమ్మేళనం' },
          { id: 'd', 'text': 'Mixture', text_hi: 'मिश्रण', text_te: 'మిశ్రమం' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: ["Everything is made of these.", "They have a nucleus with protons and neutrons.", "It's the basic building block of matter."],
        hints_hi: ["सब कुछ इन्हीं से बना है।", "इनमें प्रोटॉन और न्यूट्रॉन के साथ एक नाभिक होता है।", "यह पदार्थ का मूल निर्माण खंड है।"],
        hints_te: ["ప్రతిదీ వీటితోనే తయారైంది.", "వాటికి ప్రోటాన్లు మరియు న్యూట్రాన్లతో కూడిన కేంద్రకం ఉంటుంది.", "ఇది పదార్థం యొక్క ప్రాథమిక నిర్మాణ భాగం."]
      },
       {
        id: 5,
        text: 'The air we breathe is a...',
        text_hi: 'हम जो हवा में सांस लेते हैं वह एक...',
        text_te: 'మనం పీల్చే గాలి ఒక...',
        options: [
          { id: 'a', text: 'Solid', text_hi: 'ठोस', text_te: 'ఘనపదార్థం' },
          { id: 'b', text: 'Liquid', text_hi: 'तरल', text_te: 'ద్రవం' },
          { id: 'c', text: 'Mixture of gases', text_hi: 'गैसों का मिश्रण', text_te: 'వాయువుల మిశ్రమం' },
          { id: 'd', 'text': 'Compound', text_hi: 'यौगिक', text_te: 'సమ్మేళనం' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        hints: ["It's mostly nitrogen and oxygen.", "You can't see it.", "It's all around us."],
        hints_hi: ["यह ज्यादातर नाइट्रोजन और ऑक्सीजन है।", "आप इसे देख नहीं सकते।", "यह हमारे चारों ओर है।"],
        hints_te: ["ఇది ఎక్కువగా నత్రజని మరియు ఆక్సిజన్.", "మీరు దానిని చూడలేరు.", "ఇది మన చుట్టూ ఉంది."]
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
        options: [
          { id: 'a', text: 'Strongly Acidic', text_hi: 'अत्यधिक अम्लीय', text_te: 'బలమైన ఆమ్లత్వం' },
          { id: 'b', text: 'Neutral', text_hi: 'उदासीन', text_te: 'తటస్థ' },
          { id: 'c', text: 'Strongly Basic', text_hi: 'अत्यधिक क्षारीय', text_te: 'బలమైన క్షారత్వం' },
          { id: 'd', 'text': 'Slightly Acidic', text_hi: 'थोड़ा अम्लीय', text_te: 'కొద్దిగా ఆమ్లత్వం' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: ["Pure water has this pH.", "It's right in the middle of the pH scale.", "It's neither an acid nor a base."],
        hints_hi: ["शुद्ध जल का यही पीएच होता है।", "यह पीएच पैमाने के ठीक बीच में है।", "यह न तो अम्ल है और न ही क्षार।"],
        hints_te: ["స్వచ్ఛమైన నీటికి ఈ pH ఉంటుంది.", "ఇది pH స్కేల్ మధ్యలో ఉంటుంది.", "ఇది ఆమ్లం కాదు, క్షారం కాదు."]
      },
       {
        id: 2,
        text: 'Which substance would taste sour?',
        text_hi: 'कौन सा पदार्थ खट्टा लगेगा?',
        text_te: 'ఏ పదార్థం పుల్లగా ఉంటుంది?',
        options: [
          { id: 'a', text: 'Soap', text_hi: 'साबुन', text_te: 'సబ్బు' },
          { id: 'b', text: 'Sugar', text_hi: 'चीनी', text_te: 'చక్కెర' },
          { id: 'c', text: 'Salt', text_hi: 'नमक', text_te: 'ఉప్పు' },
          { id: 'd', 'text': 'Lemon Juice', text_hi: 'नींबू का रस', text_te: 'నిమ్మరసం' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        hints: ["It's a common acid.", "It has a low pH.", "It's often used in drinks and cooking."],
        hints_hi: ["यह एक आम अम्ल है।", "इसका पीएच कम होता है।", "यह अक्सर पेय और खाना पकाने में उपयोग किया जाता है।"],
        hints_te: ["ఇది ఒక సాధారణ ఆమ్లం.", "దీనికి తక్కువ పిహెచ్ ఉంటుంది.", "ఇది తరచుగా పానీయాలు మరియు వంటలలో ఉపయోగించబడుతుంది."]
      },
       {
        id: 3,
        text: 'Baking soda is an example of a...',
        text_hi: 'बेकिंग सोडा किसका उदाहरण है...',
        text_te: 'బేకింగ్ సోడా దేనికి ఉదాహరణ...',
        options: [
          { id: 'a', text: 'Acid', text_hi: 'अम्ल', text_te: 'ఆమ్లం' },
          { id: 'b', text: 'Base', text_hi: 'क्षार', text_te: 'క్షారం' },
          { id: 'c', text: 'Salt', text_hi: 'नमक', text_te: 'లవణం' },
          { id: 'd', 'text': 'Pure substance', text_hi: 'शुद्ध पदार्थ', text_te: 'స్వచ్ఛమైన పదార్థం' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: ["It reacts with vinegar to produce bubbles.", "Bases are also known as alkalis.", "It has a pH greater than 7."],
        hints_hi: ["यह सिरके के साथ प्रतिक्रिया करके बुलबुले पैदा करता है।", "क्षारों को क्षार भी कहा जाता है।", "इसका पीएच 7 से अधिक होता है।"],
        hints_te: ["ఇది వెనిగర్‌తో చర్య జరిపి బుడగలను ఉత్పత్తి చేస్తుంది.", "క్షారాలను ఆల్కలీలు అని కూడా అంటారు.", "దీనికి పిహెచ్ 7 కంటే ఎక్కువ ఉంటుంది."]
      },
       {
        id: 4,
        text: 'Litmus paper turns what color in an acid?',
        text_hi: 'लिटमस पेपर अम्ल में किस रंग का हो जाता है?',
        text_te: 'ఆమ్లంలో లిట్మస్ పేపర్ ఏ రంగులోకి మారుతుంది?',
        options: [
          { id: 'a', text: 'Blue', text_hi: 'नीला', text_te: 'నీలం' },
          { id: 'b', text: 'Green', text_hi: 'हरा', text_te: 'ఆకుపచ్చ' },
          { id: 'c', text: 'Red', text_hi: 'लाल', text_te: 'ఎరుపు' },
          { id: 'd', 'text': 'Yellow', text_hi: 'पीला', text_te: 'పసుపు' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        hints: ["Think of the color for 'danger' or 'stop'.", "In a base, it turns blue.", "It's a common indicator used in chemistry labs."],
        hints_hi: ["'खतरे' या 'रोक' के लिए रंग के बारे में सोचें।", "क्षार में, यह नीला हो जाता है।", "यह रसायन विज्ञान प्रयोगशालाओं में इस्तेमाल किया जाने वाला एक आम संकेतक है।"],
        hints_te: ["'ప్రమాదం' లేదా 'ఆపు' కోసం రంగు గురించి ఆలోచించండి.", "క్షారంలో, ఇది నీలం రంగులోకి మారుతుంది.", "ఇది రసాయన శాస్త్ర ప్రయోగశాలలలో ఉపయోగించే ఒక సాధారణ సూచిక."]
      },
       {
        id: 5,
        text: 'What is formed when an acid and a base react together?',
        text_hi: 'जब एक अम्ल और एक क्षार एक साथ प्रतिक्रिया करते हैं तो क्या बनता है?',
        text_te: 'ఆమ్లం మరియు క్షారం కలిసి చర్య జరిపినప్పుడు ఏమి ఏర్పడుతుంది?',
        options: [
          { id: 'a', text: 'A stronger acid', text_hi: 'एक मजबूत अम्ल', text_te: 'మరింత బలమైన ఆమ్లం' },
          { id: 'b', text: 'A stronger base', text_hi: 'एक मजबूत क्षार', text_te: 'మరింత బలమైన క్షారం' },
          { id: 'c', text: 'A neutral substance', text_hi: 'एक उदासीन पदार्थ', text_te: 'ఒక తటస్థ పదార్థం' },
          { id: 'd', 'text': 'Salt and water', text_hi: 'नमक और पानी', text_te: 'లవణం మరియు నీరు' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        hints: ["This is called a neutralization reaction.", "One of the products is what you put on food.", "The other product is H2O."],
        hints_hi: ["इसे उदासीनीकरण अभिक्रिया कहा जाता है।", "उत्पादों में से एक वह है जिसे आप भोजन पर डालते हैं।", "दूसरा उत्पाद H2O है।"],
        hints_te: ["దీనిని తటస్థీకరణ చర్య అంటారు.", "ఉత్పత్తులలో ఒకటి మీరు ఆహారంపై వేసేది.", "మరొక ఉత్పత్తి H2O."]
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
        { id: 1, text: 'What is the symbol for the element Oxygen?', text_hi: 'ऑक्सीजन तत्व का प्रतीक क्या है?', text_te: 'ఆక్సిజన్ మూలకం యొక్క చిహ్నం ఏమిటి?', options: [{ id: 'a', text: 'O', text_hi: 'O', text_te: 'O' },{ id: 'b', text: 'Ox', text_hi: 'Ox', text_te: 'Ox' },{ id: 'c', text: 'Oxy', text_hi: 'Oxy', text_te: 'Oxy' },{ id: 'd', text: 'O2', text_hi: 'O2', text_te: 'O2' }], correctAnswer: 'a', difficulty: 'easy', hints: ['It is the first letter.', 'We need it to breathe.', 'Its atomic number is 8.'], hints_hi: ['यह पहला अक्षर है।', 'हमें सांस लेने के लिए इसकी आवश्यकता है।', 'इसका परमाणु क्रमांक 8 है।'], hints_te: ['ఇది మొదటి అక్షరం.', 'మనం శ్వాసించడానికి ఇది అవసరం.', 'దీని పరమాణు సంఖ్య 8.'] },
        { id: 2, text: 'What is the symbol for Gold?', text_hi: 'सोने का प्रतीक क्या है?', text_te: 'బంగారం యొక్క చిహ్నం ఏమిటి?', options: [{ id: 'a', text: 'Go', text_hi: 'Go', text_te: 'Go' },{ id: 'b', text: 'Gd', text_hi: 'Gd', text_te: 'Gd' },{ id: 'c', text: 'Au', text_hi: 'Au', text_te: 'Au' },{ id: 'd', text: 'Ag', text_hi: 'Ag', text_te: 'Ag' }], correctAnswer: 'c', difficulty: 'easy', hints: ['It comes from the Latin word "aurum".', 'It is a precious metal.', 'It is not what you might expect.'], hints_hi: ['यह लैटिन शब्द "औरम" से आया है।', 'यह एक कीमती धातु है।', 'यह वह नहीं है जिसकी आप अपेक्षा कर सकते हैं।'], hints_te: ['ఇది లాటిన్ పదం "ఆరం" నుండి వచ్చింది.', 'ఇది ఒక విలువైన లోహం.', 'ఇది మీరు ఊహించినది కాదు.'] },
        { id: 3, text: 'Which element is a noble gas?', text_hi: 'कौन सा तत्व एक उत्कृष्ट गैस है?', text_te: 'ఏ మూలకం ఒక ఉత్కృష్ట వాయువు?', options: [{ id: 'a', text: 'Hydrogen', text_hi: 'हाइड्रोजन', text_te: 'హైడ్రోజన్' },{ id: 'b', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్' },{ id: 'c', text: 'Helium', text_hi: 'हीलियम', text_te: 'హీలియం' },{ id: 'd', text: 'Carbon', text_hi: 'कार्बन', text_te: 'కార్బన్' }], correctAnswer: 'c', difficulty: 'easy', hints: ['It is used to fill balloons.', 'It makes your voice sound funny.', 'It is on the far right of the periodic table.'], hints_hi: ['इसका उपयोग गुब्बारे भरने के लिए किया जाता है।', 'यह आपकी आवाज को मज़ेदार बनाता है।', 'यह आवर्त सारणी के सबसे दाईं ओर है।'], hints_te: ['ఇది బెలూన్లను నింపడానికి ఉపయోగించబడుతుంది.', 'ఇది మీ స్వరాన్ని ఫన్నీగా చేస్తుంది.', 'ఇది ఆవర్తన పట్టిక యొక్క కుడి వైపున ఉంది.'] },
        { id: 4, text: 'What element is essential for life and is found in all organic compounds?', text_hi: 'कौन सा तत्व जीवन के लिए आवश्यक है और सभी कार्बनिक यौगिकों में पाया जाता है?', text_te: 'జీవితానికి అవసరమైన మరియు అన్ని సేంద్రీయ సమ్మేళనాలలో కనిపించే మూలకం ఏది?', options: [{ id: 'a', text: 'Carbon', text_hi: 'कार्बन', text_te: 'కార్బన్' },{ id: 'b', text: 'Nitrogen', text_hi: 'नाइट्रोजन', text_te: 'నత్రజని' },{ id: 'c', text: 'Iron', text_hi: 'लोहा', text_te: 'ఇనుము' },{ id: 'd', text: 'Silicon', text_hi: 'सिलिकॉन', text_te: 'సిలికాన్' }], correctAnswer: 'a', difficulty: 'easy', hints: ['Diamonds are a form of this element.', 'Its symbol is C.', 'You are a "carbon-based" lifeform.'], hints_hi: ['हीरे इस तत्व का एक रूप हैं।', 'इसका प्रतीक C है।', 'आप एक "कार्बन-आधारित" जीव हैं।'], hints_te: ['వజ్రాలు ఈ మూలకం యొక్క ఒక రూపం.', 'దీని చిహ్నం C.', 'మీరు ఒక "కార్బన్-ఆధారిత" జీవి.'] },
        { id: 5, text: 'What is the symbol for Silver?', text_hi: 'चांदी का प्रतीक क्या है?', text_te: 'వెండి యొక్క చిహ్నం ఏమిటి?', options: [{ id: 'a', text: 'Si', text_hi: 'Si', text_te: 'Si' },{ id: 'b', text: 'Sl', text_hi: 'Sl', text_te: 'Sl' },{ id: 'c', text: 'Au', text_hi: 'Au', text_te: 'Au' },{ id: 'd', text: 'Ag', text_hi: 'Ag', text_te: 'Ag' }], correctAnswer: 'd', difficulty: 'easy', hints: ['It comes from the Latin word "argentum".', 'It is a precious metal, but less so than gold.', 'It is not Au.'], hints_hi: ['यह लैटिन शब्द "अर्जेंटम" से आया है।', 'यह एक कीमती धातु है, लेकिन सोने से कम।', 'यह Au नहीं है।'], hints_te: ['ఇది లాటిన్ పదం "అర్జెంటమ్" నుండి వచ్చింది.', 'ఇది ఒక విలువైన లోహం, కానీ బంగారం కంటే తక్కువ.', 'ఇది Au కాదు.'] }
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
        { id: 1, text: 'What happens when you mix baking soda and vinegar?', text_hi: 'जब आप बेकिंग सोडा और सिरका मिलाते हैं तो क्या होता है?', text_te: 'మీరు బేకింగ్ సోడా మరియు వెనిగర్ కలిపినప్పుడు ఏమి జరుగుతుంది?', options: [{ id: 'a', text: 'It gets cold', text_hi: 'यह ठंडा हो जाता है', text_te: 'ఇది చల్లగా అవుతుంది' },{ id: 'b', text: 'It turns solid', text_hi: 'यह ठोस हो जाता है', text_te: 'ఇది ఘనంగా మారుతుంది' },{ id: 'c', 'text': 'It fizzes and bubbles', text_hi: 'यह फ़िज़ और बुलबुले बनाता है', text_te: 'ఇది బుడగలు వస్తుంది' },{ id: 'd', 'text': 'Nothing', text_hi: 'कुछ नहीं', text_te: 'ఏమీ లేదు' }], correctAnswer: 'c', difficulty: 'easy', hints: ['A gas is produced.', 'This is used in model volcanoes.', 'It is an acid-base reaction.'], hints_hi: ['एक गैस का उत्पादन होता है।', 'इसका उपयोग मॉडल ज्वालामुखियों में किया जाता है।', 'यह एक अम्ल-क्षार प्रतिक्रिया है।'], hints_te: ['ఒక వాయువు ఉత్పత్తి అవుతుంది.', 'ఇది మోడల్ అగ్నిపర్వతాలలో ఉపయోగించబడుతుంది.', 'ఇది ఒక ఆమ్ల-క్షార ప్రతిచర్య.'] },
        { id: 2, text: 'What is rust?', text_hi: 'जंग क्या है?', text_te: 'తుప్పు అంటే ఏమిటి?', options: [{ id: 'a', text: 'Iron reacting with oxygen', text_hi: 'लोहे की ऑक्सीजन के साथ प्रतिक्रिया', text_te: 'ఆక్సిజన్‌తో ఇనుము చర్య' },{ id: 'b', text: 'Iron melting', text_hi: 'लोहे का पिघलना', text_te: 'ఇనుము కరగడం' },{ id: 'c', text: 'Iron painted red', text_hi: 'लोहे को लाल रंग से रंगा गया', text_te: 'ఎరుపు రంగు వేసిన ఇనుము' },{ id: 'd', text: 'Iron getting wet', text_hi: 'लोहे का गीला होना', text_te: 'ఇనుము తడిసిపోవడం' }], correctAnswer: 'a', difficulty: 'easy', hints: ['It is a slow chemical reaction.', 'It is also called oxidation.', 'It makes iron weak and flaky.'], hints_hi: ['यह एक धीमी रासायनिक प्रतिक्रिया है।', 'इसे ऑक्सीकरण भी कहा जाता है।', 'यह लोहे को कमजोर और परतदार बना देता है।'], hints_te: ['ఇది ఒక నెమ్మది రసాయన ప్రతిచర్య.', 'దీనిని ఆక్సీకరణం అని కూడా అంటారు.', 'ఇది ఇనుమును బలహీనంగా మరియు పొరలుగా చేస్తుంది.'] },
        { id: 3, text: 'Burning wood is an example of a...', text_hi: 'लकड़ी जलाना किसका उदाहरण है...', text_te: 'చెక్కను కాల్చడం దేనికి ఉదాహరణ...', options: [{ id: 'a', text: 'Physical change', text_hi: 'भौतिक परिवर्तन', text_te: 'భౌతిక మార్పు' },{ id: 'b', text: 'Chemical change', text_hi: 'रासायनिक परिवर्तन', text_te: 'రసాయన మార్పు' },{ id: 'c', text: 'State change', text_hi: 'अवस्था परिवर्तन', text_te: 'స్థితి మార్పు' },{ id: 'd', text: 'Melting process', text_hi: 'पिघलने की प्रक्रिया', text_te: 'కరగే ప్రక్రియ' }], correctAnswer: 'b', difficulty: 'easy', hints: ['New substances (ash, smoke) are formed.', 'The change cannot be easily reversed.', 'It releases heat and light.'], hints_hi: ['नए पदार्थ (राख, धुआं) बनते हैं।', 'परिवर्तन को आसानी से उलटा नहीं किया जा सकता है।', 'यह गर्मी और प्रकाश छोड़ता है।'], hints_te: ['కొత్త పదార్థాలు (బూడిద, పొగ) ఏర్పడతాయి.', 'మార్పును సులభంగా రివర్స్ చేయలేము.', 'ఇది వేడి మరియు కాంతిని విడుదల చేస్తుంది.'] },
        { id: 4, text: 'What gas is produced when plants perform photosynthesis?', text_hi: 'जब पौधे प्रकाश संश्लेषण करते हैं तो कौन सी गैस उत्पन्न होती है?', text_te: 'మొక్కలు కిరణజన్య సంయోగక్రియ చేసినప్పుడు ఏ వాయువు ఉత్పత్తి అవుతుంది?', options: [{ id: 'a', text: 'Carbon Dioxide', text_hi: 'कार्बन डाइऑक्साइड', text_te: 'కార్బన్ డయాక్సైడ్' },{ id: 'b', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్' },{ id: 'c', text: 'Nitrogen', text_hi: 'नाइट्रोजन', text_te: 'నత్రజని' },{ id: 'd', text: 'Hydrogen', text_hi: 'हाइड्रोजन', text_te: 'హైడ్రోజన్' }], correctAnswer: 'b', difficulty: 'easy', hints: ['Animals need this gas to breathe.', 'It is a chemical reaction using sunlight.', 'Plants take in carbon dioxide.'], hints_hi: ['जानवरों को सांस लेने के लिए इस गैस की आवश्यकता होती है।', 'यह सूर्य के प्रकाश का उपयोग करके एक रासायनिक प्रतिक्रिया है।', 'पौधे कार्बन डाइऑक्साइड लेते हैं।'], hints_te: ['జంతువులకు శ్వాసించడానికి ఈ వాయువు అవసరం.', 'ఇది సూర్యరశ్మిని ఉపయోగించి ఒక రసాయన ప్రతిచర్య.', 'మొక్కలు కార్బన్ డయాక్సైడ్‌ను తీసుకుంటాయి.'] },
        { id: 5, text: 'Melting an ice cube is an example of a...', text_hi: 'एक बर्फ के टुकड़े को पिघलाना किसका उदाहरण है...', text_te: 'ఒక ఐస్ క్యూబ్‌ను కరిగించడం దేనికి ఉదాహరణ...', options: [{ id: 'a', text: 'Physical change', text_hi: 'भौतिक परिवर्तन', text_te: 'భౌతిక మార్పు' },{ id: 'b', text: 'Chemical change', text_hi: 'रासायनिक परिवर्तन', text_te: 'రసాయన మార్పు' },{ id: 'c', text: 'New substance forming', text_hi: 'नया पदार्थ बनना', text_te: 'కొత్త పదార్థం ఏర్పడటం' },{ id: 'd', text: 'A reaction', text_hi: 'एक प्रतिक्रिया', text_te: 'ప్రతిచర్య' }], correctAnswer: 'a', difficulty: 'easy', hints: ['No new substance is created.', 'It is still water (H2O), just in a different state.', 'The change can be easily reversed by freezing it again.'], hints_hi: ['कोई नया पदार्थ नहीं बनता है।', 'यह अभी भी पानी (H2O) है, बस एक अलग अवस्था में।', 'इस परिवर्तन को फिर से जमा कर आसानी से उलटा किया जा सकता है।'], hints_te: ['కొత్త పదార్థం సృష్టించబడదు.', 'ఇది ఇప్పటికీ నీరు (H2O), కేవలం వేరే స్థితిలో.', 'ఈ మార్పును మళ్లీ గడ్డకట్టించడం ద్వారా సులభంగా రివర్స్ చేయవచ్చు.'] }
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
        { id: 1, text: 'Which of these materials comes from a tree?', text_hi: 'इनमें से कौन सी सामग्री एक पेड़ से आती है?', text_te: 'ఈ పదార్థాలలో ఏది చెట్టు నుండి వస్తుంది?', options: [{ id: 'a', text: 'Plastic', text_hi: 'प्लास्टिक', text_te: 'ప్లాస్టిక్' },{ id: 'b', text: 'Glass', text_hi: 'कांच', text_te: 'గాజు' },{ id: 'c', text: 'Wood', text_hi: 'लकड़ी', text_te: 'చెక్క' },{ id: 'd', text: 'Metal', text_hi: 'धातु', text_te: 'లోహం' }], correctAnswer: 'c', difficulty: 'easy', hints: ['We use it to make furniture.', 'Paper is also made from it.', 'It can be burned.'], hints_hi: ['हम इसका उपयोग फर्नीचर बनाने के लिए करते हैं।', 'कागज भी इसी से बनता है।', 'इसे जलाया जा सकता है।'], hints_te: ['మేము దీనిని ఫర్నిచర్ చేయడానికి ఉపయోగిస్తాము.', 'కాగితం కూడా దాని నుండి తయారవుతుంది.', 'దానిని కాల్చవచ్చు.'] },
        { id: 2, text: 'Glass is made from what main material?', text_hi: 'कांच किस मुख्य सामग्री से बनता है?', text_te: 'గాజు ఏ ప్రధాన పదార్థం నుండి తయారవుతుంది?', options: [{ id: 'a', text: 'Sand', text_hi: 'रेत', text_te: 'ఇసుక' },{ id: 'b', text: 'Clay', text_hi: 'मिट्टी', text_te: 'మట్టి' },{ id: 'c', text: 'Oil', text_hi: 'तेल', text_te: 'నూనె' },{ id: 'd', text: 'Water', text_hi: 'पानी', text_te: 'నీరు' }], correctAnswer: 'a', difficulty: 'easy', hints: ['It is heated to a very high temperature.', 'You find this material on beaches.', 'It is melted to become transparent.'], hints_hi: ['इसे बहुत उच्च तापमान पर गर्म किया जाता है।', 'आप इस सामग्री को समुद्र तटों पर पाते हैं।', 'यह पारदर्शी बनने के लिए पिघलाया जाता है।'], hints_te: ['ఇది చాలా అధిక ఉష్ణోగ్రతకు వేడి చేయబడుతుంది.', 'మీరు ఈ పదార్థాన్ని బీచ్‌లలో కనుగొంటారు.', 'ఇది పారదర్శకంగా మారడానికి కరిగించబడుతుంది.'] },
        { id: 3, text: 'Plastic is typically made from...', text_hi: 'प्लास्टिक आमतौर पर किससे बनता है...', text_te: 'ప్లాస్టిక్ సాధారణంగా దేని నుండి తయారవుతుంది...', options: [{ id: 'a', text: 'Plants', text_hi: 'पौधे', text_te: 'మొక్కలు' },{ id: 'b', text: 'Rocks', text_hi: 'चट्टानें', text_te: 'రాళ్ళు' },{ id: 'c', text: 'Animals', text_hi: 'जानवर', text_te: 'జంతువులు' },{ id: 'd', text: 'Oil (petroleum)', text_hi: 'तेल (पेट्रोलियम)', text_te: 'చమురు (పెట్రోలియం)' }], correctAnswer: 'd', difficulty: 'easy', hints: ['It is a fossil fuel.', 'It is not a renewable resource.', 'Many bottles and bags are made from it.'], hints_hi: ['यह एक जीवाश्म ईंधन है।', 'यह एक नवीकरणीय संसाधन नहीं है।', 'कई बोतलें और बैग इसी से बनते हैं।'], hints_te: ['ఇది ఒక శిలాజ ఇంధనం.', 'ఇది పునరుత్పాదక వనరు కాదు.', 'చాలా సీసాలు మరియు సంచులు దాని నుండి తయారవుతాయి.'] },
        { id: 4, text: 'Which of these is a metal?', text_hi: 'इनमें से कौन सी एक धातु है?', text_te: 'వీటిలో ఏది లోహం?', options: [{ id: 'a', text: 'Cotton', text_hi: 'कपास', text_te: 'పత్తి' },{ id: 'b', 'text': 'Porcelain', text_hi: 'पोर्सिलेन', text_te: 'పింగాణీ' },{ id: 'c', 'text': 'Aluminum', text_hi: 'एल्यूमीनियम', text_te: 'అల్యూమినియం' },{ id: 'd', 'text': 'Cardboard', text_hi: 'कार्डबोर्ड', text_te: 'కార్డ్‌బోర్డ్' }], correctAnswer: 'c', difficulty: 'easy', hints: ['It is shiny and conducts electricity.', 'Foil is often made from it.', 'It is lightweight.'], hints_hi: ['यह चमकदार होता है और बिजली का संचालन करता है।', 'पन्नी अक्सर इसी से बनी होती है।', 'यह हल्का होता है।'], hints_te: ['ఇది మెరిసేది మరియు విద్యుత్తును నిర్వహిస్తుంది.', 'రేకు తరచుగా దాని నుండి తయారవుతుంది.', 'ఇది తేలికైనది.'] },
        { id: 5, text: 'What property allows a rubber band to stretch and return to its original shape?', text_hi: 'कौन सा गुण एक रबर बैंड को खींचने और अपने मूल आकार में लौटने की अनुमति देता है?', text_te: 'ఏ లక్షణం ఒక రబ్బరు బ్యాండ్‌ను సాగదీసి దాని అసలు ఆకారానికి తిరిగి రావడానికి అనుమతిస్తుంది?', options: [{ id: 'a', text: 'Hardness', text_hi: 'कठोरता', text_te: 'కఠినత్వం' },{ id: 'b', text: 'Elasticity', text_hi: 'लोच', text_te: 'స్థితిస్థాపకత' },{ id: 'c', text: 'Transparency', text_hi: 'पारदर्शिता', text_te: 'పారదర్శకత' },{ id: 'd', text: 'Brittleness', text_hi: 'भंगुरता', text_te: 'పెళుసుదనం' }], correctAnswer: 'b', difficulty: 'easy', hints: ['It is very flexible.', 'It describes being "stretchy".', 'It is the opposite of being rigid.'], hints_hi: ['यह बहुत लचीला है।', 'यह "खिंचाव" का वर्णन करता है।', 'यह कठोर होने के विपरीत है।'], hints_te: ['ఇది చాలా సరళమైనది.', 'ఇది "సాగే" అని వివరిస్తుంది.', 'ఇది దృఢంగా ఉండటానికి వ్యతిరేకం.'] }
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
        hints: ["A noun is a person, place, or thing.", "Which word is an animal?", "The word describes a sly, bushy-tailed mammal."],
        hints_hi: ["संज्ञा एक व्यक्ति, स्थान या वस्तु है।", "कौन सा शब्द एक जानवर है?", "यह शब्द एक चालाक, झाड़ीदार पूंछ वाले स्तनपायी का वर्णन करता है।"],
        hints_te: ["నామవాచకం ఒక వ్యక్తి, ప్రదేశం లేదా వస్తువు.", "ఏ పదం జంతువు?", "ఈ పదం ఒక మోసపూరితమైన, పొదలాంటి తోక ఉన్న క్షీరదాన్ని వివరిస్తుంది."]
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
        hints: ["A verb is an action word.", "What is the bird doing?", "It's a musical action."],
        hints_hi: ["क्रिया एक क्रिया शब्द है।", "पक्षी क्या कर रहा है?", "यह एक संगीत क्रिया है।"],
        hints_te: ["క్రియ ఒక చర్య పదం.", "పక్షి ఏమి చేస్తోంది?", "ఇది ఒక సంగీత చర్య."]
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
        hints: ["A noun can be a place.", "Where do you go to learn?", "It's a place with classrooms and teachers."],
        hints_hi: ["संज्ञा एक स्थान हो सकता है।", "आप सीखने के लिए कहाँ जाते हैं?", "यह कक्षाओं और शिक्षकों के साथ एक जगह है।"],
        hints_te: ["నామవాచకం ఒక ప్రదేశం కావచ్చు.", "మీరు నేర్చుకోవడానికి ఎక్కడికి వెళతారు?", "ఇది తరగతి గదులు మరియు ఉపాధ్యాయులతో కూడిన ప్రదేశం."]
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
        hints: ["Which word shows an action?", "It's something you do with your legs.", "It's faster than walking."],
        hints_hi: ["कौन सा शब्द एक क्रिया दिखाता है?", "यह कुछ ऐसा है जो आप अपने पैरों से करते हैं।", "यह चलने से तेज है।"],
        hints_te: ["ఏ పదం చర్యను చూపిస్తుంది?", "ఇది మీరు మీ కాళ్ళతో చేసేది.", "ఇది నడవడం కంటే వేగంగా ఉంటుంది."]
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
        hints: ["A noun is a thing.", "Which word is an object you can touch?", "You might eat your dinner at one of these."],
        hints_hi: ["संज्ञा एक वस्तु है।", "कौन सा शब्द एक वस्तु है जिसे आप छू सकते हैं?", "आप इनमें से किसी एक पर अपना रात का खाना खा सकते हैं।"],
        hints_te: ["నామవాచకం ఒక వస్తువు.", "మీరు తాకగల వస్తువు ఏది?", "మీరు వీటిలో ఒకదానిపై మీ రాత్రి భోజనం తినవచ్చు."]
      }
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
    }
];

    






