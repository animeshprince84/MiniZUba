import { useState } from "react";
import { api_url } from "../utils/constants";
import { useEffect } from "react";
import Grid from "./Grid";

const Body = () =>{

    const [list,setList] = useState([]);
    const [getData,setgetData] = useState(0);
    const [getQuan,setQuan] = useState(0);
    const [pid,setpid] = useState(0);
    const [quantity,setQuantity] = useState(0);

    useEffect( ()=>{
        fetchData();
    },[getData,getQuan]);

    const fetchData = async ()=> {
        const data = await fetch(api_url+'?type_id='+pid+'&quantity='+quantity);

        const json = await data.json();

        setList(json);
    }

    return(
        <div className="body">
            <div className="form-area">
                <span>Enter Package ID (1-14)</span>
                <input type="text" className="form-control" onChange={(e) => setpid(e.target.value)}></input>
                <span className="quantity">Enter Quantity (If you want to see filtered data)</span>
                <input type="text" className="form-control" onChange={(e) => setQuantity(e.target.value)}></input><br></br>
                <button class="btn btn-success mt-2" 
                onClick={()=>{
                    setgetData(pid);
                    setQuan(quantity);
                }}>Fetch Data</button>
            </div>
            <div className="container">
                {list.length > 0 && <Grid listData={list}/>}
            </div>
        </div>
    )
}

export default Body;