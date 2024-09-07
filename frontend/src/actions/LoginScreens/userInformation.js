import axios from "axios";
const userInformation = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/user-information",
      data
    );
    return response;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Falied to edit User Information"
    );
  }
};
export default userInformation;
