import { FC } from "react";

interface Props {
    outerColor?: string,
    innerColor ?: string,
}


const ActiveCheckIcon: FC<Props> = ({ innerColor = "white" , outerColor = "#00C2DC" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="10" fill={outerColor} />
            <path d="M8.33333 12.9883L5.58916 10.2442L4.41083 11.4225L8.33333 15.345L16.4225 7.25585L15.2442 6.07751L8.33333 12.9883Z" fill={innerColor} />
        </svg>
    )
};export default ActiveCheckIcon;