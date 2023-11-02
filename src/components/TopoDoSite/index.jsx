import React from "react";
import profilePic from "../../assets/8638129.png";
import "./styles.css";

function TopoDoSite() {
  return (
    <section className="topo-do-site">
      <div className="interface">
        <div className="flex">
          <div className="txt-topo-site">
            <h1>
              TRANFORMANDO IDEIAS EM CÓDIGO<span>.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              nulla ut suscipit debitis velit delectus quae molestias temporibus
              optio error, hic perferendis repellat, veritatis doloremque
              similique sit dolorum aliquid labore?
            </p>

            <div className="btn-contato">
              <a href="./contato.html">
                <button>Entre em contato</button>
              </a>
            </div>
          </div>
          <div className="img-topo-site">
            <img src={profilePic} alt="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopoDoSite;
