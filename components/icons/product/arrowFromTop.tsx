import { FC } from "react";


interface Props {
    color?: string,
}

const ArrowFromTopIcon : FC<Props> = ({ color = "#536683" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.49998 15H13.5V13.5H4.49998V15ZM8.99998 2.6895L14.0302 7.71975L12.9697 8.78025L9.74998 5.5605V12H8.24998V5.5605L5.03023 8.78025L3.96973 7.71975L8.99998 2.6895Z" fill={color} />
        </svg>
    )
};export default ArrowFromTopIcon;