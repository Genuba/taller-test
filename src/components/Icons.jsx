import React from "react";
import "./styles/Icons.css";
import {
  FaClipboardList,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";

const UserDescription = (props) => {
  const handleChange = (e, key) => {
    e.preventDefault();
    props.handleChange(key);
  };

  return (
    <div id="details">
      <div className="flex2">
        <a href="./" name="name" onClick={(e) => handleChange(e, "name")}>
          <FaUserAlt size={40} />
        </a>
        <a href="./" name="email" onClick={(e) => handleChange(e, "email")}>
          <FaEnvelope size={40} />
        </a>
        <a href="./" name="birth" onClick={(e) => handleChange(e, "dob")}>
          <FaClipboardList size={40} />
        </a>
        <a
          href="./"
          name="address"
          onClick={(e) => handleChange(e, "location")}
        >
          <FaMapMarkerAlt size={40} />
        </a>
        <a href="./" name="phone" onClick={(e) => handleChange(e, "cell")}>
          <FaPhoneAlt size={40} />
        </a>
        <a href="./" name="password" onClick={(e) => handleChange(e, "login")}>
          <FaLock size={40} />
        </a>
      </div>
    </div>
  );
};

export default UserDescription;
