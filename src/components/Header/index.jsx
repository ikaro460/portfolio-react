import React from "react";
import htmlLogo from "../../assets/html5-logo-31815.png";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="./index.html">
            <img src={htmlLogo} alt="logo" />
          </a>
        </div>
        <div className="btn-contato">
          <a href="./contato.html">
            <button>Contato</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
