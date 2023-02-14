import { useState } from 'react';
import styled from 'styled-components';
import { Flex } from './components/Flex';
import { Title } from './components/Title';

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: black;
`;

function App() {
    const [count, setCount] = useState(0);

    return (
        <AppWrapper>
            <Flex content={'center'}>
                <Title color="green">Test styledcomponents Whoop Whoop</Title>
            </Flex>
        </AppWrapper>
    );
}

export default App;
