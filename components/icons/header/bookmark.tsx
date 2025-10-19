import { FC } from "react";


interface Props {
    color?: string,
}


const BookmarkIcon: FC<Props> = ({ color = "#006AC1" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4998 1.83334H5.49984C4.48875 1.83334 3.6665 2.65559 3.6665 3.66667V20.1667L10.9998 15.9757L18.3332 20.1667V3.66667C18.3332 2.65559 17.5109 1.83334 16.4998 1.83334ZM16.4998 17.0069L10.9998 13.8646L5.49984 17.0069V3.66667H16.4998V17.0069Z" fill={color} />
        </svg>
    )
};export default BookmarkIcon;