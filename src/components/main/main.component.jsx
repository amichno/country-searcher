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
import Loading from "../loading/loading.component";


const Main = () =>{
    const [LightMode, setLightMode] = useState(themeLight);
    const [SearchCountry, setSearchCountry] = useState('');
    const [CountryList, setCountryList] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://restcountries.com/v3.1/all";

    const ChangeTheme = ()=>{
        setLightMode(prevState=>{
            if (prevState === themeLight)
                return themeDark
            else   
                return themeLight
        });
    }

    const ApiConnection =()=>{
       
       const result = fetch(url).then(data =>data.json()).then(JSONdata =>
                {
                    const result = JSON.stringify(JSONdata);
                    const resultJS = JSON.parse(result);
                    setCountryList(resultJS);
                    setLoading(false);
                }
       );
    }

    useEffect(()=>{
        ApiConnection();
    },[]);

    const CheckCountry = (country) => {
        const searchCountryLower = SearchCountry.toLocaleLowerCase();
        console.log(searchCountryLower);
        const currentCountry = country.name.common.toLocaleLowerCase();
        if(currentCountry.includes(searchCountryLower)) 
        {//console.log(country.name.common);
        return country}
    }
    const GetSearchCountry = ()=>{
        const newCountryList= CountryList.filter(CheckCountry);
        setCountryList(newCountryList);
        console.log(newCountryList)
    }

    const GetPlaceHolder = (event)=>{
        setSearchCountry(event.target.value);
        //console.log(SearchCountry);
        GetSearchCountry();
    }

    return (
        
            <ThemeProvider theme={LightMode}>
                <GlobalStyle />
                <Wraper>
                    <BrowserRouter>
                        <Routes>
                            <Route path ="/" element ={<Navigation onClick={ChangeTheme}/>}>
                                    {!loading?<Route index={true} 
                                           element={<Home onChange={GetPlaceHolder} countryList={CountryList}/>}>
                                    </Route>:
                                    <Route index={true} 
                                         element={<Loading />}>
                                    </Route>}
                                    <Route path="Details" 
                                           element={<CountryDetails/>}>
                                    </Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Wraper>
            </ThemeProvider>
        
    )

}

export default Main;