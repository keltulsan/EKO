import { Signup } from "../../api/Signup";   
       
export async function Sign_up(user){
    return await Signup(user) ; 
}