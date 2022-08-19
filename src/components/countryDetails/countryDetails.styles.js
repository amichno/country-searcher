import styled from "styled-components";
import { ShadowBox } from "../../assets/styles/mixins";

export const OneBox = styled.div`
    width:90%;
    height:100%;
    min-height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`

export const Back = styled.div`
    width:100%;
    height:3rem;
    margin-bottom: 5%;
    margin-top: 5%;
`

export const Button = styled.button`
    padding: 0.5rem 2rem;
    border: none;
    ${ShadowBox}
    font-size: 1rem;
    font-weight: 600;
    margin-left: ${props=>props.isBorder?"2rem":"normal"};
    margin-bottom: ${props=>props.isBorder?"2rem":"normal"};
    cursor: pointer;
`

export const DetailsWraper = styled.div`

`

export const Column = styled.div`
    flex:1 1 50%;
    width:50%;
    height:100%;
    padding-left: 5%;
`

export const WraperColumn = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
   // flex-wrap: wrap;
`

export const Flag = styled.div`
    aspect-ratio: 5/3;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;

`