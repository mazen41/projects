import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const messages = [
  "كل يوم بحبك أكتر من اللي قبله، وكل يوم بندم أكتر على اللي زعلك.",
  "وجودك معايا بيخلي الدنيا احلي بكتير، حتى لو أنا مبقتش بعمل ده كفاية.",
  "حتى في أبسط لحظة معاكي بحس بالسعادة، وفي غيابك بحس إني ناقص حاجة.",
  "نفسي أشوف ضحكتك كل يوم، وأكون أنا سبب الضحكة دي مش سبب زعلها.",
  "إنتي السبب اللي بيخليني أبتسم مهما كانت الظروف، فسامحيني عشان مسحتها شوية.",
  "دايما موجوده ف قلبي مهما حصل، حتى لو أنا كنت غبي كفاية إني أضيعك شوية.",
  "مهما بعدنا، إنتي في قلبي دايمًا، وآسف إني خليتك تحسي غير كده ولو لحظة.",
  "معاكِ الحياة ليها طعم تاني، وبدونك حتى القهوة بتبقى طعمها مختلف.",
  "بحس إني محظوظ عشان انتي موجوده جنبي، ومحظوظ أكتر إنك لسه بتسمعيني.",
  "نفسي أسمع صوتك كل شوية، حتى لو بيبقى فيه عتاب جوه صوتك أنا مستاهله.",
  "ضحكتك هي أجمل حاجة في الدنيا، وهدف اليوم إني أرجعها.",
  "كل كلمة منك بتخلي قلبي يدق بسرعة، حتى لما تبقي زعلانة وبتكلميني بجد.",
  "عايز أكون جنبك دايمًا في كل لحظة، حلوة كانت أو فيها عتاب.",
  "وجودك جنبي بيطمني وبيرسم لي أمل، وخوفي الوحيد إني أضيع ده.",
  "بحبك مش بس بالكلام، بحس بيكي في كل حاجة، وبتقصيري كمان للأسف.",
  "مهما حصل، أنا هنا ليكي، حتى لو محتاجة وقت عشان تسامحيني.",
  "انتِ أجمل حاجة حصلتلي في حياتي، فمعقول أخليكي تزعلي؟ معلش يا منة.",
  "نفسي نعيش مع بعض كل لحظة ونبني ذكريات أحلى من اللي فاتت.",
  "حتى لو اليوم كان صعب، بس لما بفكر فيكي الدنيا بتضحك، ودايماً هفضل أحاول أضحكك.",
  "بحب كل تفاصيلك حتى لو بسيطة، حتى وشك وانتي زعلانة بحبه برضو بس مش عايزه يتكرر.",
  "إنتي اللي بتخلي قلبي ينبض بالحياة، فسيبيني أرجعلك ده بدل الزعل.",
  "مهما كانت الدنيا ضلمة، إنتي نوري، وأنا اللي طفيت الضو شوية وآسف.",
  "نفسي أمسك إيدك وأقولك كل حاجة جوه قلبي، حتى الحاجات اللي بتخجلني إني أعترف بيها.",
  "وجودك جنبي هو أماني الوحيد، فلو ينفع الأمنية دي تتحقق تاني، سامحيني.",
  "بحس إني أكمل لما أكون معاك، وناقص جداً من غيرك، حتى لو أنا الغلطان.",
  "انتِ اللي بتخليني أحلم وأتمنى أكتر، حتى لو دلوقتي بس بتمنى إنك تسامحيني.",
  "بحبك وأتمنى دايمًا أشوفك سعيدة، مش زعلانة بسببي.",
  "كل يوم بفكر أعمل حاجة تفرحك، وحتى لو مش عارف أظبط، بحاول من قلبي.",
  "صوتك لما بيكلم قلبي بيهدى، حتى لو بيبقى فيه عتاب أنا مستاهله وبسمعه بكل حب.",
  "مهما اتكلمت مش هقدر أوصف قد إيه بحبك، ولا قد إيه أنا آسف. بس هفضل أحاول."
];

const Container = styled.div`
  position: relative;
  background: var(--blush);
  padding: 34px 28px 30px;
  margin: 55px auto;
  max-width: 620px;
  transform: rotate(-1.2deg) scale(0.92);
  opacity: 0;
  box-shadow: 0 12px 28px rgba(107, 31, 59, 0.18);

  /* torn-paper bottom edge */
  clip-path: polygon(
    0 0, 100% 0, 100% 92%,
    95% 100%, 88% 90%, 81% 100%, 74% 90%, 67% 100%, 60% 90%,
    53% 100%, 46% 90%, 39% 100%, 32% 90%, 25% 100%, 18% 90%,
    11% 100%, 4% 90%, 0 100%
  );
`;

const Pin = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 22px;
  height: 22px;
  background: var(--gold);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
`;

const Eyebrow = styled.p`
  font-family: 'Cairo', sans-serif;
  color: var(--ink);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  margin: 0 0 10px;
  text-align: center;
  opacity: 0.75;
`;

const Message = styled.p`
  font-size: 1.6rem;
  line-height: 1.85;
  color: var(--charcoal);
  font-family: 'Markazi Text', serif;
  text-align: center;
  margin: 0;
  transform: translateY(16px);
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

    gsap.to(containerRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: 'back.out(1.6)',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 82%'
      }
    });

    gsap.to(messageRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });

    const enter = () =>
      gsap.to(containerRef.current, { rotate: 0, duration: 0.3, ease: 'power2.out' });
    const leave = () =>
      gsap.to(containerRef.current, { rotate: -1.2, duration: 0.3, ease: 'power2.out' });

    const node = containerRef.current;
    node.addEventListener('mouseenter', enter);
    node.addEventListener('mouseleave', leave);
    return () => {
      node.removeEventListener('mouseenter', enter);
      node.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Pin />
      <Eyebrow>رسالة اليوم</Eyebrow>
      <Message ref={messageRef}>{currentMessage}</Message>
    </Container>
  );
};

export default DailyMessage;
