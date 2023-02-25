import { updateProductInfo } from "../../api/UpdateProduct";   
       
export async function Product_(user){
    return await updateProductInfo(user) ; 
}