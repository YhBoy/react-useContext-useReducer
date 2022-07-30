import { useReducer, useRef,useState } from "react"
import './App.css';
import context from "./Store/Context/index";
import reducer from "./Store/Reducer/index.js";
import List from "./List/index";
import Product from "./Product/index";
import Index from "./Index/index";
import {ADD} from './Store/Action/index'
import Child from "./Child";

import MemoCom from "./MemoCom";


function App() {
  const initState = {
    arrList: [],
    count: 0,
  }
  const [ num, setNum ] = useState(0)
  const [state, dispatch] = useReducer(reducer, initState)
  const ChildRef = useRef()
  const click = ()=>{
          dispatch({type:ADD})
  }
  const handleClick = (ref)=>{
            ChildRef.current.change()
  }
  const addNum = ()=>{
            setNum(num+1)
  }
  return (
    <div className="App" >
      <context.Provider value={{ state, dispatch }}>
          <Index  />
          <List />
          <Product />






          
          <Child  cRef={ChildRef} />
          <button onClick={handleClick}>父组件调用子组件方法</button>

         



      </context.Provider>
      <MemoCom  num={num} />

      <button onClick={addNum}>num++</button>


    </div>
  );
}

export default App;