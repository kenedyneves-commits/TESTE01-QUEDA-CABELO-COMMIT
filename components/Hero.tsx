
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="relative bg-[#0B3B2C] text-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-[#144D3A] px-4 py-2 rounded-full text-sm font-semibold text-[#8FD6BD]">
              <CheckCircle2 size={16} />
              TRATAMENTO MÉDICO APROVADO
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Pare a queda. <br />
              <span className="text-[#8FD6BD]">Recupere seu cabelo.</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Tratamentos baseados em ciência, aprovados por médicos e entregues diretamente na sua porta. Simples assim.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onStartQuiz}
                className="bg-white text-[#0B3B2C] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                COMEÇAR DIAGNÓSTICO <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-[#0B3B2C]" src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                ))}
              </div>
              <span>+50.000 homens recuperaram a confiança</span>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Man with healthy hair" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Abstract Shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8FD6BD] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white rounded-full blur-3xl opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
