import express from  'express';
import productRoutes from './routes/productRoutes.js';
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req,res)=>{
    return res.status(200).json({
        status: 'success',
        data: 'welcome to server'
    });
});

app.use(productRoutes);


app.listen(port, () => {
    console.log('server is running');
});

