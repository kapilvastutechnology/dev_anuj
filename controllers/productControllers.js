import Product, { brands, categories }  from "../models/Product.js"
import fs from 'fs';

// export const getProducts = async (req,res)=>{
//     try{

//       const exludedFields = ['page','sort','limit','fields','skip', 'search'];
//       let queryObj = {...req.query};

//       exludedFields.forEach((val)=>{
//         delete queryObj[val];
//       });


//         if (req.query.search) {
//       const searchText = req.query.search;


//       if (categories.some((name) => name.toLowerCase() === searchText.toLowerCase())) {
//         queryObj.category = { $regex: searchText, $options: 'i' };

//       } else if (brands.some((name) => name.toLowerCase() === searchText.toLowerCase())) {
//         queryObj.brand = { $regex: searchText, $options: 'i' };
//       } else {
//         queryObj.title = { $regex: searchText, $options: 'i' };
//       }

//     }

//     const output = Object.entries(queryObj).reduce((acc, [key, value]) => {
//       const match = key.match(/^(.?)\[(.?)\]/);
//       if (match) {
//         const field = match[1];
//         const operator = `$${match[2]}`;
//         const parsedValue = isNaN(value) ? value : Number(value);

//         acc[field] = { [operator]: parsedValue };
//       } else {
//         acc[key] = value;
//       }
//       return acc;
//     }, {});


//         let query =  Product.find(output);

//         if(req.query.sort){
//             const sortBy = req.query.sort.split(',').join(' ');
//             query = query.sort(sortBy);
//         }

//         if(req.query.fields){
//             const fields = req.query.fields.split(',').join(' ');
//             query = query.select(fields);
//         }


//         const page = req.query.page || 1;
//         const limit = req.query.limit || 10;
//         const skip = (page-1) * 10;

//         const products = await query.skip(skip).limit(limit);

//         return res.status(200).json({
//             status: 'success',
//              products
//         });
//     }catch(err){
//          return res.status(400).json({
//             status : 'Error',
//             data: err.message
//         })
//     }
// }

// export const getProducts = async(req,res) => {

//   try {
//     const excludedFileds = ['page', 'limit', 'sort', 'fields', 'skip', 'search'];
//     let queryObj = {...req.query};

//     excludedFileds.forEach((val) => {
//       delete queryObj[val];
//     })


//     // search method
//     if (req.query.search) {
//        const searchText = req.query.search;

//       if (categories.some((name) => name.toLowerCase() === searchText.toLowerCase())) {
//          queryObj.category = { $regex: searchText, $options: 'i' };

//          } else if (brands.some((name) => name.toLowerCase() === searchText.toLowerCase())) {
//          queryObj.brand = { $regex: searchText, $options: 'i' };
//        } else {
//          queryObj.title = { $regex: searchText, $options: 'i' };
//        }

//      }


//     // {'rating[gt]': '4'} and {rating: {$gt:4}} for conditions 
//   const output = Object.entries(queryObj).reduce((acc, [key, value]) => {
//       const match = key.match(/^(.+)\[(.+)\]$/);  // <-- FIXED REGEX
//       if (match) {
//         const field = match[1];
//         const operator = `$${match[2]}`;
//         const parsedValue = isNaN(value) ? value : Number(value);

//         acc[field] = { [operator]: parsedValue };
//       } else {
//         acc[key] = value;
//       }
//       return acc;
//     }, {});



// // sort method
//     let query = Product.find(output);
//     if(req.query.sort){
//       const sortBy = req.query.sort.split('.').join('');
//       query = query.sort(sortBy)
//     }

// // select method
//     if(req.query.fields){
//       const fields = req.query.fields.split(',').join('');
//         query = query.select(fields);
//     }

//     // page filter
//     const page = req.query.page || 1;
//     const limit = req.query.limit || 10;
//     const skip = (page-1) * 10;

//     const total = Product.countDocuments();
//     const products =  await query.skip(skip).limit(limit);
    
//     return res.status(200).json({
//       status: 'success',
//       total,
//       products,
//       totalPages: Math.ceil(total / limit)
//     });

//   } catch (err) {
//       return res.status(400).json({
//         status: 'error',
//         data: err.message
//       });
//   }
// }



export const getTop5Products = async (req, res) => {
  try {
    const products = await Product.find({ rating: { $gt: 4 } }).limit(5);
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ status: 'error', message: err.message });
  }
}



export const getProducts = async (req, res) => {
  try {

    const exludedFields = ['page', 'limit', 'sort', 'fields', 'skip', 'search'];
    let queryObj = { ...req.query };

    exludedFields.forEach((val) => {
      delete queryObj[val];
    })



    if (req.query.search) {
      const searchText = req.query.search;


      if (categories.some((name) => name.toLowerCase() === searchText.toLowerCase())) {
        queryObj.category = { $regex: searchText, $options: 'i' };

      } else if (brands.some((name) => name.toLowerCase() === searchText.toLowerCase())) {
        queryObj.brand = { $regex: searchText, $options: 'i' };
      } else {
        queryObj.title = { $regex: searchText, $options: 'i' };
      }


    }

    // { 'rating[gt]': '4' }
    // {rating: {$gt: 4}}
    const output = Object.entries(queryObj).reduce((acc, [key, value]) => {
      const match = key.match(/^(.+)\[(.+)\]$/);  // <-- FIXED REGEX
      if (match) {
        const field = match[1];
        const operator = `$${match[2]}`;
        const parsedValue = isNaN(value) ? value : Number(value);

        acc[field] = { [operator]: parsedValue };
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});


    let query = Product.find(output);

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * 10;

    const total = await Product.countDocuments();
    const products = await query.skip(skip).limit(limit);

    return res.status(200).json({
      status: 'success',
      total,
      products,
      totalPages: Math.ceil(total / limit)
    });


  } catch (err) {
    return res.status(400).json({
      status: 'Error',
      data: err.message
    });
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
      product: isExist
    })
 } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message
    })
 }
}

export const createProduct = async (req,res)=>{
    const {title,price,detail, brand, category, stock} = 
    req.body ?? {};
    console.log(req.imagePath);
    try{
        await Product.create({
            title,
            price,
            detail,
            image:req.imagePath,
            brand,
            category,
            stock
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
  const { title, price, detail, category, brand,stock } = req.body ?? {};
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
    isExist.stock = stock || isExist.stock;
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

