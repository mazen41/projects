import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const pleas = [
  "سامحيني؟ 🥺",
  "بجد بجد آسف يا منة 🙏",
  "طب لو اشتريلك حاجة تحبيها؟ 🎁",
  "هرقصلك رقصة غبية لو سامحتيني 💃",
  "حتى لو تقوليلي أعتذر ١٠٠ مرة تانية، جاهز 😭",
  "طيب أنا رسمياً هستسلم... بس سامحيني 🏳️",
];

const Wrapper = styled.div`
  max-width: 800px;
  margin: 20px auto 50px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  padding: 35px 25px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #d23669;
  font-family: 'Lateef', cursive;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const PleaText = styled.p`
  font-size: 1.6rem;
  color: #5a3d5c;
  margin-bottom: 25px;
  min-height: 2.4rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const YesButton = styled.button`
  background: linear-gradient(135deg, #ff9a8b 0%, #ff6a88 100%);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 30px;
  font-size: 1.3rem;
  font-family: 'Scheherazade New', serif;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(255, 106, 136, 0.4);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const NoButton = styled.button`
  background: white;
  color: #d23669;
  border: 2px solid #ffcad4;
  border-radius: 30px;
  padding: 14px 30px;
  font-size: 1.3rem;
  font-family: 'Scheherazade New', serif;
  cursor: pointer;
  transition: transform 0.2s ease, font-size 0.2s ease;
`;

const ForgivenBadge = styled.div`
  font-size: 1.8rem;
  color: #d23669;
  font-family: 'Lateef', cursive;
  margin-top: 10px;
`;

const ForgiveMeButton = () => {
  const [step, setStep] = useState(0);
  const [forgiven, setForgiven] = useState(false);
  const wrapperRef = useRef(null);
  const noBtnRef = useRef(null);

  const handleNo = () => {
    // the "no" button gets shy and shrinks a little each time — a playful nudge toward yes
    setStep((prev) => (prev + 1 < pleas.length ? prev + 1 : prev));
    if (noBtnRef.current) {
      gsap.to(noBtnRef.current, {
        scale: Math.max(0.55, 1 - (step + 1) * 0.12),
        duration: 0.3,
        ease: 'back.out(2)'
      });
    }
  };

  const handleYes = () => {
    setForgiven(true);
    for (let i = 0; i < 18; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = ['❤', '🩷', '🎉', '💛'][Math.floor(Math.random() * 4)];
      heart.style.position = 'absolute';
      heart.style.fontSize = `${Math.random() * 20 + 16}px`;
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = '50%';
      heart.style.opacity = '1';
      heart.style.pointerEvents = 'none';
      wrapperRef.current.appendChild(heart);

      gsap.to(heart, {
        y: -(120 + Math.random() * 100),
        x: Math.random() * 160 - 80,
        rotation: Math.random() * 360,
        opacity: 0,
        duration: 1.5 + Math.random(),
        ease: 'power1.out',
        onComplete: () => heart.remove()
      });
    }
  };

  return (
    <Wrapper ref={wrapperRef}>
      {!forgiven ? (
        <>
          <Title>لسه زعلانة مني؟</Title>
          <PleaText>{pleas[step]}</PleaText>
          <ButtonRow>
            <YesButton onClick={handleYes}>سامحتك ❤️</YesButton>
            <NoButton ref={noBtnRef} onClick={handleNo}>لسه زعلانة 😤</NoButton>
          </ButtonRow>
        </>
      ) : (
        <>
          <Title>تم رسمياً 🎉</Title>
          <ForgivenBadge>سامحتيني يا منة! بحبك 🩷</ForgivenBadge>
        </>
      )}
    </Wrapper>
  );
};

export default ForgiveMeButton;
