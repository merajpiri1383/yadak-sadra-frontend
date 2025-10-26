import { FC } from "react";


interface Props {
    color?: string,
}


const PlusIcon: FC<Props> = ({ color = "#C1CBDB" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 1V8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 4.5H8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}; export default PlusIcon;