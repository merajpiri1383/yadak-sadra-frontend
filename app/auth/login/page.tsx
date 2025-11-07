"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import Field from "@/app/auth/components/field";
import PhoneIcon from "@/components/icons/auth/phone";
import LockIcon from "@/components/icons/auth/lock";
import KeyIcon from "@/components/icons/auth/key";
import MessageIcon from "@/components/icons/auth/message";
import { LoginAPI, SendOtpAPI, VerifyRegisterAPI } from "@/lib/api/auth";
import useLayoutStore from "@/lib/store/layout";
import { setToken } from "@/lib/axios";

const OTPBox = dynamic(() => import("@/app/auth/components/otpBox"), { ssr: false });



const Page = () => {

    const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [otp, setOtp] = useState("");
    const [showOtpBox, setShowOtpBox] = useState<boolean>(false);
    const { set_user } = useLayoutStore();
    const router = useRouter();


    const loginMutation = useMutation({
        mutationFn: LoginAPI,
        onError: (error: AxiosError) => {
            console.log(error.response?.data);
        },
    });

    useEffect(() => {
        if (loginMutation.data) {
            set_user(loginMutation.data.user);
            setToken(loginMutation.data.access_token, loginMutation.data.refresh_token);
            toast.success("login sucessfully");
            router.push("/");
        }
    }, [loginMutation.data]);

    const sendOtpMutation = useMutation({
        mutationFn: SendOtpAPI,
        onError: (error: AxiosError) => {
            console.log(error.response?.data);
        }
    });

    const verifyOtpMutation = useMutation({
        mutationFn: VerifyRegisterAPI,
        onError: (error: AxiosError) => {
            if (error.response?.data) {
                try {
                    toast.error(Object.values(error.response.data)[0]);
                }catch {};
            }
        },
        onSuccess: (data) => {
            setToken(data.access_token, data.refresh_token);
            set_user(data.user);
            toast.success("logged in successfully");
            router.push("/");
        }
    })

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (phone && password) {
            loginMutation.mutate({
                password: password,
                phone: "0" + phone,
            })
        } else if (phone) {
            sendOtpMutation.mutate({
                phone: "0" + phone,
            });
            setShowOtpBox(true);
        }
    };

    const otpSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(otp);
        verifyOtpMutation.mutate({
            otp_code: otp,
            phone: "0" + phone,
        })
    }

    return (
        <section className="p-4 flex items-center justify-center h-full">

            {
                showOtpBox && <OTPBox
                    setShowBox={setShowOtpBox}
                    setValue={setOtp}
                    value={otp}
                    submitHandler={otpSubmitHandler}
                />
            }

            <form onSubmit={submitHandler}>
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
                <Field
                    icon={<PhoneIcon />}
                    text="شماره همراه"
                    placeholder="9123456789"
                    value={phone}
                    setValue={setPhone}
                />
                {
                    loginMethod === "password" &&
                    <Field
                        icon={<LockIcon />}
                        text="رمز عبور"
                        required={true}
                        value={password}
                        setValue={setPassword}
                    />
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