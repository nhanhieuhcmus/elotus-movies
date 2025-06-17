import React from 'react';

import './Input.scss';

type InputProps = {
    value: string;
    placeholder?: string;
    type: any;
    onChange?: (e: any) => void;
    onKeyDown?: (e: any) => void;

}

const Input = (props: InputProps) => {
    return (
        <input
            type={props.type}
            placeholder={props?.placeholder}
            value={props.value}
            onChange={props?.onChange}
            onKeyDown={props?.onKeyDown}
        />
    );
}

export default Input;