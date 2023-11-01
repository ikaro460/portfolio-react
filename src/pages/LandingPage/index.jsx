import React from "react";
import profilePic from "../../assets/profile-pic.png";

export default function LandingPage() {
  return (
    <div>
      <h1>LandingPage</h1>
      <i className="bi bi-code-slash"></i>
      <img src={profilePic} alt="profile-pic" />
    </div>
  );
}
