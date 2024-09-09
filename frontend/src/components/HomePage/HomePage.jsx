import React, { useState, useEffect } from "react";
import bg from "../../assets/HomePage/bg.png";
import logo1 from "../../assets/HomePage/logo1.png";
import coin from "../../assets/HomePage/coin.png";
import icon from "../../assets/HomePage/icon.png";
import swipe from "../../assets/HomePage/swipe.png";
import boost from "../../assets/HomePage/boost.png";
import star from "../../assets/HomePage/star.png";
import mining from "../../assets/HomePage/mining.png";
import freinds from "../../assets/HomePage/freinds.png";
import earn from "../../assets/HomePage/earn.png";
import rabbit from "../../assets/HomePage/rabbit.png";
import game from "../../assets/HomePage/game.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Outlet, useNavigate } from "react-router-dom";
import "./HomePage.css";
import login from "../../actions/LoginScreens/login";
import coinUpdateData from "../../actions/LoginScreens/coinUpdate";
import UserProfilePage from "./UserProfilePage";
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

const HomePage = () => {
  const [amount, setAmount] = useState(0);
  const [flyCoin, setFlyCoin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [level, setLevel] = useState(levels[0]);
  const [progress, setProgress] = useState(0);
  const [levelIndex, setLevelIndex] = useState(0);
  const [energy, setEnergy] = useState(1500);
  const navigate = useNavigate();

  const handleDiceRoll = async () => {
    if (energy <= 0) {
      return;
    }
    setFlyCoin(true);
    const newAmount = amount + 1;
    setAmount(newAmount);

    setEnergy((prevEnergy) => Math.max(prevEnergy - 1, 0));

    let newProgress = (newAmount % 1000) / 10;
    if (newAmount % 1000 === 0) {
      newProgress = 100;
    }
    setProgress(newProgress);

    const newLevelIndex = Math.floor(newAmount / 1000);
    if (newLevelIndex <= levels.length) {
      setLevelIndex(newLevelIndex);
      setLevel(levels[newLevelIndex]);
    } else {
      alert("you have reached level 9");
      setFlyCoin(false);
    }

    setTimeout(() => {
      setFlyCoin(false);
    }, 500);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("User Data:", user);
      const data = {
        userId: user?.userId,
        coins: 2,
      };
      const response = await coinUpdateData(data);
      console.log(response);

      if (!response.data.success) {
        console.error("Failed to update coins:");
      } else {
        setAmount(response?.data?.data?.coins);
      }
    } catch (error) {
      console.error("Error updating coins:", error);
    }
  };

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

  const goToPageSuperMarket = () => {
    navigate("/home-page/super-market");
  };

  const goToPagePlayZone = () => {
    navigate("/home-page/play-zone");
  };

  const goFrinedsPage = () => {
    navigate("/home-page/friends");
  };

  const goEarningPage = () => {
    navigate("/home-page/earning");
  };

  const avatarPage = () => {
    navigate("/avatar");
  };

  const goUserProfilePage = () => {
    navigate("/user-profile-page");
  };

  useEffect(() => {
    getLoginData();
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + 1, 1500));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen py-3 px-4">
      <header className="w-full rounded-lg">
        <nav className="flex justify-between items-center px-1">
          <div>
            <img src={logo1} className="w-20 h-20 sm:w-32 sm:h-32" alt="Logo" />
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
        <div className="sm:w-[200px] h-16 flex flex-col gap-2 mb-4 sm:mb-0">
          <div className="flex justify-between items-center gap-2">
            <div className="flex text-white">
              <span className="font-bold text-nowrap">{level}</span>
            </div>
            <div className="text-white" onClick={avatarPage}>
              <span className="font-bold">{levelIndex + 1}/9</span>
            </div>
          </div>
          <ProgressBar striped variant="success" animated now={progress} />
        </div>
        <div className="w-full sm:w-auto h-[54px] flex justify-between px-3  items-center border rounded-full bg-[#453A25] mt-3">
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

      <div className="flex flex-col justify-center items-center mt-4 shadow-custom shadow-gray-600 rounded-3xl w-full shadow-top-golden h-[390px] gap-10">
        <div className="flex gap-1 items-center relative">
          <img src={coin} className="w-10 h-10 " alt="Coin" />
          <span className="text-white text-4xl font-bold">{amount}</span>
        </div>
        {flyCoin && (
          <img src={coin} className="w-7 h-7 flying-coin " alt="Flying Coin" />
        )}

        <img
          src={bg}
          className="h-[248px] w-[248px] imgsz object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer hover:scale-105"
          alt="Logo"
          onClick={handleDiceRoll}
        />
      </div>
      <div className="flex  items-center mt-7 justify-between">
        <div className="flex gap-3 justify-center items-center">
          <img src={star} className="rounded-lg" alt="Star" />
          <span className="text-white font-bold">{energy}/1500</span>
        </div>
        <div className="flex gap-2 justify-center items-center px-4">
          {/* <img src={boost} className="rounded-lg w-10 h-8" alt="Boost" /> */}
          <span className="text-white font-bold">Buy</span>
          <span className="text-blue-800">/</span>
          <span className="text-white font-bold">Sell</span>
        </div>
      </div>
      <div className="flex bg-[#26292E] rounded-2xl w-auto h-20 mt-7 justify-between items-center flex-wrap px-2">
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={goToWalletPage}
        >
          <img src={rabbit} className="w-7 h-7 rounded" alt="Rabbit" />
          <span className="text-white text-sm">Wallet</span>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={goToPageSuperMarket}
        >
          <img src={mining} className="w-7 h-7 rounded" alt="Mining" />
          <span className="text-white text-sm">Super Market</span>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={goToPagePlayZone}
        >
          <img src={game} className="w-7 h-7 rounded" alt="Game" />
          <span className="text-white text-sm">Play Zone</span>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={goFrinedsPage}
        >
          <img src={freinds} className="w-7 h-7 rounded" alt="Friends" />
          <span className="text-white text-sm">Friends</span>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-lg"
          onClick={goEarningPage}
        >
          <img src={earn} className="w-7 h-7 rounded" alt="Earning" />
          <span className="text-white text-sm">Earning</span>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
