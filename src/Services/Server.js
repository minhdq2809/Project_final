import axios from 'axios';
import ApiConfig from './../config/api';

export const getProducts = function (config) {
    return axios.get(ApiConfig.BASE_URF_API + '/get-products', config);
}