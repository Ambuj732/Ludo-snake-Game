import React, { useState, useEffect } from "react";
import logo from "../../assets/HomePage/logo.png";
import logo1 from "../../assets/HomePage/logo1.png";
import coin from "../../assets/HomePage/coin.png";
import icon from "../../assets/HomePage/icon.png";
import boost from "../../assets/HomePage/boost.png";
import star from "../../assets/HomePage/star.png";
import mining from "../../assets/HomePage/mining.png";
import freinds from "../../assets/HomePage/freinds.png";
import earn from "../../assets/HomePage/earn.png";
import whatsapp from "../../assets/HomePage/whatsapp.png";
import gift2 from "../../assets/HomePage/gift2.png";
import telegram from "../../assets/HomePage/telegram.svg";
import rabbit from "../../assets/HomePage/rabbit.png";
import refresh from "../../assets/HomePage/refresh.png";
import ifriend from "../../assets/HomePage/ifriend.png";
import copy from "../../assets/HomePage/copy.png";
import game from "../../assets/HomePage/game.png";
import { CiSettings } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";
import updateCoins from "../../actions/LoginScreens/updateCoins";
import { useNavigate } from "react-router";

const Friends = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToSuperMarketPage = () => {
    navigate("/home-page/super-market");
  };

  const goToPagePlayZone = () => {
    navigate("/home-page/play-zone");
  };

  const goToEarnPage = () => {
    navigate("/home-page/earning");
  };

  const goToWalletPage = () => {
    navigate("/home-page/wallet");
  };

  const getUpdateCoins = async (platform) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        userId: user?.userId,
        platform: platform,
      };
      console.log(data);
      const response = await updateCoins(data);
      console.log(response);
      if (response.data.success) {
        console.log("Coins updated successfully");
      } else {
        console.error("Failed to update coins");
      }
    } catch (error) {
      console.error("Error updating coins:", error);
    }
  };

  const handleInviteClick = (platform) => {
    getUpdateCoins(platform);
  };

  return (
    <div className=" absolute inset-0 bg-black min-h-screen">
      <div className="flex flex-col justify-center items-center mt-4">
        <span className="text-white font-bold text-2xl">Invite Friends</span>
        <span className="text-white font-sans text-nowrap">
          You and your friends will receive bonuses
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-7 mx-3">
        <div className="bg-[#0D1B43] w-[100%] h-auto rounded-2xl ">
          <div className="flex items-center gap-7 px-3 ">
            <div className="object-contain cursor-pointer">
              <a
                href="https://whatsapp.com/channel/0029VaecRli23n3fpDSOLy2G"
                onClick={() => handleInviteClick("whatsapp")}
              >
                <img src={whatsapp} className="w-14 h-14" />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-md">
                Invite Friends
              </span>
              <div className="flex justify-center items-center w-auto h-auto gap-1 ">
                <img src={coin} className="w-7 h-7" />
                <span className="text-[#ecd108] font-bold text-2xl">
                  +5,000
                </span>
                <span className="text-white font-custom text-nowrap">
                  for You
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0D1F4F] w-full h-auto rounded-2xl ">
          <div className="flex gap-7  items-center px-3">
            <div className="object-contain cursor-pointer">
              <a
                href="https://www.instagram.com/diiceraja?igsh=cG53dTk4dXdycmtk"
                onClick={() => handleInviteClick("telegram")}
              >
                <img src={telegram} className="w-16 h-16" />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-md">
                Invite Friends
              </span>
              <div className="flex  justify-center items-center h-auto gap-1">
                <img src={coin} className="w-7 h-7" />
                <span className="text-[#ecd108]  font-bold text-2xl">
                  +25,000
                </span>
                <span className="text-white font-custom text-nowrap  ">
                  for You
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 flex justify-between items-center px-2">
        <span className="text-white font-semibold text-xl">
          Friends list(0)
        </span>
        <img src={refresh} />
      </div>

      <div className="flex flex-col gap-44 px-2">
        <div className="bg-[#10255C] w-full h-20 rounded-2xl mt-4 flex items-center px-4">
          <span className="text-[#5D6D98] text-xl font-custom">
            You have not invited anyone yet
          </span>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#1779E4] w-[80%] h-10 rounded-2xl flex justify-center items-center gap-2">
            <img src={ifriend} />
            <span className="text-white">Invite a Friend</span>
          </div>
          <div className="bg-[#1779E4] w-[13%] h-10 rounded-xl flex justify-center items-center objec-fill">
            <img src={copy} />
          </div>
        </div>
      </div>

      <div className=" px-2">
        <div className="flex gap-2 bg-[#26292E] rounded-2xl w-auto h-20 mt-4 justify-between items-center flex-wrap px-2">
          <div
            className="flex flex-col items-center justify-center rounded-lg"
            onClick={goToWalletPage}
          >
            <img src={rabbit} className="w-7 h-7 rounded" alt="Rabbit" />
            <span className="text-white  text-sm">Wallet</span>
          </div>
          <div
            className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg"
            onClick={goToSuperMarketPage}
          >
            <img src={mining} className="w-7 h-7 rounded" alt="Mining" />
            <span className="text-white  text-sm">SuperMarket</span>
          </div>
          <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
            <img src={freinds} className="w-7 h-7 rounded" alt="Friends" />
            <span className="text-white  text-sm">Friends</span>
          </div>
          <div
            className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg"
            onClick={goToPagePlayZone}
          >
            <img src={game} className="w-7 h-7 rounded" alt="Coin" />
            <span className="text-white  text-sm">Play Zone</span>
          </div>
          <div
            className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg"
            onClick={goToEarnPage}
          >
            <img src={earn} className="w-7 h-7 rounded" alt="Coin" />
            <span className="text-white  text-sm">Earn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
