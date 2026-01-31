
import React, { useState, useEffect, useRef } from 'react';
import { Screen, Message } from '../types';
import { Icons } from '../constants';
import { GoogleGenAI } from "@google/genai";

interface HealthStatusProps {
  onNavigate: (screen: Screen) => void;
}

const HealthStatus: React.FC<HealthStatusProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      sender: 'ai', 
      text: 'Olá, sou seu assistente de orientação de saúde. Para começarmos, qual é o seu sintoma principal?', 
      timestamp: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<Record<string, string>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getSystemInstruction = (step: number, data: any) => `
You are a health support conversational assistant.

CRITICAL RULES:
- You must NEVER repeat a question already answered.
- You must follow a step-by-step flow.
- You must always know the current step.
- Ask ONLY one question per message.
- If the user gives an unclear answer, ask for clarification WITHOUT restarting the flow.

Conversation steps:
1. Ask the main symptom.
2. Ask when the symptom started.
3. Ask intensity from 1 to 10.
4. Ask about associated symptoms.
5. Ask about relevant health history.
6. Analyze the information.
7. Provide orientation and urgency classification.

State control:
- Current step: ${step}
- Collected data so far: ${JSON.parse(JSON.stringify(data))}

Behavior rules:
- If Current step is 1–5 → ask the next question only.
- If Current step is 6 → analyze silently and move to step 7.
- If Current step is 7 → respond with guidance.
- Never return to previous steps.

Output format:
- If asking a question, output ONLY the question text.
- If providing guidance (Step 7), include:
  - Possible explanations (clearly stating it is NOT a diagnosis)
  - Urgency level (Baixa, Média ou Alta)
  - Next recommended steps
  - A clear disclaimer: "Este app não substitui diagnóstico médico. Em emergências, ligue 192."

Language: Portuguese (Brazil)
Tone: Calm, empathetic, professional.
`;

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue;
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Update data locally based on current step
      const updatedData = { ...userData, [`step_${currentStep}`]: userText };
      setUserData(updatedData);
      
      const nextStep = currentStep + 1;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: userText }] }
        ],
        config: {
          systemInstruction: getSystemInstruction(nextStep, updatedData),
          temperature: 0.7,
        },
      });

      const aiText = response.text || "Desculpe, tive um problema ao processar sua resposta. Pode repetir?";
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
      setCurrentStep(nextStep);
    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "Houve um erro de conexão. Por favor, tente novamente em instantes.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center gap-4">
        <button onClick={() => onNavigate('HOME')}>
          <Icons.ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h2 className="font-bold text-gray-800">Orientação em Saúde</h2>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-gray-400">Suporte Ativo (IA)</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50"
      >
        {messages.map((m) => (
          <div 
            key={m.id} 
            className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                m.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75" />
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150" />
            </div>
          </div>
        )}

        {currentStep >= 7 && !isTyping && (
          <div className="flex justify-center pt-4">
            <button 
              onClick={() => onNavigate('HOME')}
              className="bg-green-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-green-100 flex items-center gap-2"
            >
              <Icons.CheckCircle className="w-4 h-4" />
              Entendi a Orientação
            </button>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
        <button className="p-3 bg-gray-100 rounded-2xl text-gray-400 disabled:opacity-50" disabled={currentStep >= 7}>
          <Icons.Camera className="w-5 h-5" />
        </button>
        <div className="flex-1 relative">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={currentStep >= 7 ? "Triagem finalizada" : "Responda aqui..."}
            disabled={currentStep >= 7 || isTyping}
            className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all pr-12 disabled:opacity-50"
          />
          <button 
            onClick={handleSend}
            disabled={currentStep >= 7 || isTyping}
            className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-xl active:scale-90 transition-transform disabled:bg-gray-300"
          >
            <Icons.ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthStatus;
