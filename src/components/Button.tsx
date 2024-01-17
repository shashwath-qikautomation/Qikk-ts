import React from "react";
import "../styles/Button.css";

interface ButtonProps {
  width: string
  height: string
  name: string
  onClick:Function
  color:string
}

const Buttons = ({ width, height, name, onClick, color }:ButtonProps) => {
  return (
    <button style={{ width: width }} className="button-style" onClick={onClick}>
      {name}
    </button>
  );
};

export default Buttons;
