
import React from 'react';

const Results: React.FC = () => {
  const cases = [
    {
      name: "Ricardo, 32",
      time: "4 meses de uso",
      before: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&w=400&q=80",
      after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      text: "Eu estava perdendo as esperanças. O tratamento da HairHealth salvou minha autoestima."
    },
    {
      name: "João, 45",
      time: "6 meses de uso",
      before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      after: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400&q=80",
      text: "A consistência é a chave. Nunca tive um cabelo tão denso em anos."
    }
  ];

  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B3B2C] mb-8">Resultados reais que falam por si.</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Nosso protocolo foca na ciência. Atacamos a causa raiz da calvície (DHT) enquanto estimulamos o crescimento de novos fios. 
              <strong> 94% dos usuários</strong> relatam melhora significativa após 6 meses.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Bloqueio do DHT", p: "Impede a miniaturização dos folículos." },
                { title: "Bioestimulação", p: "Ativa folículos em repouso." },
                { title: "Saúde do Couro", p: "Cria o ambiente perfeito para o crescimento." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F0F7F4] rounded-xl flex items-center justify-center font-bold text-[#0B3B2C]">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B3B2C]">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            {cases.map((c, i) => (
              <div key={i} className="bg-[#FAF9F6] p-6 rounded-3xl border border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative">
                    <img src={c.before} alt="Before" className="w-full h-48 object-cover rounded-xl" />
                    <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded uppercase font-bold">Antes</span>
                  </div>
                  <div className="relative">
                    <img src={c.after} alt="After" className="w-full h-48 object-cover rounded-xl" />
                    <span className="absolute bottom-2 left-2 bg-[#8FD6BD] text-[#0B3B2C] px-2 py-1 text-xs rounded uppercase font-bold">Depois</span>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-[#0B3B2C]">{c.name}</h4>
                    <p className="text-sm text-gray-500">{c.time}</p>
                  </div>
                  <p className="text-sm text-gray-600 italic flex-1 ml-6">"{c.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
