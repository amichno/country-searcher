import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { themeLight } from "../../assets/styles/themeLight";
import Navigation from "../navigation/navigation.component";
import { useEffect,useState } from "react";
import Home from "../home/home.component";
import CountryDetails from "../countryDetails/countryDetails.component";
import { BrowserRouter, 
         Routes, 
         Route,
} from "react-router-dom";


const Main = () =>{

    return (
        <>
            <ThemeProvider theme={themeLight}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                       <Route path ="/" element ={<Navigation />}>
                            <Route index={true} element={<Home />}></Route>
                            <Route path="Details" element={<CountryDetails/>}></Route>
                       </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )

}

export default Main;