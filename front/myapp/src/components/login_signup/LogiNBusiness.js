import { LoginBusiness } from "../../api/LoginBusiness";   
       
export async function Login_Business_(user){
    return await LoginBusiness(user) ; 
}