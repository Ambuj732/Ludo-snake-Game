import React, { useState } from "react";
import logo from "../../assets/HomePage/logo.png";
import logo1 from "../../assets/HomePage/logo1.png";
import coin from "../../assets/HomePage/coin.png";
import icon from "../../assets/HomePage/icon.png";
import boost from "../../assets/HomePage/boost.png";
import star from "../../assets/HomePage/star.png";
import mining from "../../assets/HomePage/mining.png";
import freinds from "../../assets/HomePage/freinds.png";
import earn from "../../assets/HomePage/earn.png";
import gift from "../../assets/HomePage/gift.png";
import gift2 from "../../assets/HomePage/gift2.png";
import rabbit from "../../assets/HomePage/rabbit.png";
import refresh from "../../assets/HomePage/refresh.png";
import ifriend from "../../assets/HomePage/ifriend.png";
import copy from "../../assets/HomePage/copy.png";
import game from "../../assets/HomePage/game.png";
import { CiSettings } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";
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

  return (
    <div className=" absolute inset-0  bg-black min-h-screen p-4">
      <div className="flex flex-col justify-center items-center mt-10">
        <span className="text-white font-bold text-2xl">Invite Friends</span>
        <span className="text-white font-sans">
          You and your friends will receive bonuses
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <div className="bg-[#0D1B43] w-[100%] h-auto rounded-2xl ">
          <div className="flex gap-1 justify-center items-center">
            <div className="object-fill">
              <img src={gift} className="w-16 h-16 " />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-md">
                Invite Friends
              </span>
              <div className="flex justify-center items-center w-full gap-2 ">
                <img src={coin} className="w-5 h-5" />
                <span className="text-[#7F7526] font-bold">
                  <span className="font-bold text-[#7F7526]">+</span>5,000
                </span>
                <span className="text-white font-custom text-nowrap">
                  for You and your freind
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0D1F4F] w-full h-20 rounded-2xl ">
          <div className="flex gap-1 justify-center items-center">
            <div className="object-fill">
              <img src={gift2} className="w-16 h-16 " />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-md">
                Invite Friends
              </span>
              <div className="flex  justify-center items-center gap-1">
                <img src={coin} className="w-5 h-5" />
                <span className="text-[#7F7526] font-bold">
                  <span className="font-bold text-[#7F7526]">+</span>25,000
                </span>
                <span className="text-white font-custom ">
                  for You and your freind
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 flex justify-between items-center">
        <span className="text-white font-semibold text-xl">
          Friends list(0)
        </span>
        <img src={refresh} />
      </div>

      <div className="flex flex-col gap-44">
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
  );
};

export default Friends;
