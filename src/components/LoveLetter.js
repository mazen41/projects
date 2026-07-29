import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LetterContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 22px;
  padding: 42px 40px;
  margin: 40px auto;
  box-shadow: 0 10px 35px rgba(210, 54, 105, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.4) inset;
  position: relative;
  max-width: 800px;
  border: 1px solid rgba(255, 202, 212, 0.7);
  transform: translateY(50px);
  opacity: 0;
`;

const LetterTitle = styled.h1`
  color: #d23669;
  text-align: center;
  font-family: 'Lateef', cursive;
  margin-bottom: 30px;
  font-size: 2.8rem;
`;

const LetterContent = styled.div`
  font-size: 1.8rem;
  line-height: 2.2;
  text-align: right;
  font-family: 'Scheherazade New', serif;
  color: #5a3d5c;

  p {
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateX(30px);
  }
`;

const Signature = styled.p`
  text-align: left;
  font-style: italic;
  margin-top: 40px;
  color: #d23669;
  font-weight: bold;
  font-size: 1.6rem;
  opacity: 0;
`;

const Stamp = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 74px;
  height: 74px;
  background: linear-gradient(135deg, #ff9a8b 0%, #ffb347 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transform: rotate(-15deg);
  box-shadow: 0 4px 14px rgba(255, 106, 136, 0.5);
  font-family: 'Lateef', cursive;
  font-size: 1.5rem;
  opacity: 0;
  scale: 0;
`;

const LoveLetter = () => {
  const letterRef = useRef(null);
  const contentRefs = useRef([]);
  const signatureRef = useRef(null);
  const stampRef = useRef(null);

  useEffect(() => {
    gsap.to(letterRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: letterRef.current,
        start: "top 80%",
      },
    });

    gsap.to(stampRef.current, {
      rotation: -15,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "back.out(4)",
    });

    contentRefs.current.forEach((ref, i) => {
      gsap.to(ref, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3 + i * 0.2,
        scrollTrigger: {
          trigger: ref,
          start: "top 90%",
        },
      });
    });

    gsap.to(signatureRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: signatureRef.current,
        start: "top 90%",
      },
    });

    for (let i = 0; i < 12; i++) {
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
      letterRef.current.appendChild(heart);

      gsap.to(heart, {
        y: -100,
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        opacity: 0,
        duration: 8 + Math.random() * 10,
        repeat: -1,
        delay: Math.random() * 5,
        ease: "none",
      });
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <LetterContainer ref={letterRef}>
      <Stamp ref={stampRef}>آسف</Stamp>
      <LetterTitle>رسالة اعتذار</LetterTitle>
      <LetterContent>
        <p ref={addToRefs}>منة، أنا آسف بجد. مش بقولها عشان أعدي الموقف وخلاص، أنا حاسس إني زعلتك وده مضايقني ومش قادر أطنّشه.</p>
        <p ref={addToRefs}>أنا بحبك بجد، ومش محتاج أجمّل الكلام عشان أثبت ده، انتي عارفة أنا حاسس بإيه ناحيتك.</p>
        <p ref={addToRefs}>عارف إني غلطت، وعارف إن الكلام لوحده مش كفاية، بس أنا فعلاً نفسي أصلّح اللي حصل وأرجّعلك راحتك وابتسامتك.</p>
        <p ref={addToRefs}>مش عايز أكرر نفس الغلط تاني، ولو ده محتاج مني أغيّر في نفسي، أنا مستعد أعمل كده عشانك، لأنك تستاهلي الأفضل مني دايماً.</p>
        <p ref={addToRefs}>أنا يهمني إنك تبقي مرتاحة ومبسوطة، وعايز أكون سبب في ده مش العكس.</p>
        <p ref={addToRefs}>أنا موجود جنبك طول ما انتي عايزاني وطول ما انتي حابة وجودي.</p>
        <p ref={addToRefs}>سامحيني يا منة… مش عشان نعدّي الموضوع، لكن عشان انتي فعلاً مهمة جداً عندي ومش متخيل حياتي من غيرك.</p>
      </LetterContent>
      <Signature ref={signatureRef}>آسف قوي يا منة… وبحبك أكتر من أي حاجة 🩷</Signature>
    </LetterContainer>
  );
};

export default LoveLetter;
