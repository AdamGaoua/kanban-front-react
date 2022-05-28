import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import listsReducer from '../reducer/listsReducer';
import cardsReducer from '../reducer/cardsReducer';
import {listsMiddleware} from '../Middlewares/listsMiddleware.js';
import {cardsMiddleware} from '../Middlewares/cardsMiddleware.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    
    lists: listsReducer, 
    cards: cardsReducer
})

const enhancers = composeEnhancers(
    applyMiddleware(listsMiddleware, cardsMiddleware)
);

const store = createStore(rootReducer, enhancers);
export default store;