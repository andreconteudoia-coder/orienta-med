
import React from 'react';
import { Screen } from '../types';
import { Icons, Colors } from '../constants';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const tabs = [
    { id: 'HOME', label: 'Início', icon: Icons.Home },
    { id: 'HISTORY', label: 'Histórico', icon: Icons.History },
    { id: 'HEALTH_PROFILE', label: 'Perfil', icon: Icons.Health },
    { id: 'SETTINGS', label: 'Ajustes', icon: Icons.Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-3 px-2 md:max-w-md md:mx-auto z-40">
      {tabs.map((tab) => {
        const isActive = currentScreen === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id as Screen)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-[#0288D1]' : 'text-gray-400'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
