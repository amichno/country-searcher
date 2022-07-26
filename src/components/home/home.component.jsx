import SearchBox from "../searchBox/searchBox.component";
import { HomeWraper } from "./home.styles";
import DataList from "../dataList/dataList.component";
import Countries from "../countries/countries.component";


const Home = (props) =>{

    const check = (event)=>{
        console.log(event.target.value)
    }
    return(
        <HomeWraper>
            <SearchBox onChange={props.onChange}/>
            <DataList />
            <Countries />
        </HomeWraper>
    )
}

export default Home;