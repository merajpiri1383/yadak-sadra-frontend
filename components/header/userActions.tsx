"use client"
import SubtractIcon from "@/icons/header/subtract";
import UserIcon from "@/icons/header/user";
import BookmarkIcon from "@/icons/header/bookmark";
import Link from "next/link";
// import useLayoutStore from "@/lib/store/layout";


const UserActions = () => {
    return (
        <div className="flex items-cneter justify-center gap-2">
            <div className="size-[65px] bg-[#E9F0F4] rounded-full flex items-center justify-center">
                <div className="size-[22px]">
                    <BookmarkIcon />
                </div>
            </div>
            <Link
                href={"/auth/register"}
                className="bg-[#E9F0F4] flex items-center justify-center gap-4 p-4 px-5 rounded-full">
                {/* <div className="[direction:rtl] text-right">
                            <p className="text-[10px] text-[#99B1BE]">سلام!</p>
                            <p className="text-[#006AC1] text-[13px] font-bold">حمیدرضا</p>
                        </div> */}
                <div className="size-[22px]">
                    <UserIcon />
                </div>
            </Link>
            <div className="size-[65px] rounded-full flex items-center justify-center bg-[#00C2DC]">
                <div className="size-[23px]">
                    <SubtractIcon />
                </div>
            </div>
        </div>
    )
}; export default UserActions;