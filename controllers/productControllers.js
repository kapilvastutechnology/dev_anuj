import Product from "../models/Product.js"

export const getProducts = (req,res)=>{
    return res.status(200).json({ data: 'Get all product'})
}

export const getProduct = (req,res)=>{
    return res.status(200).json({ data: 'Get Single Product'})
}

export const createProduct = async (req,res)=>{
   try{
    await Product.create({
        title:'hello jee',
        detail: 'sello jee',
        price: 120000
    });
    return res.status(201).json({
        status: 'success',
        data: 'product was successfully created'
    })
   }catch(err){
        return res.status(400).json({
            status: 'Error',
            data: err.message
        })
   }
}

export const updateProduct = (req,res)=>{
    return res.status(200).json({ data: 'update product' })
}


export const deleteProduct = (req,res)=>{
    return res.status(200).json({ data: 'delete product' })
}