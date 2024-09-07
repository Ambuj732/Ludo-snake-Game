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
import { CiSettings } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";

const cards = [
  { img: rabbit, text: "Exchange" },
  { img: mining, text: "SuperMarket" },
  { img: freinds, text: "Friends" },
  { img: coin, text: "Airdrop" },
  { img: earn, text: "Earn" },
  { img: logo, text: "Logo" },
  { img: logo1, text: "Logo1" },
  { img: boost, text: "Boost" },
  { img: star, text: "Star" },
  { img: gift, text: "Gift" },
];

const Avatar = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;

  const handleNext = () => {
    if (startIndex + cardsToShow < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsToShow >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between p-7">
      <div className="flex flex-col gap-28">
        <div className="flex justify-between mb-4">
          <button
            onClick={handlePrev}
            className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={startIndex === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={startIndex + cardsToShow >= cards.length}
          >
            Next
          </button>
        </div>
        <div className="flex gap-2 rounded-2xl w-full h-20 mt-24 justify-between items-center px-2">
          {cards
            .slice(startIndex, startIndex + cardsToShow)
            .map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg w-[300px] h-[100px] border "
              >
                <img
                  src={card.img}
                  className="w-7 h-7 rounded"
                  alt={card.text}
                />
                <span className="text-white text-sm">{card.text}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="flex gap-2 bg-[#26292E] rounded-2xl w-auto h-20 mt-1 justify-between items-center  px-2">
        <div className="flex flex-col items-center justify-center rounded-lg">
          <img src={rabbit} className="w-7 h-7 rounded" alt="Rabbit" />
          <span className="text-white  text-sm">Exchange</span>
        </div>
        <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
          <img src={mining} className="w-7 h-7 rounded" alt="Mining" />
          <span className="text-white  text-sm">SuperMarket</span>
        </div>
        <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
          <img src={freinds} className="w-7 h-7 rounded" alt="Friends" />
          <span className="text-white  text-sm">Friends</span>
        </div>
        <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
          <img src={coin} className="w-7 h-7 rounded" alt="Coin" />
          <span className="text-white  text-sm">Airdrop</span>
        </div>
        <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
          <img src={earn} className="w-7 h-7 rounded" alt="Coin" />
          <span className="text-white  text-sm">Earn</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
