export const GET_CARDS = 'GET_CARDS';
export const getCards = () => ({
    type: 'GET_CARDS',
});

export const SEND_CARDS = 'SEND_CARDS';
export const sendCards = (cards) => ({
    type: 'SEND_CARDS',
    payload:{
        cards,
    }
})