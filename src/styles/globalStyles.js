import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lateef&family=Scheherazade+New:wght@400;700&display=swap');
  
  body {
    font-family: 'Scheherazade New', serif;
    background: linear-gradient(135deg, #fff8f0 0%, #ffeef2 45%, #fff4e0 100%);
    margin: 0;
    padding: 0;
    direction: rtl;
    color: #5a3d5c;
    overflow-x: hidden;
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
