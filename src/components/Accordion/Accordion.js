import React, { useEffect } from 'react'
import styled from 'styled-components';
import { colors } from 'utils';
import { Text, Line } from 'elements';

const StyledAccordion = styled.div`
    width: 500px;
    height: ${props => props.height};
    background-color: white;
    border-radius: 20px;
    padding: 15px;
    transition: 0.75s ease-in-out;
    transition-delay 0.25s;
`;

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 2.5px;
    border-radius: 50%;
    height: 33px;
    width: 33px;
    opacity: ${props => props.opacity};
    transition: 0.6s ease-in-out;
    transition-delay 0.15s;
    transition-property: background-color, border-color;
    background-color: ${props => props.backgroundColor};
    border-color: ${props => props.borderColor};
`;

const TopContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    flex: 1 1 0;
    display: flex;
    border-radius: 20px;
    border-style: none;
    background-color: white;
`;

const AnimatedNumber = styled(Text)`
    transition: 0.25s ease-in-out;
    transition-delay 0.66s;
    transition-property: opacity;
`;

const Checkmark = styled.div`
    display: inline-block;
    height: 20px;
    margin-top: -5px;
    width: 8px;
    border-bottom: 4px solid white;
    border-right: 4px solid white;
    transform: rotate(45deg);
    align-self: center;
`;

const AnimatedView = styled.div`
    flex-direction: column;
    height: ${props => props.height};
    width 100%;
    transition: 0.75s ease-in-out;
    transition-delay 0.25s;
    transition-property: opacity;
    opacity: ${props => props.opacity};
`;

const SubmitButton = styled.button`
    height: 40px;
    width 120px;
    border-radius: 25px;
    background-color: white;
`;

export const Accordion = ({ number, title }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isCompleted, setIsCompleted] = React.useState(false);

    useEffect(() => {
        if (isOpen) setIsCompleted(false);
    }, [isOpen]);

    const setCircleBackgroundColor = () => {
        if (isCompleted) return '#5be695';
        return null;
    }

    const setCircleBorderColor = () => {
        if (isCompleted) return '#5be695';
        return colors.secondary;
    }

    const setCircleSize = () => {
        if (isOpen || isCompleted) return "35px"
        return "33px";
    };

    const setOpacity = () => {
        if (isOpen || isCompleted) return 1;
        return 0.5;
    };
    
    return (
        <Button onClick={() => {
            setIsOpen(!isOpen);
        }}>
            <StyledAccordion height={isOpen ? "200px" : "50px"}>
                <TopContainer>
                    <Circle backgroundColor={setCircleBackgroundColor()} borderColor={setCircleBorderColor()} size={setCircleSize()} opacity={setOpacity()}>
                        { isCompleted ? <Checkmark /> : <AnimatedNumber opacity={setOpacity()} fontSize="16pt" fontWeight="700">
                            {number}
                        </AnimatedNumber>}
                    </Circle>
                    <Text opacity={setOpacity()} margin="0 0 0 7.5px" fontSize="16pt" fontWeight="600">
                        {title}
                    </Text>
                </TopContainer>
                <AnimatedView opacity={isOpen ? 1 : 0}>
                    <Line height="10px" />
                    <Text>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                        Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                        Mauris placerat eleifend leo.
                    </Text>
                    <Line height="10px" />
                  <SubmitButton height="100px" onClick={(e) => {
                      e.stopPropagation();
                      setIsCompleted(true);
                      setIsOpen(false);
                  }}>
                      <Text fontSize="12pt" fontWeight="600">  
                        Continue
                     </Text>
                </SubmitButton>
                </AnimatedView>
            </StyledAccordion>
        </Button>
    );
}