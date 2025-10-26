import { FC } from "react";


interface Props {
    color?: string,
}

const PhoneIcon: FC<Props> = ({ color = "#5C5D6D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33301 8.33335C3.33301 5.19066 3.33301 3.61931 4.30932 2.643C5.28563 1.66669 6.85698 1.66669 9.99967 1.66669C13.1424 1.66669 14.7137 1.66669 15.69 2.643C16.6663 3.61931 16.6663 5.19066 16.6663 8.33335V11.6667C16.6663 14.8094 16.6663 16.3807 15.69 17.357C14.7137 18.3334 13.1424 18.3334 9.99967 18.3334C6.85698 18.3334 5.28563 18.3334 4.30932 17.357C3.33301 16.3807 3.33301 14.8094 3.33301 11.6667V8.33335Z" stroke={color} strokeWidth="1.5" />
            <path d="M12.5 15.8333H7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}; export default PhoneIcon;