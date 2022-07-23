import {Outlet} from "react-router-dom";
import { Box,
        Title,
         Icon,
        Paragraph } from "./navigation.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from '@fortawesome/free-regular-svg-icons'

const Navigation = (props)=>{

    return(
        <>
            <Box isFirst={true}>
                <Box isFirst={false}>
                    <Title isLeft={true}>Where in the world?</Title>
                    <Icon onClick={props.onClick}>   
                            <FontAwesomeIcon icon={faMoon} 
                                            size={"1x"}/>
                            <Paragraph>Dark mode</Paragraph>
                    </Icon>
               </Box>
            </Box>  
            <Outlet/>
        </>      
    )

}

export default Navigation;