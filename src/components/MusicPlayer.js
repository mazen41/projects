import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMusic, FaPause } from 'react-icons/fa';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 25px;
  left: 25px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #ff9a8b 0%, #ff6a88 45%, #ffb347 100%);
  color: white;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(210, 54, 105, 0.4);
  z-index: 999;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }

  svg {
    animation: ${({ $playing }) => ($playing ? spin : 'none')} 3s linear infinite;
  }
`;

const Hint = styled.span`
  position: fixed;
  bottom: 32px;
  left: 95px;
  background: rgba(255, 255, 255, 0.9);
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
  const [showHint, setShowHint] = useState(true);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
      setShowHint(false);
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/Albumaty.Com_tamr_aashwr_hbk_rzk.mp3"
        loop
        onEnded={() => setPlaying(false)}
      />
      <FloatingButton onClick={toggle} $playing={playing} aria-label="تشغيل الأغنية">
        {playing ? <FaPause /> : <FaMusic />}
      </FloatingButton>
      <Hint $show={showHint}>دوسي شغّلي الأغنية 🎵</Hint>
    </>
  );
};

export default MusicPlayer;
