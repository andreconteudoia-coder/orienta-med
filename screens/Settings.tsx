
import React from 'react';
import { Screen } from '../types';
import { Icons } from '../constants';

interface SettingsProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onNavigate, onLogout }) => {
  const sections = [
    { 
      title: 'Conta', 
      items: [
        { label: 'Editar Perfil', icon: Icons.User },
        { label: 'Segurança e Senha', icon: Icons.AlertCircle },
        { label: 'Privacidade', icon: Icons.AlertCircle }
      ] 
    },
    { 
      title: 'Notificações', 
      items: [
        { label: 'Alertas de Medicação', icon: Icons.History },
        { label: 'Relatórios Mensais', icon: Icons.FileText }
      ] 
    }
  ];

  return (
    <div className="p-6 pb-24 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Ajustes</h1>

      <div className="space-y-8">
        {sections.map((sec) => (
          <section key={sec.title} className="space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">{sec.title}</h3>
            <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
              {sec.items.map((item, idx) => (
                <button 
                  key={item.label}
                  className={`w-full p-5 flex items-center justify-between group active:bg-gray-50 transition-colors ${
                    idx !== sec.items.length - 1 ? 'border-b border-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-2 rounded-xl text-blue-600 group-active:scale-90 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                  </div>
                  <Icons.ChevronRight className="w-5 h-5 text-gray-300" />
                </button>
              ))}
            </div>
          </section>
        ))}

        <button 
          onClick={onLogout}
          className="w-full p-6 bg-red-50 text-red-600 font-bold rounded-[32px] flex items-center justify-center gap-2 mt-4 active:scale-95 transition-all"
        >
          <Icons.LogOut className="w-5 h-5" />
          Sair da Conta
        </button>

        <div className="text-center pt-4">
          <p className="text-[10px] text-gray-300">OrientaMed v1.0.4</p>
          <p className="text-[10px] text-gray-300 mt-1 italic">Este app não fornece diagnóstico médico.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
