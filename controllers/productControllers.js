import Product from "../models/Product.js"
import fs from 'fs';

export const getProducts = async (req,res)=>{
    try{
        const products = await Product.find({});
        return res.status(200).json({
            status: 'success',
             products
        })
    }catch(err){
         return res.status(400).json({
            status : 'Error',
            data: err.message
        })
    }
}

export const getProduct = async (req,res)=>{
 try {
      const {id} = req.params;
    const isExist = await Product.findById(req.id);
    if(!isExist) return res.status(404).json({
      status: 'err',
      data:'Product not found'
    });

    return res.status(200).json({
      status: 'success',
      data: isExist
    })
 } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message
    })
 }
}

export const createProduct = async (req,res)=>{
    const {title,price,detail, brand, category} = 
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



export const updateProduct = async (req, res) => {
  const { title, price, detail, category, brand } = req.body ?? {};
  try {
    const isExist = await Product.findById(req.id);
    if (!isExist) {
      if (req.imagePath) {
        fs.unlinkSync(`./uploads/${req.imagePath}`);
        return res.status(404).json({ status: 'error', data: 'product not found' });
      } else {
        return res.status(404).json({ status: 'error', data: 'product not found' });
      }
    }

    isExist.title = title || isExist.title;
    isExist.price = price || isExist.price;
    isExist.detail = detail || isExist.detail;
    isExist.category = category || isExist.category;
    isExist.brand = brand || isExist.brand;
    await isExist.save();

    //updating file
    if (req.imagePath) {
      fs.unlink(`./uploads/${isExist.image}`, async (err) => {
        isExist.image = req.imagePath;
        await isExist.save();
        return res.status(200).json({
          status: 'success',
          data: 'product successfully updated'
        });

      })

    } else {
      return res.status(200).json({
        status: 'success',
        data: 'product successfully updated'
      });
    }


  } catch (err) {
    if (req.imagePath) {
      fs.unlink(`./uploads/${req.imagePath}`, (error) => {
        return res.status(500).json({
          status: 'error',
          message: err.message
        });
      })
    } else {
      return res.status(500).json({
        status: 'error',
        message: err.message
      });
    }

  }
}


export const deleteProduct = async (req, res) => {
  try {
    const isExist = await Product.findById(req.id);
    if(!isExist) return res.status(404).json({ status: 'error', data: 'product not found' });


    fs.unlink(`./uploads/${isExist.image}`, async (err) => {

      await isExist.deleteOne();
      return res.status(200).json({ status: 'success', data: 'product deleted successfully' })
    })

  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message
    });

  }
};

