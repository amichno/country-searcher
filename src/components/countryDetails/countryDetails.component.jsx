import { useParams } from "react-router-dom";
import { HalfBox, Span } from "../countries/countries.styles";
import { Paragraph, Title } from "../navigation/navigation.styles";
import { OneBox,Back } from "./countryDetails.styles";

const CountryDetails = ({countryList}) =>{
    const {name} = useParams();
   
    //const name = params.name;
    const country = countryList.filter(item=>{if(item.name.common === name) return item})
    return(
            <OneBox>
                <Back>
                    Back
                </Back>
                <HalfBox isBig={true} style={{backgroundImage: `url(${country[0].flags.svg})`}} >
                   
              
                </HalfBox>
                <HalfBox isBig={true}>
                    <Title>{country[0].name.common}</Title>
                    <HalfBox>
                        <Paragraph>
                            <Span>Native Name:</Span> 
                        </Paragraph>
                        <Paragraph>
                            <Span>Native Name:</Span> 
                        </Paragraph>
                    </HalfBox>
                    <HalfBox>
                    <Paragraph>
                            <Span>Currencies:</Span> {console.log(country[0].currencies)}
                        </Paragraph>
                    </HalfBox>
                </HalfBox>
            </OneBox>
    )
}

export default CountryDetails;