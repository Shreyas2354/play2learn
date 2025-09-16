export type Question = {
  id: number;
  text: string;
  text_hi: string;
  options: { id: string; text: string; text_hi: string }[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  hints_hi: string[];
};

export type Mission = {
  id: string;
  title: string;
  title_hi: string;
  description: string;
  description_hi: string;
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
    description: 'Explore the fundamental concepts of force and motion. Help Newton understand gravity!',
    description_hi: 'बल और गति की मूलभूत अवधारणाओं का अन्वेषण करें। न्यूटन को गुरुत्वाकर्षण समझने में मदद करें!',
    badgeId: 'physics-whiz',
    badge_emoji: '⚛️',
    badge_color: 'bg-yellow-400 text-yellow-900',
    questions: [
      {
        id: 1,
        text: 'What is the unit of force?',
        text_hi: 'बल की इकाई क्या है?',
        options: [
          { id: 'a', text: 'Watt', text_hi: 'वाट' },
          { id: 'b', text: 'Newton', text_hi: 'न्यूटन' },
          { id: 'c', text: 'Joule', text_hi: 'जूल' },
          { id: 'd', text: 'Pascal', text_hi: 'पास्कल' },
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
        ]
      },
      {
        id: 2,
        text: 'Which law of motion is also known as the law of inertia?',
        text_hi: 'गति का कौन सा नियम जड़त्व का नियम भी कहलाता है?',
        options: [
            { id: 'a', text: "Newton's First Law", text_hi: 'न्यूटन का पहला नियम' },
            { id: 'b', text: "Newton's Second Law", text_hi: 'न्यूटन का दूसरा नियम' },
            { id: 'c', text: "Newton's Third Law", text_hi: 'न्यूटन का तीसरा नियम' },
            { id: 'd', text: "Law of Gravitation", text_hi: 'गुरुत्वाकर्षण का नियम' },
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
        ]
      },
      {
        id: 3,
        text: 'If you push a wall, the wall pushes you back with an equal and opposite force. This is an example of:',
        text_hi: 'यदि आप एक दीवार को धक्का देते हैं, तो दीवार आपको बराबर और विपरीत बल से वापस धकेलती है। यह किसका उदाहरण है:',
        options: [
            { id: 'a', text: "Newton's First Law", text_hi: 'न्यूटन का पहला नियम' },
            { id: 'b', text: "Newton's Second Law", text_hi: 'न्यूटन का दूसरा नियम' },
            { id: 'c', text: "Newton's Third Law", text_hi: 'न्यूटन का तीसरा नियम' },
            { id: 'd', text: "Friction", text_hi: 'घर्षण' },
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
        ]
      },
       {
        id: 4,
        text: 'Calculate the force needed to accelerate a 10 kg object at 5 m/s².',
        text_hi: '10 किलो की वस्तु को 5 m/s² पर त्वरित करने के लिए आवश्यक बल की गणना करें।',
        options: [
          { id: 'a', text: '50 N', text_hi: '50 न्यूटन' },
          { id: 'b', text: '2 N', text_hi: '2 न्यूटन' },
          { id: 'c', text: '0.5 N', text_hi: '0.5 न्यूटन' },
          { id: 'd', text: '15 N', text_hi: '15 न्यूटन' },
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
        ]
      },
    ],
  },
  {
    id: 'biology-1',
    title: 'The Secret Life of Plants',
    title_hi: 'पौधों का गुप्त जीवन',
    description: 'Discover the magic of photosynthesis and how plants create their own food.',
    description_hi: 'प्रकाश संश्लेषण के जादू और पौधे अपना भोजन कैसे बनाते हैं, इसकी खोज करें।',
    badgeId: 'botany-expert',
    badge_emoji: '🌿',
    badge_color: 'bg-green-400 text-green-900',
    questions: [
      {
        id: 1,
        text: 'What is the process by which plants make their food called?',
        text_hi: 'पौधे जिस प्रक्रिया से अपना भोजन बनाते हैं, उसे क्या कहते हैं?',
        options: [
          { id: 'a', text: 'Respiration', text_hi: 'श्वसन' },
          { id: 'b', text: 'Transpiration', text_hi: 'वाष्पोत्सर्जन' },
          { id: 'c', text: 'Photosynthesis', text_hi: 'प्रकाश संश्लेषण' },
          { id: 'd', 'text': 'Germination', text_hi: 'अंकुरण' },
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
        ]
      },
      {
        id: 2,
        text: 'What gas do plants absorb from the atmosphere for photosynthesis?',
        text_hi: 'प्रकाश संश्लेषण के लिए पौधे वायुमंडल से कौन सी गैस अवशोषित करते हैं?',
        options: [
            { id: 'a', text: 'Oxygen', text_hi: 'ऑक्सीजन' },
            { id: 'b', text: 'Carbon Dioxide', text_hi: 'कार्बन डाइऑक्साइड' },
            { id: 'c', text: 'Nitrogen', text_hi: 'नाइट्रोजन' },
            { id: 'd', text: 'Hydrogen', text_hi: 'हाइड्रोजन' },
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
        ]
      }
    ],
  },
];

