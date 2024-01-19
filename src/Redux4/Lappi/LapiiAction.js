import { buy_lappi } from "./LappiType";
function buyLappi(num){
    return{
        type:buy_lappi,
        payload:num
    }
}
export default buyLappi