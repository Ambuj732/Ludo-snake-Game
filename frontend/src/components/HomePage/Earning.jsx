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
import next from "../../assets/HomePage/next.png";
import game from "../../assets/HomePage/game.png";
import newfriend from "../../assets/HomePage/newfriend.png";
import telegram from "../../assets/HomePage/telegram.svg";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";

const Earning = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const baseUrl = "https://www.diiceraja.com/";

  const generateReferralLink = () => {
    const uniqueId = uuidv4();
    return `${baseUrl}/invite/${uniqueId}`;
  };

  const handleAddFriend = () => {
    const referralLink = generateReferralLink();
    const whatsappMessage = `Hey! Join me in this awesome game: ${referralLink}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

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
    <div className=" absolute inset-0 bg-black min-h-screen p-4">
      <div className="flex flex-col justify-center items-center mt-4 gap-2">
        <img src={coin} className="w-24 h-24 shadow-lg shadow-yellow-900" />
        <span className="text-white font-sans font-bold text-2xl">
          Earn more coins
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <span className="text-white font-semibold text-lg">Daily Tasks</span>
        <div className="bg-[#0751CC] w-full h-20 rounded-2xl ">
          <div className="flex justify-between items-center px-2">
            <div className="flex gap-1 justify-center items-center">
              <div className="object-fill">
                <img src={gift} className="w-20 h-20 " />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-md">
                  Daily reward
                </span>
                <div className="flex gap-2 items-center">
                  <img src={coin} className="w-5 h-5" />
                  <span className="text-[#e8cf19] font-bold">
                    <span className="font-bold text-[#eed514]">+</span> 5,000
                  </span>
                </div>
              </div>
            </div>
            <img src={next} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <span className="text-white font-semibold text-lg">Tasks List</span>
        <div
          className="bg-[#0D1F4F] w-full h-20 rounded-2xl"
          onClick={handleAddFriend}
        >
          <div className="flex justify-between items-center p-2 cursor-pointer">
            <div className="flex gap-1 justify-center items-center">
              <div className="object-fill">
                <img src={newfriend} className="w-16 h-16 " />
              </div>
              <div className="flex flex-col ">
                <span className="text-white font-bold text-md">
                  Add 10 new friends (0/10)
                </span>
                <div className="flex gap-2 items-center">
                  <img src={coin} className="w-5 h-5" />
                  <span className="text-[#e8cf19] font-bold">
                    <span className="font-bold text-[#eed514]">+</span> 5,000
                  </span>
                </div>
              </div>
            </div>
            <img src={next} className="cursor-pointer" />
          </div>
        </div>
        <div className="bg-[#0D1F4F] w-full h-20 rounded-2xl ">
          <div className="flex justify-between items-center p-2">
            <div className="flex gap-1 justify-center items-center">
              <div className="object-fill">
                <img src={gift} className="w-16 h-16 " />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-md">
                  Activate Promo code
                </span>
              </div>
            </div>
            <img src={next} className="cursor-pointer" />
          </div>
        </div>
        <div className="bg-[#0D1F4F] w-full h-20 rounded-2xl ">
          <div className="flex justify-between items-center p-2">
            <div className="flex gap-1 justify-center items-center">
              <div className="object-fill">
                <img src={telegram} className="w-16 h-16 " />
              </div>
              <div className="flex flex-col ">
                <span className="text-white font-bold text-md">
                  Join us on Telegram
                </span>
                <div className="flex gap-2  items-center">
                  <img src={coin} className="w-5 h-5" />
                  <span className="text-[#e8cf19] font-bold">
                    <span className="font-bold text-[#eed514]">+</span> 5,000
                  </span>
                </div>
              </div>
            </div>
            <img src={next} className="cursor-pointer" />
          </div>
        </div>
      </div>

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
  );
};

export default Earning;
