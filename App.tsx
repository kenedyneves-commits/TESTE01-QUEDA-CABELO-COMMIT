
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Truck, 
  Stethoscope, 
  ChevronDown, 
  Menu, 
  X,
  Play
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Process from './components/Process';
import Results from './components/Results';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = () => {
    setShowQuiz(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showQuiz) {
    return <Quiz onBack={() => setShowQuiz(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onStartQuiz={startQuiz} />
      <main>
        <Hero onStartQuiz={startQuiz} />
        <section className="py-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
              DESTAQUE EM
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <span className="text-2xl font-bold italic">GQ</span>
              <span className="text-2xl font-bold">Men's Health</span>
              <span className="text-2xl font-bold">VOGUE</span>
              <span className="text-2xl font-bold">Forbes</span>
              <span className="text-2xl font-bold">Esquire</span>
            </div>
          </div>
        </section>
        
        <Process onStartQuiz={startQuiz} />
        <Results />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 z-40">
        <button 
          onClick={startQuiz}
          className="w-full bg-[#0B3B2C] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
        >
          COMEÇAR MEU PLANO <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;
