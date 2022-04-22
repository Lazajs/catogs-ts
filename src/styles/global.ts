import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #FCFCFC;
    }

    html {
        font-size: 62.5%; 
    }

    body {
        font-size: 16px; 
        font-size: 1.6rem; 
        line-height: 1.5; 
    }

    @font-face {
        font-family: 'Averia'
        src: url(AveriaSerifLibre.ttf') 
    }

    @font-face {
        font-family: 'Bitter'
        src: url(Bitter.ttf')
    }
`

// #546981
// #14adc6
// #E9FBFF
// #1A2D45
// #CEDEE1