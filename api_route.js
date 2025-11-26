
// it is just copy code as a example

// import express from 'express';
// import fs from 'fs';
// const app = express();
// const port = 5000;


// app.get('/', (req,res)=>{
//     const {m} = req.query;
//     console.log(m);
//     return res.status(200).json({
//         status: 'success',
//         data: 'welcome to server'
//     })
// })




// const data = [
//     {
//         "id": 1,
//         "name": "anuj",
//         "age": 20
//     },

//     {
//         "id":2,
//         "name": "rahul",
//         "age":25
//     },
//     {
//         "id":3,
//         "name": "sohan",
//         "age": 50
//     }
// ]

// const getProducts = (req,res)=>{
//     return res.status(200).json({
//         status: 'success',
//         data: 'Get all product'
//     })
// }

// const getProduct = (req,res)=>{
//     const {id} = req.params;
//     console.log(id)
//     return res.status(200).json({
//         status: 'success',
//         data: 'Get Single Product'
//     })
// }

// const createProduct = (req,res)=>{
//     return res.status(200).json({
//         status: 'success',
//         data: 'add product'
//     })
// }

// const updateProduct = (req,res)=>{
//     return res.status(200).json({
//         status: 'success',
//         data: 'update product'
//     })
// }


// const deleteProduct = (req,res)=>{
//     return res.status(200).json({
//         status: 'success',
//         data: 'delete product'
//     })
// }

// app.route('/api/products')
// .get(getProducts)
// .post(createProduct);


// app.route('/api/products/:id')
// .get(getProduct)
// .patch(updateProduct)
// .delete(deleteProduct);


// app.get('/api/products',getProducts);
// app.get('/api/products/:id',getProduct);
// app.post('/api/products',createProduct);
// app.patch('/api/products/:id',updateProduct);
// app.delete('/api/products/:id',deleteProduct);




// app.listen(port, () => {
//     console.log('server is running');
// });



