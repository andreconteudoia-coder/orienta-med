
import React from 'react';
import { Icons } from '../constants';

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-amber-50 border-b border-amber-100 p-2 px-4 flex items-start gap-3 sticky top-0 z-50">
      <Icons.AlertCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
      <p className="text-[10px] text-amber-800 leading-tight">
        <strong>Atenção:</strong> Este app fornece orientações de saúde e triagem pré-hospitalar. 
        <strong> NÃO substitui diagnóstico médico.</strong> Em emergências, ligue 192.
      </p>
    </div>
  );
};

export default Disclaimer;
