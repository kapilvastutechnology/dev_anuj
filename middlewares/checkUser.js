import jwt from 'jsonwebtoken';
export const checkUser = (req, res, next) =>{
    const token = req.headers.authorization;
    const decode = jwt.decode(token, 'secret');
    if(!decode) return res.status(404).json({
        status: 'error',
        data: 'you are not authorized'
    });

    req.userId = decode.id;
    req.role = decode.role;
    next();
}




export const checkAdmin = (req,res,next) =>{
    if(req.role === 'admin' ) return next();
    return res.status(401).json({
        status: 'error',
        data: 'you are not authorized'
    })
}