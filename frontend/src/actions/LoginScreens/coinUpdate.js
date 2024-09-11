import axios from "axios";
const coinUpdateData = async (data) => {
  try {
    const response = await axios.post(
      "https://api.mojoboatts.com/api/auth/coin-update",
      data
    );
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to Update coins");
  }
};
export default coinUpdateData;
