import React, { useState } from "react";
import logo from "../../assets/HomePage/logo.jpg";
import logo1 from "../../assets/HomePage/logo1.png";
import coin from "../../assets/HomePage/coin.png";
import user from "../../assets/HomePage/user.png";
import icon from "../../assets/HomePage/icon.png";
import dollar from "../../assets/HomePage/dollar.png";
import calender from "../../assets/HomePage/calender.png";
import lock from "../../assets/HomePage/lock.png";
import boost from "../../assets/HomePage/boost.png";
import star from "../../assets/HomePage/star.png";
import mining from "../../assets/HomePage/mining.png";
import freinds from "../../assets/HomePage/freinds.png";
import earn from "../../assets/HomePage/earn.png";
import scanner from "../../assets/HomePage/scanner.png";
import rabbit from "../../assets/HomePage/rabbit.png";
import game from "../../assets/HomePage/game.png";
import tenor from "../../assets/HomePage/tenor.gif";
import diceSound from "../../assets/HomePage/dice-song.mp3";
import { CiSettings } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";
import ComingSoonPage from "./ComingSoonPage";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [amount, setAmount] = useState(0);
  const [flyCoin, setFlyCoin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDiceRoll = () => {
    setFlyCoin(true);

    setAmount(amount + 2);

    setTimeout(() => {
      setFlyCoin(false);
    }, 500);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToPage = () => {
    navigate("/comming-soon-page");
  };

  const goFrinedsPage = () => {
    navigate("/friends");
  };

  const goEarningPage = () => {
    navigate("/earning");
  };

  const avatarPage = () => {
    navigate("/avatar");
  };

  const goToPages = () => {
    navigate("/");
  };
  return (
    <div className="bg-black min-h-screen p-4">
      <header className="w-full shadow-md shadow-gray-700 rounded-lg mb-7">
        <nav className="flex justify-between items-center px-4">
          <div>
            <img src={logo1} className="w-20 h-20 sm:w-32 sm:h-32" alt="Logo" />
          </div>
          <div
            className="text-white cursor-pointer sm:block"
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
          <div onClick={goToPages} className="text-white cursor-pointer">
            <span>Login!</span>
          </div>
        </nav>
      </header>
      {/* <div className="flex gap-3 items-center text-white">
        <img src={logo} className="w-9 h-9 rounded-lg" alt="User" />
        <span className="font-bold text-sm">Ambuj Singh</span>
      </div> */}
      <div className="flex justify-between  mt-4 gap-4 w-full">
        <div className=" sm:w-[200px] h-16 flex flex-col gap-2 mb-4 sm:mb-0">
          <div className="flex justify-between items-center gap-2">
            <div className="flex text-white">
              <span className="font-bold text-nowrap">Maddy Moon</span>
            </div>
            <div className="text-white" onClick={avatarPage}>
              <span className="font-bold">1/10</span>
            </div>
          </div>
          <ProgressBar striped variant="success" animated now={50} />
        </div>
        <div className="w-full sm:w-auto h-[42px] flex justify-around items-center border rounded-full bg-[#453A25] mt-3">
          <img src={logo} className="w-7 h-7 rounded" alt="Logo" />
          <div className="h-[40px] border border-gray-700"></div>
          <div className="flex flex-col justify-center items-center object-contain">
            <span className="text-white mb-1 text-sm">Price Pool</span>
            <div className="flex gap-2 object-contain">
              <img src={coin} className="w-5 h-5" alt="Coin" />
              <span className="text-white">1000</span>
              <div className="rounded-full bg-gray-800 object-contain">
                <img src={icon} className="w-5 h-5" alt="Icon" />
              </div>
            </div>
          </div>
          <div className="h-[40px] border border-gray-700"></div>
          <CiSettings className="bg-white rounded-full w-7 h-7 cursor-pointer" />
        </div>
      </div>

      {/* <div className="flex  justify-center items-center w-full  gap-6 sm:gap-20">
        <div className="w-full sm:w-[200px] flex flex-col justify-center items-center gap-2 h-auto rounded-lg shadow-custom bg-[#26292E]">
          <div className="flex flex-col justify-center items-center mt-2 text-white">
            <img
              src={calender}
              className="object-contain object-top w-5 h-5"
              alt="Calender"
            />
            <span className="font-bold text-xs">Daily reward</span>
          </div>
          <span className="text-gray-500">17:33</span>
        </div>
        <div className="w-full sm:w-[200px] flex flex-col justify-center items-center gap-2 h-auto rounded-lg shadow-custom bg-[#26292E]">
          <div className="flex flex-col justify-center items-center mt-2 text-white">
            <img
              src={lock}
              className="object-contain object-top w-5 h-5"
              alt="Lock"
            />
            <span className="font-bold text-xs">Daily cipher</span>
          </div>
          <span className="text-gray-500">12:33</span>
        </div>
        <div className="w-full sm:w-[200px] flex flex-col justify-center items-center gap-2 h-auto rounded-lg shadow-custom bg-[#26292E]">
          <div className="flex flex-col justify-center items-center mt-2 text-white">
            <img
              src={scanner}
              className="object-contain object-top w-5 h-5"
              alt="Scanner"
            />
            <span className="font-bold text-xs">Daily combo</span>
          </div>
          <span className="text-gray-500">5:33</span>
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center mt-3 shadow-custom shadow-gray-600   rounded-3xl w-full shadow-top-golden h-[390px] gap-10">
        <div className="flex gap-1 items-center relative">
          <img src={coin} className="w-10 h-10 " alt="Coin" />
          <span className="text-white text-4xl font-bold">{amount}</span>
        </div>
        {flyCoin && (
          <img src={coin} className="w-7 h-7 flying-coin " alt="Flying Coin" />
        )}

        <img
          src={logo}
          className="h-[248px] w-[248px] imgsz object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer hover:scale-105"
          alt="Logo"
          onClick={handleDiceRoll}
        />
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
      </div>
      <div className="flex gap-2 bg-[#26292E] rounded-2xl w-auto h-20 mt-4 justify-between items-center flex-wrap px-2">
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={goToPage}
        >
          <img src={rabbit} className="w-7 h-7 rounded" alt="Rabbit" />
          <span className="text-white  text-sm">Wallet</span>
        </div>
        <div
          className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg"
          onClick={goToPage}
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
          onClick={goToPage}
        >
          <img src={game} className="w-7 h-7 rounded" alt="Coin" />
          <span className="text-white  text-sm">Play Zone</span>
        </div>
        <div
          className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg"
          onClick={goEarningPage}
        >
          <img src={earn} className="w-7 h-7 rounded" alt="Coin" />
          <span className="text-white  text-sm">Earn</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
