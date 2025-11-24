"use client"
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SubtractIcon from "@/icons/header/subtract";
import UserIcon from "@/icons/header/user";
import BookmarkIcon from "@/icons/header/bookmark";
import useLayoutStore from "@/lib/store/layout";
import { useRouter } from "next/navigation";

const LoginStatus = dynamic(() => import("@/components/header/loginStatus"), { ssr: false });
const CartPopup = dynamic(() => import("@/components/header/cartPopup"), { ssr: false })


const UserActions = () => {

    const { user_data } = useLayoutStore();
    const [currentPopup, setPopup] = useState<"login" | "cart" | null>(null);
    const router = useRouter();

    const hideHandler = () => {
        setPopup(null);
    }

    const showLoginStatusHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentPopup === "login") {
            setPopup(null);
        } else {
            setPopup("login");
        }
    }

    const showCartStatusHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (user_data?.username) {
            setPopup(currentPopup === "cart" ? null : "cart");
        } else {
            router.push("/auth/login");
        }
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
                currentPopup && <div className="fixed top-0 left-0 right-0 bottom-0 
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
                <div className={`[direction:rtl] text-right ${!user_data?.username && "hidden"}`}>
                    <p className="text-[10px] text-[#99B1BE]">سلام!</p>
                    <p className="text-[#006AC1] text-[13px] font-bold">{user_data?.username}</p>
                </div>

                <div className="size-[22px]">
                    <UserIcon />
                </div>
                {
                    currentPopup === "login" && <LoginStatus />
                }
            </div>
            <div
                onClick={showCartStatusHandler}
                className="size-[65px] rounded-full flex items-center 
                justify-center bg-[#00C2DC] relative cursor-pointer">
                <div className="size-[23px]">
                    <SubtractIcon />
                </div>
                {
                    currentPopup === "cart" && <CartPopup />
                }
            </div>
        </div>
    )
}; export default UserActions;