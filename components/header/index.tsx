import Image from "next/image";
import dynamic from "next/dynamic";
import HeaderLinks from "@/components/header/links";
import Logo from "@/public/logo.svg";
import SearchIcon from "@/icons/header/search";

const UserActions = dynamic(() => import("@/components/header/userActions"), { ssr: true });

const Header = () => {

    return (
        <>

            <HeaderLinks />

            <div className="flex items-center justify-between my-2 my-6 mx-16">
                <div className="h-[89px] w-[152px] relative">
                    <Image
                        src={Logo}
                        alt="logo"
                        fill={true}
                        sizes="100%"
                    />
                </div>
                <div className="flex items-center justify-center gap-3">
                    <div className="px-6 p-4 rounded-[53px] group
                        bg-[#0162A9] hover:shadow-xl transition duration-400 cursor-pointer">
                        <p className="text-white text-[13px] font-[700]">دسته بندی ها</p>
                    </div>
                    <div className="bg-[#E9F0F4] p-4 flex items-center justify-between rounded-[53px]
                        w-[280px]">
                        <input
                            type="text"
                            placeholder="جستجو در محصولات ..."
                            className="outline-none placeholder-[#4C6272F8] placeholder-[13px]
                            font-bold"
                        />
                        <div className="size-[22px]">
                            <SearchIcon />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <div className="border-[1px] border-[#4C6272F8] px-6 p-4 rounded-[53px] group
                        hover:bg-[#37495E] hover:shadow-xl transition duration-400 cursor-pointer">
                        <p className="text-[#4C6272F8] group-hover:text-white text-[13px]
                        font-[700] transition duration-400">پرداخت سریع</p>
                    </div>
                    <div className="border-[1px] border-[#4C6272F8] px-6 p-4 rounded-[53px] group
                        hover:bg-[#37495E] hover:shadow-xl transition duration-400 cursor-pointer">
                        <p className="text-[#4C6272F8] group-hover:text-white text-[13px]
                        font-[700] transition duration-400">کاتالوگ</p>
                    </div>
                    <div className="border-[1px] border-[#4C6272F8] px-6 p-4 rounded-[53px] group
                        hover:bg-[#37495E] hover:shadow-xl transition duration-400 cursor-pointer">
                        <p className="text-[#4C6272F8] group-hover:text-white text-[13px]
                        font-[700] transition duration-400">پشتیبانی</p>
                    </div>
                </div>
                <UserActions />
            </div>
        </>

    )
}; export default Header;