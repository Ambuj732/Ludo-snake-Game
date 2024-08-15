import axios from "axios";

const login = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/login", data);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to login");
  }
};
export default login;
