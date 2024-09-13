import React from "react";
import "./style.css";
import "./responsive.css";
import logo1 from "../../assets/HomePage/logo1.png";
import certificate from "../../assets/HomePage/certificate.webp";
import bg from "../../assets/HomePage/bg.png";
import safe from "../../assets/HomePage/safe.webp";
import withdrawls from "../../assets/HomePage/withdrawls.webp";
import games from "../../assets/HomePage/games.webp";
import winners from "../../assets/HomePage/winners.webp";
import phonepe from "../../assets/HomePage/phonepe.webp";
import upi from "../../assets/HomePage/upi.webp";
import gpay from "../../assets/HomePage/gpay.webp";
import amazonpay from "../../assets/HomePage/amazonpay.webp";
import cashfree from "../../assets/HomePage/cashfree-payments.webp";
import { useNavigate } from "react-router";

const LandingPage2 = () => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate("/login");
  };
  return (
    <div id="bg-homepage" className="page-wrapper">
      <header className="site-header site-header__header-one">
        <nav className="navbar navbar-expand-lg navbar-light header-navigation">
          <div className="container-fluid">
            <div className="logo-box">
              <a className="navbar-brand" href="#">
                <img
                  src={logo1}
                  className="main-logo sm-w-30"
                  width="100"
                  alt="Ludo Empire Logo"
                />
              </a>
              <button
                className="menu-toggler d-lg-none"
                data-target=".main-navigation"
              >
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className="one-page-scroll-menu navigation-box">
                <li className="scrollToLink">
                  <a href="#" className="menu-active">
                    Home
                  </a>
                </li>
                <li className="scrollToLink">
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="banner-one full-screen sm-d-none d-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 text-lg-left ">
              <div className="banner-one__content">
                <h1 className="banner-one__title text-white stol-300">
                  <div className="stol-400 text-extra-large pb-lg-3 text-white">
                    Play Ludo &amp; Win Real Money
                  </div>
                  <div className="yellow-gradient stol-500 pb-lg-5">
                    Up to <span className="green-text-gradient">₹ 1 Crore</span>{" "}
                    Daily!
                  </div>
                </h1>
                <div className="row mb-lg-3">
                  <div className="col-sm-6">
                    <div className="p-0 text-4xl text-center">
                      <div
                        className="style_downloadbtn__empire"
                        onClick={goToPage}
                      >
                        <h2>
                          <b>Play Now</b>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <img
                    src={certificate}
                    alt="certificate"
                    className="w-95 pt-4 mt-lg-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8" style={{ textAlign: "center" }}>
              <img
                src={bg}
                style={{ width: "75%", height: "auto" }}
                alt="Ludo Empire Background"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="d-lg-none sm-d-block">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center sm-heading">
              <div className="stol-400 stol-400 text-small1 text-white">
                Play Ludo &amp; Win Real Money
              </div>
              <div
                className="yellow-gradient text-large1 stol-500"
                style={{ lineHeight: "30px" }}
              >
                Up to <span className="green-text-gradient">₹ 1 Crore</span>{" "}
                Daily!
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <img
                src={bg}
                alt="banner Image"
                className="policy-shadow-mobile"
                style={{ paddingBottom: "40px" }}
              />
              <a href="#" className="">
                <div
                  className="static_downloadbtn__empire btn-style sm-no-margin  text-4xl"
                  onClick={goToPage}
                >
                  <h2>
                    <b className="text-4xl text-center">Play Now</b>
                  </h2>
                </div>
              </a>
              <div
                id="androidParagraph"
                className="android-paragraph text-white pt-1 stol-b text-13"
              ></div>
              <img
                src={certificate}
                alt="certificate"
                className="mt-4"
                style={{ width: "95%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ludo-features sm-d-none">
        <div className="bg-elements-custom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex align-items-center justify-content-between">
                <div className="new-display">
                  <div>
                    <img
                      src={safe}
                      alt="safe-and-legal"
                      className="w-80 md-w-50"
                    />
                  </div>
                  <div>
                    <p className="yellow-gradient stol-400 line-height-26">
                      100% <br /> Safe &amp; Legal{" "}
                    </p>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="new-display">
                  <div>
                    <img
                      src={withdrawls}
                      alt="instant-withdrawal"
                      className="w-80 md-w-50"
                    />
                  </div>
                  <div>
                    <p className="yellow-gradient stol-400 line-height-26">
                      Instant <br /> Withdrawals{" "}
                    </p>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="new-display">
                  <div>
                    <img
                      src={games}
                      alt="10 lakhs+ games"
                      className="w-80 md-w-50"
                    />
                  </div>
                  <div>
                    <p className="yellow-gradient stol-400 line-height-26">
                      10 Lakhs+ <br /> Games{" "}
                    </p>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="new-display">
                  <div>
                    <img
                      src={winners}
                      alt="daily-winners"
                      className="w-80 md-w-50"
                    />
                  </div>
                  <div>
                    <p className="yellow-gradient stol-400 line-height-26">
                      8 Lakh+ <br /> Daily Winners{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid w-100 card-bg-mob d-lg-none d-block mt-4 pt-3 pb-3">
        <div className="row">
          <div className="col-12 text-center">
            <img src={logo1} alt="ludo-features" />
          </div>
        </div>
      </div>

      <section className="pt-lg-3 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-5">
              <h3 className="text-white text-extra-large stol-400">
                100% Safe &amp; Secure Payments
              </h3>
            </div>
            <div className="payment-modes mt-4 mb-4">
              <img src={phonepe} alt="phonepe" className="w-15" />
              <img src={upi} alt="upi" className="w-15" />
              <img src={gpay} alt="gpay" className="w-15" />
              <img src={amazonpay} alt="amazonpay" className="w-15" />
              <img src={cashfree} alt="cashfree-payments" className="w-15" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-lg-3 pt-3 pb-2">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-lg-6 col-12">
              <h2 className="text-extra-large1 sm-text-medium w-100 stol-400 text-lg-left text-center mb-lg-4 mb-3 mt-lg-4 text-white">
                Tournaments
              </h2>

              <p className=" text-center text-medium text-white line-height-26 mb-lg-0 mb-lg-4 mb-3 ">
                This game involves financial risk and can be addictive. Please
                play responsibly and at your own risk
              </p>
            </div>
            <div className="col-lg-6 col-12 text-center d-lg-block d-none">
              <img src={logo1} alt="about-ludo" className="w-90" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-classic-blue">
        <div className="footer-bottom mb-3">
          <div className="container-fluid">
            <div className="row">
              <div className="text-small stol-b text-blue text-center col-12">
                &copy; 2024,{" "}
                <a
                  href="https://fabzentech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dice Raja
                </a>{" "}
                | All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage2;
