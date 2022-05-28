
/* eslint-disable no-lone-blocks */
import axios from 'axios';
import { GET_LISTS, sendLists} from '../actions/listsActions'

const axiosInstance = axios.create({
    baseURL:'http://localhost:4000',
});


 export const listsMiddleware = (store) => (next) => (action) => {
    switch(action.type){
        case GET_LISTS : {
            
            // const state = store.getState();
            // const {lists} = state;
        
        axiosInstance.get('/lists')
        .then(response => {
            console.log(response.data);
            store.dispatch(sendLists(response.data));
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

