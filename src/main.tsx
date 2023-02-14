import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: consolas;
}
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Global />
        <App />
    </>
);
