export const additem = (products)=>{
    return{
        type : "ADDITEM",
        payload : products
    }
}
export const delitem = (products)=>{
    return{
        type : "DELETEITEM", 
        payload : products
    }
}