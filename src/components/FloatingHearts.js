import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const FloatingHearts = () => {
  useEffect(() => {
    const colors = ['#ff6b6b', '#ff8e8e', '#f8a5c2', '#d23669', '#ffb3b3', '#ffb347'];
    const symbols = ['❤', '❤', '❤', '❤', '🥺'];

    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.position = 'fixed';
      heart.style.fontSize = `${Math.random() * 20 + 10}px`;
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.opacity = '0.7';
      heart.style.zIndex = '-1';
      heart.style.pointerEvents = 'none';
      document.body.appendChild(heart);

      gsap.to(heart, {
        y: -1000,
        x: Math.random() * 200 - 100,
        rotation: Math.random() * 360,
        duration: 20 + Math.random() * 20,
        repeat: -1,
        delay: Math.random() * 10,
        ease: 'none'
      });
    }

    return () => {
      document.querySelectorAll('div').forEach(el => {
        if (el.innerHTML === '❤' || el.innerHTML === '🥺') el.remove();
      });
    };
  }, []);

  return null;
};

export default FloatingHearts;