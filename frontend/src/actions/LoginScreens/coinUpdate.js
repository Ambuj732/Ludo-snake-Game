import axios from "axios";
const coinUpdateData = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/coin-update",
      data
    );
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to Update coins");
  }
};
export default coinUpdateData;
