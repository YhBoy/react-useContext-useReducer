import context from "../Store/Context";
import { useContext,useState } from 'react'
import { ADDLIST } from "../Store/Action";
const Index = (props) => {
    const { state,dispatch } = useContext(context)
    const [value,setValue] = useState("")
    const { click } = props
    const add = (e)=>{
        dispatch({type:ADDLIST,payload:value})
    }
    const onChange = (e)=>{
            setValue(e.target.value)
    }
    const handleClick = ()=>{
        click()
    }
    return <div> 
                <p>Index ----------</p>
                <input type="text" onChange={onChange}  />   <button onClick={add}> 增加 列表数组 </button> 
                <button onClick={ handleClick }>子组件调用父组件方法</button>
         </div>;
};
export default Index