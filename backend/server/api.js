const axios = require('axios').default;
require('dotenv').config()

function getProductSearch(query){
    return axios.get(`${process.env.PRODUCT_SEARCH_API}?q=${query}`);
}

function getProductDetail(id){
    return axios.get(`${process.env.PRODUCT_DETAIL_API}/${id}`);
}

function getProductDescription(id){
    return axios.get(`${process.env.PRODUCT_DETAIL_API}/${id}/description`);
}

module.exports = {
    getProductSearch,
    getProductDetail,
    getProductDescription
}