
import React from 'react';
import { Screen } from '../types';
import { Icons } from '../constants';

interface RegisterProps {
  onNavigate: (screen: Screen) => void;
}

const Register: React.FC<RegisterProps> = ({ onNavigate }) => {
  return (
    <div className="p-8 pt-10 flex flex-col">
      <button onClick={() => onNavigate('LOGIN')} className="mb-6 p-2 w-fit -ml-2">
        <Icons.ArrowLeft className="w-6 h-6 text-gray-600" />
      </button>
      
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Criar conta</h1>
      <p className="text-gray-500 mb-8">Comece sua jornada de cuidado preventivo.</p>

      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Nome completo"
          className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" 
        />
        <input 
          type="email" 
          placeholder="E-mail"
          className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" 
        />
        <input 
          type="password" 
          placeholder="Senha"
          className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" 
        />
        <input 
          type="password" 
          placeholder="Confirmar senha"
          className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" 
        />
        
        <div className="flex items-start gap-3 py-2">
          <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
          <p className="text-xs text-gray-500 leading-relaxed">
            Concordo com os <strong>Termos de Uso</strong> e entendo que este app 
            <strong> não substitui aconselhamento médico.</strong>
          </p>
        </div>

        <button 
          onClick={() => onNavigate('HOME')}
          className="w-full bg-blue-600 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-all mt-4"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default Register;
