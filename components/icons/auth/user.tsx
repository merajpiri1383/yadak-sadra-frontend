import { FC } from "react";


interface Props {
    color?: string,
}

const UserIcon: FC<Props> = ({ color = "#5C5D6D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.0003" cy="4.99999" r="3.33333" stroke={color} strokeWidth="1.5" />
            <ellipse cx="10.0003" cy="14.1667" rx="5.83333" ry="3.33333" stroke={color} strokeWidth="1.5" />
        </svg>
    )
}; export default UserIcon;