import React from 'react'
import styled from 'styled-components';
import { colors } from 'utils';

const StyledText = styled.div`
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    margin: ${props => props.margin};
    padding: ${props => props.padding};  
    opacity: ${props => props.opacity};
`;

export const Text = ({ color = colors.secondary, fontWeight, fontSize, className, children, margin, padding, opacity }) => (
        <StyledText
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
            className={className}
            margin={margin}
            padding={padding}
            opacity={opacity}
        >
            {children}
        </StyledText>
);