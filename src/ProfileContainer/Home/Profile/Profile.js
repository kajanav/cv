import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
        <div className = "profile-parent">
            <div className = "profile-details">
                <div className = "colz">
                 <div className = "colz-icon">
                    <a href="https://www.facebook.com/profile.php?id=100078733414590&mibextid=ZbWKwL">
                        <i className ="fa fa-facebook-square"></i>
                    </a>
                    <a href="https://github.com/kajanav">
                        <i className ="fa fa-github"> </i>
                    </a>
                    <a href="https://www.instagram.com/kayanarajh?igsh=MTF3bnA0NWhneWw1">
                        <i className ="fa fa-instagram"> </i>
                    </a>
                    <a href="https://youtube.com/@naturalflowers1445?si=9xzenHLcVLF2D5lq">
                        <i className ="fa fa-youtube"> </i>
                    </a>
                    <a href="https://www.linkedin.com/in/kajana-vijayarasha-254049247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <i className ="fa fa-linkedin"> </i>
                    </a>
                    </div>
                </div>
                <div className = "profile-details-name">
                    <span className = "primary-text">
                        {" "}
                        Hello, I'M <span className = "highlighted-text">Kajana</span>
                    </span>
                </div>
                <div className = "profile-details-role">
                <span className = "primary-text">
                        {" "}
                        <h1>
                          {" "}
                          <Typical
                          loop={Infinity}
                          steps ={[
                            "I am",
                            1000,
                            "Full Stack Developer",
                            1000,
                            "Mobile App Developer",
                            1000,
                            "Cross Platform v",
                            1000,
                          ]}
                          /> 
                        </h1>
                        <span className ="profile-role-tagline">
                            Knack of building application with front and back end operations.

                        </span>
                    </span> 
                </div>
                <div className="profile-optins">
                    <button className = "btn primary-btn">
                        {" "}
                        Hire Me{" "}
                    </button>
                    <a href ="#">
                        <button className="btn highlighted-btn">Get Resume</button>

                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className ="profile-picture-background"></div>

            </div>
        </div>
    </div>
  )
}
