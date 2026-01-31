
import React, { useState } from 'react';
import { Screen } from '../types';
import { Icons } from '../constants';

interface ExamInterpretationProps {
  onNavigate: (screen: Screen) => void;
}

const ExamInterpretation: React.FC<ExamInterpretationProps> = ({ onNavigate }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setHasResult(true);
    }, 2000);
  };

  return (
    <div className="p-6 pb-24 space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => onNavigate('HOME')} className="p-2 -ml-2">
          <Icons.ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Interpretar Exame</h1>
      </div>

      {!hasResult ? (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-[32px] text-center space-y-4 border-2 border-dashed border-blue-200">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Icons.Upload className="text-blue-600 w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Enviar Foto ou PDF</h3>
              <p className="text-sm text-blue-700">Tire uma foto nítida do seu exame de sangue ou laudo.</p>
            </div>
            <button 
              onClick={handleUpload}
              disabled={isUploading}
              className="bg-blue-600 text-white w-full py-4 rounded-2xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Icons.Camera className="w-5 h-5" />
                  Selecionar Arquivo
                </>
              )}
            </button>
          </div>

          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex gap-3">
            <Icons.AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Nota Importante:</strong> Esta ferramenta resume os termos técnicos do seu exame para facilitar o entendimento, mas <strong>não substitui a análise do médico requisitante.</strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-in zoom-in-95 duration-300">
          <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="bg-green-100 p-2 rounded-xl text-green-600">
                <Icons.FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-800">Hemograma Completo</p>
                <p className="text-[10px] text-gray-400">Interpretado em 15/10/2023</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                <p className="text-xs font-bold text-green-700 uppercase mb-1">Visão Geral</p>
                <p className="text-sm text-green-900 leading-relaxed">
                  Seus índices de glóbulos vermelhos e plaquetas estão dentro da normalidade.
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-3 ml-1">Destaques</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm text-gray-600">Hemoglobina</span>
                    <span className="text-sm font-bold text-green-600">Normal (14 g/dL)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm text-gray-600">Leucócitos</span>
                    <span className="text-sm font-bold text-blue-600">Levemente alto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setHasResult(false)}
            className="w-full bg-gray-100 text-gray-600 py-4 rounded-2xl font-bold"
          >
            Interpretar outro exame
          </button>
        </div>
      )}
    </div>
  );
};

export default ExamInterpretation;
