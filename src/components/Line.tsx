import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LineProps {
    children?: ReactNode;
    color?: string;
}

const StyledLine = styled.div<LineProps>`
    font-size: 24px;
    color: ${(props) => props.color || props.theme.colors.primary};
`;

export const Line = (props: LineProps) => {
    return <StyledLine {...props}></StyledLine>;
};
