import {Outlet} from "react-router-dom";
import { NavBar,
        Title,
         Icon,
        Paragraph } from "./navigation.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ()=>{

    return(
        <>
            <NavBar>
               <Title isLeft={true}>Where in the world?</Title>
        
               <Icon>
                
                <FontAwesomeIcon icon={faMoon} 
                                 size={"2x"}/>
                <Paragraph>Dark mode</Paragraph>
               </Icon>
              
            </NavBar>  
            <Outlet/>
        </>      
    )

}

export default Header;