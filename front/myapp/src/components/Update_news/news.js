import { updateNewsInfo } from "../../api/UpdateNews";   
       
export async function News_(user){
    return await updateNewsInfo(user) ; 
}