import { buy_mob } from "./MobiType";
const initialmob={
    noOfMob:50
}
const MobReducer=(state=initialmob,action)=>{
    switch(action.type)
    {
        case buy_mob:
        return    {
noOfMob: state.noOfMob-action.payload
        }
        default:
            return state;
    }
}
export default MobReducer

