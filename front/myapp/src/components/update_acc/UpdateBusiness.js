import { updateBusinessInfo } from "../../api/UpdateBusiness";   
       
export async function UpdateBusiness_(user){
    return await updateBusinessInfo(user) ; 
}