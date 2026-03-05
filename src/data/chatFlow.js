// Chatbot conversation flow configuration
export const chatSteps = {
  WELCOME: 'welcome',
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  GOAL: 'goal',
  CITY: 'city',
  BUDGET: 'budget',
  TYPE: 'type',
  BEDROOMS: 'bedrooms',
  RESULTS: 'results',
  END: 'end'
};

// Chatbot messages for each step
export const chatMessages = {
  [chatSteps.WELCOME]: {
    text: "Hi! I'm your AI Assistant.\n\nI'm here to help you find the perfect property by understanding your needs.\n\nPlease share your details with me. What is your name?",
    inputType: 'text',
    placeholder: 'Enter your name...'
  },
  [chatSteps.NAME]: {
    getText: (name) => `Nice to meet you, ${name}!\n\nWhat is your email address?`,
    inputType: 'email',
    placeholder: 'your@email.com'
  },
  [chatSteps.EMAIL]: {
    text: "Thanks!\n\nWhat is the best phone number to reach you?",
    inputType: 'tel',
    placeholder: '(555) 123-4567'
  },
  [chatSteps.PHONE]: {
    text: "Are you looking to:",
    inputType: 'buttons',
    options: [
      { label: 'Buy a property', value: 'buy' },
      { label: 'Rent a property', value: 'rent' }
    ]
  },
  [chatSteps.GOAL]: {
    text: "Which city or area are you interested in?",
    inputType: 'text',
    placeholder: 'e.g., Miami, New York, Los Angeles'
  },
  [chatSteps.CITY]: {
    text: "What is your approximate budget?",
    inputType: 'buttons',
    getOptions: (goal) => {
      if (goal === 'rent') {
        return [
          { label: '$1,000 - $2,000', value: { min: 1000, max: 2000 } },
          { label: '$2,000 - $4,000', value: { min: 2000, max: 4000 } },
          { label: '$4,000+', value: { min: 4000, max: Infinity } }
        ];
      }
      return [
        { label: '$200k - $500k', value: { min: 200000, max: 500000 } },
        { label: '$500k - $1M', value: { min: 500000, max: 1000000 } },
        { label: '$1M+', value: { min: 1000000, max: Infinity } }
      ];
    }
  },
  [chatSteps.BUDGET]: {
    text: "What type of property are you looking for?",
    inputType: 'buttons',
    options: [
      { label: 'Apartment', value: 'Apartment' },
      { label: 'House', value: 'House' },
      { label: 'Villa', value: 'Villa' },
      { label: 'Townhouse', value: 'Townhouse' }
    ]
  },
  [chatSteps.TYPE]: {
    text: "How many bedrooms do you need?",
    inputType: 'buttons',
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4+', value: 4 }
    ]
  },
  [chatSteps.BEDROOMS]: {
    getText: (matchCount) => {
      if (matchCount > 0) {
        return `Great! I found ${matchCount} propert${matchCount === 1 ? 'y' : 'ies'} that match your requirements.`;
      }
      return "I couldn't find an exact match right now.\n\nOur real estate specialists will contact you soon with suitable options.\n\nThank you for your interest!";
    }
  },
  [chatSteps.RESULTS]: {
    text: "Would you like to start a new search or speak with an agent?",
    inputType: 'buttons',
    options: [
      { label: 'New Search', value: 'restart' },
      { label: 'Speak with Agent', value: 'agent' }
    ]
  },
  [chatSteps.END]: {
    text: "Thank you for using Property Finder! An agent will contact you within 24 hours.\n\nHave a great day! 👋",
    inputType: 'none'
  }
};

// Initial chat state
export const initialChatState = {
  currentStep: chatSteps.WELCOME,
  messages: [],
  userData: {
    name: '',
    email: '',
    phone: '',
    goal: '',
    city: '',
    budget: null,
    type: '',
    beds: null
  },
  isTyping: false,
  matchedProperties: []
};

// Get next step based on current step
export function getNextStep(currentStep) {
  const stepOrder = [
    chatSteps.WELCOME,
    chatSteps.NAME,
    chatSteps.EMAIL,
    chatSteps.PHONE,
    chatSteps.GOAL,
    chatSteps.CITY,
    chatSteps.BUDGET,
    chatSteps.TYPE,
    chatSteps.BEDROOMS,
    chatSteps.RESULTS,
    chatSteps.END
  ];

  const currentIndex = stepOrder.indexOf(currentStep);
  if (currentIndex < stepOrder.length - 1) {
    return stepOrder[currentIndex + 1];
  }
  return chatSteps.END;
}

// Validate user input for each step
export function validateInput(step, value) {
  // Convert value to string to handle all input types
  const stringValue = String(value).trim();
  
  switch (step) {
    case chatSteps.WELCOME:
      // WELCOME step asks for name
      return stringValue.length >= 2;
    case chatSteps.NAME:
      // NAME step asks for email address
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringValue);
    case chatSteps.EMAIL:
      // EMAIL step asks for phone number
      const phoneDigits = stringValue.replace(/\D/g, '');
      return phoneDigits.length >= 10;
    case chatSteps.PHONE:
      // PHONE step uses buttons, so validation passes
      return true;
    case chatSteps.CITY:
      return stringValue.length >= 2;
    default:
      return true;
  }
}
