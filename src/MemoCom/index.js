import React,{memo} from 'react'
import List from './List'

const MemoCom = ({num}) => {
    // const { state,dispatch } = useContext(context)
    console.log("App.js 改变num,触发了我MemoCom,改变了num,但是没有触发List 组件")
    return (
        <div>
                <p> Memo的使用 </p>
                <div> {num} </div>
                <List />
        </div>
    );
}

export default MemoCom;
