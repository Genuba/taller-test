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
  const handleChange = (e) => {
    props.handleChange(e);
  };

  return (
    <div id="details">
      <div className="flex2">
        <a name="name" onClick={() => handleChange("name")}>
          <FaUserAlt size={40} />
        </a>
        <a name="email" onClick={() => handleChange("email")}>
          <FaEnvelope size={40} />
        </a>
        <a name="birth" onClick={() => handleChange("dob")}>
          <FaClipboardList size={40} />
        </a>
        <a name="address" onClick={() => handleChange("location")}>
          <FaMapMarkerAlt size={40} />
        </a>
        <a name="phone" onClick={() => handleChange("cell")}>
          <FaPhoneAlt size={40} />
        </a>
        <a name="password" onClick={() => handleChange("login")}>
          <FaLock size={40} />
        </a>
      </div>
    </div>
  );
};

export default UserDescription;
