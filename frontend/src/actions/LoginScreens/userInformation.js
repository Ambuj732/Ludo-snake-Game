import axios from "axios";
const userInformation = async (data) => {
  try {
    const response = await axios.post(
      "https://api.mojoboatts.com/api/auth/user-information",
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
