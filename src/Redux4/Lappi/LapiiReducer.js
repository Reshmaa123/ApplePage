import { buy_lappi } from "./LappiType";
const initiallaptop={
    noOfLaptops:50
}
const LapiReducer=(state=initiallaptop,action)=>{
    switch(action.type){
        case buy_lappi:
        return    {pa
noOfLaptops:state.noOfLaptops-action.payload
        }
        default:
            return state
    }
}
export default LapiReducer