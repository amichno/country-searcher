import styled from "styled-components";
import { ShadowBox } from "../../assets/styles/mixins";
import {device} from "../../assets/styles/mediaQueries";


export const InputBox = styled.input`
    flex: 0 2 16rem;
    align-content: flex-start;
    color: ${({theme})=>theme.colors.FontColor};
    max-width:16rem;
    max-height: 2rem;
    margin-left: 10%;
    position: relative;
    background-image: url('../../assets/icons/searchIcon.svg');
    background-repeat: no-repeat;
    background-size: 0.8rem;
    background-position: 1.5rem;
    padding-left: 3.5rem;
    padding-top:0.5rem;
    padding-bottom: 0.5rem;
    ${ShadowBox};
    &:focus{
        outline: none;
    }
    @media (max-width:${device.xs}){
        margin-left:0;
        align-content: center;
        width:16rem;
        flex: 1 2 16rem;
    }
`