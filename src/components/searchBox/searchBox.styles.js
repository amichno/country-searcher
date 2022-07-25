import styled from "styled-components";
import { ShadowBox } from "../../assets/styles/mixins";


export const InputBox = styled.input`
    color: ${({theme})=>theme.colors.FontColor};
    width:16rem;
    height: 2rem;
    margin-left: 10%;
    position: relative;
    background-image: url('../../assets/icons/searchIcon.svg');
    background-repeat: no-repeat;
    background-size: 0.8rem;
    background-position: 1.5rem;
    padding-left: 3.5rem;
    ::placeholder{
        color: ${({theme})=>theme.colors.FontColor};
    }
    padding-top:0.5rem;
    padding-bottom: 0.5rem;
    ${ShadowBox};
    &:focus{
        outline: none;
    }
`