

export const BidReducer = (state={bid:[]}, action)=>{
    switch (action.type) {
        case 'Bids_Req':
            return{
                loading:true,
                bid:[]
            }
        case 'Get_Bid_Success':
            return{
                loading:false,
                bid:action.payload,
            }

        case 'Get_Bid_Fail':
            return{
                loading:false,
                bid:[],
                error:action.payload
            }

        case 'Clear_Error':
            return{
                ...state,
                loading:false,
                error:null,
            }
    
        default: return state;
    }
}