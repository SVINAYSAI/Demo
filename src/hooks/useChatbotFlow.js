import { useState, useCallback } from 'react';
import { chatSteps, chatMessages, initialChatState, getNextStep, validateInput } from '../data/chatFlow';
import { filterProperties } from '../data/properties';

export function useChatbotFlow() {
  const [state, setState] = useState(initialChatState);

  // Add a message to the chat
  const addMessage = useCallback((text, sender = 'bot', properties = null) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, { text, sender, timestamp: Date.now(), properties }]
    }));
  }, []);

  // Set typing indicator
  const setTyping = useCallback((isTyping) => {
    setState(prev => ({ ...prev, isTyping }));
  }, []);

  // Process user input and advance to next step
  const processInput = useCallback(async (value) => {
    const { currentStep, userData } = state;

    // Add user message
    let displayValue = value;
    if (typeof value === 'object') {
      displayValue = value.label || value.toString();
    }
    addMessage(displayValue, 'user');

    // Validate input
    if (!validateInput(currentStep, typeof value === 'string' ? value : displayValue)) {
      setTyping(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setTyping(false);
      addMessage("Please provide a valid response.", 'bot');
      return;
    }

    // Update user data based on current step
    const newUserData = { ...userData };
    switch (currentStep) {
      case chatSteps.WELCOME:
        newUserData.name = value;
        break;
      case chatSteps.NAME:
        newUserData.email = value;
        break;
      case chatSteps.EMAIL:
        newUserData.phone = value;
        break;
      case chatSteps.PHONE:
        newUserData.goal = value;
        break;
      case chatSteps.GOAL:
        newUserData.city = value;
        break;
      case chatSteps.CITY:
        newUserData.budget = value;
        break;
      case chatSteps.BUDGET:
        newUserData.type = value;
        break;
      case chatSteps.TYPE:
        newUserData.beds = value;
        break;
      case chatSteps.RESULTS:
        if (value === 'restart') {
          setState(initialChatState);
          setTyping(true);
          await new Promise(resolve => setTimeout(resolve, 1000));
          setTyping(false);
          addMessage(chatMessages[chatSteps.WELCOME].text, 'bot');
          return;
        } else if (value === 'agent') {
          setState(prev => ({ ...prev, currentStep: chatSteps.END }));
          setTyping(true);
          await new Promise(resolve => setTimeout(resolve, 1000));
          setTyping(false);
          addMessage(chatMessages[chatSteps.END].text, 'bot');
          return;
        }
        break;
      default:
        break;
    }

    // Move to next step
    const nextStep = getNextStep(currentStep);

    // Show typing indicator
    setTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setTyping(false);

    // Handle special case for bedroom step (show results)
    if (currentStep === chatSteps.TYPE) {
      newUserData.beds = value;
      const matchedProperties = filterProperties({
        city: newUserData.city,
        budget: newUserData.budget,
        type: newUserData.type,
        beds: value
      });

      const resultMessage = chatMessages[chatSteps.BEDROOMS].getText(matchedProperties.length);
      addMessage(resultMessage, 'bot', matchedProperties.length > 0 ? matchedProperties : null);

      setState(prev => ({
        ...prev,
        currentStep: chatSteps.RESULTS,
        userData: newUserData,
        matchedProperties
      }));

      // Show follow-up message after results
      await new Promise(resolve => setTimeout(resolve, 500));
      setTyping(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setTyping(false);
      addMessage(chatMessages[chatSteps.RESULTS].text, 'bot');
      return;
    }

    // Get bot response for next step
    const nextMessage = chatMessages[nextStep];
    let responseText = nextMessage.text;
    if (nextMessage.getText) {
      if (nextStep === chatSteps.NAME) {
        responseText = nextMessage.getText(newUserData.name);
      }
    }

    addMessage(responseText, 'bot');

    setState(prev => ({
      ...prev,
      currentStep: nextStep,
      userData: newUserData
    }));
  }, [state, addMessage, setTyping]);

  // Start the chat with welcome message
  const startChat = useCallback(async () => {
    if (state.messages.length === 0) {
      setTyping(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setTyping(false);
      addMessage(chatMessages[chatSteps.WELCOME].text, 'bot');
    }
  }, [state.messages.length, addMessage, setTyping]);

  // Reset the chat
  const resetChat = useCallback(() => {
    setState(initialChatState);
    setTimeout(() => {
      startChat();
    }, 100);
  }, [startChat]);

  // Get current input configuration
  const getCurrentInputConfig = useCallback(() => {
    const { currentStep, userData } = state;
    const config = chatMessages[currentStep];

    if (!config) return null;

    let options = config.options;
    if (config.getOptions) {
      options = config.getOptions(userData.goal);
    }

    return {
      type: config.inputType,
      placeholder: config.placeholder,
      options
    };
  }, [state]);

  return {
    messages: state.messages,
    userData: state.userData,
    isTyping: state.isTyping,
    currentStep: state.currentStep,
    matchedProperties: state.matchedProperties,
    processInput,
    startChat,
    resetChat,
    getCurrentInputConfig
  };
}
