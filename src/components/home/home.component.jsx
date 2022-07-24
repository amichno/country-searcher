import SearchBox from "../searchBox/searchBox.component";
import { HomeWraper } from "./home.styles";


const Home = () =>{
    return(
        <HomeWraper>
            <SearchBox />
            <datalist></datalist>
        </HomeWraper>
    )
}

export default Home;