"use client"
import dynamic from "next/dynamic";
import Image from "next/image";
import CaretUpIcon from "@/icons/footer/caretUp";
import FooterLogo from "@/public/logo-footer.svg";
import useLayoutStore from "@/lib/store/layout";
import { useMemo } from "react";

const Cards = dynamic(() => import("@/components/footer/cards"), { ssr: false });
const Links = dynamic(() => import("@/components/footer/links"), { ssr: false });
const Socials = dynamic(() => import("@/components/footer/socials"), { ssr: false });
const Connection = dynamic(() => import("@/components/footer/connection"), { ssr: false });

const Footer = () => {

    const { footer_data, fetchData } = useLayoutStore();

    useMemo(() => {
        fetchData();
    }, []);

    return (
        <footer className="bg-[#38455A] px-16 relative">
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="size-[64px] bg-[#00C2DC] rounded-full absolute left-[50%] cursor-pointer
                -translate-y-[50%] shadow-[0px_0px_0px_20px_#FFFFFF] flex items-center justify-center
                -translate-x-[50%]">
                <div className="size-[20px]">
                    <CaretUpIcon />
                </div>
            </div>
            <Cards />
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-1">
                    <Links />
                </div>
                <div className="col-span-1">
                    <div className="h-[65px] w-[61px] relative mx-auto">
                        <Image
                            src={FooterLogo}
                            alt="footer-logo"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <p className="text-justify text-[#FFFFFFE5] my-4 text-[13px] leading-6">
                        {footer_data?.description}
                    </p>
                </div>
                <div className="col-span-1">
                    <Socials />
                </div>
            </div>

            <Connection />
            <div className="flex items-center justify-between pb-6">
                <p className="text-[#FFFFFF] text-[13px] font-[700]">
                    تمامی حقوق این وبسایت برای شرکت بازرگانی به آفرین یدک صدرا محفوظ می باشد</p>
                <div className="flex items-center justify-center gap-4">
                    <p className="text-[#FFFFFF] text-[13px] font-[500]">شرکت بازرگانی به آفرین یدک صدرا</p>
                    <div className="w-[30px] h-[32px] relative">
                        <Image
                            src={FooterLogo}
                            alt="footer logo"
                            sizes="100%"
                            fill={true}
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}; export default Footer;