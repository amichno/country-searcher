import { useParams } from "react-router-dom";
import { HalfBox, Span } from "../countries/countries.styles";
import { Paragraph, Title } from "../countries/countries.styles";
import { OneBox,Back, Column, WraperColumn, Flag } from "./countryDetails.styles";

const CountryDetails = ({countryList}) =>{
    const {name} = useParams();
   
    //const name = params.name;
    const country = countryList.filter(item=>{if(item.name.common === name) return item})
    const waluta = JSON.parse((JSON.stringify(country[0].currencies)));
    return(
            <OneBox>
                <Back>
                    Back
                </Back>
                <HalfBox isBig={true}  >
                    <Flag style={{backgroundImage: `url(${country[0].flags.svg})`}}>

                    </Flag>
                   
              
                </HalfBox>
                <HalfBox isBig={true}>
                    <Title>{country[0].name.common}</Title>
                    <WraperColumn>
                        <Column>
                        <Paragraph>
                            <Span>Native Name:</Span> 
                        </Paragraph>
                        <Paragraph>
                            <Span>Population:</Span> 
                        </Paragraph>
                        </Column>
                        <Column>
                        <Paragraph>
                                <Span>Top level domain:</Span> 
                            </Paragraph>
                        <Paragraph>
                                <Span>Currencies:</Span> {console.log(country[0].currencies)}
                            </Paragraph>
                        </Column>
                    </WraperColumn>
                </HalfBox>
            </OneBox>
    )
}

export default CountryDetails;