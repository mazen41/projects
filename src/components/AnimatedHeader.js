import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #ff9a8b 0%, #ff6a88 45%, #ffb347 100%);
  color: white;
  padding: 35px 0;
  text-align: center;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 15px rgba(210, 54, 105, 0.3);
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-family: 'Lateef', cursive;
  font-size: 3.2rem;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  transform: translateY(-20px);
  opacity: 0;
`;

const Subtitle = styled.p`
  font-size: 1.7rem;
  margin: 12px 0 0;
  opacity: 0.95;
  font-family: 'Scheherazade New', serif;
`;

const AnimatedHeader = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // gentle, sincere entrance - not bouncy, feels calm and genuine
    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.8,
      ease: "power2.out"
    });

    gsap.to(subtitleRef.current, {
      duration: 2.8,
      delay: 0.6,
      text: {
        value: "بحبك أكتر من أي حاجة في الدنيا يا منة 🩷",
        speed: 0.6
      },
      ease: "power2.inOut"
    });

    // soft floating hearts + a few sorry-face emojis mixed in
    const symbols = ['❤', '❤', '❤', '🥺', '🩷'];
    for (let i = 0; i < 10; i++) {
      const el = document.createElement('div');
      el.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.position = 'absolute';
      el.style.fontSize = `${Math.random() * 18 + 14}px`;
      el.style.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.opacity = '0';
      el.style.zIndex = '0';
      el.style.pointerEvents = 'none';
      titleRef.current.parentNode.appendChild(el);

      gsap.to(el, {
        y: -40,
        x: Math.random() * 30 - 15,
        opacity: 0.8,
        duration: 3.5 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2.5
      });
    }
  }, []);

  return (
    <HeaderContainer>
      <Title ref={titleRef}>آسف يا منة 🥺</Title>
      <Subtitle ref={subtitleRef}></Subtitle>
    </HeaderContainer>
  );
};

export default AnimatedHeader;
