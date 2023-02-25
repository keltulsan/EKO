import { updateFaqInfo } from "../../api/UpdateFaq";   
       
export async function Faq_(user){
    return await updateFaqInfo(user) ; 
}