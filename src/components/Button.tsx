import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

export const Button = (props: { children?: ReactNode }) => {
    return <StyledButton />;
};
