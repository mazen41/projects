import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LetterContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 40px;
  margin: 40px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 800px;
  border: 1px solid #f8a5c2;
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
  width: 70px;
  height: 70px;
  background: #f8a5c2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transform: rotate(-15deg);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-family: 'Lateef', cursive;
  font-size: 1.8rem;
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
      <Stamp ref={stampRef}>حب</Stamp>
      <LetterTitle>رسالة حب</LetterTitle>
      <LetterContent>
        <p ref={addToRefs}>يمكن احنا لسه ما عشناش حاجات كتير سوا ما اتصورناش مع بعض ما خرجناش نمشي في الشارع ما قعدناش مع بعض كتير بس رغم كل ده كل يوم بيعدي وانا بكلمك بحس إن بينا حاجة حقيقية مش محتاجة صور ولا لحظات علشان تثبت</p>
        <p ref={addToRefs}>بحس إني مرتاح بحس إني أنا مش بحتاج ألبس وش تاني ولا أبرر نفسي ولا أكون غير اللي أنا عليه كل لما نحكي حتى عن حاجات تافهة كل لما نضحك من غير سبب بحس إن ربنا بعتلي شخص فاهمني وشايفني من غير ما يطلب مني حاجة</p>
        <p ref={addToRefs}>عارفة ايه اكتر حاجة بتخليني متمسك بيكي إنك مش بتحاولي تبهري ولا تلعبي دور ولا تظهري غيرك انتي بتكوني موجودة وده لوحده كفاية عندي</p>
        <p ref={addToRefs}> الحقيقة إني بجد ما بقيتش أقدر أتخيل يومي من غيرك انتي بقيتي جزء من تفاصيل يومي من تفكيري من إحساسي بقيتي أول حد ييجي في بالي وانا فرحان وأول حد عايز أسمعه لما أكون مضايق</p>
        <p ref={addToRefs}>فيه ناس بتعيش سنين علشان تلاقي حد يفهمها وانا كنت محظوظ إني لقيتك بدري</p>
        <p ref={addToRefs}>احنا يمكن بعيد بس الإحساس اللي بينا مش محتاج مسافة وصدقيني ولا يوم عدى عليا وانا ناسيك أو مش حاسس بوجودك انا بحبك وباحترمك وبقدر وجودك في حياتي</p>
        <p ref={addToRefs}>ولو سألتي نفسي في ايه نفسي نعيش حاجات بسيطة بس بتفرق نخرج سوا ونتمشى نضحك على حاجات تفهى نلعب مع بعض لعبة في كافيه أو نركب ملاهي زي العيال نقعد في مكان هادي ونتكلم عن كل حاجة</p>
        <p ref={addToRefs}>نفسي أعمل حاجات كتير أوي معاكي وأبينلك وأوريكي حاجات كتير أوي جوايا بس لحد اللحظة دي ولحد ما تيجي الأيام دي كفاية عندي إنك معايا بتسمعيني بتطمنيني وبتخليني أحس إني مش لوحدي في الدنيا دي</p>
      </LetterContent>
      <Signature ref={signatureRef}>بحبك يا منه</Signature>
    </LetterContainer>
  );
};

export default LoveLetter;
