import { DropDownList, InputList } from "./dataList.styles";

const DataList =()=>{
    return(
        <>
           <InputList list="countries" placeholder="Filter by Region"/>
           <DropDownList id="countries">
                <option key="1" value="test" />
                <option key="2" value="test 2" />
            </DropDownList>
        </>
    )
}

export default DataList;