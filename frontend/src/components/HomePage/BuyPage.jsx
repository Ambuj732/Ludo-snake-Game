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
import gift from "../../assets/HomePage/gift.png";
import gift2 from "../../assets/HomePage/gift2.png";
import rabbit from "../../assets/HomePage/rabbit.png";
import next from "../../assets/HomePage/next.png";
import game from "../../assets/HomePage/game.png";
import newfriend from "../../assets/HomePage/newfriend.png";
import telegram from "../../assets/HomePage/telegram.svg";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import coinsReward from "../../actions/LoginScreens/dailyRewards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyPage = () => {
  const navigate = useNavigate();

  const goToSuperMarketPage = () => {
    navigate("/home-page/super-market");
  };

  const goToPagePlayZone = () => {
    navigate("/home-page/play-zone");
  };

  const goToWalletPage = () => {
    navigate("/home-page/wallet");
  };

  const goFrinedsPage = () => {
    navigate("/home-page/friends");
  };
  return (
    <div className=" absolute inset-0 bg-black min-h-screen">
      <div className="flex mt-7 px-2 justify-center items-center h-1/2">
        <div className="bg-[#0751CC] w-full h-20 rounded-2xl flex justify-between items-center px-4">
          <div className="flex justify-between items-center px-2">
            <div className="flex cursor-pointer justify-center items-center">
              <div className="flex gap-2 items-center justify-center">
                <span className="text-white text-2xl font-bold">1000</span>
                <span className="text-[#e5cb07] font-bold hover:scale-105 text-2xl">
                  to 1Rs
                </span>
              </div>
            </div>
          </div>
          <img src={next} className="cursor-pointer" />
        </div>
      </div>

      <div className="px-2 mt-[280px]">
        <div className="flex gap-2 bg-[#26292E] rounded-2xl w-auto h-20 mt-16 justify-between items-center flex-wrap px-2">
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
          <div
            className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg"
            onClick={goFrinedsPage}
          >
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
          <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
            <img src={earn} className="w-7 h-7 rounded" alt="Coin" />
            <span className="text-white  text-sm">Earn</span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BuyPage;
