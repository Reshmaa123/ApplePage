import { buy_mobile } from "./MobileType";
function buyMob(num){
    return{
        type:buy_mob,
        payload:num
    }
}
export default buyMob