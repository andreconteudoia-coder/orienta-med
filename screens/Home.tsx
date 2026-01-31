
import React from 'react';
import { Screen } from '../types';
import { Icons } from '../constants';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="bg-white p-6 pb-4 flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">Olá, João!</p>
          <h1 className="text-xl font-bold text-gray-800">Como você está hoje?</h1>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
          <Icons.User className="text-blue-600" />
        </div>
      </div>

      <div className="px-6 pb-20 space-y-6">
        {/* Quick Action Card - High Urgency/Primary */}
        <button 
          onClick={() => onNavigate('HEALTH_STATUS')}
          className="w-full bg-blue-600 p-6 rounded-[32px] text-white text-left flex items-center justify-between shadow-xl shadow-blue-100"
        >
          <div className="space-y-1">
            <h3 className="font-bold text-lg">Nova Orientação</h3>
            <p className="text-blue-100 text-sm">Triagem de sintomas rápida.</p>
          </div>
          <div className="bg-white/20 p-3 rounded-2xl">
            <Icons.MessageSquare className="w-6 h-6" />
          </div>
        </button>

        {/* Action Grid */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => onNavigate('EXAM_INTERPRETATION')}
            className="bg-green-50 p-6 rounded-[28px] border border-green-100 text-left flex flex-col gap-3 group transition-all"
          >
            <div className="bg-green-600/10 p-2 w-fit rounded-xl text-green-600 group-active:scale-90 transition-transform">
              <Icons.FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Interpretar</p>
              <p className="text-xs text-gray-500">Exames de sangue e imagem.</p>
            </div>
          </button>

          <button 
            onClick={() => onNavigate('HEALTH_PROFILE')}
            className="bg-purple-50 p-6 rounded-[28px] border border-purple-100 text-left flex flex-col gap-3 group transition-all"
          >
            <div className="bg-purple-600/10 p-2 w-fit rounded-xl text-purple-600 group-active:scale-90 transition-transform">
              <Icons.Health className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Meu Perfil</p>
              <p className="text-xs text-gray-500">Histórico e alergias.</p>
            </div>
          </button>
        </div>

        {/* History Preview */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-gray-800">Recentes</h4>
            <button onClick={() => onNavigate('HISTORY')} className="text-blue-600 text-sm font-semibold">Ver tudo</button>
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                  <Icons.Stethoscope className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Triagem: Dor de Cabeça</p>
                  <p className="text-[10px] text-gray-400">12 Out, 2023 • Baixa Urgência</p>
                </div>
                <Icons.ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 rounded-2xl p-4 flex gap-4">
          <Icons.AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <p className="text-xs text-blue-800 leading-relaxed">
            Dica: Manter seu perfil atualizado ajuda a IA a fornecer orientações mais precisas baseadas no seu histórico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
