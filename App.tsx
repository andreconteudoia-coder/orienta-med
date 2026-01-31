
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import HealthStatus from './screens/HealthStatus';
import Result from './screens/Result';
import HealthProfile from './screens/HealthProfile';
import ExamInterpretation from './screens/ExamInterpretation';
import History from './screens/History';
import Settings from './screens/Settings';
import BottomNav from './components/BottomNav';
import Disclaimer from './components/Disclaimer';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simple router logic
  const navigate = (screen: Screen) => {
    window.scrollTo(0, 0);
    setCurrentScreen(screen);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('HOME');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('LOGIN');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN': return <Login onLogin={handleLogin} onNavigate={navigate} />;
      case 'REGISTER': return <Register onNavigate={navigate} />;
      case 'HOME': return <Home onNavigate={navigate} />;
      case 'HEALTH_STATUS': return <HealthStatus onNavigate={navigate} />;
      case 'RESULT': return <Result onNavigate={navigate} />;
      case 'HEALTH_PROFILE': return <HealthProfile onNavigate={navigate} />;
      case 'EXAM_INTERPRETATION': return <ExamInterpretation onNavigate={navigate} />;
      case 'HISTORY': return <History onNavigate={navigate} />;
      case 'SETTINGS': return <Settings onLogout={handleLogout} onNavigate={navigate} />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  const showNav = isAuthenticated && !['LOGIN', 'REGISTER', 'HEALTH_STATUS'].includes(currentScreen);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Disclaimer is persistent for safety */}
      <Disclaimer />
      
      <main className="flex-1 pb-24 md:pb-0 md:max-w-md md:mx-auto md:w-full md:bg-white md:shadow-xl md:min-h-screen relative overflow-hidden">
        {renderScreen()}
      </main>

      {showNav && (
        <BottomNav currentScreen={currentScreen} onNavigate={navigate} />
      )}
    </div>
  );
};

export default App;
