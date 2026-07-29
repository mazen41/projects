import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LetterContainer = styled.div`
  background: var(--paper);
  background-image: repeating-linear-gradient(
    var(--paper) 0px,
    var(--paper) 37px,
    rgba(201, 161, 91, 0.15) 38px
  );
  border-radius: 4px;
  padding: 50px 44px;
  margin: 50px auto;
  box-shadow: 0 18px 45px rgba(107, 31, 59, 0.18);
  position: relative;
  max-width: 760px;
  border: 1px solid var(--paper-edge);
  border-right: 4px solid var(--ink);
  transform: translateY(50px);
  opacity: 0;
`;

const LetterTitle = styled.h1`
  color: var(--ink);
  text-align: center;
  font-family: 'Aref Ruqaa', serif;
  margin: 0 0 34px;
  font-size: 2.4rem;
`;

const LetterContent = styled.div`
  font-size: 1.65rem;
  line-height: 2.15;
  text-align: right;
  font-family: 'Markazi Text', serif;
  color: var(--charcoal);

  p {
    margin: 0 0 1.9rem;
    opacity: 0;
    transform: translateX(24px);
  }
`;

const Signature = styled.p`
  text-align: left;
  font-family: 'Aref Ruqaa', serif;
  margin-top: 36px;
  color: var(--ink);
  font-size: 1.5rem;
  opacity: 0;
`;

const Stamp = styled.div`
  position: absolute;
  top: 26px;
  left: 26px;
  width: 68px;
  height: 68px;
  background: radial-gradient(circle at 35% 30%, var(--gold-soft), var(--gold) 75%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink);
  font-weight: bold;
  transform: rotate(-12deg);
  box-shadow: 0 4px 12px rgba(201, 161, 91, 0.5);
  font-family: 'Aref Ruqaa', serif;
  font-size: 1.3rem;
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
      ease: 'power2.out',
      scrollTrigger: {
        trigger: letterRef.current,
        start: 'top 85%'
      }
    });

    gsap.to(stampRef.current, {
      rotation: -12,
      scale: 1,
      opacity: 1,
      duration: 0.9,
      delay: 0.4,
      ease: 'back.out(3)'
    });

    contentRefs.current.forEach((ref, i) => {
      gsap.to(ref, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.25 + i * 0.18,
        scrollTrigger: {
          trigger: ref,
          start: 'top 90%'
        }
      });
    });

    gsap.to(signatureRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: signatureRef.current,
        start: 'top 90%'
      }
    });
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
      <Signature ref={signatureRef}>آسف قوي يا منة… وبحبك أكتر من أي حاجة</Signature>
    </LetterContainer>
  );
};

export default LoveLetter;
