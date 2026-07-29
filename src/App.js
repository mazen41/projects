import React, { useRef, useState } from 'react';
import { GlobalStyle } from './styles/globalStyles';
import Envelope from './components/Envelope';
import AnimatedHeader from './components/AnimatedHeader';
import LoveLetter from './components/LoveLetter';
import DailyMessage from './components/DailyMessage';
import ForgiveMeButton from './components/ForgiveMeButton';
import MusicPlayer from './components/MusicPlayer';
import Divider from './components/Divider';

function App() {
  const [opened, setOpened] = useState(false);
  const musicRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    musicRef.current?.start();
  };

  return (
    <>
      <GlobalStyle />
      <MusicPlayer ref={musicRef} />
      {!opened && <Envelope onOpen={handleOpen} />}
      {opened && (
        <>
          <AnimatedHeader />
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 50px' }}>
            <LoveLetter />
            <Divider />
            <DailyMessage />
            <Divider />
            <ForgiveMeButton />
          </div>
        </>
      )}
    </>
  );
}

export default App;
