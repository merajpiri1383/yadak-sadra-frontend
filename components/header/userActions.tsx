"use client"
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SubtractIcon from "@/icons/header/subtract";
import UserIcon from "@/icons/header/user";
import BookmarkIcon from "@/icons/header/bookmark";
// import useLayoutStore from "@/lib/store/layout";

const LoginStatus = dynamic(() => import("@/components/header/loginStatus"), { ssr: false });


const UserActions = () => {

    const [showLoginStatus, setShowLoginStatus] = useState<boolean>(false);

    const hideHandler = () => {
        setShowLoginStatus(false);
    }

    const showLoginStatusHandler = (e : React.MouseEvent) => {
        e.stopPropagation();
        setShowLoginStatus(!showLoginStatus);
    }

    useEffect(() => {
        if (window) {
            window.addEventListener("click", hideHandler);
            return () => window.removeEventListener("click", hideHandler);
        }
    }, [])

    return (
        <div className="flex items-cneter justify-center gap-2 select-none">
            {
                showLoginStatus && <div className="fixed top-0 left-0 right-0 bottom-0 
                bg-[#3445501F] z-[20]"></div>
            }
            <div className="size-[65px] bg-[#E9F0F4] rounded-full flex items-center justify-center">
                <div className="size-[22px]">
                    <BookmarkIcon />
                </div>
            </div>
            <div
                onClick={showLoginStatusHandler}
                className="bg-[#E9F0F4] flex items-center justify-center gap-4 
                p-4 px-5 rounded-full cursor-pointer relative">
                {/* <div className="[direction:rtl] text-right">
                            <p className="text-[10px] text-[#99B1BE]">سلام!</p>
                            <p className="text-[#006AC1] text-[13px] font-bold">حمیدرضا</p>
                        </div> */}

                <div className="size-[22px]">
                    <UserIcon />
                </div>
                {
                    showLoginStatus && <LoginStatus />
                }
            </div>
            <div className="size-[65px] rounded-full flex items-center justify-center bg-[#00C2DC]">
                <div className="size-[23px]">
                    <SubtractIcon />
                </div>
            </div>
        </div>
    )
}; export default UserActions;