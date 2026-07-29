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
  "معاكِ الحياة ليها طعم تاني، وبدونك حتى القهوة بتبقى طعمها مختلف 😅",
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
  "بحب كل تفاصيلك حتى لو بسيطة، حتى وشك وانتي زعلانة بحبه برضو بس مش عايزه يتكرر 🙈",
  "إنتي اللي بتخلي قلبي ينبض بالحياة، فسيبيني أرجعلك ده بدل الزعل.",
  "مهما كانت الدنيا ضلمة، إنتي نوري، وأنا اللي طفيت الضو شوية وآسف.",
  "نفسي أمسك إيدك وأقولك كل حاجة جوه قلبي، حتى الحاجات اللي بتخجلني إني أعترف بيها.",
  "وجودك جنبي هو أماني الوحيد، فلو ينفع الأمنية دي تتحقق تاني، سامحيني.",
  "بحس إني أكمل لما أكون معاك، وناقص جداً من غيرك، حتى لو أنا الغلطان.",
  "انتِ اللي بتخليني أحلم وأتمنى أكتر، حتى لو دلوقتي بس بتمنى إنك تسامحيني.",
  "بحبك وأتمنى دايمًا أشوفك سعيدة، مش زعلانة بسببي.",
  "كل يوم بفكر أعمل حاجة تفرحك، وحتى لو مش عارف أظبط، بحاول من قلبي.",
  "صوتك لما بيكلم قلبي بيهدى، حتى لو بيبقى فيه عتاب أنا مستاهله وبسمعه بكل حب.",
  "مهما اتكلمت مش هقدر أوصف قد إيه بحبك، ولا قد إيه أنا آسف. بس هفضل أحاول 💛"
];


const Container = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 18px;
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
