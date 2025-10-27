"use client"
import Link from "next/link";
import UserIcon from "@/components/icons/auth/user";
import LockIcon from "@/components/icons/auth/lock";
import PhoneIcon from "@/components/icons/auth/phone";

import Field from "@/app/auth/components/field";
import CheckBox from "@/app/auth/components/checkbox";
import { useState } from "react";

const Register = () => {

    const [activeCheckBox, setActiveCheckBox] = useState<boolean>(false);

    return (
        <section className="p-4 flex items-center justify-center h-full">
            <form>
                <Field text="نام و نام خانوادگی" icon={<UserIcon />} />
                <Field text="رمز عبور" icon={<LockIcon />} />
                <Field text="شماره همراه" icon={<PhoneIcon />} />
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
        </section>
    )
}; export default Register;