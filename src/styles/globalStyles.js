import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Markazi+Text:wght@400;500;600;700&family=Cairo:wght@400;600;700&display=swap');

  :root {
    --paper: #FBF3E7;
    --paper-edge: #F1E3CB;
    --ink: #6B1F3B;
    --ink-soft: #9C4A69;
    --gold: #C9A15B;
    --gold-soft: #E3C68A;
    --charcoal: #3D2B3A;
    --blush: #F3D9DF;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Markazi Text', serif;
    background: var(--paper);
    background-image:
      radial-gradient(circle at 15% 20%, rgba(201, 161, 91, 0.08), transparent 40%),
      radial-gradient(circle at 85% 75%, rgba(107, 31, 59, 0.06), transparent 45%);
    margin: 0;
    padding: 0;
    direction: rtl;
    color: var(--charcoal);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-family: 'Aref Ruqaa', serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--paper-edge);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--ink);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
