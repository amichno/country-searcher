import SearchBox from "../searchBox/searchBox.component";
import { HomeWraper } from "./home.styles";
import DataList from "../dataList/dataList.component";


const Home = () =>{
    return(
        <HomeWraper>
            <SearchBox />
            <DataList />
        </HomeWraper>
    )
}

export default Home;