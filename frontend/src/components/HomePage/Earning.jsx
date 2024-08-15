import React, { useState } from "react";
import logo from "../../assets/HomePage/logo.jpg";
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
import newfriend from "../../assets/HomePage/newfriend.png";
import telegram from "../../assets/HomePage/telegram.svg";
import gif from "../../assets/HomePage/gif.gif";
import { CiSettings } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";

const Earning = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black min-h-screen p-4">
      {/* <header className="w-full shadow-md shadow-gray-700 rounded-lg hide">
        <nav className="flex justify-between items-center px-4">
          <div>
            <img src={logo1} className="w-20 h-20 sm:w-32 sm:h-32" alt="Logo" />
          </div>
          <div
            className="text-white cursor-pointer sm:hidden"
            onClick={toggleMenu}
          >
            <span className="text-xl">&#9776;</span>
          </div>
          <div
            className={`sm:flex gap-7 text-white cursor-pointer ${
              menuOpen ? "block" : "hidden"
            } sm:block`}
          >
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="text-white cursor-pointer">
            <span>Login!</span>
          </div>
        </nav>
      </header> */}
      {/* <div className="flex gap-3 items-center text-white">
        <img src={logo} className="w-9 h-9 rounded-lg" alt="User" />
        <span className="font-bold text-sm">Ambuj Singh</span>
      </div>
      <div className="flex justify-around items-center mt-4 gap-4 w-full">
        <div className=" sm:w-[200px] h-16 flex flex-col gap-2 mb-4 sm:mb-0">
          <div className="flex justify-between items-center gap-2">
            <div className="flex text-white">
              <span className="font-bold">Silver</span>
            </div>
            <div className="text-white">
              <span className="font-bold">1/10</span>
            </div>
          </div>
          <ProgressBar striped variant="success" animated now={50} />
        </div>
        <div className="w-full sm:w-auto h-auto flex justify-around items-center border rounded-full bg-[#453A25]">
          <img src={logo} className="w-7 h-7 rounded" alt="Logo" />
          <div className="h-[40px] border border-gray-700"></div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-white mb-1 text-sm">Profit per hour</span>
            <div className="flex gap-2">
              <img src={coin} className="w-5 h-5" alt="Coin" />
              <span className="text-white">1000</span>
              <div className="rounded-full bg-gray-800">
                <img src={icon} className="w-5 h-5" alt="Icon" />
              </div>
            </div>
          </div>
          <div className="h-[40px] border border-gray-700"></div>
          <CiSettings className="bg-white rounded-full w-7 h-7 cursor-pointer" />
        </div>
      </div> */}

      {/* <div className="flex flex-col justify-center items-center mt-3    rounded-3xl w-full  h-[450px] gap-20">
        <img
          //   src={gif}
          className="h-[248px] w-[248px] imgsz object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer hover:scale-105"
          alt="Logo"
        />
        <span>hey friends</span>
      </div>
      <div className="flex justify-around items-center mt-7">
        <div className="flex gap-3 justify-center items-center">
          <img src={star} className="rounded-lg" alt="Star" />
          <span className="text-white font-bold">726/1500</span>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <img src={boost} className="rounded-lg w-10 h-8" alt="Boost" />
          <span className="text-white font-bold">Boost</span>
        </div>
      </div> */}

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
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-md">
                  Daily reward
                </span>
                <div className="flex gap-2">
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
        <div className="bg-[#0D1F4F] w-full h-20 rounded-2xl ">
          <div className="flex justify-between items-center p-2">
            <div className="flex gap-1 justify-center items-center">
              <div className="object-fill">
                <img src={newfriend} className="w-16 h-16 " />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-md">
                  Add 10 new friends(0/10)
                </span>
                <div className="flex gap-2">
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
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-md">
                  Join us on Telegram
                </span>
                <div className="flex gap-2">
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

export default Earning;
