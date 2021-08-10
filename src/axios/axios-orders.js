import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4eaf6.firebaseio.com/'
});

export default instance;