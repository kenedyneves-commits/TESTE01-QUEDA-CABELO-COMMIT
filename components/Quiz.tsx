
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';

interface QuizProps {
  onBack: () => void;
}

const steps = [
  {
    id: 1,
    question: "Onde você nota a queda de cabelo?",
    options: [
      { label: "Entradas e testa", icon: "https://cdn-icons-png.flaticon.com/512/3563/3563152.png" },
      { label: "Topo da cabeça (coroa)", icon: "https://cdn-icons-png.flaticon.com/512/3563/3563152.png" },
      { label: "Queda generalizada", icon: "https://cdn-icons-png.flaticon.com/512/3563/3563152.png" },
      { label: "Apenas prevenção", icon: "https://cdn-icons-png.flaticon.com/512/3563/3563152.png" }
    ]
  },
  {
    id: 2,
    question: "Qual o seu objetivo principal?",
    options: [
      { label: "Parar a queda", value: "stop" },
      { label: "Crescer novos fios", value: "regrow" },
      { label: "Melhorar a densidade", value: "density" },
      { label: "Cabelo mais saudável", value: "healthy" }
    ]
  },
  {
    id: 3,
    question: "Já usou algum tratamento antes?",
    options: [
      { label: "Nunca usei", value: "none" },
      { label: "Minoxidil", value: "minox" },
      { label: "Finasterida", value: "fina" },
      { label: "Vitaminas/Shampoos", value: "others" }
    ]
  }
];

const Quiz: React.FC<QuizProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [steps[currentStep].id]: option });
    
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => setIsAnalyzing(false), 3000); // Simulate processing
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-16 h-16 text-[#0B3B2C] animate-spin mb-6" />
        <h2 className="text-3xl font-bold text-[#0B3B2C] mb-4">Analisando suas respostas...</h2>
        <p className="text-gray-500 max-w-sm">Nossos especialistas estão preparando o plano ideal para o seu perfil capilar.</p>
        <div className="mt-8 space-y-4 w-full max-w-xs text-left">
          {[
            "Avaliando grau de calvície",
            "Cruzando dados clínicos",
            "Personalizando dosagens",
            "Finalizando prescrição"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-400">
              <div className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-green-500' : 'bg-gray-200 animate-pulse'}`}></div>
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Final State: Product Recommendation
  if (currentStep === steps.length - 1 && answers[3]) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] pb-24">
        <header className="p-4 border-b bg-white flex justify-between items-center">
          <span className="text-xl font-black text-[#0B3B2C]">HAIRHEALTH</span>
          <button onClick={onBack} className="text-sm font-bold text-gray-500">SAIR</button>
        </header>
        
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80" alt="Plano Completo" className="w-full rounded-2xl shadow-inner" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                RECOMENDAÇÃO MÉDICA
              </div>
              <h1 className="text-4xl font-bold text-[#0B3B2C]">Plano Crescimento Completo</h1>
              <p className="text-gray-600">Com base no seu perfil de <span className="font-bold text-[#0B3B2C]">{answers[1]}</span>, indicamos o protocolo de 3 meses para resultados máximos.</p>
              
              <ul className="space-y-3">
                {["Solução Tópica Personalizada", "Suplemento de Biotina", "Shampoo Fortalecedor", "Acompanhamento Médico Online"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="bg-[#8FD6BD] p-1 rounded-full"><Check size={14} className="text-[#0B3B2C]" /></div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-[#0B3B2C]">R$ 149,90</span>
                  <span className="text-gray-400 line-through">R$ 219,00</span>
                </div>
                <button className="w-full bg-[#0B3B2C] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#082d22] transition-colors shadow-lg shadow-green-900/20">
                  CONCLUIR PEDIDO
                </button>
                <p className="text-center text-xs text-gray-400 mt-4 italic">Frete grátis incluso para todo Brasil</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="px-6 py-4 flex items-center justify-between">
        <button onClick={currentStep === 0 ? onBack : () => setCurrentStep(currentStep - 1)} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1 max-w-xs mx-8">
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#0B3B2C] transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="text-sm font-bold text-gray-400">{currentStep + 1}/{steps.length}</div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-2xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B2C] text-center mb-12">
          {steps[currentStep].question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {steps[currentStep].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelect(option.label)}
              className={`
                flex items-center p-6 rounded-2xl border-2 transition-all text-left group
                ${answers[steps[currentStep].id] === option.label 
                  ? 'border-[#0B3B2C] bg-[#F0F7F4]' 
                  : 'border-gray-100 hover:border-[#8FD6BD] hover:bg-gray-50'}
              `}
            >
              <div className="flex-1">
                <span className="text-lg font-semibold text-[#0B3B2C]">{option.label}</span>
              </div>
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                ${answers[steps[currentStep].id] === option.label ? 'bg-[#0B3B2C] border-[#0B3B2C]' : 'border-gray-300'}
              `}>
                {answers[steps[currentStep].id] === option.label && <Check size={14} className="text-white" />}
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
