import React from "react";
import htmlLogo from "../../assets/html5-logo-31815.png";
import "./style.css";

function NavBar() {
  return (
    <section className="navbar">
      <div className="interface">
        <nav className="menu-desktop">
          <ul>
            <li>
              <a href="./index.html">Inicio</a>
            </li>
            <li>
              <a href="#">Especialidades</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;
