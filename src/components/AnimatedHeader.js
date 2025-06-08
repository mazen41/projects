import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { FaHeart } from 'react-icons/fa';

gsap.registerPlugin(TextPlugin);

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #d23669 0%, #ff6b6b 100%);
  color: white;
  padding: 30px 0;
  text-align: center;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 4px 12px rgba(210, 54, 105, 0.3);
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-family: 'Lateef', cursive;
  font-size: 3.5rem;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  transform: translateY(-20px);
  opacity: 0;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin: 10px 0 0;
  opacity: 0.9;
  font-family: 'Scheherazade New', serif;
`;

const HeartIcon = styled(FaHeart)`
  position: absolute;
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  opacity: 0;
`;

const AnimatedHeader = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)"
    });

    // Subtitle typing animation
    gsap.to(subtitleRef.current, {
      duration: 2.5,
      text: {
        value: "كل يوم رساله احلي من الي قبلهاا",
        speed: 0.7
      },
      ease: "power2.inOut"
    });

    // Create floating hearts around header
    for (let i = 0; i < 8; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '❤';
      heart.style.position = 'absolute';
      heart.style.fontSize = `${Math.random() * 20 + 15}px`;
      heart.style.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.opacity = '0';
      heart.style.zIndex = '0';
      heart.style.pointerEvents = 'none';
      titleRef.current.parentNode.appendChild(heart);

      gsap.to(heart, {
        y: -50,
        x: Math.random() * 40 - 20,
        opacity: 0.7,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    }
  }, []);

  return (
    <HeaderContainer>
      <Title ref={titleRef}>ليكي</Title>
      <Subtitle ref={subtitleRef}></Subtitle>
    </HeaderContainer>
  );
};

export default AnimatedHeader;