<<<<<<< HEAD
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
    applyMiddleware(thunk, logger));

=======
import { createStore} from 'redux';
import {Reducer, initialState} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState,
    );
>>>>>>> a93f413
    return store;
}