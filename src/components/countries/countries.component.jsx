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
                countryList.map(item=>{
                    return(
                        <Country>
                        <HalfBox isUp={true} 
                                 style={{backgroundImage: `url(${item.flags.svg})`}} >      
                        </HalfBox>               
                        <HalfBox>
                                <Title>{item.name.common}</Title>
                                <Paragraph><Span>Population: </Span>{item.population}</Paragraph>
                                <Paragraph><Span>Region: </Span>{item.region}</Paragraph>
                                <Paragraph><Span>Capital: </Span>{item.capital}</Paragraph>             
                        </HalfBox>
                        </Country>
                    )
                })
               }
            
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

         </CountriesWraper>
    )
}

export default Countries;