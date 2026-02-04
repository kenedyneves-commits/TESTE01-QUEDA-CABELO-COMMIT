
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onStartQuiz: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onStartQuiz }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-[#0B3B2C]">HAIRHEALTH</span>
          </div>
          
          <div className="hidden md:flex items-center space-gap-8 space-x-8">
            <a href="#como-funciona" className="text-sm font-medium text-gray-600 hover:text-[#0B3B2C] transition-colors">Como funciona</a>
            <a href="#resultados" className="text-sm font-medium text-gray-600 hover:text-[#0B3B2C] transition-colors">Resultados</a>
            <a href="#ajuda" className="text-sm font-medium text-gray-600 hover:text-[#0B3B2C] transition-colors">Ajuda</a>
            <button 
              onClick={onStartQuiz}
              className="bg-[#0B3B2C] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#082d22] transition-colors"
            >
              COMEÇAR AGORA
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-xl">
          <a href="#como-funciona" className="block text-lg font-medium text-gray-600">Como funciona</a>
          <a href="#resultados" className="block text-lg font-medium text-gray-600">Resultados</a>
          <a href="#ajuda" className="block text-lg font-medium text-gray-600">Ajuda</a>
          <button 
            onClick={() => { setIsOpen(false); onStartQuiz(); }}
            className="w-full bg-[#0B3B2C] text-white py-3 rounded-full font-bold text-center"
          >
            COMEÇAR AGORA
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
