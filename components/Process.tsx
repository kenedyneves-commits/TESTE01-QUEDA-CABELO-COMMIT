
import React from 'react';
import { Stethoscope, Truck, CalendarCheck, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onStartQuiz: () => void;
}

const Process: React.FC<ProcessProps> = ({ onStartQuiz }) => {
  const steps = [
    {
      icon: <Stethoscope className="w-8 h-8 text-[#0B3B2C]" />,
      title: "Diagnóstico Online",
      description: "Responda algumas perguntas sobre seu cabelo e histórico de saúde em 2 minutos."
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-[#0B3B2C]" />,
      title: "Análise Médica",
      description: "Um médico parceiro avalia suas respostas e prescreve o melhor tratamento."
    },
    {
      icon: <Truck className="w-8 h-8 text-[#0B3B2C]" />,
      title: "Entrega Discreta",
      description: "Receba seus produtos em casa todo mês, em embalagens discretas e frete grátis."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0B3B2C] mb-6">Tratamento simples, do seu jeito.</h2>
          <p className="text-xl text-gray-600">Esqueça as consultas caras e farmácias lotadas. Resolvemos tudo online.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="absolute -top-6 left-8 bg-[#8FD6BD] p-4 rounded-2xl shadow-lg">
                {step.icon}
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#0B3B2C] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              <div className="mt-6 flex items-center text-[#0B3B2C] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onStartQuiz}
            className="inline-flex items-center gap-2 bg-[#0B3B2C] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#082d22] transition-transform hover:scale-105"
          >
            FAZER MEU DIAGNÓSTICO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
