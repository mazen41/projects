import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import AnimatedHeader from './components/AnimatedHeader';
import LoveLetter from './components/LoveLetter';
import DailyMessage from './components/DailyMessage';
import FloatingHearts from './components/FloatingHearts';
import ForgiveMeButton from './components/ForgiveMeButton';
import MusicPlayer from './components/MusicPlayer';
import Divider from './components/Divider';

function App() {
  return (
    <>
      <GlobalStyle />
      <FloatingHearts />
      <MusicPlayer />
      <AnimatedHeader />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 50px' }}>
        <LoveLetter />
        <Divider />
        <DailyMessage />
        <Divider />
        <ForgiveMeButton />
      </div>
    </>
  );
}

export default App;