"use client"
import React, { FC } from "react";


interface Props {
    show?: boolean,
    setShow?: React.Dispatch<React.SetStateAction<boolean>>,
}

const CheckBox: FC<Props> = ({ show = false, setShow }) => {

    const clickHandler = () => {
        if (setShow) {
            setShow(!show);
        }
    }

    return (
        <div className="border-[1.5px] border-[#E4E8F1] rounded-[5px] size-[17px] cursor-pointer
            flex items-center justify-center active:scale-115 transition duration-200"
            onClick={() => clickHandler()}>
            {
                show && <div className="size-[11px] bg-[#00C2DC] rounded-[3px]"></div>
            }
        </div>
    )
}; export default CheckBox;