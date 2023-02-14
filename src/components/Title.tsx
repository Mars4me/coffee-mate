import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: ${({ color }) => color};
`;

export const Title = (props: { children: ReactNode; color: string }) => {
    return <StyledTitle {...props} />;
};
