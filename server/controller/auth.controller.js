import generateToken from '../config/generateToken.js';
import UserModel from '../models/user.model.js';

export const handleUserLogin = async(req, res) => {
  try {
    const {email, password, role} = req.body;
    const userDetails = await UserModel.findOne({email});
    if(userDetails &&  (await userDetails.matchPassword(password))) {
      res.status(200).json({
        message: "User logged in successfully",
        user: {
          _id: userDetails._id,
          name: userDetails.name,
          email: userDetails.email,
          phone: userDetails.phone,
          authToken: generateToken(userDetails._id)
        }
      });
    } else {
      res.status(401).json({error: "Invalid email or password"});
    }
  } catch (error) {
    console.log(error)
  }
}

export const handleUserSignUp = async(req, res) => {
  try {
    const {email, password, role} = req.body;
    if(!email || !password || !role) {
      res.status(400).json({error: "User registration failed. Please provide the required details"});
    }
    const user = await UserModel.create({email, password, role});
    console.log(user);
    if(user) {
      res.status(200).json({message: "Signing up successfull", user: {
        _id: user.id,
        email: user.email,
        authToken: generateToken(user._id)
      }})
    }
  } catch (error) {
    console.log(error);
    if(error.code === 11000) {
      res.status(400).json({error: "User already exists"});
      return;
    }
    res.status(400).json({error: "Signing up failed"});
  }
}

export const handleUserProfile = async(req, res) => {
  try {
    
  } catch (error) {
    
  }
}

export const handleUserProfileUpdate = (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

export const handleUserPasswordChange = (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

export const handleUserLogout = (req, res) => {
  try {
    
  } catch (error) {
    
  }
}