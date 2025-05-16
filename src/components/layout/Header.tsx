// import React from 'react';
import logo from "@/assets/images/logo.svg";
import phone from "@/assets/images/phone-icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Rimac logo" />
        </div>
        <div className="header__tfn">
          <span>¡Compra por este medio!</span>
          <a href="tel:14116001">
            <img src={phone} alt="Phone icon" />
            <p>(01) 411 6001</p>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
