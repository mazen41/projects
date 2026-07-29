import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  max-width: 500px;
  margin: 10px auto 30px;
  opacity: 0.85;
`;

const Line = styled.div`
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffb347);

  &[data-side='left'] {
    background: linear-gradient(270deg, transparent, #ff9a8b);
  }
`;

const HeartMark = styled.span`
  color: #d23669;
  font-size: 1.3rem;
`;

const Divider = () => (
  <Wrap>
    <Line data-side="right" />
    <HeartMark>❤</HeartMark>
    <Line data-side="left" />
  </Wrap>
);

export default Divider;
