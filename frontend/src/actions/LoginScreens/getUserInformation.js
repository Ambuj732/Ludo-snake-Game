import axios from "axios";

const getUserData = async (data) => {
  try {
    const response = await axios.post(
      "https://api.mojoboatts.com/api/auth/get-user-information",
      data
    );
    return response;
  } catch (error) {
    console.log("Data is not found ");
    throw new Error(
      error.response?.data?.message || "Failed to get user information data"
    );
  }
};

export default getUserData;
