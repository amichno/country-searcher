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

    const country = countryList.filter(item=>{if(item.cca3 === name) return item})
    const currencies2 = JSON.parse((JSON.stringify(country[0].currencies)));
    const {languages} = country[0]
    const {nativeName} = country[0].name;
    let {borders} = country[0];

    const bordersCountries = countryList.reduce(function(accu, item){
        if (borders === undefined) borders=[];
        if(borders !==[])
            borders.map(item2 =>{if(item2.includes(item.cca3)) accu.push(item.name.common)})
        else
            accu =[];
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
                    <Paragraph isSpace={true} isFirst={true}>{bordersCountries.length>0?<div><Span>Borders: </Span> {
                                    bordersCountries.map((item, id)=>{
                                        return <Button isBorder={true} key ={id}>{item}</Button>
                                    })
                                }</div>:<Span>No borders</Span>}
                                
                    </Paragraph>
                </HalfBox>
            </OneBox>
        </HomeWraper>
    )
}

export default CountryDetails;