
export type Question = {
  id: number;
  text: string;
  text_hi: string;
  text_te: string;
  options: { id: string; text: string; text_hi: string; text_te: string; }[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  hints_hi: string[];
  hints_te: string[];
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
  subject: 'physics' | 'biology' | 'chemistry' | 'technology' | 'engineering' | 'mathematics';
};

export type Subject = {
    id: 'physics' | 'biology' | 'chemistry' | 'technology' | 'engineering' | 'mathematics';
    title: string;
    description: string;
    color: string;
}

export const subjects: Subject[] = [
    { id: 'physics', title: 'Physics', description: 'Explore the laws of the universe.', color: 'bg-blue-500' },
    { id: 'biology', title: 'Biology', description: 'Discover the wonders of life.', color: 'bg-green-500' },
    { id: 'chemistry', title: 'Chemistry', description: 'Uncover the building blocks of matter.', color: 'bg-purple-500' },
    { id: 'mathematics', title: 'Mathematics', description: 'Solve puzzles and play with numbers.', color: 'bg-orange-500' },
]


export const missions: Mission[] = [
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
        options: [
          { id: 'a', text: '35', text_hi: '35', text_te: '35' },
          { id: 'b', text: '40', text_hi: '40', text_te: '40' },
          { id: 'c', text: '45', text_hi: '45', text_te: '45' },
          { id: 'd', 'text': '50', text_hi: '50', text_te: '50' },
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
        options: [
          { id: 'a', text: '7', text_hi: '7', text_te: '7' },
          { id: 'b', text: '6', text_hi: '6', text_te: '6' },
          { id: 'c', text: '8', text_hi: '8', text_te: '8' },
          { id: 'd', 'text': '17', text_hi: '17', text_te: '17' },
        ],
        correctAnswer: 'a',
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
        options: [
          { id: 'a', text: '9', text_hi: '9', text_te: '9' },
          { id: 'b', text: '12', text_hi: '12', text_te: '12' },
          { id: 'c', text: '10', text_hi: '10', text_te: '10' },
          { id: 'd', 'text': '16', text_hi: '16', text_te: '16' },
        ],
        correctAnswer: 'c',
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
        options: [
          { id: 'a', text: '1', text_hi: '1', text_te: '1' },
          { id: 'b', text: '10', text_hi: '10', text_te: '10' },
          { id: 'c', text: '100', text_hi: '100', text_te: '100' },
          { id: 'd', text: '1000', text_hi: '1000', text_te: '1000' },
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
            options: [
                { id: 'a', text: '3', text_hi: '3', text_te: '3' },
                { id: 'b', text: '4', text_hi: '4', text_te: '4' },
                { id: 'c', text: '5', text_hi: '5', text_te: '5' },
                { id: 'd', 'text': '6', text_hi: '6', text_te: '6' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            hints: ["All its sides are equal in length.", "It has four right angles.", "Think of a chessboard square."],
            hints_hi: ["इसकी सभी भुजाएँ लंबाई में बराबर होती हैं।", "इसके चार समकोण होते हैं।", "एक शतरंज की बिसात के वर्ग के बारे में सोचें।"],
            hints_te: ["దాని అన్ని భుజాలు సమాన పొడవు కలిగి ఉంటాయి.", "దానికి నాలుగు లంబ కోణాలు ఉంటాయి.", "చదరంగపు చతురస్రం గురించి ఆలోచించండి."]
        },
        {
            id: 2,
            text: 'What is a shape with five sides called?',
            text_hi: 'पांच भुजाओं वाली आकृति को क्या कहते हैं?',
            text_te: 'ఐదు భుజాలు ఉన్న ఆకారాన్ని ఏమంటారు?',
            options: [
                { id: 'a', text: 'Hexagon', text_hi: 'षट्कोण', text_te: 'షడ్భుజి' },
                { id: 'b', text: 'Octagon', text_hi: 'अष्टकोण', text_te: 'అష్టభుజి' },
                { id: 'c', text: 'Pentagon', text_hi: 'पंचकोण', text_te: 'పంచభుజి' },
                { id: 'd', 'text': 'Triangle', text_hi: 'त्रिभुज', text_te: 'త్రిభుజం' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            hints: ["'Penta' means five.", "Think of the famous building in Washington D.C.", "It has five angles."],
            hints_hi: ["'पेंटा' का अर्थ है पांच।", "वाशिंगटन डी.सी. की प्रसिद्ध इमारत के बारे में सोचें।", "इसके पांच कोण होते हैं।"],
            hints_te: ["'పెంటా' అంటే ఐదు.", "వాషింగ్టన్ డి.సి.లోని ప్రసిద్ధ భవనం గురించి ఆలోచించండి.", "దానికి ఐదు కోణాలు ఉంటాయి."]
        },
        {
            id: 3,
            text: 'A circle is a...',
            text_hi: 'एक वृत्त है...',
            text_te: 'ఒక వృత్తం ఒక...',
            options: [
                { id: 'a', text: 'Polygon', text_hi: 'बहुभुज', text_te: 'బహుభుజి' },
                { id: 'b', text: 'Shape with corners', text_hi: 'कोनों वाली आकृति', text_te: 'మూలలు ఉన్న ఆకారం' },
                { id: 'c', text: 'Round shape with no corners', text_hi: 'बिना कोनों वाली गोल आकृति', text_te: 'మూలలు లేని గుండ్రని ఆకారం' },
                { id: 'd', 'text': 'Type of square', text_hi: 'एक प्रकार का वर्ग', text_te: 'ఒక రకమైన చతురస్రం' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            hints: ["Think of a wheel.", "It has a radius and a diameter.", "It has no straight sides."],
            hints_hi: ["एक पहिये के बारे में सोचें।", "इसका एक त्रिज्या और एक व्यास होता है।", "इसकी कोई सीधी भुजा नहीं होती है।"],
            hints_te: ["చక్రం గురించి ఆలోచించండి.", "దానికి వ్యాసార్థం మరియు వ్యాసం ఉంటాయి.", "దానికి సరళ భుజాలు లేవు."]
        },
        {
            id: 4,
            text: 'What is the area of a square with a side length of 3 cm?',
            text_hi: '3 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?',
            text_te: '3 సెం.మీ భుజం పొడవు ఉన్న చతురస్రం యొక్క వైశాల్యం ఎంత?',
            options: [
                { id: 'a', text: '6 cm²', text_hi: '6 सेमी²', text_te: '6 సెం.మీ²' },
                { id: 'b', text: '9 cm²', text_hi: '9 सेमी²', text_te: '9 సెం.మీ²' },
                { id: 'c', text: '12 cm²', text_hi: '12 सेमी²', text_te: '12 సెం.మీ²' },
                { id: 'd', 'text': '3 cm²', text_hi: '3 सेमी²', text_te: '3 సెం.మీ²' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            hints: ["Area of a square is side length multiplied by itself.", "What is 3 times 3?", "The unit will be square centimeters."],
            hints_hi: ["एक वर्ग का क्षेत्रफल भुजा की लंबाई को स्वयं से गुणा करने पर मिलता है।", "3 गुना 3 क्या है?", "इकाई वर्ग सेंटीमीटर होगी।"],
            hints_te: ["ఒక చతురస్రం యొక్క వైశాల్యం భుజం పొడవును దానితోనే గుణించడం.", "3 రెట్లు 3 ఎంత?", "ప్రమాణం చదరపు సెంటీమీటర్లు ఉంటుంది."]
        },
        {
            id: 5,
            text: 'Which shape has 6 faces, 12 edges, and 8 vertices?',
            text_hi: 'किस आकृति में 6 फलक, 12 किनारे और 8 कोने होते हैं?',
            text_te: 'ఏ ఆకారానికి 6 ముఖాలు, 12 అంచులు మరియు 8 శీర్షాలు ఉంటాయి?',
            options: [
                { id: 'a', text: 'Pyramid', text_hi: 'पिरामिड', text_te: 'పిరమిడ్' },
                { id: 'b', text: 'Sphere', text_hi: 'गोला', text_te: 'గోళం' },
                { id: 'c', text: 'Cylinder', text_hi: 'बेलन', text_te: 'సిలిండర్' },
                { id: 'd', 'text': 'Cube', text_hi: 'घन', text_te: 'ఘనం' },
            ],
            correctAnswer: 'd',
            difficulty: 'easy',
            hints: ["Think of a dice.", "All its faces are squares.", "It's a 3D shape."],
            hints_hi: ["एक पासे के बारे में सोचें।", "इसके सभी फलक वर्ग होते हैं।", "यह एक 3डी आकृति है।"],
            hints_te: ["ఒక పాచిక గురించి ఆలోచించండి.", "దాని అన్ని ముఖాలు చతురస్రాలు.", "ఇది ఒక 3డి ఆకారం."]
        }
    ]
  },
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
  }
];

export type Experiment = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  steps: {
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
  }[];
};

export const experiments: Experiment[] = [
    {
        id: 'volcano-1',
        title: 'Build a Baking Soda Volcano',
        description: 'A classic and safe experiment to demonstrate a chemical reaction.',
        imageUrl: 'https://picsum.photos/seed/exp1/600/400',
        imageHint: 'DIY volcano',
        steps: [
            {
                title: 'Step 1: Build the Cone',
                description: 'Use a plastic bottle and build a cone around it using clay or soil.',
                imageUrl: 'https://picsum.photos/seed/exp1-step1/600/400',
                imageHint: 'clay bottle',
            },
            {
                title: 'Step 2: Add Ingredients',
                description: 'Fill the bottle halfway with warm water, add a few drops of dish soap and red food coloring.',
                imageUrl: 'https://picsum.photos/seed/exp1-step2/600/400',
                imageHint: 'mixing liquids',
            },
            {
                title: 'Step 3: Add Baking Soda',
                description: 'Add 2 tablespoons of baking soda to the liquid and stir it.',
                imageUrl: 'https://picsum.photos/seed/exp1-step3/600/400',
                imageHint: 'baking soda',
            },
            {
                title: 'Step 4: The Eruption!',
                description: 'Pour vinegar into the bottle and watch your volcano erupt!',
                imageUrl: 'https://picsum.photos/seed/exp1-step4/600/400',
                imageHint: 'volcano erupting',
            },
        ]
    }
];

    
