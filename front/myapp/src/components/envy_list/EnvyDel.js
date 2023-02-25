import { envyListDelProduct } from "../../api/envy";   
       
export async function Envy_(user){
    return await envyListDelProduct(user) ; 
}