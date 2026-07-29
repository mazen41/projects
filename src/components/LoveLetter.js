import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LetterContainer = styled.div`
  background: rgba(255, 255, 255, 0.92);
  border-radius: 18px;
  padding: 40px;
  margin: 40px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 800px;
  border: 1px solid #ffcad4;
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
        <p ref={addToRefs}>منة، أنا آسف. مش كلمة بقولها وخلاص عشان أخلص الموضوع، أنا حاسس بيها جوايا فعلاً، وعارف إني زعلتك كتير وده حاجة قاعدة في دماغي مش نازلة.</p>
        <p ref={addToRefs}>بحبك أكتر من أي حاجة في الدنيا دي، وده مش كلام بترقيص ولا مجاملة، ده حقيقي زي ما انتي عارفاني وزي ما دايماً بحس بيه من غير ما أقوله.</p>
        <p ref={addToRefs}>عارف إني غلطت، وعارف إن الكلام لوحده مش هيصلح اللي حصل، بس أنا بجد من كل قلبي نفسي أرجع الابتسامة اللي أنا سبب زعلها.</p>
        <p ref={addToRefs}>مش عايز أزعلك تاني خالص، ولو ده معناه إني أغير حاجات فيا، أنا مستعد، لأن انتي تستاهلي أحسن نسخة مني مش أي نسخة.</p>
        <p ref={addToRefs}>عايز أبسطك على قد ما أقدر، حتى لو ده معناه إني أعمل حركات غبية وأضحك على نكتك المكررة زي أول مرة بالظبط 😂</p>
        <p ref={addToRefs}>وعايز أبقى معاكي على قد ما أقدر، حتى لو المسافة صعبة أو الدنيا زحمة أو الشغل تعبان، انتي دايماً هتلاقيني موجود.</p>
        <p ref={addToRefs}>وعشان أثبتلك إني بجد، أنا رسمياً واقف قدامك بكل جدية وبقول: مستعد أحمل الشناطة، أقف في الطابور، وأسمع أغنيتك المفضلة لأد ما انتي عايزة من غير ما أتذمر ولا مرة 🙈</p>
        <p ref={addToRefs}>سامحيني يا منة. مش عشان الموضوع يخلص وخلاص، لكن عشان انتي غالية عليا جداً وأنا مش قادر أتخيل يوم من غيرك.</p>
      </LetterContent>
      <Signature ref={signatureRef}>آسف قوي يا منة… وبحبك أكتر من أي حاجة 🩷</Signature>
    </LetterContainer>
  );
};

export default LoveLetter;
