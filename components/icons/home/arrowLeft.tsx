import { FC } from "react";


interface Props {
    color?: string,
}


const ArrowLeftIcon: FC<Props> = ({ color = "white" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.167 8.88465L11.7008 13.3508L16.167 17.817L14.6959 19.2881L8.7587 13.3508L14.6959 7.4136L16.167 8.88465Z" fill={color} />
        </svg>
    )
};export default ArrowLeftIcon;