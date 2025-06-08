import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const messages = [
  "كل يوم بحبك أكتر من اللي قبله.",
  "وجودك معايا بيخلي الدنيا احلي بكتير.",
  "حتى في أبسط لحظة معاكي بحس بالسعادة.",
  "نفسي أشوف ضحكتك كل يوم.",
  "إنتي السبب اللي بيخليني أبتسم مهما كانت الظروف.",
  "دايما موجوده ف قلبي مهما حصل",
  "مهما بعدنا، إنتي في قلبي دايمًا.",
  "معاكِ الحياة ليها طعم تاني.",
  "بحس إني محظوظ عشان انتي موجوده جنبي.",
  "نفسي أسمع صوتك كل شوية.",
  "ضحكتك هي أجمل حاجة في الدنيا.",
  "كل كلمة منك بتخلي قلبي يدق بسرعة.",
  "عايز أكون جنبك دايمًا في كل لحظة.",
  "وجودك جنبي بيطمني وبيرسم لي أمل.",
  "بحبك مش بس بالكلام، بحس بيكي في كل حاجة.",
  "مهما حصل، أنا هنا ليكي.",
  "انتِ أجمل حاجة حصلتلي في حياتي.",
  "نفسي نعيش مع بعض كل لحظة ونبني ذكريات.",
  "حتى لو اليوم كان صعب، بس لما بفكر فيكي الدنيا بتضحك.",
  "بحب كل تفاصيلك حتى لو بسيطة.",
  "إنتي اللي بتخلي قلبي ينبض بالحياة.",
  "مهما كانت الدنيا ضلمة، إنتي نوري.",
  "نفسي أمسك إيدك وأقولك كل حاجة جوه قلبي.",
  "وجودك جنبي هو أماني الوحيد.",
  "بحس إني أكمل لما أكون معاك.",
  "انتِ اللي بتخليني أحلم وأتمنى أكتر.",
  "بحبك وأتمنى دايمًا أشوفك سعيدة.",
  "كل يوم بفكر أعمل حاجة تفرحك.",
  "صوتك لما بيكلم قلبي بيهدى.",
  "مهما اتكلمت مش هقدر أوصف قد إيه بحبك."
];


const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 30px;
  margin: 40px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
  transform: scale(0.9);
  opacity: 0;
`;

const Title = styled.h2`
  color: #d23669;
  font-family: 'Lateef', cursive;
  margin-bottom: 20px;
  font-size: 2.2rem;
`;

const Message = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  color: #5a3d5c;
  font-family: 'Scheherazade New', serif;
  transform: translateY(20px);
  opacity: 0;
`;

const DailyMessage = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const containerRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const today = new Date().getDate();
    const messageIndex = today % messages.length;
    setCurrentMessage(messages[messageIndex]);

    // Container animation
    gsap.to(containerRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    });

    // Message animation
    gsap.to(messageRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 0.3,
      ease: "power2.out"
    });

    // Hover animation
    containerRef.current.addEventListener('mouseenter', () => {
      gsap.to(containerRef.current, {
        scale: 1.02,
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        duration: 0.3
      });
    });

    containerRef.current.addEventListener('mouseleave', () => {
      gsap.to(containerRef.current, {
        scale: 1,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        duration: 0.3
      });
    });

    // Create floating hearts
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '❤';
      heart.style.position = 'absolute';
      heart.style.fontSize = `${Math.random() * 20 + 15}px`;
      heart.style.color = `hsl(${Math.random() * 30 + 330}, 100%, 70%)`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.opacity = '0.7';
      heart.style.zIndex = '1';
      heart.style.pointerEvents = 'none';
      containerRef.current.appendChild(heart);

      gsap.to(heart, {
        y: -50,
        x: Math.random() * 40 - 20,
        rotation: Math.random() * 360,
        opacity: 0,
        duration: 5 + Math.random() * 5,
        repeat: -1,
        delay: Math.random() * 3,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <Title>رسالة اليوم</Title>
      <Message ref={messageRef}>{currentMessage}</Message>
    </Container>
  );
};

export default DailyMessage;