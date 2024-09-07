import mongoose from "mongoose";
import { Schema } from "mongoose";
const userInformationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  bankAccountNo: {
    type: String,
    required: true,
    trim: true,
  },
  ifscCode: {
    type: String,
    required: true,
    trim: true,
    match: /^[A-Z]{4}0[A-Z0-9]{6}$/,
  },
  qrCode: {
    type: String,
    required: true,
  },
});

const UserInformation = mongoose.model(
  "UserInformation",
  userInformationSchema
);

export default UserInformation;
