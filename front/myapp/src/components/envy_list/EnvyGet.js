import { envyListGet } from "../../api/envy";   
       
export async function Envy_(user){
    return await envyListGet(user) ; 
}