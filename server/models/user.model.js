import mpngoose from 'mongoose';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const SALT_FACTOR = 10;

const UserSchema = new mpngoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    enum: ["endUser", "agency"]
  }
}, {timestamps: true});

UserSchema.pre("save", async(next) => {
  if(!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(SALT_FACTOR);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async(enteredPassword) => {
  return await bcrypt.compare(this.password, enteredPassword);
}

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;