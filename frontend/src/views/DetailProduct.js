import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ApiRequest from '../shared/apis/Api';
import * as formatNumber from 'format-number';
import './../scss/DetailProduct.scss';

const DetailProduct = (props) => {

    const [producto, setProducto] = useState({});
    const [desProducto, setDesProducto] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id);
    }, [id]);


    const getProduct = async (id) => {
        const api = new ApiRequest();
        try {
            const response = await api.getDetailProduct(id);
            const reqProduct = await response.json();
            console.log(reqProduct)
            setProducto(reqProduct.productDetail);
            setDesProducto(reqProduct.productDescription);
            setLoaded(true);

        } catch (err) {
            console.log(err);
        }
    }

    const jsxProducto =  !producto ? '' : (
        <Fragment>
            <div className='picInfo'>
                <img className='picture' alt="pic" src={ producto.pictures ? producto.pictures[0].url : ''} />
                <div className='info'>
                    <span className='init-info'>{producto.condition === 'new' ? 'Nuevo' : 'Usado'} - {producto.sold_quantity} vendidos</span>
                    <h1 className='titleProduct'>{producto.title}</h1>
                    <span className='price'>{formatNumber({ prefix: '$', integerSeparator: '.' })(producto.price)}<sup>00</sup></span>
                    <button className='btnComprar'>Comprar</button>
                </div>
            </div>
            <div className='description'>
                <h2>Descripción del producto</h2>
                <p>{desProducto.plain_text}</p>
            </div>
        </Fragment>
    );

    const jsxNotFound = (
        <p className='notFound'>No se encontraron resultados. Intente realizar otra búsqueda.</p>
    );

    return (
        <div className='card-detail'>
            { producto.id ? jsxProducto : (loaded ? jsxNotFound : 'Cargando...')}
        </div>
    );

}

export default DetailProduct;