import mpngoose from 'mongoose';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const SALT_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
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
  phone: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["endUser", "agency"],
    required: true
  },
  profileCompleted: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true});

UserSchema.pre("save", async function(next) {
  if(!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(SALT_FACTOR);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;