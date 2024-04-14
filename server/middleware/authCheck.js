import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';

const authCheck = async(req, res, next) => {
  try {
    let token;
    if(req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(" ")[1];

      // check if token is valid
      const decode = jwt.decode(token);
      req.user = await UserModel.findOne(decode.id);
      next()
    }
    if(!token) {
      res.status(403).json({error: "Not Authorized. No token"})
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({error: "Not Authorized. Token Failed"})
  }
}

export default authCheck;