import React, { useState, useEffect } from "react";
import bg from "../../assets/HomePage/bg.png";
import close from "../../assets/HomePage/close.png";
import ProfilePage from "./ProfilePage";
import { Outlet, useNavigate } from "react-router-dom";
import getUserInformation from "../../actions/LoginScreens/getUserInformation";

const UserProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goHomePage = () => {
    navigate(-1);
  };

  const getUserInformationData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("UserData:", user);
      const data = {
        phoneNumber: user?.mobileNumber,
      };
      const response = await getUserInformation(data);
      console.log(response);
      setUserData(response?.data?.user);
    } catch (error) {
      console.log("Not get User Data", error);
    }
  };

  useEffect(() => {
    getUserInformationData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <div className="flex gap-2 justify-center items-center">
          <button
            className="px-6 border rounded-full bg-blue-700 text-white -mt-5"
            onClick={goHomePage}
          >
            Back
          </button>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            User Information
          </h2>
          <button
            className="px-6 border rounded-full bg-blue-700 text-white -mt-5"
            onClick={openModal}
          >
            Edit
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder={userData.name}
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder={userData.phoneNumber}
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-700">Bank Account No</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder={userData.bankAccountNo}
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-700">IFSC Code</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder={userData.ifscCode}
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-700">QR Code</label>
            <div className=" h-40 border rounded-lg flex justify-center items-center object-contain">
              <img
                src={userData.qrCode}
                className="w-52 h-52 object-contain py-4"
                alt="QR Code"
              />
            </div>
          </div>

          {/* <div>
            <label className="block text-gray-700">Terms and Conditions</label>
            <div className="bg-gray-100 p-3 rounded-md h-24 overflow-y-auto text-sm">
              <p>
                By playing this Ludo game, you agree to follow the game rules
                and terms:
              </p>
              <ul className="list-disc list-inside">
                <li>All in-game purchases are final and non-refundable.</li>
                <li>
                  Players must respect each other and avoid abusive language.
                </li>
                <li>
                  The game reserves the right to ban players violating community
                  rules.
                </li>
                <li>
                  Any cheats or hacks used to manipulate the game will result in
                  an immediate ban.
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Privacy Policy</label>
            <div className="bg-gray-100 p-3 rounded-md h-24 overflow-y-auto text-sm">
              <p>
                We respect your privacy and ensure that your personal data is
                protected:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  We only collect necessary data for gameplay and transactions.
                </li>
                <li>
                  We do not share your information with third parties without
                  consent.
                </li>
                <li>
                  In case of a data breach, we will notify affected users
                  immediately.
                </li>
                <li>Your personal data can be deleted upon request.</li>
              </ul>
            </div>
          </div> */}
        </form>
      </div>

      {isModalOpen && (
        <div className="absolute top-4 bg-gray-800 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
            <button
              className="absolute w-11 h-11 top-8 right-10 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <img src={close} />
            </button>
            <ProfilePage />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
