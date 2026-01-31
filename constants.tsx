
import React from 'react';
import { 
  Home, 
  ClipboardList, 
  History, 
  Settings, 
  Stethoscope, 
  FileText, 
  User, 
  LogOut, 
  ChevronRight, 
  AlertCircle,
  Plus,
  ArrowLeft,
  MessageSquare,
  Upload,
  Camera,
  CheckCircle2
} from 'lucide-react';

export const Icons = {
  Home: (props: any) => <Home {...props} />,
  Health: (props: any) => <ClipboardList {...props} />,
  History: (props: any) => <History {...props} />,
  Settings: (props: any) => <Settings {...props} />,
  Stethoscope: (props: any) => <Stethoscope {...props} />,
  FileText: (props: any) => <FileText {...props} />,
  User: (props: any) => <User {...props} />,
  LogOut: (props: any) => <LogOut {...props} />,
  ChevronRight: (props: any) => <ChevronRight {...props} />,
  AlertCircle: (props: any) => <AlertCircle {...props} />,
  Plus: (props: any) => <Plus {...props} />,
  ArrowLeft: (props: any) => <ArrowLeft {...props} />,
  MessageSquare: (props: any) => <MessageSquare {...props} />,
  Upload: (props: any) => <Upload {...props} />,
  Camera: (props: any) => <Camera {...props} />,
  CheckCircle: (props: any) => <CheckCircle2 {...props} />
};

export const Colors = {
  primary: '#0288D1',
  primaryLight: '#E3F2FD',
  secondary: '#4CAF50',
  secondaryLight: '#E8F5E9',
  accent: '#FF9800',
  textMain: '#1F2937',
  textMuted: '#6B7280',
  bg: '#F9FAFB'
};
