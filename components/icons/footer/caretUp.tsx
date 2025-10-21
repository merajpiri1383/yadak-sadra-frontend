import { FC } from "react";


interface Props {
    color?: string,
}

const CaretUpIcon: FC<Props> = ({ color = "white" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.416626 9.24894H15.5833L7.99996 0.582275L0.416626 9.24894Z" fill={color} />
        </svg>
    )
};export default CaretUpIcon;