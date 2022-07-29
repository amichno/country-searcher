import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');


    html{
        box-sizing: border-box;
        font-size:14px;
    }

    *{
        margin:0;
        padding: 0;
    }

    body{
        width:100vw;
        min-width:375px;
        height: 100%;
        min-width: 375px;
        margin-left:auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
    }

    input{
        color:inherit;
    }


`;