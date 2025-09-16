
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

    
