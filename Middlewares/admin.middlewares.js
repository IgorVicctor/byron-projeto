import jwt from "jsonwebtoken";

export default function autorizarAdmin(req, res, next) {
    const authHeader = req.headers['authorization']

    if(authHeader == null){
        return res.send(401).json({
            msg: "Você precisa logar como Admin  para acessar esse recurso"
        })
    }

    const token = authHeader.split(' ')[1]

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
            const role = usuario.role;
            
            if(err || role == false){
                return res.send(401).json({
                    msg: "Você precisa logar como Admin  para acessar esse recurso"
                })
            }

            next()
        })
    } else {
        return res.status(401).json({
            msg: "Você precisa logar como Admin  para acessar esse recurso"
        })
    }
}