import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import userInformation from "../../actions/LoginScreens/userInformation";
const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [qrCode, setQrCode] = useState(null);

  const handleFileUpload = (event) => {
    setQrCode(URL.createObjectURL(event.target.files[0]));
  };

  const userInformationHandler = async (formData) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("User Data:", user);
      const data = {
        name: formData?.name,
        phoneNumber: formData?.phoneNumber,
        bankAccountNo: formData?.bankAccountNo,
        ifscCode: formData?.ifscCode,
        qrCode: qrCode,
      };
      const response = await userInformation(data);
      console.log("user Information edited");
    } catch (error) {
      console.log("Error while editing UserInformation", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          User Information
        </h2>
        <form
          onSubmit={handleSubmit(userInformationHandler)}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Bank Account No</label>
            <input
              type="text"
              {...register("bankAccountNo", {
                required: "Bank account number is required",
              })}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Enter your bank account number"
            />
            {errors.bankAccountNo && (
              <p className="text-red-500 text-sm">
                {errors.bankAccountNo.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">IFSC Code</label>
            <input
              type="text"
              {...register("ifscCode", { required: "IFSC code is required" })}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Enter your IFSC code"
            />
            {errors.ifscCode && (
              <p className="text-red-500 text-sm">{errors.ifscCode.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">QR Code Upload</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            />
            {qrCode && (
              <div className="mt-2">
                <img src={qrCode} alt="QR Code" className="h-20 w-20" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Terms and Conditions</label>
            <div className="bg-gray-100 p-3 rounded-md h-24 overflow-y-auto text-sm">
              <p>
                By playing this Ludo game, you agree to follow the game rules
                and terms:
              </p>
              <ul className="list-disc list-inside">
                <li>All in-game purchases are final and non-refundable.</li>
                <li>
                  Players must respect each other and avoid any abusive
                  language.
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
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                {...register("termsAccepted", {
                  required: "You must accept the terms and conditions",
                })}
                className="mr-2"
              />
              <label className="text-gray-700">
                I agree to the Terms and Conditions
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-500 text-sm">
                {errors.termsAccepted.message}
              </p>
            )}
          </div>

          <div>
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
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
