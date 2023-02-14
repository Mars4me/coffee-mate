import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Flex } from './Flex';
import { Line } from './Line';

interface ConsoleProps {
    color?: string;
    children?: ReactNode;
}

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

export const Console = ({ color, ...props }: ConsoleProps) => {
    const [lines, setLines] = useState(['C/users/Mars4me>']);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            setLines(lines.concat('C/users/Mars4me>'));
        }
    };

    return (
        <Flex>
            <Flex direction="column" margin={'0 10px'}>
                {lines.map((line) => (
                    <Line color={color}>{line}</Line>
                ))}
            </Flex>
            <StyledConsole onKeyDown={(e) => handleKeyDown(e)} color={color} {...props} />
        </Flex>
    );
};
