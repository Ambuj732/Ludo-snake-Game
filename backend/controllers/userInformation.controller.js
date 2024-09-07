import UserInformation from "../models/userInfromation.modal.js";
const userInfromation = async (req, res) => {
  const { name, phoneNumber, bankAccountNo, ifscCode, qrCode } = req.body;

  try {
    const newUser = new UserInformation({
      name,
      phoneNumber,
      bankAccountNo,
      ifscCode,
      qrCode,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: "User information saved successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error saving user information", error });
  }
};

export default userInfromation;
