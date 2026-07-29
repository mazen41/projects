import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';

const inviteGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(201, 161, 91, 0.5); }
  50% { box-shadow: 0 0 0 14px rgba(201, 161, 91, 0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 40%, #7a2745 0%, #4a1730 75%, #34112a 100%);
  padding: 20px;
`;

const Perspective = styled.div`
  perspective: 900px;
`;

const EnvelopeShape = styled.div`
  position: relative;
  width: 260px;
  height: 170px;
  max-width: 78vw;
`;

const Body = styled.div`
  position: absolute;
  inset: 0;
  background: var(--paper-edge);
  border: 1px solid var(--gold);
  border-radius: 6px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Flap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 130px solid transparent;
  border-right: 130px solid transparent;
  border-top: 85px solid var(--ink);
  z-index: 2;
  transform-origin: top center;
`;

const Seal = styled.button`
  position: absolute;
  top: 57px;
  left: 102px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  z-index: 3;
  cursor: pointer;
  background: radial-gradient(circle at 35% 30%, var(--gold-soft), var(--gold) 70%);
  color: var(--ink);
  font-family: 'Aref Ruqaa', serif;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${inviteGlow} 2.2s infinite;
`;

const Label = styled.p`
  margin-top: 32px;
  color: var(--paper);
  font-family: 'Cairo', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.3px;
  opacity: 0.85;
  text-align: center;
`;

const Envelope = ({ onOpen }) => {
  const overlayRef = useRef(null);
  const envelopeRef = useRef(null);
  const flapRef = useRef(null);
  const sealRef = useRef(null);

  const handleClick = () => {
    const tl = gsap.timeline({
      onComplete: onOpen
    });

    tl.to(sealRef.current, {
      scale: 0,
      rotate: 35,
      opacity: 0,
      duration: 0.35,
      ease: 'back.in(2)'
    })
      .to(
        flapRef.current,
        {
          rotateX: -165,
          duration: 0.65,
          ease: 'power3.inOut'
        },
        '-=0.05'
      )
      .to(
        envelopeRef.current,
        {
          y: 30,
          scale: 0.92,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.in'
        },
        '-=0.15'
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.out'
        },
        '-=0.25'
      );
  };

  return (
    <Overlay ref={overlayRef}>
      <Perspective>
        <EnvelopeShape ref={envelopeRef}>
          <Body />
          <Flap ref={flapRef} />
          <Seal ref={sealRef} onClick={handleClick} aria-label="افتحي الرسالة">
            آسف
          </Seal>
        </EnvelopeShape>
      </Perspective>
      <Label>دوسي على الختم عشان تفتحي الرسالة</Label>
    </Overlay>
  );
};

export default Envelope;
