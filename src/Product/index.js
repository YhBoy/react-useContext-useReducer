import context from '../Store/Context';
import { useContext } from 'react'

import { INC } from '../Store/Action';

const Product = () => {
	const {state,dispatch} = useContext(context)
	const inc = ()=>{
			dispatch({type:INC})
	}	
	return <div> 
				<p> Product == {state.count} </p>
				<button onClick={inc}>inc</button>
		 </div>;
};

export default Product