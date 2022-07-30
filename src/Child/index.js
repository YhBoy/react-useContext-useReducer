
import React,{ forwardRef,useImperativeHandle,useContext } from 'react';
import context from '../Store/Context';
import { ADD } from '../Store/Action';
const Child = ({ cRef }) => {
    const {state,dispatch } = useContext(context)
    useImperativeHandle(cRef, () => ({
        // changeVal 就是暴露给父组件的方法
           change(){
                    dispatch({type:ADD})
           } 
    }));


    return (
        <div>
             <p>Child ---- {state.count}</p>
        </div>
    );
}

export default Child;


