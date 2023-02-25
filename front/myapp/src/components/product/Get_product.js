import { ProductList } from "../../api/Product";   
       
export async function Product_(user){
    return await ProductList(user) ; 
}