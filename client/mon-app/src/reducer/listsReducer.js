import { SEND_LISTS } from "../actions/listsActions";

const initialState = {
 lists: []
};

function listsReducer(state =  initialState, action = {}) {
    switch(action.type) {
        case SEND_LISTS:
            return {
                ...state,
                lists: action.payload.lists,
            }
  
        default: 
        return state;

    }
}

export default listsReducer;