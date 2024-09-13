import Coin from "../models/coin.modal.js";
const updateCoin = async (req, res) => {
  const { userId, platform } = req.body;
  try {
    const user = await Coin.findOne({ userId });

    if (user) {
      if (platform === "whatsapp") {
        user.coins += 5000;
      } else if (platform === "telegram") {
        user.coins += 25000;
      }

      await user.save();

      return res.json({
        success: true,
        message: "Successfully updated",
        user: user,
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
};

export { updateCoin };
