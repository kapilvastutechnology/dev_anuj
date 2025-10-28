export const getUsers = (req,res)=>{
    return res.status(200).json({ data: 'Get all User'})
}

export const getUser = (req,res)=>{
    return res.status(200).json({ data: 'Get Single user'})
}

export const createUser = (req,res)=>{
    return res.status(200).json({ data: 'add user' })
}

export const updateUser = (req,res)=>{
    return res.status(200).json({ data: 'update user' })
}


export const deleteUser = (req,res)=>{
    return res.status(200).json({ data: 'delete user' })
}