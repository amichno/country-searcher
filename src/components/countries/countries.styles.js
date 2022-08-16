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
        flex:4 4 13rem;
        max-width: 15rem;
        height: 17rem;
        max-height: 22rem;
        margin-left:5%;
        margin-right:5%;
        margin-bottom: 5%;
        align-content: center;
        ${ShadowBox};
        a{
            text-decoration: none;
            color:inherit
        }
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
    height:${props=>props.isBig?"100%":"50%"};
    width:${props=>props.isBig?"50%":"100%"};
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    display: flex;
    flex-direction: column;
    -webkit-border-top-left-radius:${props=>props.isUp?"2%":"none"};
    -webkit-border-top-right-radius: ${props=>props.isUp?"2%":"none"};
    -moz-border-radius-topleft: ${props=>props.isUp?"2%":"none"};
    -moz-border-radius-topright: ${props=>props.isUp?"2%":"none"};
    border-top-left-radius: ${props=>props.isUp?"2%":"none"};
    border-top-right-radius: ${props=>props.isUp?"2%":"none"};
    overflow-y: scroll;
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