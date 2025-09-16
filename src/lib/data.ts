
export type Question = {
  id: number;
  text: string;
  text_hi: string;
  text_te: string;
  text_ta: string;
  text_mr: string;
  options: { id: string; text: string; text_hi: string; text_te: string; text_ta: string; text_mr: string; }[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  hints_hi: string[];
  hints_te: string[];
  hints_ta: string[];
  hints_mr: string[];
};

export type Mission = {
  id: string;
  title: string;
  title_hi: string;
  title_te: string;
  title_ta: string;
  title_mr: string;
  description: string;
  description_hi: string;
  description_te: string;
  description_ta: string;
  description_mr: string;
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
    title_ta: 'நிலை 1',
    title_mr: 'स्तर 1',
    description: 'The fundamentals of force and motion.',
    description_hi: 'बल और गति के मूल सिद्धांत।',
    description_te: 'శక్తి మరియు చలనం యొక్క ప్రాథమికాలు.',
    description_ta: 'விசை மற்றும் இயக்கத்தின் அடிப்படைகள்.',
    description_mr: 'बल आणि गतीची मूलभूत तत्त्वे.',
    badgeId: 'physics-whiz',
    badge_emoji: '⚛️',
    badge_color: 'bg-yellow-400 text-yellow-900',
    questions: [
      {
        id: 1,
        text: 'What is the unit of force?',
        text_hi: 'बल की इकाई क्या है?',
        text_te: 'శక్తికి ప్రమాణం ఏమిటి?',
        text_ta: 'விசையின் அலகு என்ன?',
        text_mr: 'बलाचे एकक काय आहे?',
        options: [
          { id: 'a', text: 'Watt', text_hi: 'वाट', text_te: 'వాట్', text_ta: 'வாட்', text_mr: 'वॅट' },
          { id: 'b', text: 'Newton', text_hi: 'न्यूटन', text_te: 'న్యూటన్', text_ta: 'நியூட்டன்', text_mr: 'न्यूटन' },
          { id: 'c', text: 'Joule', text_hi: 'जूल', text_te: 'జౌల్', text_ta: 'ஜூல்', text_mr: 'ज्युल' },
          { id: 'd', text: 'Pascal', text_hi: 'पास्कल', text_te: 'పాస్కల్', text_ta: 'பாஸ்கல்', text_mr: 'पास्कल' },
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
        hints_ta: [
            "இது ஒரு புகழ்பெற்ற விஞ்ஞானியின் பெயரிடப்பட்டது.",
            "இயக்க விதிகளைப் பற்றி சிந்தியுங்கள்.",
            "இந்த அலகின் சின்னம் 'N' ஆகும்."
        ],
        hints_mr: [
            "हे एका प्रसिद्ध शास्त्रज्ञाच्या नावावरून ठेवले आहे.",
            "गतीच्या नियमांबद्दल विचार करा.",
            "या एककाचे चिन्ह 'N' आहे."
        ]
      },
      {
        id: 2,
        text: 'Which law of motion is also known as the law of inertia?',
        text_hi: 'गति का कौन सा नियम जड़त्व का नियम भी कहलाता है?',
        text_te: 'ఏ చలన నియమాన్ని జడత్వ నియమం అని కూడా అంటారు?',
        text_ta: 'எந்த இயக்க விதி நிலைம விதி என்றும் அழைக்கப்படுகிறது?',
        text_mr: 'कोणता गतीचा नियम जडत्वाचा नियम म्हणूनही ओळखला जातो?',
        options: [
            { id: 'a', text: "Newton's First Law", text_hi: 'न्यूटन का पहला नियम', text_te: 'న్యూటన్ మొదటి నియమం', text_ta: 'நியூட்டனின் முதல் விதி', text_mr: 'न्यूटनचा पहिला नियम' },
            { id: 'b', text: "Newton's Second Law", text_hi: 'न्यूटन का दूसरा नियम', text_te: 'న్యూటన్ రెండవ నియమం', text_ta: 'நியூட்டனின் இரண்டாம் விதி', text_mr: 'न्यूटनचा दुसरा नियम' },
            { id: 'c', text: "Newton's Third Law", text_hi: 'न्यूटन का तीसरा नियम', text_te: 'న్యూటన్ మూడవ నియమం', text_ta: 'நியூட்டனின் மூன்றாம் விதி', text_mr: 'न्यूटनचा तिसरा नियम' },
            { id: 'd', text: "Law of Gravitation", text_hi: 'गुरुत्वाकर्षण का नियम', text_te: 'గురుత్వాకర్షణ నియమం', text_ta: 'ஈர்ப்பு விதி', text_mr: 'गुरुत्वाकर्षणाचा नियम' },
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
        hints_ta: [
            "நிலைமம் என்பது இயக்க மாற்றத்திற்கான எதிர்ப்பு.",
            "இந்த விதி ஒரு பொருள் மீது விசை செயல்படாத வரை அது ஓய்வில் இருக்கும் என்று கூறுகிறது.",
            "அவர் கண்டுபிடித்த முதல் விதி இதுதான்."
        ],
        hints_mr: [
            "जडत्व म्हणजे गतीतील बदलाला होणारा प्रतिकार.",
            "हा नियम सांगतो की जोपर्यंत वस्तूवर बल लावले जात नाही तोपर्यंत ती स्थिर राहते.",
            "त्याने शोधून काढलेला हा सर्वात पहिला नियम आहे."
        ]
      },
      {
        id: 3,
        text: 'If you push a wall, the wall pushes you back with an equal and opposite force. This is an example of:',
        text_hi: 'यदि आप एक दीवार को धक्का देते हैं, तो दीवार आपको बराबर और विपरीत बल से वापस धकेलती है। यह किसका उदाहरण है:',
        text_te: 'మీరు గోడను నెడితే, గోడ మిమ్మల్ని సమానమైన మరియు వ్యతిరేక శక్తితో వెనక్కి నెడుతుంది. ఇది దేనికి ఉదాహరణ:',
        text_ta: 'நீங்கள் ஒரு சுவரைத் தள்ளினால், சுவர் உங்களைச் சமமான மற்றும் எதிர் விசையுடன் பின்னுக்குத் தள்ளுகிறது. இது எதற்கு உதாரணம்:',
        text_mr: 'जर तुम्ही भिंतीला ढकलले, तर भिंत तुम्हाला समान आणि विरुद्ध बलाने मागे ढकलते. हे कशाचे उदाहरण आहे:',
        options: [
            { id: 'a', text: "Newton's First Law", text_hi: 'न्यूटन का पहला नियम', text_te: 'న్యూటన్ మొదటి నియమం', text_ta: 'நியூட்டனின் முதல் விதி', text_mr: 'न्यूटनचा पहिला नियम' },
            { id: 'b', text: "Newton's Second Law", text_hi: 'न्यूटन का दूसरा नियम', text_te: 'న్యూటన్ రెండవ నియమం', text_ta: 'நியூட்டனின் இரண்டாம் விதி', text_mr: 'न्यूटनचा दुसरा नियम' },
            { id: 'c', text: "Newton's Third Law", text_hi: 'न्यूटन का तीसरा नियम', text_te: 'న్యూటన్ మూడవ నియమం', text_ta: 'நியூட்டனின் மூன்றாம் விதி', text_mr: 'न्यूटनचा तिसरा नियम' },
            { id: 'd', text: "Friction", text_hi: 'घर्षण', text_te: 'ఘర్షణ', text_ta: 'உராய்வு', text_mr: 'घर्षण' },
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
        hints_ta: [
            "ஒவ்வொரு வினைக்கும் சமமான மற்றும் எதிர் வினை உண்டு.",
            "வினை-எதிர்வினை ஜோடிகளைப் பற்றி சிந்தியுங்கள்.",
            "இந்த விதி ராக்கெட்டுகள் எவ்வாறு செயல்படுகின்றன என்பதை விளக்குகிறது."
        ],
        hints_mr: [
            "प्रत्येक क्रियेला समान आणि विरुद्ध प्रतिक्रिया असते.",
            "क्रिया-प्रतिक्रिया जोड्यांबद्दल विचार करा.",
            "हा नियम रॉकेट कसे कार्य करते हे स्पष्ट करतो."
        ]
      },
       {
        id: 4,
        text: 'Calculate the force needed to accelerate a 10 kg object at 5 m/s².',
        text_hi: '10 किलो की वस्तु को 5 m/s² पर त्वरित करने के लिए आवश्यक बल की गणना करें।',
        text_te: '10 కిలోల వస్తువును 5 మీ/సె² వద్ద త్వరణానికి గురిచేయడానికి అవసరమైన శక్తిని లెక్కించండి.',
        text_ta: '10 கிலோ எடையுள்ள பொருளை 5 மீ/வி² வேகத்தில் முடுக்கிவிட தேவையான விசையைக் கணக்கிடுங்கள்.',
        text_mr: '10 किलो वजनाच्या वस्तूला 5 मी/से² वेगाने गती देण्यासाठी लागणाऱ्या बलाची गणना करा.',
        options: [
          { id: 'a', text: '50 N', text_hi: '50 न्यूटन', text_te: '50 N', text_ta: '50 N', text_mr: '50 N' },
          { id: 'b', text: '2 N', text_hi: '2 न्यूटन', text_te: '2 N', text_ta: '2 N', text_mr: '2 N' },
          { id: 'c', text: '0.5 N', text_hi: '0.5 न्यूटन', text_te: '0.5 N', text_ta: '0.5 N', text_mr: '0.5 N' },
          { id: 'd', text: '15 N', text_hi: '15 न्यूटन', text_te: '15 N', text_ta: '15 N', text_mr: '15 N' },
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
        hints_ta: [
            "சூத்திரத்தை நினைவில் கொள்ளுங்கள்: விசை = நிறை × முடுக்கம்.",
            "பொருளின் நிறையை அதன் முடுக்கத்துடன் பெருக்கவும்.",
            "10 ஐ 5 ஆல் பெருக்கினால் உங்களுக்கு விடை கிடைக்கும்."
        ],
        hints_mr: [
            "सूत्र लक्षात ठेवा: बल = वस्तुमान × त्वरण.",
            "वस्तूचे वस्तुमान त्याच्या त्वरणाने गुणा.",
            "10 ला 5 ने गुणल्यास तुम्हाला उत्तर मिळेल."
        ]
      },
       {
        id: 5,
        text: 'What type of force pulls objects toward the center of the Earth?',
        text_hi: 'किस प्रकार का बल वस्तुओं को पृथ्वी के केंद्र की ओर खींचता है?',
        text_te: 'ఏ రకమైన శక్తి వస్తువులను భూమి కేంద్రం వైపుకు లాగుతుంది?',
        text_ta: 'எந்த வகையான விசை பொருட்களை பூமியின் மையத்தை நோக்கி இழுக்கிறது?',
        text_mr: 'कोणत्या प्रकारचे बल वस्तू पृथ्वीच्या केंद्राकडे खेचते?',
        options: [
          { id: 'a', text: 'Magnetic Force', text_hi: 'चुंबकीय बल', text_te: 'అయస్కాంత శక్తి', text_ta: 'காந்த விசை', text_mr: 'चुंबकीय बल' },
          { id: 'b', text: 'Frictional Force', text_hi: 'घर्षण बल', text_te: 'ఘర్షణ శక్తి', text_ta: 'உராய்வு விசை', text_mr: 'घर्षण बल' },
          { id: 'c', text: 'Gravitational Force', text_hi: 'गुरुत्वाकर्षण बल', text_te: 'గురుత్వాకర్షణ శక్తి', text_ta: 'ஈர்ப்பு விசை', text_mr: 'गुरुत्वाकर्षण बल' },
          { id: 'd', text: 'Tension Force', text_hi: 'तनाव बल', text_te: 'తన్యత శక్తి', text_ta: 'இழுவிசை', text_mr: 'तणाव बल' },
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
        hints_ta: [
            "அதுதான் உங்களைத் தரையில் வைத்திருக்கிறது.",
            "ஒரு ஆப்பிள் ஒரு விஞ்ஞானியின் தலையில் விழுந்தது, இது இந்த கண்டுபிடிப்புக்கு வழிவகுத்தது.",
            "சந்திரன் பூமியைச் சுற்றி வர வைக்கும் அதே விசை இதுதான்."
        ],
        hints_mr: [
            "हेच तुम्हाला जमिनीवर ठेवते.",
            "एका शास्त्रज्ञाच्या डोक्यावर एक सफरचंद पडले, ज्यामुळे हा शोध लागला.",
            "हे तेच बल आहे जे चंद्राला पृथ्वीभोवती फिरवत ठेवते."
        ]
      }
    ],
  },
  {
    id: 'physics-level-2',
    subject: 'physics',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    title_ta: 'நிலை 2',
    title_mr: 'स्तर 2',
    description: 'Exploring energy and work.',
    description_hi: 'ऊर्जा और कार्य की खोज।',
    description_te: 'శక్తి మరియు పనిని అన్వేషించడం.',
    description_ta: 'ஆற்றல் மற்றும் வேலை பற்றி ஆராய்தல்.',
    description_mr: 'ऊर्जा आणि कार्य शोधणे.',
    badgeId: 'energy-expert',
    badge_emoji: '⚡️',
    badge_color: 'bg-blue-400 text-blue-900',
    questions: [
        {
            id: 1,
            text: 'What is the standard unit of energy?',
            text_hi: 'ऊर्जा की मानक इकाई क्या है?',
            text_te: 'శక్తికి ప్రామాణిక ప్రమాణం ఏమిటి?',
            text_ta: 'ஆற்றலின் நிலையான அலகு என்ன?',
            text_mr: 'ऊर्जेचे मानक एकक काय आहे?',
            options: [
                { id: 'a', text: 'Newton', text_hi: 'न्यूटन', text_te: 'న్యూటన్', text_ta: 'நியூட்டன்', text_mr: 'न्यूटन' },
                { id: 'b', text: 'Watt', text_hi: 'वाट', text_te: 'వాట్', text_ta: 'வாட்', text_mr: 'वॅट' },
                { id: 'c', text: 'Joule', text_hi: 'जूल', text_te: 'జౌల్', text_ta: 'ஜூல்', text_mr: 'ज्युल' },
                { id: 'd', text: 'Volt', text_hi: 'वोल्ट', text_te: 'వోల్ట్', text_ta: 'வோல்ட்', text_mr: 'व्होल्ट' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            hints: ["It's named after James Prescott Joule.", "It measures work or energy.", "Symbol is 'J'."],
            hints_hi: ["इसका नाम जेम्स प्रेस्कॉट जूल के नाम पर रखा गया है।", "यह कार्य या ऊर्जा को मापता है।", "प्रतीक 'J' है।"],
            hints_te: ["దీనికి జేమ్స్ ప్రెస్కాట్ జౌల్ పేరు పెట్టారు.", "ఇది పని లేదా శక్తిని కొలుస్తుంది.", "చిహ్నం 'J'."],
            hints_ta: ["இது ஜேம்ஸ் பிரஸ்காட் ஜூல் பெயரிடப்பட்டது.", "இது வேலை அல்லது ஆற்றலை அளவிடுகிறது.", "சின்னம் 'J'."],
            hints_mr: ["हे जेम्स प्रेस्कॉट जूल यांच्या नावावरून ठेवले आहे.", "हे कार्य किंवा ऊर्जा मोजते.", "चिन्ह 'J' आहे."]
        },
        {
            id: 2,
            text: 'An object in motion has which type of energy?',
            text_hi: 'गति में वस्तु में किस प्रकार की ऊर्जा होती है?',
            text_te: 'చలనంలో ఉన్న వస్తువుకు ఏ రకమైన శక్తి ఉంటుంది?',
            text_ta: 'இயக்கத்தில் உள்ள ஒரு பொருளுக்கு எந்த வகை ஆற்றல் உள்ளது?',
            text_mr: 'गतिमान वस्तूमध्ये कोणत्या प्रकारची ऊर्जा असते?',
            options: [
                { id: 'a', text: 'Potential Energy', text_hi: 'स्थितिज ऊर्जा', text_te: 'స్థితిజ శక్తి', text_ta: 'நிலை ஆற்றல்', text_mr: 'स्थितिज ऊर्जा' },
                { id: 'b', text: 'Kinetic Energy', text_hi: 'गतिज ऊर्जा', text_te: 'గతిజ శక్తి', text_ta: 'இயக்க ஆற்றல்', text_mr: 'गतिज ऊर्जा' },
                { id: 'c', text: 'Chemical Energy', text_hi: 'रासायनिक ऊर्जा', text_te: 'రసాయన శక్తి', text_ta: 'வேதி ஆற்றல்', text_mr: 'रासायनिक ऊर्जा' },
                { id: 'd', text: 'Thermal Energy', text_hi: 'ऊष्मीय ऊर्जा', text_te: 'ఉష్ణ శక్తి', text_ta: 'வெப்ப ஆற்றல்', text_mr: 'औष्णिक ऊर्जा' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            hints: ["It depends on the object's mass and speed.", "The faster it moves, the more of this energy it has.", "K.E. = 1/2 * m * v^2"],
            hints_hi: ["यह वस्तु के द्रव्यमान और गति पर निर्भर करता है।", "जितनी तेजी से यह चलता है, उतनी ही अधिक यह ऊर्जा होती है।", "K.E. = 1/2 * m * v^2"],
            hints_te: ["ఇది వస్తువు యొక్క ద్రవ్యరాశి మరియు వేగంపై ఆధారపడి ఉంటుంది.", "అది ఎంత వేగంగా కదులుతుందో, అంత ఎక్కువ ఈ శక్తి ఉంటుంది.", "K.E. = 1/2 * m * v^2"],
            hints_ta: ["இது பொருளின் நிறை மற்றும் வேகத்தைப் பொறுத்தது.", "அது எவ்வளவு வேகமாக நகர்கிறதோ, அவ்வளவு ஆற்றல் அதிகமாக இருக்கும்.", "K.E. = 1/2 * m * v^2"],
            hints_mr: ["हे वस्तूच्या वस्तुमान आणि वेगावर अवलंबून असते.", "जितक्या वेगाने ते फिरते, तितकी जास्त ही ऊर्जा असते.", "K.E. = 1/2 * m * v^2"]
        },
        {
            id: 3,
            text: 'A book sitting on a high shelf is an example of what kind of energy?',
            text_hi: 'एक ऊंची शेल्फ पर रखी किताब किस प्रकार की ऊर्जा का उदाहरण है?',
            text_te: 'ఎత్తైన షెల్ఫ్‌లో ఉన్న పుస్తకం ఏ రకమైన శక్తికి ఉదాహరణ?',
            text_ta: 'உயரமான அலமாரியில் உள்ள புத்தகம் எந்த வகையான ஆற்றலுக்கு எடுத்துக்காட்டு?',
            text_mr: 'उंच शेल्फवर ठेवलेले पुस्तक कोणत्या प्रकारच्या ऊर्जेचे उदाहरण आहे?',
            options: [
                { id: 'a', text: 'Kinetic Energy', text_hi: 'गतिज ऊर्जा', text_te: 'గతిజ శక్తి', text_ta: 'இயக்க ஆற்றல்', text_mr: 'गतिज ऊर्जा' },
                { id: 'b', text: 'Potential Energy', text_hi: 'स्थितिज ऊर्जा', text_te: 'స్థితిజ శక్తి', text_ta: 'நிலை ஆற்றல்', text_mr: 'स्थितिज ऊर्जा' },
                { id: 'c', text: 'Sound Energy', text_hi: 'ध्वनि ऊर्जा', text_te: 'ధ్వని శక్తి', text_ta: 'ஒலி ஆற்றல்', text_mr: 'ध्वनी ऊर्जा' },
                { id: 'd', text: 'Light Energy', text_hi: 'प्रकाश ऊर्जा', text_te: 'కాంతి శక్తి', text_ta: 'ஒளி ஆற்றல்', text_mr: 'प्रकाश ऊर्जा' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            hints: ["It is stored energy.", "It is due to the book's position or height.", "If it falls, this energy converts to kinetic energy."],
            hints_hi: ["यह संग्रहीत ऊर्जा है।", "यह पुस्तक की स्थिति या ऊंचाई के कारण है।", "यदि यह गिरता है, तो यह ऊर्जा गतिज ऊर्जा में परिवर्तित हो जाती है।"],
            hints_te: ["ఇది నిల్వ చేయబడిన శక్తి.", "ఇది పుస్తకం యొక్క స్థానం లేదా ఎత్తు కారణంగా ఉంటుంది.", "అది కింద పడితే, ఈ శక్తి గతిజ శక్తిగా మారుతుంది."],
            hints_ta: ["இது சேமிக்கப்பட்ட ஆற்றல்.", "இது புத்தகத்தின் நிலை அல்லது உயரத்தைப் பொறுத்தது.", "அது விழுந்தால், இந்த ஆற்றல் இயக்க ஆற்றலாக மாறும்."],
            hints_mr: ["ही साठवलेली ऊर्जा आहे.", "हे पुस्तकाच्या स्थिती किंवा उंचीमुळे आहे.", "जर ते पडले, तर ही ऊर्जा गतिज ऊर्जेत रूपांतरित होते."]
        },
        {
            id: 4,
            text: 'Which of these is a non-renewable source of energy?',
            text_hi: 'इनमें से कौन सा ऊर्जा का गैर-नवीकरणीय स्रोत है?',
            text_te: 'వీటిలో పునరుత్పాదక శక్తి వనరు ఏది?',
            text_ta: 'இவற்றில் எது புதுப்பிக்க முடியாத ஆற்றல் மூலம்?',
            text_mr: 'यापैकी कोणता ऊर्जेचा अपारंपरिक स्रोत आहे?',
            options: [
                { id: 'a', text: 'Solar Power', text_hi: 'सौर ऊर्जा', text_te: 'సౌర శక్తి', text_ta: 'சூரிய சக்தி', text_mr: 'सौर ऊर्जा' },
                { id: 'b', text: 'Wind Power', text_hi: 'पवन ऊर्जा', text_te: 'పవన శక్తి', text_ta: 'காற்றாலை சக்தி', text_mr: 'पवन ऊर्जा' },
                { id: 'c', text: 'Coal', text_hi: 'कोयला', text_te: 'బొగ్గు', text_ta: 'நிலக்கரி', text_mr: 'कोळसा' },
                { id: 'd', text: 'Hydropower', text_hi: 'जलविद्युत', text_te: 'జలవిద్యుత్', text_ta: 'நீர் மின்சாரம்', text_mr: 'जलविद्युत' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            hints: ["It's a fossil fuel.", "It takes millions of years to form.", "Burning it releases carbon dioxide."],
            hints_hi: ["यह एक जीवाश्म ईंधन है।", "इसे बनने में लाखों साल लगते हैं।", "इसे जलाने से कार्बन डाइऑक्साइड निकलती है।"],
            hints_te: ["ఇది ఒక శిలాజ ఇంధనం.", "ఇది ఏర్పడటానికి లక్షలాది సంవత్సరాలు పడుతుంది.", "దానిని కాల్చడం వల్ల కార్బన్ డయాక్సైడ్ విడుదల అవుతుంది."],
            hints_ta: ["இது ஒரு புதைபடிவ எரிபொருள்.", "இது உருவாக மில்லியன் கணக்கான ஆண்டுகள் ஆகும்.", "இதை எரிப்பதால் கார்பன் டை ஆக்சைடு வெளியிடப்படுகிறது."],
            hints_mr: ["हे एक जीवाश्म इंधन आहे.", "हे तयार होण्यासाठी लाखो वर्षे लागतात.", "ते जाळल्याने कार्बन डायऑक्साइड बाहेर पडतो."]
        },
        {
            id: 5,
            text: 'Energy cannot be created or destroyed, only transformed. This is the law of...',
            text_hi: 'ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है, केवल रूपांतरित किया जा सकता है। यह किसका नियम है...',
            text_te: 'శక్తిని సృష్టించడం లేదా నాశనం చేయడం సాధ్యం కాదు, కేవలం రూపాంతరం చెందుతుంది. ఇది దేని నియమం...',
            text_ta: 'ஆற்றலை உருவாக்கவோ அழிக்கவோ முடியாது, மாற்ற மட்டுமே முடியும். இது யாருடைய விதி...',
            text_mr: 'ऊर्जा निर्माण किंवा नष्ट केली जाऊ शकत नाही, फक्त रूपांतरित केली जाऊ शकते. हा कोणता नियम आहे...',
            options: [
                { id: 'a', text: 'Conservation of Energy', text_hi: 'ऊर्जा संरक्षण', text_te: 'శక్తి పరిరక్షణ', text_ta: 'ஆற்றல் பாதுகாப்பு', text_mr: 'ऊर्जा संवर्धन' },
                { id: 'b', text: 'Conservation of Mass', text_hi: 'द्रव्यमान संरक्षण', text_te: 'ద్రవ్యరాశి పరిరక్షణ', text_ta: 'പിണ്ഡ സംരക്ഷണം', text_mr: 'वस्तुमान संवर्धन' },
                { id: 'c', text: 'Thermodynamics', text_hi: 'ऊष्मप्रवैगिकी', text_te: 'ఉష్ణగతికశాస్త్రం', text_ta: 'வெப்ப இயக்கவியல்', text_mr: 'उष्मागतिकी' },
                { id: 'd', text: 'Gravity', text_hi: 'गुरुत्वाकर्षण', text_te: 'గురుత్వాకర్షణ', text_ta: 'புவியீர்ப்பு', text_mr: 'गुरुत्वाकर्षण' },
            ],
            correctAnswer: 'a',
            difficulty: 'easy',
            hints: ["It's a fundamental principle in physics.", "The total energy in a closed system remains constant.", "The first word is 'Conservation'."],
            hints_hi: ["यह भौतिकी का एक मौलिक सिद्धांत है।", "एक बंद प्रणाली में कुल ऊर्जा स्थिर रहती है।", "पहला शब्द 'संरक्षण' है।"],
            hints_te: ["ఇది భౌతికశాస్త్రంలో ఒక ప్రాథమిక సూత్రం.", "ఒక సంవృత వ్యవస్థలో మొత్తం శక్తి స్థిరంగా ఉంటుంది.", "మొదటి పదం 'పరిరక్షణ'."],
            hints_ta: ["இது இயற்பியலில் ஒரு அடிப்படை தத்துவம்.", "ஒரு மூடிய அமைப்பில் மொத்த ஆற்றல் மாறாமல் இருக்கும்.", "முதல் வார்த்தை 'பாதுகாப்பு'."],
            hints_mr: ["हे भौतिकशास्त्रातील एक मूलभूत तत्त्व आहे.", "बंद प्रणालीतील एकूण ऊर्जा स्थिर राहते.", "पहिला शब्द 'संवर्धन' आहे."]
        }
    ]
},
  {
    id: 'biology-level-1',
    subject: 'biology',
    title: 'Level 1',
    title_hi: 'स्तर 1',
    title_te: 'స్థాయి 1',
    title_ta: 'நிலை 1',
    title_mr: 'स्तर 1',
    description: 'The magic of photosynthesis.',
    description_hi: 'प्रकाश संश्लेषण का जादू।',
    description_te: 'కిరణజన్య సంయోగక్రియ యొక్క మాయాజాలం.',
    description_ta: 'ஒளிச்சேர்க்கையின் மந்திரம்.',
    description_mr: 'प्रकाशसंश्लेषणाची जादू.',
    badgeId: 'botany-expert',
    badge_emoji: '🌿',
    badge_color: 'bg-green-400 text-green-900',
    questions: [
      {
        id: 1,
        text: 'What is the process by which plants make their food called?',
        text_hi: 'पौधे जिस प्रक्रिया से अपना भोजन बनाते हैं, उसे क्या कहते हैं?',
        text_te: 'మొక్కలు తమ ఆహారాన్ని తయారుచేసుకునే ప్రక్రియను ఏమంటారు?',
        text_ta: 'தாவரங்கள் தங்கள் உணவைத் தயாரிக்கும் செயல்முறைக்கு என்ன பெயர்?',
        text_mr: 'वनस्पती ज्या प्रक्रियेद्वारे आपले अन्न तयार करतात तिला काय म्हणतात?',
        options: [
          { id: 'a', text: 'Respiration', text_hi: 'श्वसन', text_te: 'శ్వాసక్రియ', text_ta: 'சுவாசம்', text_mr: 'श्वसन' },
          { id: 'b', text: 'Transpiration', text_hi: 'वाष्पोत्सर्जन', text_te: 'భాష్పోత్సేకం', text_ta: 'நீராவிப்போக்கு', text_mr: 'बाष्पोत्सर्जन' },
          { id: 'c', text: 'Photosynthesis', text_hi: 'प्रकाश संश्लेषण', text_te: 'కిరణజన్య సంయోగక్రియ', text_ta: 'ஒளிச்சேர்க்கை', text_mr: 'प्रकाशसंश्लेषण' },
          { id: 'd', 'text': 'Germination', text_hi: 'अंकुरण', text_te: 'అంకురోత్పత్తి', text_ta: 'முளைத்தல்', text_mr: 'अंकुरण' },
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
        hints_ta: [
            "இதில் சூரிய ஒளி, நீர் மற்றும் கார்பன் டை ஆக்சைடு ஆகியவை அடங்கும்.",
            "'போட்டோ' என்ற சொல்லுக்கு ஒளி என்று பொருள்.",
            "இந்த செயல்முறை காற்றில் ஆக்ஸிஜனை வெளியிடுகிறது."
        ],
        hints_mr: [
            "यात सूर्यप्रकाश, पाणी आणि कार्बन डायऑक्साइड यांचा समावेश असतो.",
            "'फोटो' या शब्दाचा अर्थ प्रकाश आहे.",
            "ही प्रक्रिया हवेत ऑक्सिजन सोडते."
        ]
      },
      {
        id: 2,
        text: 'What gas do plants absorb from the atmosphere for photosynthesis?',
        text_hi: 'प्रकाश संश्लेषण के लिए पौधे वायुमंडल से कौन सी गैस अवशोषित करते हैं?',
        text_te: 'కిరణజన్య సంయోగక్రియ కోసం మొక్కలు వాతావరణం నుండి ఏ వాయువును గ్రహిస్తాయి?',
        text_ta: 'ஒளிச்சேர்க்கைக்காக தாவரங்கள் வளிமண்டலத்திலிருந்து எந்த வாயுவை உறிஞ்சுகின்றன?',
        text_mr: 'प्रकाशसंश्लेषणासाठी वनस्पती वातावरणातून कोणता वायू शोषून घेतात?',
        options: [
            { id: 'a', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్', text_ta: 'ஆக்ஸிஜன்', text_mr: 'ऑक्सिजन' },
            { id: 'b', text: 'Carbon Dioxide', text_hi: 'कार्बन डाइऑक्साइड', text_te: 'కార్బన్ డయాక్సైడ్', text_ta: 'கார்பன் டை ஆக்சைடு', text_mr: 'कार्बन डायऑक्साइड' },
            { id: 'c', text: 'Nitrogen', text_hi: 'नाइट्रोजन', text_te: 'నత్రజని', text_ta: 'நைட்ரஜன்', text_mr: 'नायट्रोजन' },
            { id: 'd', text: 'Hydrogen', text_hi: 'हाइड्रोजन', text_te: 'హైడ్రోజన్', text_ta: 'ஹைட்ரஜன்', text_mr: 'हायड्रोजन' },
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
        hints_ta: [
            "இது மனிதர்களும் விலங்குகளும் சுவாசிக்கும் வாயு.",
            "அதன் வேதியியல் சூத்திரம் CO2.",
            "இந்த வாயுவின் அதிகப்படியான அளவு பசுமை இல்ல விளைவுக்கு பங்களிக்கிறது."
        ],
        hints_mr: [
            "हा तो वायू आहे जो मानव आणि प्राणी श्वासाद्वारे बाहेर टाकतात.",
            "त्याचे रासायनिक सूत्र CO2 आहे.",
            "या वायूचे जास्त प्रमाण हरितगृह परिणामास कारणीभूत ठरते."
        ]
      },
      {
        id: 3,
        text: 'Which part of the plant absorbs water and nutrients from the soil?',
        text_hi: 'पौधे का कौन सा भाग मिट्टी से पानी और पोषक तत्वों को अवशोषित करता है?',
        text_te: 'మొక్క యొక్క ఏ భాగం నేల నుండి నీరు మరియు పోషకాలను గ్రహిస్తుంది?',
        text_ta: 'தாவரத்தின் எந்தப் பகுதி மண்ணிலிருந்து நீரையும் ஊட்டச்சத்துக்களையும் உறிஞ்சுகிறது?',
        text_mr: 'वनस्पतीचा कोणता भाग मातीतून पाणी आणि पोषक तत्वे शोषून घेतो?',
        options: [
            { id: 'a', text: 'Leaf', text_hi: 'पत्ती', text_te: 'ఆకు', text_ta: 'இலை', text_mr: 'पान' },
            { id: 'b', text: 'Stem', text_hi: 'तना', text_te: 'కాండం', text_ta: 'தண்டு', text_mr: 'खोड' },
            { id: 'c', text: 'Flower', text_hi: 'फूल', text_te: 'పువ్వు', text_ta: 'மலர்', text_mr: 'फूल' },
            { id: 'd', text: 'Root', text_hi: 'जड़', text_te: 'వేరు', text_ta: 'வேர்', text_mr: 'मूळ' },
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
        hints_ta: [
            "இந்தப் பகுதி பொதுவாக நிலத்தடியில் இருக்கும்.",
            "இது தாவரத்திற்கு ஒரு நங்கூரம் போல செயல்படுகிறது.",
            "இதை தாவரத்திற்கான ஒரு உறிஞ்சுகுழல் போல நினைத்துப் பாருங்கள்."
        ],
        hints_mr: [
            "हा भाग सहसा जमिनीखाली असतो.",
            "हे वनस्पतीसाठी अँकरसारखे काम करते.",
            "याचा विचार वनस्पतीसाठी स्ट्रॉसारखा करा."
        ]
      },
      {
        id: 4,
        text: 'What is the green pigment in leaves that captures sunlight?',
        text_hi: 'पत्तियों में कौन सा हरा वर्णक सूर्य के प्रकाश को पकड़ता है?',
        text_te: 'ఆకులలో సూర్యరశ్మిని సంగ్రహించే ఆకుపచ్చ వర్ణద్రవ్యం ఏది?',
        text_ta: 'இலைகளில் சூரிய ஒளியைப் பிடிக்கும் பச்சை நிறமி எது?',
        text_mr: 'पानांमधील कोणता हिरवा रंगद्रव्य सूर्यप्रकाश शोषून घेतो?',
        options: [
          { id: 'a', text: 'Chlorophyll', text_hi: 'क्लोरोफिल', text_te: 'క్లోరోఫిల్', text_ta: 'குளோரோபில்', text_mr: 'हरितद्रव्य' },
          { id: 'b', text: 'Carotene', text_hi: 'कैरोटीन', text_te: 'కెరోటిన్', text_ta: 'கரோட்டின்', text_mr: 'कॅरोटीन' },
          { id: 'c', text: 'Xanthophyll', text_hi: 'ज़ैंथोफिल', text_te: 'క్సాంతోఫిల్', text_ta: 'சாந்தோபில்', text_mr: 'झँथोफिल' },
          { id: 'd', text: 'Anthocyanin', text_hi: 'एंथोसायनिन', text_te: 'ఆంథోసైనిన్', text_ta: 'அந்தோசயனின்', text_mr: 'अँथोसायनिन' },
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
        hints_ta: [
            "பெரும்பாலான தாவரங்கள் பச்சை நிறத்தில் இருப்பதற்கு இதுவே காரணம்.",
            "இது தாவர செல்களின் குளோரோபிளாஸ்ட்களில் அமைந்துள்ளது.",
            "இது 'குளோரோஃபார்ம்' போல ஒலிக்கிறது."
        ],
        hints_mr: [
            "यामुळेच बहुतेक वनस्पती हिरव्या दिसतात.",
            "हे वनस्पती पेशींच्या हरितलవकांमध्ये असते.",
            "हे 'क्लोरोफॉर्म' सारखे वाटते."
        ]
      },
      {
        id: 5,
        text: 'What do plants release as a byproduct of photosynthesis?',
        text_hi: 'प्रकाश संश्लेषण के उपोत्पाद के रूप में पौधे क्या छोड़ते हैं?',
        text_te: 'కిరణజన్య సంయోగక్రియ యొక్క ఉప-ఉత్పత్తిగా మొక్కలు దేనిని విడుదల చేస్తాయి?',
        text_ta: 'ஒளிச்சேர்க்கையின் துணை விளைபொருளாக தாவரங்கள் எதை வெளியிடுகின்றன?',
        text_mr: 'प्रकाशसंश्लेषणाचे उप-उत्पादन म्हणून वनस्पती काय सोडतात?',
        options: [
          { id: 'a', text: 'Carbon Dioxide', text_hi: 'कार्बन डाइऑक्साइड', text_te: 'కార్బన్ డయాక్సైడ్', text_ta: 'கார்பன் டை ஆக்சைடு', text_mr: 'कार्बन डायऑक्साइड' },
          { id: 'b', text: 'Water Vapor', text_hi: 'जल वाष्प', text_te: 'నీటి ఆవిరి', text_ta: 'நீராவி', text_mr: ' पाण्याची वाफ' },
          { id: 'c', text: 'Oxygen', text_hi: 'ऑक्सीजन', text_te: 'ఆక్సిజన్', text_ta: 'ஆக்ஸிஜன்', text_mr: 'ऑक्सिजन' },
          { id: 'd', text: 'Sugar', text_hi: 'शर्करा', text_te: 'చక్కెర', text_ta: 'சர்க்கரை', text_mr: 'साखर' },
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
        hints_ta: [
            "இது மனிதர்கள் சுவாசிக்கத் தேவையான வாயு.",
            "மரங்கள் இதை உற்பத்தி செய்வதால் பெரும்பாலும் 'பூமியின் நுரையீரல்' என்று அழைக்கப்படுகின்றன.",
            "அதன் வேதியியல் சின்னம் O2."
        ],
        hints_mr: [
            "हा तो वायू आहे ज्याची मानवाला श्वास घेण्यासाठी गरज असते.",
            "झाडांना अनेकदा 'पृथ्वीचे फुफ्फुस' म्हटले जाते कारण ते याचे उत्पादन करतात.",
            "त्याचे रासायनिक चिन्ह O2 आहे."
        ]
      }
    ],
  },
  {
    id: 'biology-level-2',
    subject: 'biology',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    title_ta: 'நிலை 2',
    title_mr: 'स्तर 2',
    description: 'The human body systems.',
    description_hi: 'मानव शरीर के तंत्र।',
    description_te: 'మానవ శరీర వ్యవస్థలు.',
    description_ta: 'மனித உடல் அமைப்புகள்.',
    description_mr: 'मानवी शरीर प्रणाली.',
    badgeId: 'anatomy-ace',
    badge_emoji: '🫀',
    badge_color: 'bg-red-400 text-red-900',
    questions: [
        {
            id: 1,
            text: 'Which organ pumps blood around the body?',
            text_hi: 'कौन सा अंग शरीर में रक्त पंप करता है?',
            text_te: 'శరీరమంతా రక్తాన్ని పంప్ చేసే అవయవం ఏది?',
            text_ta: 'உடலில் இரத்தத்தை பம்ப் செய்யும் உறுப்பு எது?',
            text_mr: 'कोणता अवयव शरीरात रक्त पंप करतो?',
            options: [
                { id: 'a', text: 'Lungs', text_hi: 'फेफड़े', text_te: 'ఊపిరితిత్తులు', text_ta: 'நுரையீரல்', text_mr: 'फुफ्फुसे' },
                { id: 'b', text: 'Brain', text_hi: 'मस्तिष्क', text_te: 'మెదడు', text_ta: 'மூளை', text_mr: 'मेंदू' },
                { id: 'c', text: 'Heart', text_hi: 'हृदय', text_te: 'గుండె', text_ta: 'இதயம்', text_mr: 'हृदय' },
                { id: 'd', text: 'Stomach', text_hi: 'पेट', text_te: 'కడుపు', text_ta: 'வயிறு', text_mr: 'पोट' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            hints: ["It's a muscle located in your chest.", "It beats about 100,000 times a day.", "It's part of the circulatory system."],
            hints_hi: ["यह आपकी छाती में स्थित एक मांसपेशी है।", "यह दिन में लगभग 100,000 बार धड़कता है।", "यह परिसंचरण तंत्र का हिस्सा है।"],
            hints_te: ["ఇది మీ ఛాతీలో ఉన్న కండరం.", "ఇది రోజుకు సుమారు 100,000 సార్లు కొట్టుకుంటుంది.", "ఇది ప్రసరణ వ్యవస్థలో భాగం."],
            hints_ta: ["இது உங்கள் மார்பில் அமைந்துள்ள ஒரு தசை.", "இது ஒரு நாளைக்கு சுமார் 100,000 முறை துடிக்கிறது.", "இது சுற்றோட்ட அமைப்பின் ஒரு பகுதியாகும்."],
            hints_mr: ["हा तुमच्या छातीत असलेला एक स्नायू आहे.", "हे दिवसातून सुमारे 100,000 वेळा धडकते.", "हे रक्ताभिसरण प्रणालीचा भाग आहे."]
        },
        {
            id: 2,
            text: 'What is the main function of the lungs?',
            text_hi: 'फेफड़ों का मुख्य कार्य क्या है?',
            text_te: 'ఊపిరితిత్తుల యొక్క ప్రధాన విధి ఏమిటి?',
            text_ta: 'நுரையீரலின் முக்கிய செயல்பாடு என்ன?',
            text_mr: 'फुफ्फुसांचे मुख्य कार्य काय आहे?',
            options: [
                { id: 'a', text: 'Digesting food', text_hi: 'भोजन पचाना', text_te: 'ఆహారాన్ని జీర్ణం చేయడం', text_ta: 'உணவை ஜீரணிப்பது', text_mr: 'अन्न पचवणे' },
                { id: 'b', text: 'Pumping blood', text_hi: 'रक्त पंप करना', text_te: 'రక్తాన్ని పంప్ చేయడం', text_ta: 'இரத்தத்தை பம்ப் செய்வது', text_mr: 'रक्त पंप करणे' },
                { id: 'c', text: 'Filtering waste', text_hi: 'अपशिष्ट छानना', text_te: 'వ్యర్థాలను ఫిల్టర్ చేయడం', text_ta: 'கழிவுகளை வடிகட்டுதல்', text_mr: 'कचरा गाळणे' },
                { id: 'd', text: 'Breathing', text_hi: 'सांस लेना', text_te: 'శ్వాసించడం', text_ta: 'சுவாசித்தல்', text_mr: 'श्वास घेणे' },
            ],
            correctAnswer: 'd',
            difficulty: 'easy',
            hints: ["It involves inhaling oxygen and exhaling carbon dioxide.", "You have two of them.", "It's part of the respiratory system."],
            hints_hi: ["इसमें ऑक्सीजन लेना और कार्बन डाइऑक्साइड छोड़ना शामिल है।", "आपके पास उनमें से दो हैं।", "यह श्वसन प्रणाली का हिस्सा है।"],
            hints_te: ["ఇది ఆక్సిజన్‌ను పీల్చడం మరియు కార్బన్ డయాక్సైడ్‌ను వదలడం beinhaltet.", "మీకు వాటిలో రెండు ఉన్నాయి.", "ఇది శ్వాస వ్యవస్థలో భాగం."],
            hints_ta: ["இதில் ஆக்ஸிஜனை உள்ளிழுத்து கார்பன் டை ஆக்சைடை வெளியிடுவது அடங்கும்.", "உங்களிடம் இரண்டு உள்ளன.", "இது சுவாச மண்டலத்தின் ஒரு பகுதியாகும்."],
            hints_mr: ["यात ऑक्सिजन आत घेणे आणि कार्बन डायऑक्साइड बाहेर टाकणे यांचा समावेश आहे.", "तुमच्याकडे त्यापैकी दोन आहेत.", "हे श्वसन प्रणालीचा भाग आहे."]
        },
        {
            id: 3,
            text: 'Which system is responsible for breaking down food?',
            text_hi: 'भोजन को तोड़ने के लिए कौन सी प्रणाली जिम्मेदार है?',
            text_te: 'ఆహారాన్ని విచ్ఛిన్నం చేయడానికి ఏ వ్యవస్థ బాధ్యత వహిస్తుంది?',
            text_ta: 'உணவை உடைக்க எந்த அமைப்பு பொறுப்பு?',
            text_mr: 'अन्न तोडण्यासाठी कोणती प्रणाली जबाबदार आहे?',
            options: [
                { id: 'a', text: 'Nervous System', text_hi: 'तंत्रिका तंत्र', text_te: 'నాడీ వ్యవస్థ', text_ta: 'நரம்பு மண்டலம்', text_mr: 'मज्जासंस्था' },
                { id: 'b', text: 'Digestive System', text_hi: 'पाचन तंत्र', text_te: 'జీర్ణ వ్యవస్థ', text_ta: 'செரிமான அமைப்பு', text_mr: 'पचनसंस्था' },
                { id: 'c', text: 'Skeletal System', text_hi: 'कंकाल तंत्र', text_te: 'అస్థిపంజర వ్యవస్థ', text_ta: 'எலும்புக்கூடு அமைப்பு', text_mr: 'अस्थिसंस्था' },
                { id: 'd', text: 'Circulatory System', text_hi: 'परिसंचरण तंत्र', text_te: 'ప్రసరణ వ్యవస్థ', text_ta: 'சுற்றோட்ட அமைப்பு', text_mr: 'रक्ताभिसरण संस्था' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            hints: ["It includes the stomach and intestines.", "It extracts nutrients from what you eat.", "The process starts in your mouth."],
            hints_hi: ["इसमें पेट और आंतें शामिल हैं।", "यह आपके खाने से पोषक तत्व निकालता है।", "यह प्रक्रिया आपके मुंह से शुरू होती है।"],
            hints_te: ["ఇందులో కడుపు మరియు ప్రేగులు ఉంటాయి.", "ఇది మీరు తినే దాని నుండి పోషకాలను సంగ్రహిస్తుంది.", "ఈ ప్రక్రియ మీ నోటిలో మొదలవుతుంది."],
            hints_ta: ["இதில் வயிறு மற்றும் குடல் ஆகியவை அடங்கும்.", "நீங்கள் சாப்பிடுவதிலிருந்து ஊட்டச்சத்துக்களை இது பிரித்தெடுக்கிறது.", "செயல்முறை உங்கள் வாயில் தொடங்குகிறது."],
            hints_mr: ["यात पोट आणि आतड्यांचा समावेश आहे.", "हे तुम्ही खाल्लेल्या अन्नातून पोषक तत्वे काढते.", "ही प्रक्रिया तुमच्या तोंडातून सुरू होते."]
        },
        {
            id: 4,
            text: 'What is the control center of the human body?',
            text_hi: 'मानव शरीर का नियंत्रण केंद्र क्या है?',
            text_te: 'మానవ శరీరానికి నియంత్రణ కేంద్రం ఏది?',
            text_ta: 'மனித உடலின் கட்டுப்பாட்டு மையம் எது?',
            text_mr: 'मानवी शरीराचे नियंत्रण केंद्र कोणते आहे?',
            options: [
                { id: 'a', text: 'Heart', text_hi: 'हृदय', text_te: 'గుండె', text_ta: 'இதயம்', text_mr: 'हृदय' },
                { id: 'b', text: 'Liver', text_hi: 'यकृत', text_te: 'కాలేయం', text_ta: 'கல்லீரல்', text_mr: 'यकृत' },
                { id: 'c', text: 'Spinal Cord', text_hi: 'मेरुदण्ड', text_te: 'వెన్నుపాము', text_ta: 'தண்டுவடம்', text_mr: 'पाठीचा कणा' },
                { id: 'd', text: 'Brain', text_hi: 'मस्तिष्क', text_te: 'మెదడు', text_ta: 'மூளை', text_mr: 'मेंदू' },
            ],
            correctAnswer: 'd',
            difficulty: 'easy',
            hints: ["It's protected by the skull.", "It's part of the nervous system.", "It helps you think, learn, and feel."],
            hints_hi: ["यह खोपड़ी द्वारा संरक्षित है।", "यह तंत्रिका तंत्र का हिस्सा है।", "यह आपको सोचने, सीखने और महसूस करने में मदद करता है।"],
            hints_te: ["ఇది పుర్రె ద్వారా రక్షించబడింది.", "ఇది నాడీ వ్యవస్థలో భాగం.", "ఇది మీకు ఆలోచించడానికి, నేర్చుకోవడానికి మరియు అనుభూతి చెందడానికి సహాయపడుతుంది."],
            hints_ta: ["இது மண்டை ஓட்டால் பாதுகாக்கப்படுகிறது.", "இது நரம்பு மண்டலத்தின் ஒரு பகுதியாகும்.", "இது சிந்திக்க, கற்றுக்கொள்ள மற்றும் உணர உதவுகிறது."],
            hints_mr: ["हे कवटीद्वारे संरक्षित आहे.", "हे मज्जासंस्थेचा भाग आहे.", "हे तुम्हाला विचार करण्यास, शिकण्यास आणि अनुभवण्यास मदत करते."]
        },
        {
            id: 5,
            text: 'The framework of bones that supports the body is called the...',
            text_hi: 'शरीर को सहारा देने वाली हड्डियों के ढांचे को क्या कहा जाता है...',
            text_te: 'శరీరానికి మద్దతు ఇచ్చే ఎముకల చట్రాన్ని ఏమంటారు...',
            text_ta: 'உடலைத் தாங்கும் எலும்புகளின் கட்டமைப்பு என்னவென்று அழைக்கப்படுகிறது...',
            text_mr: 'शरीराला आधार देणाऱ्या हाडांच्या चौकटीला काय म्हणतात...',
            options: [
                { id: 'a', text: 'Muscular System', text_hi: 'मांसपेशी तंत्र', text_te: 'కండరాల వ్యవస్థ', text_ta: 'தசை அமைப்பு', text_mr: 'स्नायू संस्था' },
                { id: 'b', text: 'Skeletal System', text_hi: 'कंकाल तंत्र', text_te: 'అస్థిపంజర వ్యవస్థ', text_ta: 'எலும்புக்கூடு அமைப்பு', text_mr: 'अस्थिसंस्था' },
                { id: 'c', text: 'Nervous System', text_hi: 'तंत्रिका तंत्र', text_te: 'నాడీ వ్యవస్థ', text_ta: 'நரம்பு மண்டலம்', text_mr: 'मज्जासंस्था' },
                { id: 'd', text: 'Skin', text_hi: 'त्वचा', text_te: 'చర్మం', text_ta: 'தோல்', text_mr: 'त्वचा' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            hints: ["It gives your body its shape.", "It protects your internal organs.", "An adult human has 206 bones in this system."],
            hints_hi: ["यह आपके शरीर को उसका आकार देता है।", "यह आपके आंतरिक अंगों की रक्षा करता है।", "एक वयस्क मानव में इस प्रणाली में 206 हड्डियाँ होती हैं।"],
            hints_te: ["ఇది మీ శరీరానికి దాని ఆకారాన్ని ఇస్తుంది.", "ఇది మీ అంతర్గత అవయవాలను రక్షిస్తుంది.", "ఒక వయోజన మానవునికి ఈ వ్యవస్థలో 206 ఎముకలు ఉంటాయి."],
            hints_ta: ["இது உங்கள் உடலுக்கு அதன் வடிவத்தை அளிக்கிறது.", "இது உங்கள் உள் உறுப்புகளைப் பாதுகாக்கிறது.", "ஒரு வயது வந்த மனிதனின் இந்த அமைப்பில் 206 எலும்புகள் உள்ளன."],
            hints_mr: ["हे तुमच्या शरीराला आकार देते.", "हे तुमच्या अंतर्गत अवयवांचे संरक्षण करते.", "एका प्रौढ मानवाच्या या प्रणालीमध्ये 206 हाडे असतात."]
        }
    ]
  },
  {
    id: 'mathematics-level-1',
    subject: 'mathematics',
    title: 'Level 1',
    title_hi: 'स्तर 1',
    title_te: 'స్థాయి 1',
    title_ta: 'நிலை 1',
    title_mr: 'स्तर 1',
    description: 'Basic arithmetic skills.',
    description_hi: 'मूल अंकगणितीय कौशल।',
    description_te: 'ప్రాథమిక అంకగణిత నైపుణ్యాలు.',
    description_ta: 'அடிப்படை எண்கணிதத் திறன்கள்.',
    description_mr: 'मूलभूत अंकगणित कौशल्ये.',
    badgeId: 'math-master',
    badge_emoji: '🔢',
    badge_color: 'bg-orange-400 text-orange-900',
    questions: [
      {
        id: 1,
        text: 'What is 5 multiplied by 8?',
        text_hi: '5 को 8 से गुणा करने पर क्या मिलता है?',
        text_te: '5 ను 8 తో గుణిస్తే ఎంత?',
        text_ta: '5 ஐ 8 ஆல் பெருக்கினால் என்ன?',
        text_mr: '5 ला 8 ने गुणल्यास काय येते?',
        options: [
          { id: 'a', text: '35', text_hi: '35', text_te: '35', text_ta: '35', text_mr: '35' },
          { id: 'b', text: '40', text_hi: '40', text_te: '40', text_ta: '40', text_mr: '40' },
          { id: 'c', text: '45', text_hi: '45', text_te: '45', text_ta: '45', text_mr: '45' },
          { id: 'd', 'text': '50', text_hi: '50', text_te: '50', text_ta: '50', text_mr: '50' },
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
        hints_ta: [
            "5 ஐ எட்டு முறை எண்ணுவதைப் பற்றி சிந்தியுங்கள்.",
            "எண் பூஜ்ஜியத்தில் முடிகிறது.",
            "இது நான்கு பத்துகள்."
        ],
        hints_mr: [
            "5 ला आठ वेळा मोजण्याचा विचार करा.",
            "संख्या शून्याने संपते.",
            "हे चार दशक आहेत."
        ]
      },
      {
        id: 2,
        text: 'If you have 12 apples and you give away 5, how many do you have left?',
        text_hi: 'यदि आपके पास 12 सेब हैं और आप 5 दे देते हैं, तो आपके पास कितने बचते हैं?',
        text_te: 'మీ దగ్గర 12 ఆపిల్స్ ఉంటే మరియు మీరు 5 ఇచ్చేస్తే, మీ దగ్గర ఎన్ని మిగులుతాయి?',
        text_ta: 'உங்களிடம் 12 ஆப்பிள்கள் இருந்து, 5ஐக் கொடுத்தால், மீதம் எத்தனை இருக்கும்?',
        text_mr: 'तुमच्याकडे 12 सफरचंद असतील आणि तुम्ही 5 दिले, तर तुमच्याकडे किती उरतील?',
        options: [
          { id: 'a', text: '7', text_hi: '7', text_te: '7', text_ta: '7', text_mr: '7' },
          { id: 'b', text: '6', text_hi: '6', text_te: '6', text_ta: '6', text_mr: '6' },
          { id: 'c', text: '8', text_hi: '8', text_te: '8', text_ta: '8', text_mr: '8' },
          { id: 'd', 'text': '17', text_hi: '17', text_te: '17', text_ta: '17', text_mr: '17' },
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
        hints_ta: [
            "இது ஒரு கழித்தல் கணக்கு.",
            "12 இலிருந்து ஐந்து முறை பின்னோக்கி எண்ணுங்கள்.",
            "12 - 5 = ?"
        ],
        hints_mr: [
            "ही एक वजाबाकीची समस्या आहे.",
            "12 पासून पाच वेळा मागे मोजा.",
            "12 - 5 = ?"
        ]
      },
      {
        id: 3,
        text: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
        text_hi: 'इस क्रम में अगली संख्या क्या है: 2, 4, 6, 8, ...?',
        text_te: 'ఈ క్రమంలో తదుపరి సంఖ్య ఏది: 2, 4, 6, 8, ...?',
        text_ta: 'இந்த வரிசையில் அடுத்த எண் என்ன: 2, 4, 6, 8, ...?',
        text_mr: 'या क्रमातील पुढील संख्या कोणती: 2, 4, 6, 8, ...?',
        options: [
          { id: 'a', text: '9', text_hi: '9', text_te: '9', text_ta: '9', text_mr: '9' },
          { id: 'b', text: '12', text_hi: '12', text_te: '12', text_ta: '12', text_mr: '12' },
          { id: 'c', text: '10', text_hi: '10', text_te: '10', text_ta: '10', text_mr: '10' },
          { id: 'd', 'text': '16', text_hi: '16', text_te: '16', text_ta: '16', text_mr: '16' },
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
        hints_ta: [
            "ஒவ்வொரு முறையும் எண்கள் ஒரே அளவில் அதிகரித்து வருகின்றன.",
            "இவை அனைத்தும் இரட்டைப்படை எண்கள்.",
            "8 + 2 என்ன?"
        ],
        hints_mr: [
            "प्रत्येक वेळी संख्या समान प्रमाणात वाढत आहेत.",
            "या सर्व सम संख्या आहेत.",
            "8 + 2 किती?"
        ]
      },
       {
        id: 4,
        text: 'How many sides does a triangle have?',
        text_hi: 'एक त्रिभुज में कितनी भुजाएँ होती हैं?',
        text_te: 'ఒక త్రిభుజానికి ఎన్ని భుజాలు ఉంటాయి?',
        text_ta: 'ஒரு முக்கோணத்திற்கு எத்தனை பக்கங்கள் உள்ளன?',
        text_mr: 'त्रिकोणाला किती बाजू असतात?',
        options: [
          { id: 'a', text: '3', text_hi: '3', text_te: '3', text_ta: '3', text_mr: '3' },
          { id: 'b', text: '4', text_hi: '4', text_te: '4', text_ta: '4', text_mr: '4' },
          { id: 'c', text: '5', text_hi: '5', text_te: '5', text_ta: '5', text_mr: '5' },
          { id: 'd', text: '6', text_hi: '6', text_te: '6', text_ta: '6', text_mr: '6' },
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
        hints_ta: [
            "'முக்கோணம்' என்ற பெயரில் ஒரு துப்பு உள்ளது.",
            "'மு' என்றால் மூன்று.",
            "ஒரு பீட்சா துண்டின் மூலைகளை எண்ணுங்கள்."
        ],
        hints_mr: [
            "'त्रिकोण' या नावातच एक संकेत आहे.",
            "'त्रि' म्हणजे तीन.",
            "पिझ्झाच्या तुकड्याचे कोपरे मोजा."
        ]
      },
      {
        id: 5,
        text: 'What is 100 divided by 10?',
        text_hi: '100 को 10 से विभाजित करने पर क्या मिलता है?',
        text_te: '100 ను 10 తో భాగిస్తే ఎంత?',
        text_ta: '100 ஐ 10 ஆல் வகுத்தால் என்ன?',
        text_mr: '100 ला 10 ने भागल्यास काय येते?',
        options: [
          { id: 'a', text: '1', text_hi: '1', text_te: '1', text_ta: '1', text_mr: '1' },
          { id: 'b', text: '10', text_hi: '10', text_te: '10', text_ta: '10', text_mr: '10' },
          { id: 'c', text: '100', text_hi: '100', text_te: '100', text_ta: '100', text_mr: '100' },
          { id: 'd', text: '1000', text_hi: '1000', text_te: '1000', text_ta: '1000', text_mr: '1000' },
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
        hints_ta: [
            "100 இல் 10 எத்தனை முறை செல்லும்?",
            "100 இலிருந்து ஒரு பூஜ்ஜியத்தை அகற்றவும்.",
            "10 × ? = 100"
        ],
        hints_mr: [
            "100 मध्ये 10 किती वेळा जातो?",
            "100 मधून फक्त एक शून्य काढा.",
            "10 × ? = 100"
        ]
      }
    ]
  },
   {
    id: 'mathematics-level-2',
    subject: 'mathematics',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    title_ta: 'நிலை 2',
    title_mr: 'स्तर 2',
    description: 'Shapes and basic geometry.',
    description_hi: 'आकृतियाँ और मूल ज्यामिति।',
    description_te: 'ఆకారాలు మరియు ప్రాథమిక జ్యామితి.',
    description_ta: 'வடிவங்கள் மற்றும் அடிப்படை வடிவியல்.',
    description_mr: 'आकार आणि मूलभूत भूमिती.',
    badgeId: 'geometry-genius',
    badge_emoji: '📐',
    badge_color: 'bg-yellow-500 text-yellow-900',
    questions: [
        {
            id: 1,
            text: 'How many sides does a square have?',
            text_hi: 'एक वर्ग में कितनी भुजाएँ होती हैं?',
            text_te: 'ఒక చతురస్రానికి ఎన్ని భుజాలు ఉంటాయి?',
            text_ta: 'ஒரு சதுரத்திற்கு எத்தனை பக்கங்கள் உள்ளன?',
            text_mr: 'चौरसाला किती बाजू असतात?',
            options: [
                { id: 'a', text: '3', text_hi: '3', text_te: '3', text_ta: '3', text_mr: '3' },
                { id: 'b', text: '4', text_hi: '4', text_te: '4', text_ta: '4', text_mr: '4' },
                { id: 'c', text: '5', text_hi: '5', text_te: '5', text_ta: '5', text_mr: '5' },
                { id: 'd', 'text': '6', text_hi: '6', text_te: '6', text_ta: '6', text_mr: '6' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            hints: ["All its sides are equal in length.", "It has four right angles.", "Think of a chessboard square."],
            hints_hi: ["इसकी सभी भुजाएँ लंबाई में बराबर होती हैं।", "इसके चार समकोण होते हैं।", "एक शतरंज की बिसात के वर्ग के बारे में सोचें।"],
            hints_te: ["దాని అన్ని భుజాలు సమాన పొడవు కలిగి ఉంటాయి.", "దానికి నాలుగు లంబ కోణాలు ఉంటాయి.", "చదరంగపు చతురస్రం గురించి ఆలోచించండి."],
            hints_ta: ["அதன் அனைத்து பக்கங்களும் சம நீளம் கொண்டவை.", "அதற்கு நான்கு செங்கோணங்கள் உள்ளன.", "ஒரு சதுரங்க சதுரத்தைப் பற்றி சிந்தியுங்கள்."],
            hints_mr: ["त्याच्या सर्व बाजू समान लांबीच्या असतात.", "त्याला चार काटकोन असतात.", "बुद्धिबळाच्या पटावरील चौरसाचा विचार करा."]
        },
        {
            id: 2,
            text: 'What is a shape with five sides called?',
            text_hi: 'पांच भुजाओं वाली आकृति को क्या कहते हैं?',
            text_te: 'ఐదు భుజాలు ఉన్న ఆకారాన్ని ఏమంటారు?',
            text_ta: 'ஐந்து பக்கங்களைக் கொண்ட வடிவம் என்னவென்று அழைக்கப்படுகிறது?',
            text_mr: 'पाच बाजू असलेल्या आकृतीला काय म्हणतात?',
            options: [
                { id: 'a', text: 'Hexagon', text_hi: 'षट्कोण', text_te: 'షడ్భుజి', text_ta: 'அறுகோணம்', text_mr: 'षटकोन' },
                { id: 'b', text: 'Octagon', text_hi: 'अष्टकोण', text_te: 'అష్టభుజి', text_ta: 'எண்கோணம்', text_mr: 'अष्टकोन' },
                { id: 'c', text: 'Pentagon', text_hi: 'पंचकोण', text_te: 'పంచభుజి', text_ta: 'ஐங்கோணம்', text_mr: 'पंचकोन' },
                { id: 'd', 'text': 'Triangle', text_hi: 'त्रिभुज', text_te: 'త్రిభుజం', text_ta: 'முக்கோணம்', text_mr: 'त्रिकोण' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            hints: ["'Penta' means five.", "Think of the famous building in Washington D.C.", "It has five angles."],
            hints_hi: ["'पेंटा' का अर्थ है पांच।", "वाशिंगटन डी.सी. की प्रसिद्ध इमारत के बारे में सोचें।", "इसके पांच कोण होते हैं।"],
            hints_te: ["'పెంటా' అంటే ఐదు.", "వాషింగ్టన్ డి.సి.లోని ప్రసిద్ధ భవనం గురించి ఆలోచించండి.", "దానికి ఐదు కోణాలు ఉంటాయి."],
            hints_ta: ["'பென்டா' என்றால் ஐந்து.", "வாஷிங்டன் டி.சி.யில் உள்ள புகழ்பெற்ற கட்டிடத்தைப் பற்றி சிந்தியுங்கள்.", "அதற்கு ஐந்து கோணங்கள் உள்ளன."],
            hints_mr: ["'पेंटा' म्हणजे पाच.", "वॉशिंग्टन डी.सी.मधील प्रसिद्ध इमारतीचा विचार करा.", "त्याला पाच कोन असतात."]
        },
        {
            id: 3,
            text: 'A circle is a...',
            text_hi: 'एक वृत्त है...',
            text_te: 'ఒక వృత్తం ఒక...',
            text_ta: 'ஒரு வட்டம் ஒரு...',
            text_mr: 'वर्तुळ म्हणजे...',
            options: [
                { id: 'a', text: 'Polygon', text_hi: 'बहुभुज', text_te: 'బహుభుజి', text_ta: 'பலகோணம்', text_mr: 'बहुभुज' },
                { id: 'b', text: 'Shape with corners', text_hi: 'कोनों वाली आकृति', text_te: 'మూలలు ఉన్న ఆకారం', text_ta: 'மூலைகளுடன் கூடிய வடிவம்', text_mr: 'कोपरे असलेला आकार' },
                { id: 'c', text: 'Round shape with no corners', text_hi: 'बिना कोनों वाली गोल आकृति', text_te: 'మూలలు లేని గుండ్రని ఆకారం', text_ta: 'மூலைகள் இல்லாத வட்ட வடிவம்', text_mr: 'कोपरे नसलेला गोल आकार' },
                { id: 'd', 'text': 'Type of square', text_hi: 'एक प्रकार का वर्ग', text_te: 'ఒక రకమైన చతురస్రం', text_ta: 'ஒரு வகை சதுரம்', text_mr: 'एक प्रकारचा चौरस' },
            ],
            correctAnswer: 'c',
            difficulty: 'easy',
            hints: ["Think of a wheel.", "It has a radius and a diameter.", "It has no straight sides."],
            hints_hi: ["एक पहिये के बारे में सोचें।", "इसका एक त्रिज्या और एक व्यास होता है।", "इसकी कोई सीधी भुजा नहीं होती है।"],
            hints_te: ["చక్రం గురించి ఆలోచించండి.", "దానికి వ్యాసార్థం మరియు వ్యాసం ఉంటాయి.", "దానికి సరళ భుజాలు లేవు."],
            hints_ta: ["ஒரு சக்கரத்தைப் பற்றி சிந்தியுங்கள்.", "அதற்கு ஆரம் மற்றும் விட்டம் உள்ளது.", "அதற்கு நேரான பக்கங்கள் இல்லை."],
            hints_mr: ["चाकाचा विचार करा.", "त्याला त्रिज्या आणि व्यास असतो.", "त्याला सरळ बाजू नाहीत."]
        },
        {
            id: 4,
            text: 'What is the area of a square with a side length of 3 cm?',
            text_hi: '3 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?',
            text_te: '3 సెం.మీ భుజం పొడవు ఉన్న చతురస్రం యొక్క వైశాల్యం ఎంత?',
            text_ta: '3 செ.மீ பக்க நீளம் கொண்ட ஒரு சதுரத்தின் பரப்பளவு என்ன?',
            text_mr: '3 सेमी बाजू असलेल्या चौरसाचे क्षेत्रफळ किती?',
            options: [
                { id: 'a', text: '6 cm²', text_hi: '6 सेमी²', text_te: '6 సెం.మీ²', text_ta: '6 செ.மீ²', text_mr: '6 सेमी²' },
                { id: 'b', text: '9 cm²', text_hi: '9 सेमी²', text_te: '9 సెం.మీ²', text_ta: '9 செ.மீ²', text_mr: '9 सेमी²' },
                { id: 'c', text: '12 cm²', text_hi: '12 सेमी²', text_te: '12 సెం.మీ²', text_ta: '12 செ.மீ²', text_mr: '12 सेमी²' },
                { id: 'd', 'text': '3 cm²', text_hi: '3 सेमी²', text_te: '3 సెం.మీ²', text_ta: '3 செ.மீ²', text_mr: '3 सेमी²' },
            ],
            correctAnswer: 'b',
            difficulty: 'easy',
            hints: ["Area of a square is side length multiplied by itself.", "What is 3 times 3?", "The unit will be square centimeters."],
            hints_hi: ["एक वर्ग का क्षेत्रफल भुजा की लंबाई को स्वयं से गुणा करने पर मिलता है।", "3 गुना 3 क्या है?", "इकाई वर्ग सेंटीमीटर होगी।"],
            hints_te: ["ఒక చతురస్రం యొక్క వైశాల్యం భుజం పొడవును దానితోనే గుణించడం.", "3 రెట్లు 3 ఎంత?", "ప్రమాణం చదరపు సెంటీమీటర్లు ఉంటుంది."],
            hints_ta: ["ஒரு சதுரத்தின் பரப்பளவு பக்க நீளத்தை அதாலேயே பெருக்குவதாகும்.", "3 பெருக்கல் 3 என்ன?", "அலகு சதுர சென்டிமீட்டராக இருக்கும்."],
            hints_mr: ["चौरसाचे क्षेत्रफळ बाजूच्या लांबीला स्वतःने गुणल्यावर मिळते.", "3 गुणिले 3 किती?", "एकक चौरस सेंटीमीटर असेल."]
        },
        {
            id: 5,
            text: 'Which shape has 6 faces, 12 edges, and 8 vertices?',
            text_hi: 'किस आकृति में 6 फलक, 12 किनारे और 8 कोने होते हैं?',
            text_te: 'ఏ ఆకారానికి 6 ముఖాలు, 12 అంచులు మరియు 8 శీర్షాలు ఉంటాయి?',
            text_ta: 'எந்த வடிவத்திற்கு 6 முகங்கள், 12 விளிம்புகள் மற்றும் 8 முனைகள் உள்ளன?',
            text_mr: 'कोणत्या आकृतीला 6 पृष्ठभाग, 12 कडा आणि 8 शिरोबिंदू असतात?',
            options: [
                { id: 'a', text: 'Pyramid', text_hi: 'पिरामिड', text_te: 'పిరమిడ్', text_ta: 'பிரமிடு', text_mr: 'पिरॅमिड' },
                { id: 'b', text: 'Sphere', text_hi: 'गोला', text_te: 'గోళం', text_ta: 'கோளம்', text_mr: 'गोल' },
                { id: 'c', text: 'Cylinder', text_hi: 'बेलन', text_te: 'సిలిండర్', text_ta: 'உருளை', text_mr: 'दंडगोल' },
                { id: 'd', 'text': 'Cube', text_hi: 'घन', text_te: 'ఘనం', text_ta: 'கன சதுரம்', text_mr: 'घन' },
            ],
            correctAnswer: 'd',
            difficulty: 'easy',
            hints: ["Think of a dice.", "All its faces are squares.", "It's a 3D shape."],
            hints_hi: ["एक पासे के बारे में सोचें।", "इसके सभी फलक वर्ग होते हैं।", "यह एक 3डी आकृति है।"],
            hints_te: ["ఒక పాచిక గురించి ఆలోచించండి.", "దాని అన్ని ముఖాలు చతురస్రాలు.", "ఇది ఒక 3డి ఆకారం."],
            hints_ta: ["ஒரு பகடையைப் பற்றி சிந்தியுங்கள்.", "அதன் அனைத்து முகங்களும் சதுரங்கள்.", "இது ஒரு 3டி வடிவம்."],
            hints_mr: ["फाशाचा विचार करा.", "त्याचे सर्व पृष्ठभाग चौरस आहेत.", "ही एक 3डी आकृती आहे."]
        }
    ]
  },
  {
    id: 'chemistry-level-1',
    subject: 'chemistry',
    title: 'Level 1',
    title_hi: 'स्तर 1',
    title_te: 'స్థాయి 1',
    title_ta: 'நிலை 1',
    title_mr: 'स्तर 1',
    description: 'Introduction to matter and its states.',
    description_hi: 'पदार्थ और उसकी अवस्थाओं का परिचय।',
    description_te: 'పదార్థం మరియు దాని స్థితుల పరిచయం.',
    description_ta: 'பருப்பொருள் மற்றும் அதன் நிலைகள் பற்றிய அறிமுகம்.',
    description_mr: 'द्रव्य आणि त्याच्या अवस्थांचा परिचय.',
    badgeId: 'chemistry-creator',
    badge_emoji: '🧪',
    badge_color: 'bg-purple-400 text-purple-900',
    questions: [
      {
        id: 1,
        text: 'What is the chemical symbol for water?',
        text_hi: 'पानी का रासायनिक प्रतीक क्या है?',
        text_te: 'నీటి రసాయన చిహ్నం ఏమిటి?',
        text_ta: 'நீரின் வேதியியல் குறியீடு என்ன?',
        text_mr: 'पाण्याचे रासायनिक चिन्ह काय आहे?',
        options: [
          { id: 'a', text: 'O2', text_hi: 'O2', text_te: 'O2', text_ta: 'O2', text_mr: 'O2' },
          { id: 'b', text: 'CO2', text_hi: 'CO2', text_te: 'CO2', text_ta: 'CO2', text_mr: 'CO2' },
          { id: 'c', text: 'H2O', text_hi: 'H2O', text_te: 'H2O', text_ta: 'H2O', text_mr: 'H2O' },
          { id: 'd', 'text': 'NaCl', text_hi: 'NaCl', text_te: 'NaCl', text_ta: 'NaCl', text_mr: 'NaCl' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        hints: ["It's made of two hydrogen atoms and one oxygen atom.", "Think 'dihydrogen monoxide'.", "It's essential for all known forms of life."],
        hints_hi: ["यह दो हाइड्रोजन परमाणुओं और एक ऑक्सीजन परमाणु से बना है।", "'डाइहाइड्रोजन मोनोऑक्साइड' सोचें।", "यह जीवन के सभी ज्ञात रूपों के लिए आवश्यक है।"],
        hints_te: ["ఇది రెండు హైడ్రోజన్ పరమాణువులు మరియు ఒక ఆక్సిజన్ పరమాణువుతో తయారైంది.", "'డైహైడ్రోజన్ మోనాక్సైడ్' అని ఆలోచించండి.", "ఇది తెలిసిన అన్ని జీవ రూపాలకు అవసరం."],
        hints_ta: ["இது இரண்டு ஹைட்ரஜன் அணுக்கள் மற்றும் ஒரு ஆக்ஸிஜன் அணுவினால் ஆனது.", "'டைஹைட்ரஜன் மோனாக்சைடு' என்று சிந்தியுங்கள்.", "இது அறியப்பட்ட அனைத்து உயிரினங்களுக்கும் அவசியமானது."],
        hints_mr: ["हे दोन हायड्रोजन अणू आणि एक ऑक्सिजन अणूपासून बनलेले आहे.", "'डायहायड्रोजन मोनोऑक्साइड' विचार करा.", "हे सर्व ज्ञात जीवसृष्टीसाठी आवश्यक आहे."]
      },
       {
        id: 2,
        text: 'Which of the following is a solid?',
        text_hi: 'निम्नलिखित में से कौन सा ठोस है?',
        text_te: 'కింది వాటిలో ఏది ఘనపదార్థం?',
        text_ta: 'பின்வருவனவற்றில் எது திடப்பொருள்?',
        text_mr: 'खालीलपैकी कोणता घन पदार्थ आहे?',
        options: [
          { id: 'a', text: 'Milk', text_hi: 'दूध', text_te: 'పాలు', text_ta: 'பால்', text_mr: 'दूध' },
          { id: 'b', text: 'Air', text_hi: 'वायु', text_te: 'గాలి', text_ta: 'காற்று', text_mr: 'हवा' },
          { id: 'c', text: 'Ice', text_hi: 'बर्फ', text_te: 'మంచు', text_ta: 'பனிக்கட்டி', text_mr: 'बर्फ' },
          { id: 'd', 'text': 'Steam', text_hi: 'भाप', text_te: 'ఆవిరి', text_ta: 'நீராவி', text_mr: 'वाफ' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        hints: ["It's the frozen form of water.", "It is hard and holds its shape.", "Its temperature is 0 degrees Celsius or below."],
        hints_hi: ["यह पानी का जमा हुआ रूप है।", "यह कठोर होता है और अपना आकार बनाए रखता है।", "इसका तापमान 0 डिग्री सेल्सियस या उससे कम होता है।"],
        hints_te: ["ఇది నీటి గడ్డకట్టిన రూపం.", "ఇది గట్టిగా ఉంటుంది మరియు దాని ఆకారాన్ని కలిగి ఉంటుంది.", "దాని ఉష్ణోగ్రత 0 డిగ్రీల సెల్సియస్ లేదా అంతకంటే తక్కువ."],
        hints_ta: ["இது நீரின் உறைந்த வடிவம்.", "இது கடினமானது மற்றும் அதன் வடிவத்தைத் தக்க வைத்துக் கொள்ளும்.", "அதன் வெப்பநிலை 0 டிகிரி செல்சியஸ் அல்லது அதற்குக் குறைவாக இருக்கும்."],
        hints_mr: ["हे पाण्याचे गोठलेले स्वरूप आहे.", "ते कठीण असते आणि आपला आकार टिकवून ठेवते.", "त्याचे तापमान 0 अंश सेल्सिअस किंवा त्यापेक्षा कमी असते."]
      },
       {
        id: 3,
        text: 'The process of a liquid turning into a gas is called...',
        text_hi: 'एक तरल के गैस में बदलने की प्रक्रिया को क्या कहा जाता है...',
        text_te: 'ద్రవం వాయువుగా మారే ప్రక్రియను ఏమంటారు...',
        text_ta: 'ஒரு திரவம் வாயுவாக மாறும் செயல்முறை என்னவென்று அழைக்கப்படுகிறது...',
        text_mr: 'द्रव वायूमध्ये रूपांतरित होण्याच्या प्रक्रियेला काय म्हणतात...',
        options: [
          { id: 'a', text: 'Freezing', text_hi: 'जमना', text_te: 'గడ్డకట్టడం', text_ta: 'உறைதல்', text_mr: 'गोठणे' },
          { id: 'b', text: 'Melting', text_hi: 'पिघलना', text_te: 'కరిగడం', text_ta: 'உருகுதல்', text_mr: 'वितळणे' },
          { id: 'c', text: 'Condensation', text_hi: 'संघनन', text_te: 'సాంద్రీకరణ', text_ta: 'ஒடுக்கம்', text_mr: 'संघनन' },
          { id: 'd', 'text': 'Evaporation', text_hi: 'वाष्पीकरण', text_te: 'భాష్పీభవనం', text_ta: 'ஆவியாதல்', text_mr: 'बाष्पीभवन' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        hints: ["It happens when you boil water.", "Puddles disappear on a sunny day because of this.", "It's the opposite of condensation."],
        hints_hi: ["यह तब होता है जब आप पानी उबालते हैं।", "धूप वाले दिन इसी वजह से पोखर गायब हो जाते हैं।", "यह संघनन के विपरीत है।"],
        hints_te: ["మీరు నీటిని మరిగించినప్పుడు ఇది జరుగుతుంది.", "ఎండ రోజున గుంటలు దీనివల్ల అదృశ్యమవుతాయి.", "ఇది సాంద్రీకరణకు వ్యతిరేకం."],
        hints_ta: ["நீங்கள் தண்ணீரைக் கொதிக்க வைக்கும்போது இது நிகழ்கிறது.", "ஒரு வெயில் நாளில் குட்டைகள் இதனால்தான் மறைந்துவிடும்.", "இது ஒடுக்கத்திற்கு எதிரானது."],
        hints_mr: ["जेव्हा तुम्ही पाणी उकळता तेव्हा हे घडते.", "उन्हाळ्याच्या दिवशी यामुळे डबकी नाहीशी होतात.", "हे संघननाच्या विरुद्ध आहे."]
      },
       {
        id: 4,
        text: 'What is the smallest particle of a chemical element?',
        text_hi: 'एक रासायनिक तत्व का सबसे छोटा कण क्या है?',
        text_te: 'ఒక రసాయన మూలకం యొక్క అతి చిన్న కణం ఏది?',
        text_ta: 'ஒரு வேதியியல் தனிமத்தின் மிகச்சிறிய துகள் எது?',
        text_mr: 'रासायनिक मूलद्रव्याचा सर्वात लहान कण कोणता?',
        options: [
          { id: 'a', text: 'Molecule', text_hi: 'अणु', text_te: 'అణువు', text_ta: 'மூலக்கூறு', text_mr: 'रेणू' },
          { id: 'b', text: 'Atom', text_hi: 'परमाणु', text_te: 'పరమాణువు', text_ta: 'அணு', text_mr: 'अणू' },
          { id: 'c', text: 'Compound', text_hi: 'यौगिक', text_te: 'సమ్మేళనం', text_ta: 'கூட்டு', text_mr: 'संयुग' },
          { id: 'd', 'text': 'Mixture', text_hi: 'मिश्रण', text_te: 'మిశ్రమం', text_ta: 'கலவை', text_mr: 'मिश्रण' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: ["Everything is made of these.", "They have a nucleus with protons and neutrons.", "It's the basic building block of matter."],
        hints_hi: ["सब कुछ इन्हीं से बना है।", "इनमें प्रोटॉन और न्यूट्रॉन के साथ एक नाभिक होता है।", "यह पदार्थ का मूल निर्माण खंड है।"],
        hints_te: ["ప్రతిదీ వీటితోనే తయారైంది.", "వాటికి ప్రోటాన్లు మరియు న్యూట్రాన్లతో కూడిన కేంద్రకం ఉంటుంది.", "ఇది పదార్థం యొక్క ప్రాథమిక నిర్మాణ భాగం."],
        hints_ta: ["எல்லாம் இவைகளால் ஆனது.", "அவை புரோட்டான்கள் மற்றும் நியூட்ரான்களுடன் ஒரு கருவைக் கொண்டுள்ளன.", "இது பொருளின் அடிப்படை கட்டுமானப் பொருள்."],
        hints_mr: ["सर्व काही यापासून बनलेले आहे.", "त्यांच्यात प्रोटॉन आणि न्यूट्रॉन असलेले केंद्रक असते.", "हा द्रव्याचा मूलभूत घटक आहे."]
      },
       {
        id: 5,
        text: 'The air we breathe is a...',
        text_hi: 'हम जो हवा में सांस लेते हैं वह एक...',
        text_te: 'మనం పీల్చే గాలి ఒక...',
        text_ta: 'நாம் சுவாசிக்கும் காற்று ஒரு...',
        text_mr: 'आपण श्वास घेतो ती हवा एक...',
        options: [
          { id: 'a', text: 'Solid', text_hi: 'ठोस', text_te: 'ఘనపదార్థం', text_ta: 'திடப்பொருள்', text_mr: 'घन' },
          { id: 'b', text: 'Liquid', text_hi: 'तरल', text_te: 'ద్రవం', text_ta: 'திரவம்', text_mr: 'द्रव' },
          { id: 'c', text: 'Mixture of gases', text_hi: 'गैसों का मिश्रण', text_te: 'వాయువుల మిశ్రమం', text_ta: 'வாயுக்களின் கலவை', text_mr: 'वायूंचे मिश्रण' },
          { id: 'd', 'text': 'Compound', text_hi: 'यौगिक', text_te: 'సమ్మేళనం', text_ta: 'கூட்டு', text_mr: 'संयुग' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        hints: ["It's mostly nitrogen and oxygen.", "You can't see it.", "It's all around us."],
        hints_hi: ["यह ज्यादातर नाइट्रोजन और ऑक्सीजन है।", "आप इसे देख नहीं सकते।", "यह हमारे चारों ओर है।"],
        hints_te: ["ఇది ఎక్కువగా నత్రజని మరియు ఆక్సిజన్.", "మీరు దానిని చూడలేరు.", "ఇది మన చుట్టూ ఉంది."],
        hints_ta: ["இது பெரும்பாலும் நைட்ரஜன் மற்றும் ஆக்ஸிஜன்.", "நீங்கள் அதைப் பார்க்க முடியாது.", "அது நம்மைச் சுற்றி உள்ளது."],
        hints_mr: ["हे बहुतेक नायट्रोजन आणि ऑक्सिजन आहे.", "तुम्ही ते पाहू शकत नाही.", "ते आपल्या सभोवताली आहे."]
      }
    ],
  },
    {
    id: 'chemistry-level-2',
    subject: 'chemistry',
    title: 'Level 2',
    title_hi: 'स्तर 2',
    title_te: 'స్థాయి 2',
    title_ta: 'நிலை 2',
    title_mr: 'स्तर 2',
    description: 'Understanding acids and bases.',
    description_hi: 'अम्ल और क्षार को समझना।',
    description_te: 'ఆమ్లాలు మరియు క్షారాలను అర్థం చేసుకోవడం.',
    description_ta: 'அமிலங்கள் மற்றும் காரங்கள் பற்றி புரிந்து கொள்ளுதல்.',
    description_mr: 'आम्ल आणि आम्लारी समजून घेणे.',
    badgeId: 'ph-pro',
    badge_emoji: '⚗️',
    badge_color: 'bg-pink-400 text-pink-900',
    questions: [
      {
        id: 1,
        text: 'What does a pH of 7 indicate?',
        text_hi: '7 का पीएच क्या दर्शाता है?',
        text_te: '7 యొక్క pH ఏమి సూచిస్తుంది?',
        text_ta: '7 இன் pH எதைக் குறிக்கிறது?',
        text_mr: '7 चे पीएच काय दर्शवते?',
        options: [
          { id: 'a', text: 'Strongly Acidic', text_hi: 'अत्यधिक अम्लीय', text_te: 'బలమైన ఆమ్లత్వం', text_ta: 'அதிக அமிலத்தன்மை', text_mr: 'तीव्र आम्लयुक्त' },
          { id: 'b', text: 'Neutral', text_hi: 'उदासीन', text_te: 'తటస్థ', text_ta: 'நடுநிலை', text_mr: 'उदासीन' },
          { id: 'c', text: 'Strongly Basic', text_hi: 'अत्यधिक क्षारीय', text_te: 'బలమైన క్షారత్వం', text_ta: 'அதிக காரத்தன்மை', text_mr: 'तीव्र आम्लारीधर्मी' },
          { id: 'd', 'text': 'Slightly Acidic', text_hi: 'थोड़ा अम्लीय', text_te: 'కొద్దిగా ఆమ్లత్వం', text_ta: 'சிறிது அமிலத்தன்மை', text_mr: 'किंचित आम्लयुक्त' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: ["Pure water has this pH.", "It's right in the middle of the pH scale.", "It's neither an acid nor a base."],
        hints_hi: ["शुद्ध जल का यही पीएच होता है।", "यह पीएच पैमाने के ठीक बीच में है।", "यह न तो अम्ल है और न ही क्षार।"],
        hints_te: ["స్వచ్ఛమైన నీటికి ఈ pH ఉంటుంది.", "ఇది pH స్కేల్ మధ్యలో ఉంటుంది.", "ఇది ఆమ్లం కాదు, క్షారం కాదు."],
        hints_ta: ["தூய நீருக்கு இந்த pH உள்ளது.", "இது pH அளவுகோலின் நடுவில் உள்ளது.", "இது அமிலம் அல்லது காரம் அல்ல."],
        hints_mr: ["शुद्ध पाण्याचे हे पीएच असते.", "हे पीएच स्केलच्या अगदी मध्यभागी आहे.", "हे आम्ल किंवा आम्लारी नाही."]
      },
       {
        id: 2,
        text: 'Which substance would taste sour?',
        text_hi: 'कौन सा पदार्थ खट्टा लगेगा?',
        text_te: 'ఏ పదార్థం పుల్లగా ఉంటుంది?',
        text_ta: 'எந்தப் பொருள் புளிப்புச் சுவை தரும்?',
        text_mr: 'कोणता पदार्थ आंबट लागेल?',
        options: [
          { id: 'a', text: 'Soap', text_hi: 'साबुन', text_te: 'సబ్బు', text_ta: 'சோப்பு', text_mr: 'साबण' },
          { id: 'b', text: 'Sugar', text_hi: 'चीनी', text_te: 'చక్కెర', text_ta: 'சர்க்கரை', text_mr: 'साखर' },
          { id: 'c', text: 'Salt', text_hi: 'नमक', text_te: 'ఉప్పు', text_ta: 'உப்பு', text_mr: 'मीठ' },
          { id: 'd', 'text': 'Lemon Juice', text_hi: 'नींबू का रस', text_te: 'నిమ్మరసం', text_ta: 'எலுமிச்சை சாறு', text_mr: 'लिंबाचा रस' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        hints: ["It's a common acid.", "It has a low pH.", "It's often used in drinks and cooking."],
        hints_hi: ["यह एक आम अम्ल है।", "इसका पीएच कम होता है।", "यह अक्सर पेय और खाना पकाने में उपयोग किया जाता है।"],
        hints_te: ["ఇది ఒక సాధారణ ఆమ్లం.", "దీనికి తక్కువ పిహెచ్ ఉంటుంది.", "ఇది తరచుగా పానీయాలు మరియు వంటలలో ఉపయోగించబడుతుంది."],
        hints_ta: ["இது ஒரு பொதுவான அமிலம்.", "அதற்கு குறைந்த pH உள்ளது.", "இது பெரும்பாலும் பானங்கள் மற்றும் சமையலில் பயன்படுத்தப்படுகிறது."],
        hints_mr: ["हे एक सामान्य आम्ल आहे.", "त्याचे पीएच कमी असते.", "हे अनेकदा पेये आणि स्वयंपाकात वापरले जाते."]
      },
       {
        id: 3,
        text: 'Baking soda is an example of a...',
        text_hi: 'बेकिंग सोडा किसका उदाहरण है...',
        text_te: 'బేకింగ్ సోడా దేనికి ఉదాహరణ...',
        text_ta: 'பேக்கிங் சோடா எதற்கு உதாரணம்...',
        text_mr: 'बेकिंग सोडा हे कशाचे उदाहरण आहे...',
        options: [
          { id: 'a', text: 'Acid', text_hi: 'अम्ल', text_te: 'ఆమ్లం', text_ta: 'அமிலம்', text_mr: 'आम्ल' },
          { id: 'b', text: 'Base', text_hi: 'क्षार', text_te: 'క్షారం', text_ta: 'காரம்', text_mr: 'आम्लारी' },
          { id: 'c', text: 'Salt', text_hi: 'नमक', text_te: 'లవణం', text_ta: 'உப்பு', text_mr: 'क्षार' },
          { id: 'd', 'text': 'Pure substance', text_hi: 'शुद्ध पदार्थ', text_te: 'స్వచ్ఛమైన పదార్థం', text_ta: 'தூய பொருள்', text_mr: 'शुद्ध पदार्थ' },
        ],
        correctAnswer: 'b',
        difficulty: 'easy',
        hints: ["It reacts with vinegar to produce bubbles.", "Bases are also known as alkalis.", "It has a pH greater than 7."],
        hints_hi: ["यह सिरके के साथ प्रतिक्रिया करके बुलबुले पैदा करता है।", "क्षारों को क्षार भी कहा जाता है।", "इसका पीएच 7 से अधिक होता है।"],
        hints_te: ["ఇది వెనిగర్‌తో చర్య జరిపి బుడగలను ఉత్పత్తి చేస్తుంది.", "క్షారాలను ఆల్కలీలు అని కూడా అంటారు.", "దీనికి పిహెచ్ 7 కంటే ఎక్కువ ఉంటుంది."],
        hints_ta: ["இது வினிகருடன் வினைபுரிந்து குமிழ்களை உருவாக்குகிறது.", " காரங்கள் அல்கலிகள் என்றும் அழைக்கப்படுகின்றன.", "அதற்கு 7 ஐ விட அதிகமான pH உள்ளது."],
        hints_mr: ["हे व्हिनेगरबरोबर प्रतिक्रिया करून बुडबुडे तयार करते.", "आम्लारींना अल्कली असेही म्हणतात.", "त्याचे पीएच 7 पेक्षा जास्त असते."]
      },
       {
        id: 4,
        text: 'Litmus paper turns what color in an acid?',
        text_hi: 'लिटमस पेपर अम्ल में किस रंग का हो जाता है?',
        text_te: 'ఆమ్లంలో లిట్మస్ పేపర్ ఏ రంగులోకి మారుతుంది?',
        text_ta: 'அமிலத்தில் லிட்மஸ் தாள் என்ன நிறமாக மாறும்?',
        text_mr: 'लिटमस पेपर आम्लामध्ये कोणत्या रंगाचा होतो?',
        options: [
          { id: 'a', text: 'Blue', text_hi: 'नीला', text_te: 'నీలం', text_ta: 'நீலம்', text_mr: 'निळा' },
          { id: 'b', text: 'Green', text_hi: 'हरा', text_te: 'ఆకుపచ్చ', text_ta: 'பச்சை', text_mr: 'हिरवा' },
          { id: 'c', text: 'Red', text_hi: 'लाल', text_te: 'ఎరుపు', text_ta: 'சிவப்பு', text_mr: 'लाल' },
          { id: 'd', 'text': 'Yellow', text_hi: 'पीला', text_te: 'పసుపు', text_ta: 'மஞ்சள்', text_mr: 'पिवळा' },
        ],
        correctAnswer: 'c',
        difficulty: 'easy',
        hints: ["Think of the color for 'danger' or 'stop'.", "In a base, it turns blue.", "It's a common indicator used in chemistry labs."],
        hints_hi: ["'खतरे' या 'रोक' के लिए रंग के बारे में सोचें।", "क्षार में, यह नीला हो जाता है।", "यह रसायन विज्ञान प्रयोगशालाओं में इस्तेमाल किया जाने वाला एक आम संकेतक है।"],
        hints_te: ["'ప్రమాదం' లేదా 'ఆపు' కోసం రంగు గురించి ఆలోచించండి.", "క్షారంలో, ఇది నీలం రంగులోకి మారుతుంది.", "ఇది రసాయన శాస్త్ర ప్రయోగశాలలలో ఉపయోగించే ఒక సాధారణ సూచిక."],
        hints_ta: ["'ஆபத்து' அல்லது 'நிறுத்து' என்பதற்கான நிறத்தைப் பற்றி சிந்தியுங்கள்.", "காரத்தில், இது நீலமாக மாறும்.", "இது வேதியியல் ஆய்வகங்களில் பயன்படுத்தப்படும் ஒரு பொதுவான காட்டி."],
        hints_mr: ["'धोका' किंवा 'थांबा' साठी रंगाचा विचार करा.", "आम्लारीमध्ये ते निळे होते.", "हे रसायनशास्त्र प्रयोगशाळांमध्ये वापरले जाणारे एक सामान्य सूचक आहे."]
      },
       {
        id: 5,
        text: 'What is formed when an acid and a base react together?',
        text_hi: 'जब एक अम्ल और एक क्षार एक साथ प्रतिक्रिया करते हैं तो क्या बनता है?',
        text_te: 'ఆమ్లం మరియు క్షారం కలిసి చర్య జరిపినప్పుడు ఏమి ఏర్పడుతుంది?',
        text_ta: 'ஒரு அமிலமும் காரமும் ஒன்றாக வினைபுரியும்போது என்ன உருவாகிறது?',
        text_mr: 'जेव्हा आम्ल आणि आम्लारी एकत्र प्रतिक्रिया करतात तेव्हा काय तयार होते?',
        options: [
          { id: 'a', text: 'A stronger acid', text_hi: 'एक मजबूत अम्ल', text_te: 'మరింత బలమైన ఆమ్లం', text_ta: 'ஒரு வலுவான அமிலம்', text_mr: 'एक तीव्र आम्ल' },
          { id: 'b', text: 'A stronger base', text_hi: 'एक मजबूत क्षार', text_te: 'మరింత బలమైన క్షారం', text_ta: 'ஒரு வலுவான காரம்', text_mr: 'एक तीव्र आम्लारी' },
          { id: 'c', text: 'A neutral substance', text_hi: 'एक उदासीन पदार्थ', text_te: 'ఒక తటస్థ పదార్థం', text_ta: 'ஒரு நடுநிலை பொருள்', text_mr: 'एक उदासीन पदार्थ' },
          { id: 'd', 'text': 'Salt and water', text_hi: 'नमक और पानी', text_te: 'లవణం మరియు నీరు', text_ta: 'உப்பு மற்றும் நீர்', text_mr: 'क्षार आणि पाणी' },
        ],
        correctAnswer: 'd',
        difficulty: 'easy',
        hints: ["This is called a neutralization reaction.", "One of the products is what you put on food.", "The other product is H2O."],
        hints_hi: ["इसे उदासीनीकरण अभिक्रिया कहा जाता है।", "उत्पादों में से एक वह है जिसे आप भोजन पर डालते हैं।", "दूसरा उत्पाद H2O है।"],
        hints_te: ["దీనిని తటస్థీకరణ చర్య అంటారు.", "ఉత్పత్తులలో ఒకటి మీరు ఆహారంపై వేసేది.", "మరొక ఉత్పత్తి H2O."],
        hints_ta: ["இது நடுநிலையாக்கல் வினை என்று அழைக்கப்படுகிறது.", "தயாரிப்புகளில் ஒன்று நீங்கள் உணவில் போடுவது.", "மற்றொரு தயாரிப்பு H2O."],
        hints_mr: ["याला उदासीनीकरण अभिक्रिया म्हणतात.", "उत्पादनांपैकी एक म्हणजे तुम्ही जेवणात घालता.", "दुसरे उत्पादन H2O आहे."]
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

    
