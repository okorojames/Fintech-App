import React from "react";
import { BiChevronUp } from "react-icons/bi";

const BtTop = () => {
  const handleScroll = () => {
    scrollTo(0, 0);
  };
  return (
    <div>
      <BiChevronUp
        style={{
          position: "fixed",
          bottom: "3%",
          right: "5%",
          background: "rgba(239, 244, 253, 0.804)",
          height: "38px",
          width: "38px",
          borderRadius: "50%",
          padding: "2px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          cursor: "pointer",
          color: "#5e7999ef",
          boxShadow: "0 0 10px 1.2px rgba(0, 0, 0, 0.23)",
          zIndex: "997",
        }}
        onClick={handleScroll}
      />
    </div>
  );
};

export default BtTop;
