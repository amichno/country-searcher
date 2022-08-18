import styled from "styled-components";
import {device} from "../../assets/styles/mediaQueries";

export const HomeWraper = styled.div`
    width:100%;
    min-height: 100vh;
    max-height: 100%;
    padding-bottom: 1rem;
    background-image: linear-gradient(${({theme})=>theme.colors.BackGround}, ${({theme})=>theme.colors.BoxBackGroundColor});
    display: flex;
    padding-top: 2rem;
    flex-wrap: wrap;
    @media (max-width:${device.xs}){
        flex-direction: column;
        align-items: center;
    }
`