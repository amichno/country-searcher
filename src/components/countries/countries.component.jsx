import { CountriesWraper,
        Country,
    Flag } from "./countries.styles";

const Countries = ()=>{
    return(
        <CountriesWraper>
            <Country>
                <Flag></Flag>
            </Country>
            <Country>
                <Flag></Flag>
            </Country>
         </CountriesWraper>
    )
}

export default Countries;