// import UserInformation from "../models/userInformation.modal.js";
import UserInformation from "../models/userInfromation.modal.js";
const getUserInformationByPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const userInfo = await UserInformation.findOne({ phoneNumber });
    if (!userInfo) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User information retrieved successfully",
      user: userInfo,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving user information", error });
  }
};

export default getUserInformationByPhoneNumber;
