import { useParams } from "react-router-dom";
import { HalfBox, Span } from "../countries/countries.styles";
import { Paragraph, Title } from "../countries/countries.styles";
import { HomeWraper } from "../home/home.styles";
import { OneBox,Back, Column, WraperColumn, Flag, Button } from "./countryDetails.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CountryDetails = ({countryList}) =>{
    const {name} = useParams();
    const goBack = useNavigate();
    let cokolwiek;

    const CheckName = name =>{
        let country;
        const data = fetch(`https://restcountries.com/v3.1/alpha/${name}`)
        .then(data =>data.json())
        .then(result=>{ 
            return result[0].name.common
           
            }).catch();
        
    }

    const country = countryList.filter(item=>{if(item.cca3 === name) return item})
    const currencies2 = JSON.parse((JSON.stringify(country[0].currencies)));
    const {currencies} = country[0];
    const {languages} = country[0]
    const {nativeName} = country[0].name;
    let {borders} = country[0];

    const bordersCountries = countryList.reduce(function(accu, item){
        borders.map(item2 =>  {if(item2.includes(item.cca3)) accu.push(item.name.common)})
        return accu
    },[]);

    return(
        
        <HomeWraper>
            <OneBox>
                <Back>
                   <Button onClick = {()=>goBack(-1)}><FontAwesomeIcon icon={faArrowLeftLong} />  Back</Button>
                </Back>
                <HalfBox isBig={true}  >
                    <Flag style={{backgroundImage: `url(${country[0].flags.svg})`}}>

                    </Flag>
                   
              
                </HalfBox>
                <HalfBox isBig={true}>
                    <Title isBig={true}>{country[0].name.common}</Title>
                    <WraperColumn>
                        <Column>
                            <Paragraph isSpace={true}>
                                <Span>Native Name: </Span> {Object.values(nativeName)[0].official}
                            </Paragraph>
                            <Paragraph isSpace={true}>
                                <Span>Population: </Span> {country[0].population}
                            </Paragraph>
                            <Paragraph isSpace={true}>
                                <Span>Region: </Span> {country[0].region}
                            </Paragraph>
                            <Paragraph isSpace={true}>
                                <Span>Sub Region: </Span> {country[0].subregion}
                            </Paragraph>
                            <Paragraph isSpace={true}>
                                <Span>Capital: </Span> {country[0].capital}
                            </Paragraph>
                        </Column>
                        <Column>
                            <Paragraph isSpace={true}>
                                    <Span>Top level domain:</Span>  {country[0].tld}
                            </Paragraph>
                            <Paragraph isSpace={true}>
                                    <Span>Currencies:</Span> {(Object.values(currencies2))[0].name}
                            </Paragraph>
                            <Paragraph isSpace={true}>
                                <Span>Languages: </Span> {Object.values(languages).join(', ')}
                            </Paragraph>
                        </Column>
                    </WraperColumn>
                    <Paragraph isSpace={true} isFirst={true}>
                                <Span>Borders: </Span> {
                                    bordersCountries.map((item, id)=>{
                                        cokolwiek=CheckName(item);
                                        console.log(cokolwiek);
                                        return <Button isBorder={true} key ={id}>{item}</Button>
                                    })
                                }
                    </Paragraph>
                </HalfBox>
            </OneBox>
        </HomeWraper>
    )
}

export default CountryDetails;