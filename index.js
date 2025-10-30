import express from  'express';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://Anuj:Anuj2005@anujapi.pcejgp8.mongodb.net/NewShope').then((val)=>{
    app.listen(port, () => {
    console.log('connected and server is running');
});

}).catch((err)=>{
    console.log(err);
})


app.use(express.json());

app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
}));

app.get('/', (req,res)=>{
    return res.status(200).json({
        status: 'success',
        data: 'welcome to server'
    });
});

app.use(productRoutes);




