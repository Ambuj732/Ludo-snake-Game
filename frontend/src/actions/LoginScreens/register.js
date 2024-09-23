import axios from "axios";

const registerUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      data
    );
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to register");
  }
};
export default registerUser;
