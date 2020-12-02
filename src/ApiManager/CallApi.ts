import axios from 'axios';
import {API} from './ApiConstants';

export default axios.create({

    baseURL: API,
    headers: {
        Authorization: 'Bearer JoWQII5egXl2I03AMHhz8KjxYdycRRX4KCbucm5AVlmGk6apNuIOeV2NYFoi2DqKfttR3F4X0nlUDX3zs9pWQNBiS84MC6IJkEWTBhJ9edHKYDYxdi-9_1kfbKLuXXYx'
    }  

});