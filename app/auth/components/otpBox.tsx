"use client"
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Slide } from "react-awesome-reveal";
import MessageFullIcon from "@/components/icons/auth/messageFull";


const OtpBox = () => {

    const [otp, setOtp] = useState<string>('');

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[9] bg-[#000000]/40 select-none">
            <div className="flex items-center justify-center h-full w-full">
                <Slide>
                    <div className="bg-white rounded-[30px] p-4 w-[340px]">
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
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            shouldAutoFocus={true}
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

                        <button className="bg-[#0062A9] p-6 rounded-[32px] w-full mt-12 cursor-pointer">
                            <p className="text-[#FFFFFF] font-[400] text-[13px]">بررسی کد یکبار مصرف</p>
                        </button>
                    </div>
                </Slide>
            </div>
        </div>
    )
}; export default OtpBox;