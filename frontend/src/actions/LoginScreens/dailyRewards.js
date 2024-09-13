import axios from "axios";
const coinsReward = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/daily-reward-coins",
      data
    );
    console.log("Successfully get rewards");
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get coins");
  }
};
export default coinsReward;
