import React, { FC } from "react"

interface Props {
    icon: React.ReactNode,
    icon_size?: string,
    container_class?: string,
    text: string,
    input_class?: string,
    placeholder?: string,
    value?: string,
    setValue?: React.Dispatch<React.SetStateAction<string>>,
    inputType?: string,
    required ?: boolean,
}

const Field: FC<Props> = ({
    icon,
    icon_size = "20px",
    container_class,
    text,
    input_class,
    placeholder,
    value,
    setValue,
    inputType = "text",
    required = true,
}) => {
    return (
        <div className={`border-[1px] border-[#D7E0EA] rounded-[35px] p-4 my-3 flex items-center
            justify-start gap-3 ` + container_class}>
            <div className={`size-[${icon_size}]`}>
                {icon}
            </div>
            <div>
                <p className="text-[#5C5D6D] text-[10px] font-[400]">{text}</p>
                <input
                    type={inputType}
                    placeholder={placeholder}
                    required={required}
                    value={value ? value : ""}
                    onChange={(e) => setValue && setValue(e.target.value)}
                    className={`w-[275px] text-[#09090D] text-[14px] font-[800] outline-none ` + input_class}
                />
            </div>
        </div>
    )
}; export default Field;