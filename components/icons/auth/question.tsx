import { FC } from "react";


interface Props {
    color?: string,
}


const QuestionIcon: FC<Props> = ({ color = "#E4E8F1" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="7.5" stroke={color} />
            <path d="M7.59375 6.65625C7.59375 5.8796 8.22335 5.25 9 5.25C9.77665 5.25 10.4062 5.8796 10.4062 6.65625C10.4062 7.17183 10.1288 7.62261 9.71502 7.86741C9.35853 8.07832 9 8.39829 9 8.8125V9.75" stroke={color} strokeLinecap="round" />
            <circle cx="9" cy="12" r="0.75" fill={color} />
        </svg>
    )
};export default QuestionIcon;