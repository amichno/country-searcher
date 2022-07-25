import {css} from "styled-components";

export const ShadowBox = css`
    background-color: ${({theme})=>theme.colors.BoxBackGroundColor};
    box-shadow: 0px 0px 8px 2px ${({theme})=>theme.colors.Shadow};
    border: none;
`