export type Experiment = {
  id: string;
  title: string;
  title_hi: string;
  description: string;
  description_hi: string;
  imageUrl: string;
  imageHint: string;
  steps: {
    title: string;
    title_hi: string;
    description: string;
    description_hi: string;
    imageUrl: string;
    imageHint: string;
  }[];
};

export const experiments: Experiment[] = [
    {
        id: 'volcano-1',
        title: 'Build a Baking Soda Volcano',
        title_hi: 'बेकिंग सोडा ज्वालामुखी बनाएं',
        description: 'A classic and safe experiment to demonstrate a chemical reaction.',
        description_hi: 'एक रासायनिक प्रतिक्रिया प्रदर्शित करने के लिए एक क्लासिक और सुरक्षित प्रयोग।',
        imageUrl: 'https://picsum.photos/seed/exp1/600/400',
        imageHint: 'DIY volcano',
        steps: [
            {
                title: 'Step 1: Build the Cone',
                title_hi: 'चरण 1: शंकु बनाएं',
                description: 'Use a plastic bottle and build a cone around it using clay or soil.',
                description_hi: 'एक प्लास्टिक की बोतल का उपयोग करें और उसके चारों ओर मिट्टी या क्ले से एक शंकु बनाएं।',
                imageUrl: 'https://picsum.photos/seed/exp1-step1/600/400',
                imageHint: 'clay bottle',
            },
            {
                title: 'Step 2: Add Ingredients',
                title_hi: 'चरण 2: सामग्री डालें',
                description: 'Fill the bottle halfway with warm water, add a few drops of dish soap and red food coloring.',
                description_hi: 'बोतल को आधे रास्ते तक गर्म पानी से भरें, कुछ बूँदें डिश सोप और लाल खाद्य रंग डालें।',
                imageUrl: 'https://picsum.photos/seed/exp1-step2/600/400',
                imageHint: 'mixing liquids',
            },
            {
                title: 'Step 3: Add Baking Soda',
                title_hi: 'चरण 3: बेकिंग सोडा डालें',
                description: 'Add 2 tablespoons of baking soda to the liquid and stir it.',
                description_hi: 'तरल में 2 बड़े चम्मच बेकिंग सोडा डालें और इसे हिलाएं।',
                imageUrl: 'https://picsum.photos/seed/exp1-step3/600/400',
                imageHint: 'baking soda',
            },
            {
                title: 'Step 4: The Eruption!',
                title_hi: 'चरण 4: विस्फोट!',
                description: 'Pour vinegar into the bottle and watch your volcano erupt!',
                description_hi: 'बोतल में सिरका डालें और अपने ज्वालामुखी को फूटते हुए देखें!',
                imageUrl: 'https://picsum.photos/seed/exp1-step4/600/400',
                imageHint: 'volcano erupting',
            },
        ]
    }
];
