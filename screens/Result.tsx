
import React from 'react';
import { Screen } from '../types';
import { Icons } from '../constants';

interface ResultProps {
  onNavigate: (screen: Screen) => void;
}

const Result: React.FC<ResultProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 pb-24 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col items-center text-center mt-6">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
          <Icons.CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Orientação Finalizada</h1>
        <p className="text-gray-500">Com base nas suas respostas, aqui está a nossa orientação.</p>
      </div>

      {/* Severity Indicator */}
      <div className="bg-white p-6 rounded-[32px] border-l-8 border-green-500 shadow-sm space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Urgência Baixa</span>
          <Icons.CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Cuidado Domiciliar</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Seus sintomas não indicam uma emergência imediata. Recomendamos repouso, hidratação e observação nas próximas 24 horas.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-gray-800 px-1">Próximos Passos</h3>
        <ul className="space-y-3">
          {[
            'Beba pelo menos 2L de água.',
            'Evite esforços físicos intensos hoje.',
            'Monitore sua temperatura a cada 4 horas.',
            'Se a dor aumentar, procure um clínico geral.'
          ].map((step, i) => (
            <li key={i} className="flex gap-3 bg-white p-4 rounded-2xl border border-gray-100 items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-700">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 space-y-3">
        <button 
          onClick={() => onNavigate('HOME')}
          className="w-full bg-blue-600 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-all"
        >
          Voltar para Início
        </button>
        <button 
          className="w-full bg-red-50 text-red-600 font-semibold py-4 rounded-2xl border border-red-100 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <Icons.AlertCircle className="w-5 h-5" />
          Meus sintomas pioraram
        </button>
      </div>
    </div>
  );
};

export default Result;
