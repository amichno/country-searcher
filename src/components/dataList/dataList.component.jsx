import { DropDownList, InputList } from "./dataList.styles";

const DataList =(props)=>{
    const regions = props.regions;
    return(
        <>
           <InputList list="countries" placeholder="Filter by Region"/>
           <DropDownList id="countries">
            {
                regions.map((region, id) =>{
                    return <option key={id} value={region} />
                })
            }
            </DropDownList>
        </>
    )
}

export default DataList;