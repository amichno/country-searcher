import { InputBox} from "./searchBox.styles";

const SearchBox = (props)=>{
    return(
             <InputBox type = "Search" 
                        id="inputCountry" 
                        placeholder="Search for a country..." 
                        onChange={props.onChange}> 
             </InputBox>  
    )

}

export default SearchBox;