export const getProducts = (req,res)=>{
    return res.status(200).json({
        status: 'success',
        data: 'Get all product'
    })
}

export const getProduct = (req,res)=>{
    const {id} = req.params;
    console.log(id)
    return res.status(200).json({
        status: 'success',
        data: 'Get Single Product'
    })
}

export const createProduct = (req,res)=>{
    console.log(req.body);
    return res.status(200).json({
        status: 'success',
        data: 'add product'
    })
}

export const updateProduct = (req,res)=>{
    return res.status(200).json({
        status: 'success',
        data: 'update product'
    })
}


export const deleteProduct = (req,res)=>{
    return res.status(200).json({
        status: 'success',
        data: 'delete product'
    })
}