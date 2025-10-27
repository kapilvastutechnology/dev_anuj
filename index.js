import express from 'express';
import { createProduct, deleteProduct, getProduct,
     getProducts, updateProduct } from './controllers/productControllers.js';
import { notAllowed } from './utils/notAllowed.js';
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req,res)=>{
    const {m} = req.query;
    console.log(m);
    return res.status(200).json({
        status: 'success',
        data: 'welcome to server'
    })
})

app.route('/api/products')
.get(getProducts)
.post(createProduct).all(notAllowed);

app.route('/api/products/:id')
.get(getProduct)
.patch(updateProduct)
.delete(deleteProduct).all(notAllowed);

app.listen(port, () => {
    console.log('server is running');
});

