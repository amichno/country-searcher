import SearchBox from "../searchBox/searchBox.component";
import { HomeWraper } from "./home.styles";
import DataList from "../dataList/dataList.component";
import Countries from "../countries/countries.component";


const Home = (props) =>{
    return(
        <HomeWraper>
            <SearchBox onChange={props.onChange}/>
            <DataList regions={props.regions} getRegion={props.getRegion}/>
            <Countries countryList={props.countryList}/>
        </HomeWraper>
    )
}

export default Home;