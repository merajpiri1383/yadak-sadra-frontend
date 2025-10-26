import { FC } from "react";


interface Props {
    color?: string,
}


const CheckIcon: FC<Props> = ({ color = "#DCE0E8" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="10" fill={color} />
        </svg>
    )
}; export default CheckIcon;