import styled,{css} from "styled-components";

export const ShadowBox = css`
    background-color: ${({theme})=>theme.colors.BoxBackGroundColor};
    box-shadow: ${props=>props.isFirst?"none":"0px 0px 8px 2px #E8E8E8"};
    border: none;
`