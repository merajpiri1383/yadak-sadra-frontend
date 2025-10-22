import { FC } from "react";


interface Props {
    color?: string,
}


const ArrowFromDownIcon: FC<Props> = ({ color = "#A4AEC9" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.49998 3L13.5 3V4.5L4.49998 4.5V3ZM8.99998 15.3105L14.0302 10.2802L12.9697 9.21975L9.74998 12.4395V6H8.24998V12.4395L5.03023 9.21975L3.96973 10.2802L8.99998 15.3105Z" fill={color} />
        </svg>
    )
}; export default ArrowFromDownIcon;