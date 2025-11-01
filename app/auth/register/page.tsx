"use client"
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import UserIcon from "@/components/icons/auth/user";
import LockIcon from "@/components/icons/auth/lock";
import PhoneIcon from "@/components/icons/auth/phone";

import Field from "@/app/auth/components/field";
import CheckBox from "@/app/auth/components/checkbox";
import { RegisterAPI } from "@/lib/api/auth";

const Loading = dynamic(() => import("@/components/loading"), { ssr: false });
const OtpBox = dynamic(() => import("@/app/auth/components/otpBox"),{ ssr : false });



const Register = () => {

    const [activeCheckBox, setActiveCheckBox] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const mutation = useMutation({
        mutationFn: RegisterAPI,
        onError: (e: AxiosError) => {
            const error = e.response?.data as { phone?: string, username?: string, password?: string };
            try {
                toast.error(Object.values(error)[0][0])
            } catch { }
        }
    });

    useEffect(() => {
        if (mutation.data) {
            toast.success(Object.values(mutation.data)[0] as string);
        }
    }, [mutation.data]);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password && phone && activeCheckBox) {
            mutation.mutate({
                password: password,
                phone: "0" + phone,
                username: username,
            })
        } else {
            toast.warning("لطفا همه فیلد ها رو پر کنید")
        }
    }

    return (
        <section className="p-4 flex items-center justify-center h-full">

            <OtpBox />

            {
                mutation.isPending ?
                    <Loading /> :
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
                                    "قوانین و مقررات"
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
            }
        </section>
    )
}; export default Register;