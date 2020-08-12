import React, { useContext } from "react";
import { BlvckContext } from "../contexts/AuthContext";

const ButtonBlvck = () => {
  const [blvck, setBlvck] = useContext(BlvckContext);
  const change = () => {
    setBlvck("salmon");
  };
  return (
    <button
      style={{
        textTransform: "uppercase",
        backgroundColor: blvck,
        color: "white",
      }}
      onClick={change}
    >
      {blvck}
    </button>
  );
};

export default ButtonBlvck;
