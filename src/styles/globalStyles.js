import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lateef&family=Scheherazade+New:wght@400;700&display=swap');
  
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Scheherazade New', serif;
    background: linear-gradient(135deg, #fff8f0 0%, #ffeef2 45%, #fff4e0 100%);
    margin: 0;
    padding: 0;
    direction: rtl;
    color: #5a3d5c;
    overflow-x: hidden;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

  /* soft glowing color blobs floating behind everything, for depth */
  body::before,
  body::after {
    content: '';
    position: fixed;
    border-radius: 50%;
    filter: blur(70px);
    z-index: -1;
    pointer-events: none;
    opacity: 0.5;
  }

  body::before {
    width: 380px;
    height: 380px;
    top: -100px;
    right: -100px;
    background: radial-gradient(circle, #ffb347 0%, transparent 70%);
  }

  body::after {
    width: 420px;
    height: 420px;
    bottom: -140px;
    left: -140px;
    background: radial-gradient(circle, #ff6a88 0%, transparent 70%);
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1, h2, h3 {
    font-family: 'Lateef', cursive;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #ffeef2;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff8fa3 0%, #ffb347 100%);
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #d23669;
  }
`;
