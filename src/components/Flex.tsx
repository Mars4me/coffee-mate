import { ReactNode } from 'react';
import styled from 'styled-components';

interface FlexProps {
    direction?: string;
    items?: string;
    content?: string;
    margin?: string;
    children?: ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    align-items: ${({ items }) => items || 'stretch'};
    justify-content: ${({ content }) => content || 'stretch'};
    margin: ${({ margin }) => margin || '0'};
`;

export const Flex = (props: FlexProps) => {
    return <StyledFlex {...props} />;
};
