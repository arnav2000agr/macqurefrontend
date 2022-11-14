import { Axios } from '../components/Axios'


export const getallproduct = async (dispatch)=>{
    try {
        dispatch({type:'Prod_Req'})

    const {data} = await Axios.get('/products')

    console.log(data);
     
    await dispatch({
        type:'AllProduct_Success',
        payload : data.products
    })
    } catch (error) {
        dispatch({
            type:'AllProduct_Fail',
            error:error.response.data.message
        })
    }
    
}





export const get8product = async (dispatch)=>{
    try {
        dispatch({type:'Prod_Req'})

    const {data} = await Axios.get('/get/products')

    console.log(data);
     
    await dispatch({
        type:'AllProduct_Success',
        payload : data.products
    })
    } catch (error) {
        dispatch({
            type:'AllProduct_Fail',
            error:error.response.data.message
        })
    }
    
}
