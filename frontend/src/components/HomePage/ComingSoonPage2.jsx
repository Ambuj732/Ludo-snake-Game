import React, { useState, useEffect } from "react";
import bg from "../../assets/HomePage/bg.png";
import logo1 from "../../assets/HomePage/logo1.png";
import coin from "../../assets/HomePage/coin.png";
import home from "../../assets/HomePage/home.png";
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
import swipe from "../../assets/HomePage/swipe.png";
import { CiSettings } from "react-icons/ci";
import ProgressBar from "react-bootstrap/ProgressBar";
import login from "../../actions/LoginScreens/login";

const levels = [
  "Maddy Moon",
  "Happy Sun",
  "Prriti Pluto",
  "Nauty Neptune",
  "Rebel Rahu",
  "Mercury Villa",
  "Venus Raja",
  "Devil Guru",
  "Sanky Saturn",
];

const ComingSoonPage2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const getLoginData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const data = {
        userId: user?.userId,
        password: user?.password,
      };

      const response = await login(data);
      console.log(response);
      setLoginData(response?.data?.profile);
    } catch (error) {
      console.log("Error while logging ", error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToWalletPage = () => {
    navigate("/home-page/wallet");
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

  const goUserProfilePage = () => {
    navigate("/user-profile-page");
  };

  const goToHomePage = () => {
    navigate("/home-page");
  };

  useEffect(() => {
    getLoginData();
  }, []);

  return (
    <div className=" absolute inset-0 bg-black min-h-screen p-4">
      <header className="w-full rounded-lg">
        <nav className="flex justify-between items-center px-1">
          <div onClick={goToHomePage} className="cursor-pointer">
            <img src={home} className="w-10 h-9 sm:w-32 sm:h-32" alt="Logo" />
          </div>
          <div className="text-white cursor-pointer hide" onClick={toggleMenu}>
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
          <div
            className="text-white cursor-pointer"
            onClick={goUserProfilePage}
          >
            <span>{loginData.userName}</span>
          </div>
        </nav>
      </header>

      <div className="flex justify-between mt-2 gap-4 w-full">
        {/* <div className="sm:w-[200px] h-16 flex flex-col gap-2 mb-4 sm:mb-0">
          <div className="flex justify-between items-center gap-2">
            <div className="flex text-white">
              <span className="font-bold text-nowrap">Maddy Moon1</span>
            </div>
            <div className="text-white">
              <span className="font-bold">0/9</span>
            </div>
          </div>
          <ProgressBar striped variant="success" animated now={50} />
        </div> */}
        <div className="w-full sm:w-auto h-[54px] flex justify-around px-3  items-center border rounded-full bg-[#453A25] mt-3">
          <div className="flex flex-col justify-center items-center object-contain">
            <span className="text-white  text-sm">Prize Pool</span>
            <div className="flex gap-2 object-contain items-center justify-center">
              <img src={coin} className="w-5 h-5" alt="Coin" />
              <span className="text-white">0$</span>
              <div className="rounded-full bg-gray-800 object-contain">
                <img src={icon} className="w-5 h-5" alt="Icon" />
              </div>
            </div>
          </div>
          <div className="h-[40px] border border-gray-700"></div>
          <img
            src={swipe}
            className="bg-white rounded-full w-7 h-7 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-3xl w-full  h-[450px] gap-20">
        <img
          src={gif}
          className="h-[248px] w-[248px] imgsz object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer hover:scale-105"
          alt="Logo"
        />
      </div>

      <div className="flex  items-center ">
        <div className="flex gap-3 justify-center items-center">
          <img src={star} className="rounded-lg" alt="Star" />
          <span className="text-white font-bold">726/1500</span>
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
        <div className="flex flex-col items-center justify-center hover:border-gray-800 rounded-lg">
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

export default ComingSoonPage2;
