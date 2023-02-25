import { updateUserInfo } from "../../api/Update";   
       
export async function Update_(user){
    return await updateUserInfo(user) ; 
}