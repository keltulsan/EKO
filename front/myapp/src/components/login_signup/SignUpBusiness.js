import { SignupBusiness } from "../../api/Signup";   
       
export async function Sign_upBusiness(user){
    return await SignupBusiness(user) ; 
}