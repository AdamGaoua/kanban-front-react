import axios from 'axios';

const axiosInstance = axios.create({
    baseurl:'http://localhost:4000',
});

export function requestLists () {
    axiosInstance.get('/lists')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    })
}