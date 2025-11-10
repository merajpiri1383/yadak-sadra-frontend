import { FC } from "react";


interface Props {
    color?: string,
}

const MinusIcon: FC<Props> = ({ color = "#C1CBDB" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33325 7.33334H12.6666V8.66668H3.33325V7.33334Z" fill={color} />
        </svg>

    )
}; export default MinusIcon;