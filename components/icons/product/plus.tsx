import { FC } from "react";


interface Props {
    color?: string,
}


const PlusIcon: FC<Props> = ({ color = "#C1CBDB" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6666 7.33334H8.66659V3.33334H7.33325V7.33334H3.33325V8.66668H7.33325V12.6667H8.66659V8.66668H12.6666V7.33334Z" fill={color} />
        </svg>
    )
}; export default PlusIcon;