import axios from "axios";
const updateCoins = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/update-coins",
      data
    );
    console.log("Successfully updated coin according to platform");
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to Update coins");
  }
};
export default updateCoins;
