
import React from 'react';
import { Screen } from '../types';
import { Icons } from '../constants';

interface LoginProps {
  onLogin: () => void;
  onNavigate: (screen: Screen) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigate }) => {
  return (
    <div className="p-8 pt-16 flex flex-col items-center">
      <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-6">
        <Icons.Stethoscope className="w-10 h-10 text-blue-600" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">OrientaMed</h1>
      <p className="text-gray-500 text-center mb-10">Suporte em saúde na palma da sua mão.</p>

      <div className="w-full space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">E-mail</label>
          <input 
            type="email" 
            placeholder="nome@email.com"
            className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Senha</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" 
          />
        </div>
        <button 
          onClick={onLogin}
          className="w-full bg-blue-600 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-all mt-4"
        >
          Entrar
        </button>
      </div>

      <div className="mt-8 text-center">
        <span className="text-gray-400 text-sm">Novo por aqui? </span>
        <button 
          onClick={() => onNavigate('REGISTER')}
          className="text-blue-600 font-semibold text-sm"
        >
          Crie uma conta
        </button>
      </div>
    </div>
  );
};

export default Login;
