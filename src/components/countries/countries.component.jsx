import { Link } from "react-router-dom";
import { CountriesWraper,
        Country,
        HalfBox,
        Paragraph,
        Title,
        Span } from "./countries.styles";
const urlFlag =  "../../assets/icons/flagTest.svg";


const Countries = (props)=>{
    const countryList = props.countryList;
    return(
        <CountriesWraper>
            
               {
                countryList.map((item, id)=>{
                    return(
                            <Country key={id}>
                                <Link to ={`/Details/${item.name.common}`}>
                                    <HalfBox isUp={true} 
                                            style={{backgroundImage: `url(${item.flags.svg})`}} 
                                            isBig={false}>      
                                    </HalfBox>                
                                    <HalfBox isBig={false}>
                                            <Title>{item.name.common}</Title>
                                            <Paragraph><Span>Population: </Span>{item.population}</Paragraph>
                                            <Paragraph><Span>Region: </Span>{item.region}</Paragraph>
                                            <Paragraph><Span>Capital: </Span>{item.capital}</Paragraph>             
                                    </HalfBox>
                            </Link>
                            </Country>
                       
                    )
                })
               }
         </CountriesWraper>
    )
}

export default Countries;