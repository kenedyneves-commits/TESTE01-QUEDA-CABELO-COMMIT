
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F6] border-t border-gray-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <span className="text-3xl font-black tracking-tighter text-[#0B3B2C]">HAIRHEALTH</span>
            <p className="text-gray-500 max-w-sm">
              Nossa missão é democratizar o acesso a tratamentos capilares de alta qualidade e baseados em ciência para todos os homens.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 hover:border-[#0B3B2C] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 hover:border-[#0B3B2C] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 hover:border-[#0B3B2C] transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#0B3B2C] mb-6">Produtos</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-[#0B3B2C]">Kits Completos</a></li>
              <li><a href="#" className="hover:text-[#0B3B2C]">Minoxidil Tópico</a></li>
              <li><a href="#" className="hover:text-[#0B3B2C]">Shampoos</a></li>
              <li><a href="#" className="hover:text-[#0B3B2C]">Vitaminas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0B3B2C] mb-6">Empresa</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-[#0B3B2C]">Sobre nós</a></li>
              <li><a href="#" className="hover:text-[#0B3B2C]">Blog</a></li>
              <li><a href="#" className="hover:text-[#0B3B2C]">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-[#0B3B2C]">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© 2024 HairHealth Care LTDA. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span>Responsável Técnico: Dr. Cássio Silva CRM/SP 123456</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
