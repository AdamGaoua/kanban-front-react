export const GET_LISTS = 'GET_LISTS';
export const getLists = () => ({
    type: 'GET_LISTS',
});

export const SEND_LISTS = 'SEND_LISTS';
export const sendLists = (lists) => ({
    type: 'SEND_LISTS',
    payload:{
        lists,
    }
})