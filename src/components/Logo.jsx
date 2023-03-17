import React from "react";
import logo from "../../static/img/logo.png";

export function Logo(props) {
  return (
    <img
      className="mx-auto block"
      alt="zkSig logo"
      src={logo}
      width="150"
      height="0"
    />
  );
}
