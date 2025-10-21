"use client"
import Image from "next/image";
import LocationIcon from "@/icons/footer/location";
import MailSendIcon from "@/icons/footer/mailSend";
import CallIcon from "@/icons/header/call";
import useLayoutStore from "@/lib/store/layout";
import GooglePlayImage from "@/public/google-play.svg";
import ApplicationImage from "@/public/application.svg";

const FooterConnection = () => {

    const { footer_data } = useLayoutStore();

    return (
        <div className="grid grid-cols-3 gap-6 mt-6 pb-6">
            <div className="col-span-1 bg-[#FFFFFF08] border-[#FFFFFF14] border-[1px] rounded-[20px]  p-6
                flex items-center justify-center">
                <div>
                    <div className="flex items-center justify-start gap-4">
                        <div className="size-[26px]">
                            <LocationIcon />
                        </div>
                        <div>
                            <p className="text-[#FFFFFF80] text-[15px]">نشانی دفتر مرکزی</p>
                            <p className="text-[12px] text-[#FFFFFF] font-[700]">{footer_data?.address}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-4 mt-4">
                        <div className="size-[26px]">
                            <MailSendIcon />
                        </div>
                        <div>
                            <p className="text-[#FFFFFF80] text-[15px]">پست الکترونیک</p>
                            <p className="text-[12px] text-[#FFFFFF] font-[700]">{footer_data?.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-[#FFFFFF08] rounded-[20px] flex justify-center items-center
                border-[#FFFFFF14] border-[1px] ">
                <div>
                    <div className="size-[30px] mx-auto">
                        <CallIcon color="#00C2DC" />
                    </div>
                    <p className="text-[#FFFFFF80] text-[15px] text-center my-2">شماره های تماس</p>
                    <p className="text-[#FFFFFF] text-[22px] font-[900]">{footer_data?.phone}</p>
                </div>
            </div>
            <div className="col-span-1 grid grid-cols-4 gap-4">
                {
                    footer_data?.licenses.map((license, index) => {
                        return (
                            <div className="col-span-1" key={index}>
                                <div className="size-[91px] bg-[#E7EBF2] rounded-[20px]
                                    flex items-center justify-center">
                                        <div className="size-[42px] relative">
                                            <Image
                                                src={license.image}
                                                alt="license"
                                                fill={true}
                                                sizes="100%"
                                                style={{objectFit : "cover",objectPosition : "center"}}
                                            />
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
                <div className="col-span-2 flex items-center justify-start p-6 gap-4 bg-[#0000002B] rounded-[20px]">
                    <div className="size-[22px] relative">
                        <Image 
                            src={GooglePlayImage}
                            alt="google-play-image"
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                        />
                    </div>
                    <div>
                        <p className="text-[#FFFFFF99] text-[12px] font-[500]">دریافت آخرین نسخه از</p>
                        <p className="text-[#FFFFFF] text-[12px] font-[900]">اپلیکیشن اندروید</p>
                    </div>
                </div>
                <div className="col-span-2 flex items-center justify-start p-6 gap-4 bg-[#0000002B] rounded-[20px]">
                    <div className="size-[22px] relative">
                        <Image 
                            src={ApplicationImage}
                            alt="google-play-image"
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                        />
                    </div>
                    <div>
                        <p className="text-[#FFFFFF99] text-[12px] font-[500]">دریافت آخرین نسخه از</p>
                        <p className="text-[#FFFFFF] text-[12px] font-[900]">اپلیکیشن آی او اس</p>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default FooterConnection;