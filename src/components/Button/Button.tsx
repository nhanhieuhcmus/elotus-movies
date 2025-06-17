import React from "react";
import "./Button.scss";

type ButtonProps = {
    className?: string;
    onClick: () => void;
    children: any;
}
const Button = (props: ButtonProps) => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props?.onClick}
        >
            {props.children}
        </button>
    );
};

export const OutlineButton = (props) => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props?.onClick}
        >
            {props.children}
        </Button>
    );
};


export default Button;
