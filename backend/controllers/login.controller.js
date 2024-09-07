import Signup from "../models/signup.modal.js";
const login = async (req, res) => {
  const { userId, password } = req.body;

  try {
    const user = await Signup.findOne({ userId });
    console.log("user data:", user);

    if (!user) {
      return res.status(400).json({ message: "Invalid user ID or password" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid user ID or password" });
    }

    res.status(200).json({
      message: "User logged in successfully",
      profile: {
        userName: user.userName,
        userId: user.userId,
        email: user.email,
        mobileNumber: user.mobileNumber,
        password: user.password,
      },
    });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: "Failed to log in" });
  }
};

export { login };
