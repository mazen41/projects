import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import AnimatedHeader from './components/AnimatedHeader';
import LoveLetter from './components/LoveLetter';
import DailyMessage from './components/DailyMessage';
import FloatingHearts from './components/FloatingHearts';
import ForgiveMeButton from './components/ForgiveMeButton';

function App() {
  return (
    <>
      <GlobalStyle />
      <FloatingHearts />
      <AnimatedHeader />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 50px' }}>
        <LoveLetter />
        <DailyMessage />
        <ForgiveMeButton />
      </div>
    </>
  );
}

export default App;