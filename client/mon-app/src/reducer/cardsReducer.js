import { SEND_CARDS} from "../actions/cardsActions";

const initialState = {
 cards: []
};

function cardsReducer(state =  initialState, action = {}) {
    switch(action.type) {
        case SEND_CARDS:
            return {
                ...state,
                cards: action.payload.lists,
            }
            
                
            
        default: 
        return state;

    }
}

export default cardsReducer;