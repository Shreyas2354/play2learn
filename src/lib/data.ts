
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
};

export const missions: Mission[] = [
  {
    id: 'physics-1',
    title: 'Journey into Forces',
    title_hi: 'बलों की यात्रा',
    title_te: 'శక్తుల లోకి ప్రయాణం',
    title_ta: 'விசைகளின் பயணம்',
    title_mr: 'बलांच्या जगात प्रवास',
    description: 'Explore the fundamental concepts of force and motion. Help Newton understand gravity!',
    description_hi: 'बल और गति की मूलभूत अवधारणाओं का अन्वेषण करें। न्यूटन को गुरुत्वाकर्षण समझने में मदद करें!',
    description_te: 'శక్తి మరియు చలనం యొక్క ప్రాథమిక భావనలను అన్వేషించండి. న్యూటన్‌కు గురుత్వాకర్షణను అర్థం చేసుకోవడంలో సహాయపడండి!',
    description_ta: 'விசை மற்றும் இயக்கத்தின் அடிப்படைக் கருத்துக்களை ஆராயுங்கள். நியூட்டனுக்கு ஈர்ப்பியல் புரிய உதவுங்கள்!',
    description_mr: 'बल आणि गतीच्या मूलभूत संकल्पनांचा शोध घ्या. न्यूटनला गुरुत्वाकर्षण समजण्यास मदत करा!',
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
            { id: 'b', text: "Newton's Second Law", text_hi: 'न्यूटन का दूसरा नियम', text_te: 'న్యూటన్ రెండవ నియమం', text_ta: 'நியூட்டனின் இரண்டாம் விதி', text_mr: 'న్యూटनचा दुसरा नियम' },
            { id: 'c', text: "Newton's Third Law", text_hi: 'न्यूटन का तीसरा नियम', text_te: 'న్యూటన్ మూడవ నియమం', text_ta: 'நியூட்டனின் மூன்றாம் விதி', text_mr: 'న్యూटनचा तिसरा नियम' },
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
    ],
  },
  {
    id: 'biology-1',
    title: 'The Secret Life of Plants',
    title_hi: 'पौधों का गुप्त जीवन',
    title_te: 'మొక్కల రహస్య జీవితం',
    title_ta: 'தாவரங்களின் ரகசிய வாழ்க்கை',
    title_mr: 'वनस्पतींचे रहस्यमय जीवन',
    description: 'Discover the magic of photosynthesis and how plants create their own food.',
    description_hi: 'प्रकाश संश्लेषण के जादू और पौधे अपना भोजन कैसे बनाते हैं, इसकी खोज करें।',
    description_te: 'కిరణజన్య సంయోగక్రియ యొక్క మాయాజాలాన్ని మరియు మొక్కలు తమ స్వంత ఆహారాన్ని ఎలా తయారు చేసుకుంటాయో కనుగొనండి.',
    description_ta: 'ஒளிச்சேர்க்கையின் மந்திரத்தையும், தாவரங்கள் தங்கள் சொந்த உணவை எவ்வாறு உருவாக்குகின்றன என்பதையும் கண்டறியுங்கள்.',
    description_mr: 'प्रकाशसंश्लेषणाची जादू आणि वनस्पती आपले अन्न कसे तयार करतात याचा शोध घ्या.',
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
      }
    ],
  },
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

    