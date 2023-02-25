import { InsertProduct } from "../../api/InsertProduct";   
       
export async function InsertProduct_(user){
    return await InsertProduct(user) ; 
}