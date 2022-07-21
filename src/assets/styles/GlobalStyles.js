import { StyledComponent, createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');


    html{
        box-sizing: border-box;
        min-width: 375px;
        font-size:14px;
    }

    *{
        margin:0;
        padding: 0;
    }

    body{
        width:100vw;
        height: 100%;
        //max-width:1440px;
        min-width: 375px;
    }


`;