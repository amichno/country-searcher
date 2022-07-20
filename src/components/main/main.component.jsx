import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { themeLight } from "../../assets/styles/themeLight";

const Main = () =>{

    return (
        <>
            <ThemeProvider theme={themeLight}>
                <GlobalStyle />
                <div>Hello</div>
            </ThemeProvider>
        </>
    )

}

export default Main;