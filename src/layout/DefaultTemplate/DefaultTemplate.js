import React from 'react'
import styled from 'styled-components';
import { colors } from 'utils';
import { InpayLogo } from 'elements';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex: 1 1 0;
`;

const LogoSideBar = styled.div`
    flex: 0 1 0;
    padding: 5px 10px 5px 10px;
    background-color: ${colors.primary};
`;

export const DefaultTemplate = ({ children }) => (
    <Container>
        <LogoSideBar>
            <InpayLogo />
        </LogoSideBar>
        {children}
    </Container>
)