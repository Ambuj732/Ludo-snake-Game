import Coin from "../models/coin.modal.js";

const dailyRewardCoins = [100, 1000, 5000, 10000, 50000, 100000, 500000];

const getToday = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
};

const claimDailyReward = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await Coin.findOne({ userId });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const today = getToday();

    if (
      user.lastClaimDate &&
      user.lastClaimDate.getTime() === today.getTime()
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Reward already claimed for today" });
    }

    if (
      user.lastClaimDate &&
      user.lastClaimDate.getTime() !== today.getTime()
    ) {
      const lastClaimDate = new Date(user.lastClaimDate);
      const oneDayInMs = 24 * 60 * 60 * 1000;

      // Check if the user missed a day
      if (today - lastClaimDate > oneDayInMs) {
        // If they missed a day, move to the next day’s reward without resetting the cycle
        user.currentDay++;
        if (user.currentDay > 7) {
          user.currentDay = 1;
          user.rewardCycleCompleted = true;
        }
      }
    }

    // Update user's coins and last claim date
    const coinsToAdd = dailyRewardCoins[user.currentDay - 1];
    user.coins += coinsToAdd;
    user.lastClaimDate = today;

    // Move to the next day or reset if the cycle completes
    if (user.currentDay < 7) {
      user.currentDay++;
    } else {
      user.currentDay = 1;
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: `You've earned ${coinsToAdd} coins!`,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { claimDailyReward };
