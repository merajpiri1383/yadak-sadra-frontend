import { FC } from "react";


interface Props {
    color?: string,
}

const MessageFullIcon: FC<Props> = ({ color = "white" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 0H2.16667C0.975 0 0.0108333 0.975 0.0108333 2.16667L0 21.6667L4.33333 17.3333H19.5C20.6917 17.3333 21.6667 16.3583 21.6667 15.1667V2.16667C21.6667 0.975 20.6917 0 19.5 0ZM7.58333 9.75H5.41667V7.58333H7.58333V9.75ZM11.9167 9.75H9.75V7.58333H11.9167V9.75ZM16.25 9.75H14.0833V7.58333H16.25V9.75Z" fill={color} />
        </svg>
    )
};export default MessageFullIcon;