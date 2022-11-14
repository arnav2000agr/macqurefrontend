import axios from 'axios'
import { toast } from 'react-toastify'
import { Axios } from '../components/Axios'



export const loginbuyeraction = (email , password) => async(dispatch)=>{
   try {
    dispatch({type: 'UserReq' })
    const {data} = await Axios.post('/login/buyer',{email ,password } ,{withCredentials:true})
    
    
    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })

  
  
    toast.success('Login Success')

   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })
   
      toast.error(error.response.data.error)

   }
}

export const loginadminaction = (email , password) => async(dispatch)=>{

   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await Axios.post('/login/admin',{email ,password , config})

    console.log(data)

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })


   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

      toast.error(error.response.data.error)


   }
}

export const loginselleraction = (email , password) => async(dispatch)=>{


   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await Axios.post('/login/seller',{email ,password , config})

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })



   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

      toast.error(error.response.data.error)


   }
}


export const autologin = () => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })


    const {data} = await Axios.get('/auto/login')
    console.log(data);

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })

   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

   }
}

export const clearerror =async (dispatch)=>{
 dispatch({
    type:'ClearError'
 })
}