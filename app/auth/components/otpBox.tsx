import { FC, useEffect } from "react";
import OTPInput from "react-otp-input";
import { Slide } from "react-awesome-reveal";
import MessageFullIcon from "@/components/icons/auth/messageFull";


interface Props {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    submitHandler: (event: React.FormEvent) => void,
    setShowBox: React.Dispatch<React.SetStateAction<boolean>>
}

const OtpBox: FC<Props> = ({ setValue, value, submitHandler, setShowBox }) => {


    useEffect(() => {

        const closeBoxHandler = () => {
            setShowBox(false);
        }

        if (window) {
            window.addEventListener("click", closeBoxHandler);
            return () => window.removeEventListener('click', closeBoxHandler);
        }
    }, [setShowBox]);

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[9] bg-[#000000]/40 select-none">
            <div className="flex items-center justify-center h-full w-full">
                <Slide direction="down" duration={300} triggerOnce>
                    <form
                        className="bg-white rounded-[30px] p-4"
                        onClick={(event) => event.stopPropagation()}
                        onSubmit={submitHandler}>
                        <div className="size-[57px] bg-[#00C2DC] rounded-full flex items-center justify-center
                        mx-auto mt-6">
                            <div className="size-[22px]">
                                <MessageFullIcon color="white" />
                            </div>
                        </div>
                        <div className="my-3">
                            <p className="text-[#09090D] text-center my-3 text-[14px]"
                            >تایید شماره تلفن همراه</p>
                            <p className="text-[13px] font-[400] text-center">
                                کد یکبار مصرف برای شما پیامک شد لطفاً آنرا وارد نمائید</p>
                        </div>
                        <OTPInput
                            value={value}
                            onChange={setValue}
                            numInputs={5}
                            shouldAutoFocus={true}
                            renderSeparator={<span className="p-2"></span>}
                            renderInput={(props) => <input
                                {...props}
                                type="number"
                                className="focus:border-[2px] focus:border-[#0062A9] rounded-[12px] outline-none
                                border-[1.5px] border-[#E4E8F1] transition duration-300"
                            />}
                            inputStyle={{
                                height: "65px",
                                width: "65px",
                                margin: "10px auto",
                            }}
                        />
                        <div className="flex items-center justify-center gap-2 my-2">
                            <p className="text-[#09090D] text-[16px] font-[600]">۰۰:۵۲</p>
                            <p className="text-[#949495] text-[13px] font-[400]">زمان باقی مانده</p>
                        </div>

                        <button type="submit"
                            className="bg-[#0062A9] p-6 rounded-[32px] w-full mt-12 cursor-pointer">
                            <p className="text-[#FFFFFF] font-[400] text-[13px]">بررسی کد یکبار مصرف</p>
                        </button>
                    </form>
                </Slide>
            </div>
        </div>
    )
}; export default OtpBox;