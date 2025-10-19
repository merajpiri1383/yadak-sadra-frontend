import { FC } from "react";


interface Props {
    color?: string,
}

const ArrowRightIcon: FC<Props> = ({ color = "white" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.83301 8.88465L14.2992 13.3508L9.83301 17.817L11.3041 19.2881L17.2413 13.3508L11.3041 7.4136L9.83301 8.88465Z" fill={color} />
        </svg>
    )
};export default ArrowRightIcon;