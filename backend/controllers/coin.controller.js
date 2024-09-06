import Coin from "../models/coin.modal.js";

const coinStore = async (req, res) => {
  const { userId, coins } = req.body;

  try {
    const user = await Coin.findOneAndUpdate(
      { userId },
      { $inc: { coins: coins } },
      { new: true, upsert: true }
    );
    res.status(200).json({ success: "updated coin", data: user });
  } catch (error) {
    res.status(500).json({ success: "not updated", error: error.message });
  }
};

export { coinStore };
