import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendar,
} from "react-icons/fa";

import { Tilt } from "react-tilt";

const ProfileCard = ({ details }) => {
  if (!details) {
    return null;
  }

  return (
    <Tilt
      className="Tilt"
      options={{
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
      }}
    >
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={details.picture?.large}
            alt={`${details.name.first} ${details.name.last}`}
            className="profile-image"
          />
        </div>
        <h2 className="profile-name">
          {details.name.first} {details.name.last}
        </h2>
        <div className="other-details">
          <p className="profile-detail">
            <FaCalendar /> {details.dob?.age} years old
          </p>
          <p className="profile-detail">
            <FaEnvelope /> {details.email}
          </p>
          <p className="profile-detail">
            <FaPhone /> {details.phone}
          </p>
          <p className="profile-detail">
            <FaMapMarkerAlt /> {details.location.city},{" "}
            {details.location.country}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default ProfileCard;
