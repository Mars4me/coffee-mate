import React, { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface ButtonProps {
    children?: ReactNode;
    align?: string;
    primary?: boolean;
    outlined?: boolean;
    color?: string;
    background?: string;
}

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100%{
    transform: rotateZ(360deg);
}
`;

const StyledButton = styled.button.attrs((props: ButtonProps) => ({
    outlined: true,
}))`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        animation: ${rotateAnimation} 1s infinite linear;
    }
    align-self: ${({ align }) => align || 'stretch'};

    ${(props) =>
        props.primary &&
        css<Pick<ButtonProps, 'color' | 'background'>>`
            color: ${(props) => props.color || 'white'};
            background: ${(props) => props.background || 'white'};
        `}
    ${(props) =>
        props.outlined &&
        css<Pick<ButtonProps, 'color'>>`
            color: ${(props) => props.color || 'white'};
            border: 1px solid ${(props) => props.color || 'white'};
            background: transparent;
        `}
`;

const LargeButton = styled(StyledButton)`
    font-size: 32px;
`;

export const Button = (props: ButtonProps) => {
    return <LargeButton {...props} />;
};
