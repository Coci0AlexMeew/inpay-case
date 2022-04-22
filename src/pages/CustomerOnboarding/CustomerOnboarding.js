import React from 'react'
import styled from 'styled-components';
import { colors } from 'utils';
import { Line, Text } from 'elements';
import { Accordion } from 'components';
import { steps } from './steps';

const Container = styled.div`
    display: flex;
    flex: 1 1 0;
    justify-content: center;
    background-color: #f4f2f0;
`;

const RightSideFiller = styled.div`
    flex: 1 1 0;
    background-color: ${colors.primary};

`;

const ContentContainer = styled.div`
    display: flex;
    flex: 1.5 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`;

const StepCard = ({ number, title }) => <Accordion number={number} title={title} />;

export const CustomerOnboarding = () => {
    const [stepsState] = React.useState(steps);

    return (
        <Container>
            <ContentContainer>
                <Text fontSize="10pt"> KYC & DUE DILIGENCE</Text>
                <Text fontSize="32pt" fontWeight="600"> Add new customer</Text>
                <Line height="75px" />
                <FlexCenter style={{ display: 'flex', }}>
                    <Text fontSize="12pt" padding="0 5px 0px 0px">Estimated time:</Text>
                    <Text fontWeight="800">10 min</Text>
                </FlexCenter>
                <Line height="15px" />
                {stepsState.map((step) => (
                    <>
                        <StepCard number={step.number} title={step.title} />
                        <Line height="15px" />

                    </>
                ))}
            </ContentContainer>
            <RightSideFiller />
        </Container> 
   );
};