import { envyListAddProduct } from "../../api/envy";   
       
export async function Envy_(user){
    return await envyListAddProduct(user) ; 
}