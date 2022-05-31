import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

interface IButtonProps{
  type?: 'button'|'submit'|'reset',
  action?: Function,
  children: React.ReactElement|Array<React.ReactNode>|string,
  bgColor?: string,
  color?: string,
  className?: string,
  style?: object,
};

const Button:React.FC<IButtonProps>=(props)=> {
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
  type: PropTypes.oneOf(['button','submit','reset']),
  action: PropTypes.func,
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: "button",
  bgColor: "lime",
  color: "white"
}
export const DefaultButton:React.FC<IButtonProps>=(props)=> {
  return <Button {...props} bgColor="skyblue"></Button>;
}

export const WarningButton:React.FC<IButtonProps>=(props)=> {
  return <Button {...props} bgColor="tomato"></Button>;
}

export default Button;