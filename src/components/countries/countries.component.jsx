import { CountriesWraper,
        Country,
        HalfBox,
        Paragraph,
        Title,
        Span } from "./countries.styles";
import { ShadowBox } from "../../assets/styles/mixins";
const urlFlag =  "../../assets/icons/flagTest.svg";


const Countries = ()=>{
    return(
        <CountriesWraper>
            <Country>
            <HalfBox isUp={true} 
                     style={{backgroundImage: `url(${urlFlag})`}} >      
            </HalfBox>               
            <HalfBox>
                    <Title>Country</Title>
                    <Paragraph><Span>Population: </Span>1000000</Paragraph>
                    <Paragraph><Span>Region: </Span>Ameryka</Paragraph>
                    <Paragraph><Span>Capital: </Span>Nan</Paragraph>             
            </HalfBox>
            </Country>
            <Country>
               
            </Country>
         </CountriesWraper>
    )
}

export default Countries;