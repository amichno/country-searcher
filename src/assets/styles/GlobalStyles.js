import { StyledComponent, createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

    body{
        width:100vw;
        height: 100vh;
        background-color: aqua;
        font-family: 'Nunito', sans-serif;
    }

    html{

        box-sizing: border-box;
        
    }

    *{
        margin:0;
        padding: 0;
    }
`;