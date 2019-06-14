// import { ORDERS } from '../shared/orders';
import * as ActionTypes from './ActionTypes';


export const Orders = (state = {errMess: null,orders:[]}
    , action) => {
    switch (action.type) {
        
        case ActionTypes.ADD_ORDER:
        var order = action.payload;
        // order.id = state.orders.length;
        // order.date = new Date().toISOString();
        return { ...state, 
                orders: state.orders.concat(order)};
        default:
            return state;
    }
};