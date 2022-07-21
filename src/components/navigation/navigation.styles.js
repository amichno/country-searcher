import  styled  from "styled-components";

export const NavBar = styled.div`
    width:100%;
    height: 3rem;
    margin-top: 1rem;
    display: flex;
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
    align-items:center ;
`

export const Paragraph = styled.p`

`