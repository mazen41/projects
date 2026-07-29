import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  max-width: 340px;
  margin: 0 auto 10px;
  border-top: 2px dashed var(--gold-soft);
  opacity: 0.8;
`;

const Divider = () => <Line />;

export default Divider;
