
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o acompanhamento médico?",
      a: "Após o diagnóstico online, um médico parceiro revisa seu caso. Se aprovado, você tem acesso a chat direto com especialistas para tirar dúvidas durante todo o tratamento."
    },
    {
      q: "Em quanto tempo vejo resultados?",
      a: "O cabelo cresce devagar. Geralmente, a queda para nos primeiros 2 meses e o crescimento de novos fios visíveis ocorre entre 4 a 6 meses de uso contínuo."
    },
    {
      q: "Existem efeitos colaterais?",
      a: "Como qualquer medicamento, podem existir. No entanto, são raros e nossa equipe médica está pronta para ajustar seu plano caso você sinta qualquer desconforto."
    },
    {
      q: "Posso cancelar a assinatura quando quiser?",
      a: "Sim, sem burocracia. Você pode pausar ou cancelar sua assinatura diretamente pelo portal do cliente a qualquer momento."
    }
  ];

  return (
    <section id="ajuda" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#0B3B2C] text-center mb-16">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left py-4 hover:text-[#0B3B2C] transition-colors"
              >
                <span className="text-lg font-bold">{faq.q}</span>
                {openIndex === i ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === i && (
                <div className="pb-4 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#FAF9F6] rounded-3xl text-center border border-dashed border-gray-300">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a href="#" className="text-[#0B3B2C] font-bold text-lg hover:underline">Fale com nosso suporte via WhatsApp</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
