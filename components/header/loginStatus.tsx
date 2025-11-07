"use client"
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import useLayoutStore from "@/lib/store/layout";
import UserProfileLogo from "@/public/user-profile.svg";
import GridIcon from "@/icons/header/grid";
import CollectionIcon from "@/icons/header/collection";
import MapPinIcon from "@/icons/header/mapPin";
import UserCircleIcon from "@/icons/header/userCircle";

interface OptionType {
    icon: React.ReactNode,
    text: string,
    href: string,
}

const Option: FC<OptionType> = ({ href, icon, text }) => {
    return (
        <Link className="border-[1px] border-[#DCE0E8] rounded-[37px]
            flex items-center justify-between p-4 my-2 w-[227px]"
            href={href}>
            <p className="text-[#121215] text-[13px] font-[700]">{text}</p>
            <div className="size-[21px]">
                {icon}
            </div>
        </Link>
    )
}

const LoginStatus = () => {

    const { user_data } = useLayoutStore();

    const options: OptionType[] = [
        {
            icon: <GridIcon />,
            text: "پیشخوان",
            href: "/",
        }, {
            icon: <CollectionIcon />,
            text: "تاریخچه سفارشات",
            href: "/",
        }, {
            icon: <MapPinIcon />,
            text: "نشانی ها",
            href: "/",
        }, {
            icon: <UserCircleIcon />,
            text: "اطلاعات حساب",
            href: "/",
        }
    ]

    return (
        <div className="absolute top-20 z-[21] left-0" onClick={(e) => e.stopPropagation()}>
            <Slide
                direction="up"
                duration={300}
                triggerOnce
                className="bg-[#FFFFFF] rounded-[30px] p-4">
                {
                    user_data?.username ?
                        <div>
                            <div className="flex items-center justify-start gap-6 mb-4">
                                <div className="size-[51px] relative">
                                    <Image
                                        src={UserProfileLogo}
                                        alt="user-profile-logo"
                                    />
                                </div>
                                <p className="text-[#121215] text-[16px] font-[700]">
                                    {user_data.username}
                                </p>
                            </div>
                            {
                                options.map((otpion, index) => {
                                    return (
                                        <Option
                                            key={index}
                                            {...otpion}
                                        />
                                    )
                                })
                            }
                        </div> :
                        <div className="w-[300px]">
                            <div className="size-[47px] mx-auto">
                                <UserCircleIcon />
                            </div>
                            <p className="text-[#525F6B] font-[700] text-[16px] text-center my-3">
                                لطفا وارد حساب کاربری خود شوید</p>
                            <Link href="/auth/login">
                                <div className="border-[#DCE0E8] rounded-[33px] border-[1px] w-fit mx-auto p-4">
                                    <p className="text-[#121215] text-[13px] font-[700]">
                                        ورود به حساب کاربری</p>
                                </div>
                            </Link>
                        </div>
                }
            </Slide>
        </div>
    )
}; export default LoginStatus;