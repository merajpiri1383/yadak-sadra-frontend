import React from "react";
import SendIcon from "@/components/icons/product/send";
import RevisionIcon from "@/components/icons/footer/revision";
import BoxIcon from "@/components/icons/product/box";
import AwardIcon from "@/components/icons/footer/award";
import SupportIcon from "@/components/icons/footer/support";

const Features = () => {

    const data: {
        icon: React.ReactNode,
        title: string,
        text: string,
    }[] = [
            {
                icon: <SendIcon color="#8E98AD" />,
                text: "به تمام نقاط کشور در کوتاه ترین زمان",
                title: "ارسال لوازم یدکی خودرو",
            }, {
                icon: <RevisionIcon color="#8E98AD" />,
                text: "تا 7 روز بعد از خرید",
                title: "ضمانت بازگشت کالا",
            }, {
                icon: <BoxIcon color="#8E98AD" />,
                text: "در همه محصولات صدرا یدک",
                title: "سلامت فیزیکی محصولات",
            }, {
                icon: <AwardIcon color="#8E98AD" />,
                text: "با یدک صدرا کیفیت را تجربه کنید",
                title: "ضمانت اصالت لوازم یدکی",
            }, {
                icon: <SupportIcon color="#8E98AD" />,
                text: "خدمات حرفه ای 24 ساعته",
                title: "پشتیبانی حرفه‌ای",
            },
        ]

    return (
        <div className="bg-linear-to-b from-[#F5F8FA] to-[#FFFFFF] px-20 py-12 flex items-center justify-between">
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center justify-center gap-6">
                            <div className="size-[24px]">
                                {item.icon}
                            </div>
                            <div className="w-[1px] h-[21px] bg-[#E1E8EF]"></div>
                            <div>
                                <p className="text-[#3C5164] text-[14px] font-[700]">{item.title}</p>
                                <p className="text-[#8E98AD] text-[12px] font-[500]">{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}; export default Features;