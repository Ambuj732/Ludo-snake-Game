import mongoose from "mongoose";
const { Schema } = mongoose;
const SignupSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: function (v) {
    // Basic regex for a typical mobile number format
    //     return /^\+?\d{1,3}[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid phone number!`,
    // },
  },
});

// create a modal
const Signup = mongoose.model("SignUp", SignupSchema);
export default Signup;
