import jwt from 'jsonwebtoken';

const generateToken = (data) => {
  return jwt.sign({data}, process.env.PRIVATE_KEY, {
    expiresIn: '1h'
  });
}

export default generateToken;