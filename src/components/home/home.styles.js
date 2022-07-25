import styled from "styled-components";


export const HomeWraper = styled.div`
    width:100%;
    height: 100%;
    padding-bottom: 1rem;
    background-image: linear-gradient(${({theme})=>theme.colors.BackGround}, ${({theme})=>theme.colors.BoxBackGroundColor});
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    flex-wrap: wrap;
`