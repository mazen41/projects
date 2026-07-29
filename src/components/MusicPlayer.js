import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMusic, FaPause } from 'react-icons/fa';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 106, 136, 0.55); }
  70% { box-shadow: 0 0 0 18px rgba(255, 106, 136, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 106, 136, 0); }
`;

const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FloatingButton = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  background: linear-gradient(135deg, #ff9a8b 0%, #ff6a88 45%, #ffb347 100%);
  color: white;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(210, 54, 105, 0.4);
  transition: transform 0.2s ease;
  animation: ${({ $playing }) => ($playing ? pulse : 'none')} 2.2s infinite;

  &:hover {
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    animation: ${({ $playing }) => ($playing ? spin : 'none')} 3.5s linear infinite;
  }
`;

const Bars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 22px;
  opacity: ${({ $playing }) => ($playing ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;

  span {
    display: block;
    width: 4px;
    border-radius: 3px;
    background: linear-gradient(180deg, #ff6a88, #ffb347);
  }

  span:nth-child(1) { animation: bar1 1.1s ease-in-out infinite; }
  span:nth-child(2) { animation: bar2 0.9s ease-in-out infinite; }
  span:nth-child(3) { animation: bar3 1.3s ease-in-out infinite; }

  @keyframes bar1 { 0%, 100% { height: 6px; } 50% { height: 20px; } }
  @keyframes bar2 { 0%, 100% { height: 10px; } 50% { height: 22px; } }
  @keyframes bar3 { 0%, 100% { height: 4px; } 50% { height: 16px; } }
`;

const Hint = styled.span`
  position: fixed;
  bottom: 32px;
  left: 98px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  color: #d23669;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 1rem;
  font-family: 'Scheherazade New', serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  pointer-events: none;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.4s ease;
`;

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const unlockedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Step 1: start muted right away - virtually every mobile browser allows
    // silent autoplay with no user gesture required at all.
    audio.muted = true;
    audio.play().catch(() => {});

    // Step 2: the moment the user touches the page anywhere, unmute and
    // make sure it's playing. Using {once:true} + multiple event types
    // covers iOS Safari, Chrome Android, and desktop reliably.
    const unlockAudio = () => {
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      audio.muted = false;
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => setShowHint(true));
    };

    const events = ['touchend', 'touchstart', 'pointerdown', 'click', 'keydown'];
    events.forEach((evt) =>
      document.addEventListener(evt, unlockAudio, { once: true, passive: true })
    );

    return () => {
      events.forEach((evt) => document.removeEventListener(evt, unlockAudio));
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    unlockedRef.current = true;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.muted = false;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
      setShowHint(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/Albumaty.Com_tamr_aashwr_hbk_rzk.mp3"
        loop
        playsInline
        onEnded={() => setPlaying(false)}
      />
      <PlayerWrapper>
        <FloatingButton onClick={toggle} $playing={playing} aria-label="تشغيل الأغنية">
          {playing ? <FaPause /> : <FaMusic />}
        </FloatingButton>
        <Bars $playing={playing}>
          <span />
          <span />
          <span />
        </Bars>
      </PlayerWrapper>
      <Hint $show={showHint}>دوسي على الزرار عشان تسمعي الأغنية 🎵</Hint>
    </>
  );
};

export default MusicPlayer;
