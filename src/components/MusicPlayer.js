import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMusic, FaPause } from 'react-icons/fa';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

const Disc = styled.button`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 3px solid var(--gold);
  background:
    radial-gradient(circle at center, var(--paper-edge) 0 8px, var(--ink) 9px 11px, #2a1a24 12px 100%);
  color: var(--gold-soft);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(107, 31, 59, 0.4);
  transition: transform 0.2s ease;
  animation: ${({ $playing }) => ($playing ? spin : 'none')} 4s linear infinite;

  &:hover {
    transform: scale(1.06);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Hint = styled.span`
  background: var(--paper);
  border: 1px solid var(--gold-soft);
  color: var(--ink);
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 0.95rem;
  font-family: 'Cairo', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.4s ease;
`;

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useImperativeHandle(ref, () => ({
    start: () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setShowHint(true));
    }
  }));

  const toggle = () => {
    if (!audioRef.current) return;
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
        <Disc onClick={toggle} $playing={playing} aria-label="تشغيل الأغنية">
          {playing ? <FaPause /> : <FaMusic />}
        </Disc>
        <Hint $show={showHint}>دوسي هنا عشان تسمعي الأغنية 🎵</Hint>
      </PlayerWrapper>
    </>
  );
});

export default MusicPlayer;
