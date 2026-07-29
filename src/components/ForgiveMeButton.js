import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const pleas = [
  "سامحيني؟",
  "بجد بجد آسف يا منة",
  "طب لو اشتريلك حاجة تحبيها؟",
  "هرقصلك رقصة غبية لو سامحتيني",
  "حتى لو تقوليلي أعتذر ١٠٠ مرة تانية، جاهز",
  "طيب أنا رسمياً هستسلم... بس سامحيني"
];

const Wrapper = styled.div`
  max-width: 620px;
  margin: 20px auto 60px;
  background: var(--paper);
  border: 1.5px dashed var(--gold);
  border-radius: 10px;
  padding: 40px 25px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Eyebrow = styled.p`
  font-family: 'Cairo', sans-serif;
  font-size: 0.9rem;
  color: var(--ink-soft);
  letter-spacing: 0.5px;
  margin: 0 0 6px;
  opacity: 0.8;
`;

const Title = styled.h2`
  color: var(--ink);
  font-family: 'Aref Ruqaa', serif;
  font-size: 1.9rem;
  margin: 0 0 22px;
`;

const PleaText = styled.p`
  font-size: 1.4rem;
  font-family: 'Markazi Text', serif;
  color: var(--charcoal);
  margin-bottom: 26px;
  min-height: 2.2rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const YesButton = styled.button`
  background: var(--ink);
  color: var(--paper);
  border: none;
  border-radius: 6px;
  padding: 13px 28px;
  font-size: 1.05rem;
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(107, 31, 59, 0.3);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const NoButton = styled.button`
  background: transparent;
  color: var(--ink-soft);
  border: 1.5px solid var(--gold-soft);
  border-radius: 6px;
  padding: 13px 28px;
  font-size: 1.05rem;
  font-family: 'Cairo', sans-serif;
  cursor: pointer;
  transition: transform 0.2s ease;
`;

const StampMark = styled.div`
  font-family: 'Aref Ruqaa', serif;
  font-size: 2.4rem;
  color: var(--ink);
  border: 4px solid var(--ink);
  border-radius: 10px;
  display: inline-block;
  padding: 10px 34px;
  transform: rotate(-6deg) scale(0);
  opacity: 0.9;
`;

const ForgivenSub = styled.p`
  font-family: 'Markazi Text', serif;
  font-size: 1.2rem;
  color: var(--ink-soft);
  margin-top: 18px;
`;

const ForgiveMeButton = () => {
  const [step, setStep] = useState(0);
  const [forgiven, setForgiven] = useState(false);
  const noBtnRef = useRef(null);
  const stampRef = useRef(null);

  const handleNo = () => {
    setStep((prev) => (prev + 1 < pleas.length ? prev + 1 : prev));
    if (noBtnRef.current) {
      gsap.to(noBtnRef.current, {
        scale: Math.max(0.6, 1 - (step + 1) * 0.1),
        duration: 0.3,
        ease: 'back.out(2)'
      });
    }
  };

  const handleYes = () => {
    setForgiven(true);
    requestAnimationFrame(() => {
      if (stampRef.current) {
        gsap.to(stampRef.current, {
          scale: 1,
          duration: 0.5,
          ease: 'back.out(3)'
        });
      }
    });
  };

  return (
    <Wrapper>
      {!forgiven ? (
        <>
          <Eyebrow>طلب رسمي</Eyebrow>
          <Title>لسه زعلانة مني؟</Title>
          <PleaText>{pleas[step]}</PleaText>
          <ButtonRow>
            <YesButton onClick={handleYes}>سامحتك</YesButton>
            <NoButton ref={noBtnRef} onClick={handleNo}>لسه زعلانة</NoButton>
          </ButtonRow>
        </>
      ) : (
        <>
          <Eyebrow>تم الاعتماد</Eyebrow>
          <StampMark ref={stampRef}>مقبول</StampMark>
          <ForgivenSub>سامحتيني يا منة، وبحبك 🩷</ForgivenSub>
        </>
      )}
    </Wrapper>
  );
};

export default ForgiveMeButton;
