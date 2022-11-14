import { combineReducers} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BuyerReducer } from './reducers/BuyerReducer'
import { ProductReducer } from './reducers/ProductReducer'
import { BidReducer } from './reducers/OrderReducer'
import { configureStore } from '@reduxjs/toolkit'


const reducer = combineReducers({
   user : BuyerReducer,
   product : ProductReducer,
   bid : BidReducer,
})

const initialState = {}



const middleware = [thunk]


const store = configureStore({reducer , initialState , })


export default store