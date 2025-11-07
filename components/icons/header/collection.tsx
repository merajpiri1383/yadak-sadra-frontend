import { FC } from "react";

interface Props {
    color?: string,
}

const CollectionIcon: FC<Props> = ({ color = "#7E889D" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.625 8.75H4.375C3.40987 8.75 2.625 9.53487 2.625 10.5V17.5C2.625 18.4651 3.40987 19.25 4.375 19.25H16.625C17.5901 19.25 18.375 18.4651 18.375 17.5V10.5C18.375 9.53487 17.5901 8.75 16.625 8.75ZM4.375 17.5V10.5H16.625L16.6268 17.5H4.375ZM4.375 5.25H16.625V7H4.375V5.25ZM6.125 1.75H14.875V3.5H6.125V1.75Z" fill={color} />
        </svg>
    )
};export default CollectionIcon;