import Signup from "../models/signup.modal.js";

const getsignUp = async (req, res) => {
  const { userName, userId, email, mobileNumber, password } = req.body;
  try {
    const newUser = new Signup({
      userName,
      userId,
      email,
      mobileNumber,
      password,
    });

    await newUser.save();

    console.log("User ID:", newUser.id);

    res.status(200).json({
      message: "User signed up Successfully",
      id: newUser.id,
    });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: "Failed to sign up" });
  }
};

export { getsignUp };
