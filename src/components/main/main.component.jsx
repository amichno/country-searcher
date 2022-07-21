import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { themeLight } from "../../assets/styles/themeLight";
import { themeDark } from "../../assets/styles/themeDark";
import Navigation from "../navigation/navigation.component";
import { useEffect,useState } from "react";
import Home from "../home/home.component";
import CountryDetails from "../countryDetails/countryDetails.component";
import { BrowserRouter, 
         Routes, 
         Route,
} from "react-router-dom";
import { Wraper } from "./main.styles";


const Main = () =>{
    const [LightMode, setLightMode] = useState(themeLight);

    const ChangeTheme = ()=>{
        setLightMode(prevState=>{
            if (prevState == themeLight)
                return themeDark
            else   
                return themeLight
        });
        console.log(LightMode)
    }

    return (
        <>
            <ThemeProvider theme={LightMode}>
                <GlobalStyle />
                <Wraper>
                    <BrowserRouter>
                        <Routes>
                        <Route path ="/" element ={<Navigation onClick={ChangeTheme}/>}>
                                <Route index={true} element={<Home />}></Route>
                                <Route path="Details" element={<CountryDetails/>}></Route>
                        </Route>
                        </Routes>
                    </BrowserRouter>
                </Wraper>
            </ThemeProvider>
        </>
    )

}

export default Main;