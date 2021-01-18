import React, { Fragment, useEffect, useState } from 'react'
import Card from './../shared/components/Card';
import { useLocation } from "react-router-dom";
import ApiRequest from '../shared/apis/Api';
import * as formatNumber from 'format-number';

const ResultsProducts =  () => {

    const [productos, setProductos] = useState([]);
    const [ loaded, setLoaded] = useState(false);
    const query = new URLSearchParams(useLocation().search);
    const searchString = query.get('search');
    let listProds = [];
    
    useEffect(() => {
        getListProducts(searchString);
    },[searchString]);

    const getListProducts = async (searchString) => {
        const api = new ApiRequest();
        try {
            const request = await api.getProducts(searchString);
            const data  = await request.json();
            setProductos(data.results);
            setLoaded(true);
        } catch (err) {
            console.log(err);
        }
    }

    if(productos){
        listProds = productos.map( item => {
            return (<Card picture={item.thumbnail} 
                          price={formatNumber({prefix: '$', integerSeparator :'.'})(item.price)} 
                          title={item.title} 
                          location={item.address.city_name} 
                          id={item.id}
                          key={item.id} />)
        });
    
    }
    
    const jsxNotFound = (
        <p className='notFound'>No se encontraron resultados asociados a la búsqueda <b>{ searchString }</b>. Intente realizar otra búsqueda.</p>
    )

    return (    <Fragment>
                    { listProds.length > 0  ? listProds : ( loaded ? jsxNotFound : 'Cargando...') }
                </Fragment> );
}

export default ResultsProducts;