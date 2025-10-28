export const getProducts = (req,res)=>{
    return res.status(200).json({ data: 'Get all product'})
}

export const getProduct = (req,res)=>{
    return res.status(200).json({ data: 'Get Single Product'})
}

export const createProduct = (req,res)=>{
    return res.status(200).json({ data: 'add Proudct' })
}

export const updateProduct = (req,res)=>{
    return res.status(200).json({ data: 'update product' })
}


export const deleteProduct = (req,res)=>{
    return res.status(200).json({ data: 'delete product' })
}