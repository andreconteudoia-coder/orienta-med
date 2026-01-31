
import React from 'react';
import { Screen } from '../types';
import { Icons } from '../constants';

interface HealthProfileProps {
  onNavigate: (screen: Screen) => void;
}

const HealthProfile: React.FC<HealthProfileProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 pb-24 space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={() => onNavigate('HOME')} className="p-2 -ml-2">
          <Icons.ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Perfil de Saúde</h1>
      </div>

      {/* User Card */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-[32px] text-white shadow-xl shadow-blue-100">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold">
            J
          </div>
          <div>
            <h2 className="text-lg font-bold">João Silva</h2>
            <p className="text-blue-100 text-xs">Tipo Sanguíneo: O+</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
          <div>
            <p className="text-[10px] text-blue-200 uppercase font-bold">Idade</p>
            <p className="font-semibold">32 anos</p>
          </div>
          <div>
            <p className="text-[10px] text-blue-200 uppercase font-bold">Peso</p>
            <p className="font-semibold">78 kg</p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {/* Conditions */}
        <section className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h3 className="font-bold text-gray-800">Condições Crônicas</h3>
            <button className="text-blue-600"><Icons.Plus className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Rinite Alérgica', 'Hipertensão Leve'].map(c => (
              <span key={c} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-semibold border border-blue-100">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Medications */}
        <section className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h3 className="font-bold text-gray-800">Medicamentos</h3>
            <button className="text-blue-600"><Icons.Plus className="w-5 h-5" /></button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Losartana', dose: '50mg', time: '8:00 AM' },
              { name: 'Vitamina D', dose: '2000 UI', time: '12:00 PM' }
            ].map((m, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm text-gray-800">{m.name}</p>
                  <p className="text-xs text-gray-400">{m.dose}</p>
                </div>
                <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-md text-gray-500 font-bold">{m.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Allergies */}
        <section className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h3 className="font-bold text-gray-800">Alergias</h3>
            <button className="text-blue-600"><Icons.Plus className="w-5 h-5" /></button>
          </div>
          <div className="bg-red-50 p-4 rounded-2xl border border-red-100 flex items-center gap-3">
            <Icons.AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-sm text-red-700 font-semibold">Penicilina</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthProfile;
