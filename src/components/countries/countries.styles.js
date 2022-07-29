import styled from "styled-components";
import { ShadowBox } from "../../assets/styles/mixins";

export const CountriesWraper= styled.div`
    width:100%;
    height:100%;
    height: fit-content;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`

export const Country = styled.div`
        flex:4 4 22rem;
        max-width: 20rem;
        height: 20rem;
        max-height: 22rem;
        background-color: aqua;
        margin-left:5%;
        margin-right:5%;
        margin-bottom: 5%;
        align-content: center;
        ${ShadowBox}
`

export const Img = styled.img`
    height: 50%;
    width: 100%;
    border:none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
`
export const HalfBox = styled.div`
    height: 50%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    -webkit-border-top-left-radius:${props=>props.isUp?"5%":"none"};
    -webkit-border-top-right-radius: ${props=>props.isUp?"5%":"none"};
    -moz-border-radius-topleft: ${props=>props.isUp?"5%":"none"};
    -moz-border-radius-topright: ${props=>props.isUp?"5%":"none"};
    border-top-left-radius: ${props=>props.isUp?"5%":"none"};
    border-top-right-radius: ${props=>props.isUp?"5%":"none"};
`

export const Title = styled.h1`
    padding-left: 10%;
    padding-top: 5%;
    padding-bottom: 2%;
    font-size: 1.3rem;
`

export const Paragraph = styled.p`
    padding-left: 10%;
`
export const Span = styled.span`
    font-weight: 600;
`