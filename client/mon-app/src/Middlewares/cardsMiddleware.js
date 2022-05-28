/* eslint-disable no-lone-blocks */
import axios from 'axios';

import {GET_CARDS, sendCards } from '../actions/cardsActions';

const axiosInstance = axios.create({
    baseURL:'http://localhost:4000',
});

export const cardsMiddleware = (store) => (next) => (action) => {
    switch(action.type){
        case GET_CARDS : {
            
            // const state = store.getState();
            // const {cards} = state;
        
        axiosInstance.get('/lists/2/cards')
        .then(response => {
            console.log(response.data);
            store.dispatch(sendCards(response.data));
        })
        .catch(error => {
            console.error(error);
        });
        };    
        break;
    
    default:
        next(action);
    }

};