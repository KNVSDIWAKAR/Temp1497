import React, { useState, useEffect } from "react";

import maleProfilePic from "../Asserts/maleAvatar.png";
import femaleProfilePic from "../Asserts/femaleAvatar.png";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "john_doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    age: 25,
    gender: "Male",
  });

  useEffect(() => {}, []);

  return (
    <div
      style={{
        marginTop: "170px",
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          position: "relative", // Ensure the parent div is relative
        }}
      >
        {/* Background Div */}
        <div
          style={{
            position: "absolute",
            width: "170px",
            height: "170px",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "50%",
            zIndex: 0, // Place behind the image
          }}
        ></div>

        {/* Image */}
        <img
          src={userData.gender === "Male" ? maleProfilePic : femaleProfilePic}
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            position: "relative", // Ensure it layers above the background div
            zIndex: 1,
          }}
        />
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {userData.username}
      </h2>
      <div style={{ lineHeight: "2", fontSize: "16px" }}>
        {[
          { label: "Firstname", value: userData.firstName },
          { label: "Lastname", value: userData.lastName },
          { label: "Email", value: userData.email },
          { label: "Phone", value: userData.phone },
          { label: "Age", value: userData.age },
          { label: "Gender", value: userData.gender },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <strong style={{ flex: "1", textAlign: "left" }}>
              {item.label}:
            </strong>
            <span style={{ flex: "2", textAlign: "right" }}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
