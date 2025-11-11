import { FC } from "react";



interface Props {
    color?: string,
}


const LeftArrowBoxIcon: FC<Props> = ({ color = "#D8DFEE" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill={color} />
            <path d="M9.9697 4.71973L5.68945 8.99998L9.9697 13.2802L11.0302 12.2197L7.81045 8.99998L11.0302 5.78023L9.9697 4.71973Z" fill="white" />
        </svg>
    )
}; export default LeftArrowBoxIcon;