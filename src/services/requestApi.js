import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.github.com/users/'
});

export const getAllRepos = async (endpoint) => {
    const data = await API.get(endpoint)
        .then((response) => response.data);
    return data;
};

export const getDataUser = async (endpoint) => {
    const data = await API.get(endpoint)
        .then((response) => response.data);
    return data;
};