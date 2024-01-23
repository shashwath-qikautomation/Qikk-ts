import React from "react";
import "../styles/Button.css";

type ButtonProps = {
  width?: string
  height?: string
  name: string
  onClick?:Function
  color?:string
  variant?:string
}

const Buttons = ({ width, height, name, onClick, color,variant }:ButtonProps) => {
  return (
    <button style={{ width: width }} className="button-style" onClick={onClick}>
      {name}
    </button>
  );
};

export default Buttons;
