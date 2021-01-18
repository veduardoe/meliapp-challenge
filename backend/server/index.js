const express = require('express');
const app = express();
const cors = require('cors');
const { getProductSearch, getProductDetail, getProductDescription } = require('./api');
require('dotenv').config();

app.use(cors());

app.get('/api/items', async (req, res) => {

    try {

        const { q } = req.query;

        if(!q){

            res.status(400).send({
                response: false,
                status: 400,
                message: 'Debe indicar el parámetro q (query).'
            });

            return;
        }

        const { data } = await getProductSearch(q);

        res.status(200).send(data);

    } catch (err) {

        console.log(err);
        res.status(500).send({
            response: false,
            status: 500,
            message: 'Se ha producido un error. Intente más tarde.'
        });

    }

});

app.get('/api/items/:id', async (req, res) => {

    try {

        const { id } = req.params;

        if(!id){

            res.status(400).send({
                response: false,
                status: 400,
                message: 'Debe indicar el parámetro id.'
            });

            return;
        }

        const productDetail =  getProductDetail(id);
        const productDescription = getProductDescription(id);

        const [pDet, pDes] = await Promise.all([productDetail, productDescription]);

        res.status(200).send({
            productDetail : pDet.data,
            productDescription: pDes.data
        });

    } catch (err) {

        console.log(err);
        res.status(500).send({
            response: false,
            status: 500,
            message: 'Se ha producido un error. Intente más tarde.'
        });

    }

});


app.listen(process.env.NODE_PORT, () => {
    console.log(`Servidor inicializado en el puerto ${process.env.NODE_PORT}`);
})