import {Outlet} from "react-router-dom";

const Header = ()=>{

    return(
        <>
            <div>Navigation</div>
            <Outlet/>
        </>
        
    )

}

export default Header;