import axios from "axios";

const getUserData = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/get-user-information",
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
