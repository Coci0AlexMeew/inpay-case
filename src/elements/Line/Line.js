import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.color};
  opacity: ${props => props.opacity};
`;

export const Line = ({
  opacity,
  color = 'transparent',
  height = '10px',
  width = '10px',
  className,
}) => (
  <Div className={className} height={height} width={width} color={color} opacity={opacity} />
);
