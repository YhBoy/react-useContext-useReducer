import context from "../Store/Context/index";
import { useContext } from "react"

import { ADD } from "../Store/Action";
const List = () => {
    const {state,dispatch} = useContext(context) 
    const add = ()=>{
        dispatch({type:ADD})
    }
    return <div>
               <p> List ===  {state.count}</p>
               <div>
                    <button onClick={add}>add</button>
               </div>  
               {
                state.arrList.map(item=>{
                    return <div>
                            {item}
                    </div>
                })
               }
    </div>;
};

export default List