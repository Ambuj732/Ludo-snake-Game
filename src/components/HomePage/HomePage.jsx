import React, { useState } from "react";
import logo from "../../assets/HomePage/logo.png";
import logo1 from "../../assets/HomePage/logo1.png";
import coin from "../../assets/HomePage/coin.png";
import user from "../../assets/HomePage/user.png";
import icon from "../../assets/HomePage/icon.png";
import calender from "../../assets/HomePage/calender.png";
import lock from "../../assets/HomePage/lock.png";
import boost from "../../assets/HomePage/boost.png";
import star from "../../assets/HomePage/star.png";
import mining from "../../assets/HomePage/mining.svg";
import freinds from "../../assets/HomePage/freinds.svg";
import earn from "../../assets/HomePage/earn.png";
import scanner from "../../assets/HomePage/scanner.png";
import rabbit from "../../assets/HomePage/rabbit.png";
import tenor from "../../assets/HomePage/tenor.gif";
import diceSound from "../../assets/HomePage/dice-song.mp3";
import { CiSettings } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import "./HomePage.css";

const HomePage = () => {
  const [amount, setAmount] = useState(0);
  const [flyCoin, setFlyCoin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <div className="bg-black min-h-screen p-4">
      <header className="w-full shadow-md shadow-gray-700 rounded-lg">
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
      </header>
      <div className=" mt-7 flex gap-3 items-center text-white">
        <img src={user} className="w-10 h-10 rounded-lg" alt="User" />
        <span className="font-bold">Ambuj Singh</span>
      </div>
      <div className="flex justify-around items-center mt-4 gap-4 w-full">
        <div className=" sm:w-[200px] h-16 flex flex-col gap-3 mb-4 sm:mb-0">
          <div className="flex justify-between items-center gap-4">
            <div className="flex text-white">
              <span className="font-bold">Silver</span>
            </div>
            <div className="text-white">
              <span className="font-bold">2/11</span>
            </div>
          </div>
          <ProgressBar striped variant="success" animated now={50} />
        </div>
        <div className="w-full sm:w-[400px] h-16 flex justify-around items-center border rounded-full bg-[#453A25]">
          <img src={logo} className="w-12 h-12 rounded" alt="Logo" />
          <div className="h-[40px] border border-gray-700"></div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-white mb-1 text-sm">Profit per hour</span>
            <div className="flex gap-2">
              <img src={coin} className="w-7 h-7" alt="Coin" />
              <span className="text-white">1000</span>
              <div className="rounded-full bg-gray-800">
                <img src={icon} className="w-7 h-6" alt="Icon" />
              </div>
            </div>
          </div>
          <div className="h-[40px] border border-gray-700"></div>
          <CiSettings className="bg-white rounded-full w-10 h-10 cursor-pointer" />
        </div>
      </div>

      <div className="flex  justify-center items-center w-full mt-10 gap-6 sm:gap-20">
        <div className="w-full sm:w-[250px] flex flex-col justify-center items-center gap-2 h-[160px] rounded-lg shadow-custom bg-[#26292E]">
          <div className="flex flex-col justify-center items-center mt-4 text-white">
            <img
              src={calender}
              className="object-contain object-top w-20 h-20"
              alt="Calender"
            />
            <span className="font-bold">Daily reward</span>
          </div>
          <span className="text-gray-500">17:33</span>
        </div>
        <div className="w-full sm:w-[250px] flex flex-col justify-center items-center gap-2 h-[160px] rounded-lg shadow-custom bg-[#26292E]">
          <div className="flex flex-col justify-center items-center mt-4 text-white">
            <img
              src={lock}
              className="object-contain object-top w-20 h-20"
              alt="Lock"
            />
            <span className="font-bold">Daily cipher</span>
          </div>
          <span className="text-gray-500">12:33</span>
        </div>
        <div className="w-full sm:w-[250px] flex flex-col justify-center items-center gap-2 h-[160px] rounded-lg shadow-custom bg-[#26292E]">
          <div className="flex flex-col justify-center items-center mt-4 text-white">
            <img
              src={scanner}
              className="object-contain object-top w-20 h-20"
              alt="Scanner"
            />
            <span className="font-bold">Daily combo</span>
          </div>
          <span className="text-gray-500">5:33</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-7 mt-10 shadow-custom shadow-gray-600 bg-custom-gradient  rounded-3xl w-full shadow-top-golden">
        <div className="w-full flex justify-center items-center mt-4 relative">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex gap-4 items-center relative">
              <img src={coin} className="w-10 h-10 " alt="Coin" />
              <span className="text-white text-4xl font-bold">{amount}</span>
            </div>
            {flyCoin && (
              <img
                src={coin}
                className="w-10 h-10 flying-coin "
                alt="Flying Coin"
              />
            )}
            <CardContainer className="inter-var">
              <CardBody className="dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src={logo}
                    className="h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                    alt="Logo"
                    onClick={handleDiceRoll}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center mt-10">
        <div className="flex gap-3 justify-center items-center">
          <img src={star} className="rounded-lg" alt="Star" />
          <span className="text-white font-bold">726/1500</span>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <img src={boost} className="rounded-lg w-10 h-8" alt="Boost" />
          <span className="text-white font-bold">Boost</span>
        </div>
      </div>
      <div className="flex gap-4 bg-[#26292E] rounded-2xl w-full h-20 mt-5 justify-center items-center flex-wrap">
        <div className="flex flex-col items-center justify-center rounded-lg">
          <img src={rabbit} className="w-12 h-12 rounded" alt="Rabbit" />
          <span className="text-white font-bold">Exchange</span>
        </div>
        <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
          <img src={mining} className="w-12 h-12 rounded" alt="Mining" />
          <span className="text-white font-bold">Mine</span>
        </div>
        <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
          <img src={freinds} className="w-12 h-12 rounded" alt="Friends" />
          <span className="text-white font-bold">Friends</span>
        </div>
        <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
          <img src={coin} className="w-12 h-12 rounded" alt="Coin" />
          <span className="text-white font-bold">Airdrop</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
