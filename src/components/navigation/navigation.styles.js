import  styled  from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const Box = styled.div`
    min-width: 375px;
    width:100%;
    height: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    background-color: ${({theme})=>theme.colors.BoxBackGroundColor};
    box-shadow: ${props=>props.isFirst?"none":"0px -10px 20px 8px lightgrey"};
    align-items:center;
`

export const Title = styled.div`
    min-width: fit-content;
    height: fit-content;
    font-weight:600;
    font-size: 2.5rem;
    transition: font-size 2s;
    margin-left: ${props => props.isLeft?"10%":"0%"};
    @media (max-width:${device.s}){
        font-size:2rem;
    } 
    @media (max-width:${device.xs}){
        font-size:1.5rem;
    }
`

export const Icon = styled.div`
    width:fit-content;
    height:3rem;
    margin-right: 10%;
    margin-left: auto;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
`

export const Paragraph = styled.p`

`