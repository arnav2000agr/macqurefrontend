

export const ProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case "Product_Req":
            return {
                loading: true,
                product: []
            }

        case "AllProduct_Success":
            return {
                loading: false,
                product: action.payload
            }
        case "AllProduct_Fail":
            return {
                loading: false,
                product: null,
                error: action.payload
            }

        case 'ClearError': {
            return {
                ...state,
                error: null
            }
        }
        default: return state;
    }
}