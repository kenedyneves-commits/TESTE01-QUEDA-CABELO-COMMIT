
import React from 'react';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      author: "Marcos S.",
      rating: 5,
      text: "Muito prático. Recebo tudo em casa e não preciso mais me preocupar em comprar os remédios.",
      date: "há 2 semanas"
    },
    {
      author: "Felipe T.",
      rating: 5,
      text: "O atendimento médico online foi excelente. Tiraram todas as minhas dúvidas sobre efeitos colaterais.",
      date: "há 1 mês"
    },
    {
      author: "Bruno G.",
      rating: 4,
      text: "Demorou uns 3 meses para eu ver resultado real, mas agora meu barbeiro até comentou que meu cabelo está mais grosso.",
      date: "há 3 meses"
    }
  ];

  return (
    <section className="py-24 bg-[#0B3B2C] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Aprovado por milhares.</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="font-bold text-xl">4.8/5 estrelas</span>
              <span className="text-gray-400">Baseado em +12.000 reviews</span>
            </div>
          </div>
          <button className="bg-[#144D3A] text-[#8FD6BD] px-6 py-3 rounded-full font-bold hover:bg-[#1a5f48] transition-colors">
            VER TODAS AS AVALIAÇÕES
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#144D3A] p-8 rounded-3xl border border-white/5">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg mb-6 leading-relaxed italic">"{r.text}"</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold">{r.author}</span>
                <span className="text-gray-400">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
