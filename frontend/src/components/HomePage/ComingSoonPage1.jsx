import  { useState } from "react";
import bg from "../../assets/HomePage/bg.png";
import logo1 from "../../assets/HomePage/logo1.png";
import coin from "../../assets/HomePage/coin.png";
import icon from "../../assets/HomePage/icon.png";
import boost from "../../assets/HomePage/boost.png";
import star from "../../assets/HomePage/star.png";
import mining from "../../assets/HomePage/mining.png";
import freinds from "../../assets/HomePage/freinds.png";
import earn from "../../assets/HomePage/earn.png";
import rabbit from "../../assets/HomePage/rabbit.png";
import gif from "../../assets/HomePage/gif.gif";
import game from "../../assets/HomePage/game.png";
import { useNavigate } from "react-router";

import { CiSettings } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";

const ComingSoonPage = () => {
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

  const goFrinedsPage = () => {
    navigate("/home-page/friends");
  };
  return (
    <div className=" absolute inset-0 bg-black min-h-screen p-4">
      <header className="w-full shadow-md shadow-gray-700 rounded-lg hide">
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
          {/* <div
            className={`sm:flex gap-7 text-white cursor-pointer ${
              menuOpen ? "block" : "hidden"
            } sm:block`}
          >
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div> */}
          <div className="text-white cursor-pointer">
            <span>Login!</span>
          </div>
        </nav>
      </header>
      <div className="flex gap-3 items-center text-white">
        <img src={bg} className="w-9 h-9 rounded-lg" alt="User" />
        <span className="font-bold text-sm">Ambuj Singh</span>
      </div>
      <div className="flex justify-center items-center mt-4 gap-3 w-full">
        <div className=" sm:w-[200px] h-16 flex flex-col gap-2 mb-4 sm:mb-0">
          <div className="flex justify-between items-center gap-2">
            <div className="flex text-white">
              <span className="font-bold text-nowrap">Maddy Moon1</span>
            </div>
            <div className="text-white">
              <span className="font-bold">0/10</span>
            </div>
          </div>
          <ProgressBar striped variant="success" animated now={50} />
        </div>
        <div className="w-full sm:w-auto h-[52px] flex justify-around items-center border rounded-full bg-[#453A25] px-1">
          <img src={bg} className="w-7 h-7 rounded" alt="Logo" />
          <div className="h-[40px] border border-gray-700"></div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-white  text-sm">Prize Pool</span>
            <div className="flex gap-2 justify-center items-center">
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
      </div>

      <div className="flex flex-col justify-center items-center mt-3    rounded-3xl w-full  h-[450px] gap-20">
        <img
          src={gif}
          className="h-[248px] w-[248px] imgsz object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer hover:scale-105"
          alt="Logo"
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
        <div className="flex flex-col items-center justify-center rounded-lg">
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
          onClick={goFrinedsPage}
          className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg"
        >
          <img src={freinds} className="w-7 h-7 rounded" alt="Friends" />
          <span className="text-white  text-sm">Friends</span>
        </div>
        <div
          className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg"
          onClick={goToPagePlayZone}
        >
          <img src={game} className="w-7 h-7 rounded" alt="Coin" />
          <span className="text-white  text-sm">PlayZone</span>
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

export default ComingSoonPage;
