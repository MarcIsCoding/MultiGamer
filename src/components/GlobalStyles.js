import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: white;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: #484848;
        color: #dfdfdf;
    }
    h2 {
        font-size: 1.75rem;
    }
    h3 {
        font-size: 1.3rem;
        padding: 1.5rem 0rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    img {
        display: block;
    }
    input {
        font-weight: bold;
        outline: none;
        font-family: inherit;
    }
    button {
        outline: none;
        &:hover{
            opacity: 0.8;
        }
    }
`;

export default GlobalStyles;