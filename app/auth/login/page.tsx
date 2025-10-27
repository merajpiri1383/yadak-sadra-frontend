"use client"
import Link from "next/link";
import Field from "@/app/auth/components/field";
import PhoneIcon from "@/components/icons/auth/phone";
import LockIcon from "@/components/icons/auth/lock";
import KeyIcon from "@/components/icons/auth/key";
import MessageIcon from "@/components/icons/auth/message";
import { useState } from "react";


const Page = () => {

    const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");

    return (
        <section className="p-4 flex items-center justify-center h-full">
            <form>
                <div className="flex items-center justify-start gap-4 bg-[#F6F8F9] w-fit rounded-[100px] p-2">
                    <div className={`flex items-center justify-center gap-2 p-3  rounded-[100px] cursor-pointer
                        ${loginMethod === "password" && "bg-white"} transition duration-400`}
                        onClick={() => setLoginMethod("password")}>
                        <div className="size-[18px]">
                            {
                                loginMethod === "password" ?
                                    <KeyIcon color="#09090D" /> :
                                    <KeyIcon color="#929BB7" />
                            }
                        </div>
                        <p className={`${loginMethod === "password" ? "text-[#09090D]" : "text-[#929BB7]"}
                            text-[13px] font-[400]`}>ورود با رمز عبور</p>
                    </div>
                    <div className={`flex items-center justify-center gap-2 p-3 rounded-[100px]
                        ${loginMethod === "otp" && "bg-white"} cursor-pointer transition duration-400`}
                        onClick={() => setLoginMethod("otp")}>
                        <div className="size-[18px]">
                            {
                                loginMethod === "otp" ?
                                    <MessageIcon color="#09090D" /> :
                                    <MessageIcon color="#929BB7" />
                            }
                        </div>
                        <p className={`${loginMethod === "otp" ? "text-[#09090D]" : "text-[#929BB7]"}
                            text-[13px] font-[400]`}>ورود با کد پیامکی</p>
                    </div>
                </div>
                <Field icon={<PhoneIcon />} text="شماره همراه" />
                {
                    loginMethod === "password" && <Field icon={<LockIcon />} text="رمز عبور" />
                }
                <p className="text-[#949495] my-3">فراموشی رمز عبور</p>
                <button type="submit"
                    className="w-full flex items-center justify-center 
                    bg-[#0062A9] p-4 rounded-[32px] cursor-pointer my-3">
                    <p className="text-[#FFFFFF]">ورود به حساب کاربری</p>
                </button>
                <div className="flex items-center justify-center mt-6 gap-2">
                    <p className="text-[13px] font-[400]">حساب کاربری ندارید؟</p>
                    <Link href={"/auth/register"}>
                        <p className="text-[13px] font-[400] text-[#0062A9]">ایجاد کنید</p>
                    </Link>
                </div>
            </form>
        </section>
    )
}; export default Page;