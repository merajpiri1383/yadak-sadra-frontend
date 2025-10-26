import { FC } from "react";

interface Props {
    color?: string,
}

const LockIcon: FC<Props> = ({ color = "#5C5D6D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_692_3361)">
                <path d="M1.66699 13.3333C1.66699 10.9763 1.66699 9.79778 2.39923 9.06555C3.13146 8.33331 4.30997 8.33331 6.66699 8.33331H13.3337C15.6907 8.33331 16.8692 8.33331 17.6014 9.06555C18.3337 9.79778 18.3337 10.9763 18.3337 13.3333C18.3337 15.6903 18.3337 16.8688 17.6014 17.6011C16.8692 18.3333 15.6907 18.3333 13.3337 18.3333H6.66699C4.30997 18.3333 3.13146 18.3333 2.39923 17.6011C1.66699 16.8688 1.66699 15.6903 1.66699 13.3333Z" stroke={color} strokeWidth="1.5" />
                <path d="M10 11.6667V15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 8.33332V6.66666C5 3.90523 7.23858 1.66666 10 1.66666C12.7614 1.66666 15 3.90523 15 6.66666V8.33332" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <defs>
                <clipPath id="clip0_692_3361">
                    <rect width="100%" height="100%" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}; export default LockIcon;