import React, { useRef } from "react";
import { BiChevronUp } from "react-icons/bi";

const BtTop = () => {
  const btnTop = useRef();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      btnTop.current.style.display = "block";
    } else {
      btnTop.current.style.display = "none";
    }
  });
  const handleScroll = () => {
    scrollTo(0, 0);
  };
  return (
    <div ref={btnTop} style={{ display: "none" }}>
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
