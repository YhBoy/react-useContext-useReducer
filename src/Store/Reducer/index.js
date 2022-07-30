
import { ADD,ADDLIST,INC } from "../Action"
export default function reducer(state, action) {
    switch (action.type) {
        case 'updated':
            return { ...state }
        case ADD:
            return { ...state, count: state.count + 1 }
        case INC:
            return { ...state, count: state.count - 1 }
        case ADDLIST:
            let arrList = [...state.arrList]
            arrList.push(action.payload)
            return { ...state, arrList }
        default:
            return state
    }
}