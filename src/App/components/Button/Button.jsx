import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

function Button(props) {
  const [isClicked, setisClicked] = useState(false);
  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {setisClicked(false);}, 350);
    }
  }, [isClicked]);
  return (
    <button
      onClick={(evt) => {
        setisClicked(true);
        console.log("isClicked: " + isClicked);
        if(props.action && typeof props.action==='function') {
          props.action();
        }
        
      }}
      className={`${style.Button}${
        props.className ? " " + props.className : ""
      }}
        }${isClicked ? " " + style.clicked : ""}`}
      type={props.type}
      style={{
        ...props.style,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func,
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export function DefaultButton(props) {
  return <Button {...props} bgColor="skyblue"></Button>;
}

export function WarningButton(props) {
  return <Button {...props} bgColor="tomato"></Button>;
}
Button.defaultProps = {
  type: "button",
  bgColor: "lime",
  color: "white",
};
export default Button;
