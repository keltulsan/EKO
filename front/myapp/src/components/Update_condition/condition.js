import { updateConditionInfo } from "../../api/UpdateCondition";   
       
export async function Condition_(user){
    return await updateConditionInfo(user) ; 
}