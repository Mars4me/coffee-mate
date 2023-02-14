import React from 'react';
import styled from 'styled-components';

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background-color: black;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${({ color }) => color || 'white'};
    &:focus {
        outline: none;
    }
`;

export const Console = (props: { color?: string }) => {
    return <StyledConsole {...props} />;
};
