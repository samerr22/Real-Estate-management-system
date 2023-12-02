
import jwt from 'jsonwebtoken';
import { errorHadler } from './error.js'

export const verifyToken = (req, res, next) => {

    const token = req.cookies.access_token;
    if (! token) return next (errorHadler (401, 'Unauthorized'));

    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
        if(err) return next(errorHadler(403, 'Forbidden'));

        req.user = user;
        next();

    })
}