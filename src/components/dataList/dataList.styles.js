import styled from "styled-components";
import { ShadowBox } from "../../assets/styles/mixins";

export const InputList =styled.input`
    width: 10rem;
    margin-right:10%;
    margin-left:auto;
    ${ShadowBox};
    &:focus{
        outline:none;
    }
`;

export const DropDownList=styled.datalist`
    width: 100%;
`;