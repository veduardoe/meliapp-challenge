
class ApiRequest {
     
    getProducts(query){
        return fetch(`http://localhost:3400/api/items?q=${query}`);
    }

    getDetailProduct(id){
        return fetch(`http://localhost:3400/api/items/${id}`);
    }

}

export default ApiRequest;