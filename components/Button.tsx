import "./Button.css";
import React from "react";

type ButtonProps = {
  children: any;
  disabled?: boolean;
  id?:string;
  type?:"submit"
};

function Button(props: ButtonProps) {
  return (
    <button className="small-button" disabled={props.disabled} id={props.id} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
