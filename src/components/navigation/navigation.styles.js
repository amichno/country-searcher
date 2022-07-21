import  styled  from "styled-components";

export const Box = styled.div`
    width:100%;
    height: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    background-color: ${({theme})=>theme.colors.BoxBackGroundColor};
    box-shadow: 0px -10px 30px 8px ${({theme})=>theme.colors.Shadow};
    align-items:center;
`

export const Title = styled.div`
    min-width: fit-content;
    height: fit-content;
    font-weight:600;
    font-size: 2.5rem;
    margin-left: ${props => props.isLeft?"10%":"0%"};
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