import { FC } from "react";


interface Props {
    color?: string,
}

const KeyIcon: FC<Props> = ({ color = "#09090D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_693_3905)">
                <path d="M1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5C12.5355 1.5 14.3033 1.5 15.4017 2.59835C16.5 3.6967 16.5 5.46447 16.5 9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9Z" stroke={color} strokeWidth="1.5" />
                <path d="M8.25 9C8.25 10.0355 7.41053 10.875 6.375 10.875C5.33947 10.875 4.5 10.0355 4.5 9C4.5 7.96447 5.33947 7.125 6.375 7.125C7.41053 7.125 8.25 7.96447 8.25 9Z" stroke={color} strokeWidth="1.5" />
                <path d="M8.25 9H11.625M11.625 9H12.75C13.1642 9 13.5 9.33579 13.5 9.75V10.5M11.625 9V10.125" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <defs>
                <clipPath id="clip0_693_3905">
                    <rect width="100%" height="100%" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}; export default KeyIcon;