import { ORDERS } from '../shared/orders';
import * as ActionTypes from './ActionTypes';


export const Orders = (state = ORDERS, action) => {
    switch (action.type) {
        // case ActionTypes.ADD_DISHES:
        //     return {...state, isLoading: false,
        //                         errMess: null,
        //                          dishes: action.payload};

        // case ActionTypes.DISHES_LOADING:
        //     return {...state, isLoading: true,
        //                         errMess: null, 
        //                         dishes: []}

        // case ActionTypes.DISHES_FAILED:
        //     return {...state, isLoading: false,
        //                         errMess: action.payload};
        case ActionTypes.ADD_ORDER:
        var order = action.payload;
        order.id = state.orders.length;
        order.date = new Date().toISOString();
        return { ...state, 
                orders: state.orders.concat(order)};
        default:
            return state;
    }
};