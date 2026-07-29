import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const HeaderContainer = styled.header`
  background: linear-gradient(160deg, var(--ink) 0%, #4a1730 100%);
  color: var(--paper);
  padding: 46px 20px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 92% 100%, 84% 90%, 76% 100%, 68% 90%, 60% 100%, 52% 90%, 44% 100%, 36% 90%, 28% 100%, 20% 90%, 12% 100%, 4% 90%, 0 100%);
`;

const Eyebrow = styled.p`
  font-family: 'Cairo', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: var(--gold-soft);
  opacity: 0;
  margin: 0 0 10px;
`;

const Title = styled.h1`
  font-family: 'Aref Ruqaa', serif;
  font-size: 3rem;
  margin: 0;
  transform: translateY(-16px);
  opacity: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 14px 0 0;
  opacity: 0.9;
  font-family: 'Markazi Text', serif;
  min-height: 2rem;
`;

const AnimatedHeader = () => {
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(eyebrowRef.current, { opacity: 0.9, duration: 0.6, ease: 'power1.out' })
      .to(titleRef.current, { y: 0, opacity: 1, duration: 1.1, ease: 'power2.out' }, '-=0.2')
      .to(
        subtitleRef.current,
        {
          duration: 2.2,
          text: { value: 'بحبك أكتر من أي حاجة في الدنيا يا منة' },
          ease: 'none'
        },
        '+=0.1'
      );
  }, []);

  return (
    <HeaderContainer>
      <Eyebrow ref={eyebrowRef}>رسالة خاصة</Eyebrow>
      <Title ref={titleRef}>آسف يا منة</Title>
      <Subtitle ref={subtitleRef}></Subtitle>
    </HeaderContainer>
  );
};

export default AnimatedHeader;
