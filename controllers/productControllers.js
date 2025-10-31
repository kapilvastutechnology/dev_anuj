import Product from "../models/Product.js"
import fs from 'fs';
export const getProducts = async (req,res)=>{
    try{
        const product = await Product.find({});
        return res.status(200).json({
            status: 'success',
            data: product
        })
    }catch(err){
         return res.status(400).json({
            status : 'Error',
            data: err.message
        })
    }
}

export const getProduct = (req,res)=>{
    return res.status(200).json({ data: 'Get Single Product'})
}

export const createProduct = async (req,res)=>{
    const {title,price,detail,image, brand, category} = 
    req.body ?? {};
    console.log(req.imagePath);
    try{
        await Product.create({
            title,
            price,
            detail,
            image:req.imagePath,
            brand,
            category
        });
        return res.status(201).json({
            status: 'Success',
            data: 'product added successfully'
        });
    } catch(err){
        fs.unlink(`./uploads/${req.imagePath}`,(error)=>{
             return res.status(400).json({
            status : 'Error',
            data: err.message
          })
        })
    }
}

export const updateProduct = (req,res)=>{
    return res.status(200).json({ data: 'update product' })
}


export const deleteProduct = async (req, res) => {
  try {
    const isExist = await Product.findById(req.id);
    if (!isExist) return res.status(404).json({ status: 'error', data: 'product not found' });


    fs.unlink(`./uploads/${isExist.image}`, async (err) => {

      await isExist.deleteOne();
      return res.status(200).json({ status: 'success', data: 'product deleted successfully' })
    })

  } catch (err) {
    return res.status(500).json({
      status: 'error',
      data: err.message
    });

  }
};