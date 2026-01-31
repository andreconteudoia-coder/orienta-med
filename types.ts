
export type Screen = 
  | 'LOGIN' 
  | 'REGISTER' 
  | 'HOME' 
  | 'HEALTH_STATUS' 
  | 'RESULT' 
  | 'HEALTH_PROFILE' 
  | 'EXAM_INTERPRETATION' 
  | 'HISTORY' 
  | 'SETTINGS';

export interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: Date;
}

export interface Exam {
  id: string;
  date: string;
  type: string;
  summary: string;
}

export interface Consultation {
  id: string;
  date: string;
  type: string;
  result: string;
  urgency: 'baixa' | 'media' | 'alta';
}
