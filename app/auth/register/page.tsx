"use client"
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
// external packages
import { AxiosError } from "axios";
import { Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
// icons
import UserIcon from "@/components/icons/auth/user";
import LockIcon from "@/components/icons/auth/lock";
import PhoneIcon from "@/components/icons/auth/phone";
// utils
import Field from "@/app/auth/components/field";
import CheckBox from "@/app/auth/components/checkbox";
import { RegisterAPI, VerifyRegisterAPI } from "@/lib/api/auth";
import useLayoutStore from "@/lib/store/layout";
import { setToken } from "@/lib/axios";


const Loading = dynamic(() => import("@/components/loading"), { ssr: false });
const OtpBox = dynamic(() => import("@/app/auth/components/otpBox"), { ssr: false });



const Register = () => {

    const [activeCheckBox, setActiveCheckBox] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [showOtpBox, setShowOtpBox] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>('');

    const router = useRouter();

    const { set_user } = useLayoutStore();

    const sendOtpMutation = useMutation({
        mutationFn: RegisterAPI,
        onError: (e: AxiosError) => {
            const error = e.response?.data as {
                phone?: string,
                username?: string,
                password?: string,
                error?: string,
            };
            try {
                toast.error(Object.values(error)[0][0])
            } catch { }
        }
    });

    const verifyMutation = useMutation({
        mutationFn: VerifyRegisterAPI,
        onError: (e: AxiosError) => {
            const error = e.response?.data as {
                error?: string,
                data?: string,
            };
            try {
                toast.error(Object.values(error)[0])
            } catch { };
        }
    });

    useEffect(() => {
        if (sendOtpMutation.data) {
            toast.success(Object.values(sendOtpMutation.data)[0] as string);
            setShowOtpBox(true);
        }

    }, [sendOtpMutation.data,router,set_user]);

    useEffect(() => {
        if (verifyMutation.data) {
            set_user(verifyMutation.data.user);
            setToken(verifyMutation.data.access_token, verifyMutation.data.refresh_token);
            router.push("/");
            toast.success("ثبت نام با موفقیت انجام شد");
        }
    }, [verifyMutation.data])

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password && phone && activeCheckBox) {
            sendOtpMutation.mutate({
                password: password,
                phone: "0" + phone,
                username: username,
            })
        } else {
            toast.warning("لطفا همه فیلد ها رو پر کنید")
        }
    }



    const otpSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        verifyMutation.mutate({
            phone: "0" + phone,
            otp_code: otp,
        });
    }

    return (
        <section className="p-4 flex items-center justify-center h-full">

            {
                sendOtpMutation.data && showOtpBox &&
                <OtpBox
                    value={otp}
                    setValue={setOtp}
                    submitHandler={otpSubmitHandler}
                    setShowBox={setShowOtpBox}
                />
            }

            {
                sendOtpMutation.isPending ?
                    <Loading /> :
                    <Slide duration={300} direction="right" triggerOnce>
                        <form onSubmit={submitHandler}>
                            <Field
                                text="نام و نام خانوادگی"
                                icon={<UserIcon />}
                                value={username}
                                setValue={setUsername}
                            />
                            <Field
                                text="رمز عبور"
                                icon={<LockIcon />}
                                value={password}
                                inputType="password"
                                setValue={setPassword}
                            />
                            <Field
                                text="شماره همراه"
                                inputType="number"
                                placeholder="9123456789"
                                icon={<PhoneIcon />}
                                value={phone}
                                setValue={setPhone}
                            />
                            <div className="flex items-center justify-start gap-2 mt-4">
                                <CheckBox show={activeCheckBox} setShow={setActiveCheckBox} />
                                <p className="text-[13px] font-[400]">
                                    متعهد میشوم که
                                    <span className="text-[#00C2DC]">
                                        قوانین و مقررات
                                    </span>
                                    را خوانده و قبول دارم
                                </p>
                            </div>
                            <button type="submit" className="flex items-center justify-center bg-[#0062A9]
                                rounded-[32px] p-4 mt-4 w-full cursor-pointer">
                                <p className="text-[#FFFFFF]">ایجاد حساب کاربری</p>
                            </button>
                            <div className="flex items-center justify-center mt-4 gap-2">
                                <p className="font-[400] text-[13px]">حساب کاربری دارید؟</p>
                                <Link href={"/auth/login"}>
                                    <p className="font-[400] text-[13px] text-[#0062A9]">وارد شوید</p>
                                </Link>
                            </div>
                        </form>
                    </Slide>
            }
        </section>
    )
}; export default Register;