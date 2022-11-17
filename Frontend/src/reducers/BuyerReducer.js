    
export const BuyerReducer = (state= {user:{}},action)=>{
    switch (action.type) {
        case 'UserReq':{
            return {
                loading:true,
                user : {},
                isAuthenticated:false
                
            }
        }
        case 'LoginSuccess' : {
            return{
                ...state,
                loading:false,
                user : action.payload,
                isAuthenticated:true
            }
        }

        case 'LoginFail' :{
            return {
                ...state,
               loading:false,
               error : action.payload,
               user:null,
               isAuthenticated:false

            }
        }

        case 'ClearError' : {
            return {
                ...state,
                error : null
            }
        }
    
        default: return state;
    }
}