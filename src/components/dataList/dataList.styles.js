import styled from "styled-components";
import { ShadowBox } from "../../assets/styles/mixins";
import {device} from "../../assets/styles/mediaQueries";


export const InputList =styled.input`
    flex: 0 2 10rem;
    align-content: flex-end;
    width: 16rem;
    max-height: 2rem;
    margin-right:10%;
    margin-left:auto;
    padding-left:1%;
    ${ShadowBox};
    &:focus{
        outline:none;
    }
    @media (max-width:${device.xs}){
        margin-left:10%;
        align-content: center;
        margin-top:2rem;
        flex: 1 2 16rem;
        width:16rem;
    }
`;

export const DropDownList=styled.datalist`

`;