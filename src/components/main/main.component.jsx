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
    const [SearchCountry, setSearchCountry] = useState('');
    const url = "https://restcountries.com/v3.1/all";

    const ChangeTheme = ()=>{
        setLightMode(prevState=>{
            if (prevState === themeLight)
                return themeDark
            else   
                return themeLight
        });
    }

    const ApiConnection = ()=>{
       const result = fetch(url).then(data => data.json()).then(JSONdata =>
                {
                    const result = JSON.stringify(JSONdata);
                    const resultJS = JSON.parse(result);
                    for(let i=0; i<resultJS.length; i++)
                     console.log(resultJS[i].flags.svg); 
                }
       )
    }

    useEffect(()=>{
        ApiConnection();
    },[]);

    const GetPlaceHolder = (event)=>{
        setSearchCountry(event.target.value);
    }

    return (
        <>
            <ThemeProvider theme={LightMode}>
                <GlobalStyle />
                <Wraper>
                    <BrowserRouter>
                        <Routes>
                            <Route path ="/" element ={<Navigation onClick={ChangeTheme}/>}>
                                    <Route index={true} 
                                           element={<Home onChange={GetPlaceHolder}/>}>
                                    </Route>
                                    <Route path="Details" 
                                           element={<CountryDetails/>}>
                                    </Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Wraper>
            </ThemeProvider>
        </>
    )

}

export default Main;