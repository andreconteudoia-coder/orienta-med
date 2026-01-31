
import React from 'react';
import { Screen } from '../types';
import { Icons } from '../constants';

interface HistoryProps {
  onNavigate: (screen: Screen) => void;
}

const History: React.FC<HistoryProps> = ({ onNavigate }) => {
  const items = [
    { id: 1, title: 'Triagem: Dor Abdominal', date: 'Ontem, 14:20', urgency: 'Media', color: 'bg-amber-100 text-amber-700' },
    { id: 2, title: 'Exame: Hemograma', date: '12 Out, 10:00', urgency: 'Interpretação', color: 'bg-blue-100 text-blue-700' },
    { id: 3, title: 'Triagem: Resfriado', date: '05 Set, 09:15', urgency: 'Baixa', color: 'bg-green-100 text-green-700' },
    { id: 4, title: 'Triagem: Enxaqueca', date: '28 Ago, 22:30', urgency: 'Baixa', color: 'bg-green-100 text-green-700' },
  ];

  return (
    <div className="p-6 pb-24 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Histórico</h1>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
        {['Todos', 'Triagens', 'Exames', 'Arquivados'].map((tab, i) => (
          <button 
            key={tab} 
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white text-gray-400 border border-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">{item.date}</p>
              </div>
              <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider ${item.color}`}>
                {item.urgency}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-xl text-xs font-bold border border-gray-100">
                Ver Detalhes
              </button>
              <button className="p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
                <Icons.Upload className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
