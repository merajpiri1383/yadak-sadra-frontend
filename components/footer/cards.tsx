import SendIcon from "@/icons/footer/send";
import RevisionIcon from "@/icons/footer/revision";
import AwardIcon from "@/icons/footer/award";
import SupportIcon from "@/icons/footer/support";

const FooterCards = () => {
    return (
        <section className="flex items-center justify-between py-6">
            <div className="flex items-center justify-start gap-4">
                <div className="flex items-center justify-start gap-4 bg-[#FFFFFF08] rounded-[14px] p-5">
                    <div className="size-[20px]">
                        <SendIcon />
                    </div>
                    <div className="h-[20px] w-[1px] bg-[#FFFFFF21]"></div>
                    <div>
                        <p className="text-[#FFFFFF] text-[14px] font-bold">
                            ارسال لوازم یدکی خودرو
                        </p>
                        <p className="text-[#FFFFFF80] text-[12px] font-medium">
                            به تمام نقاط کشور در کوتاه ترین زمان
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-start gap-4 bg-[#FFFFFF08] rounded-[14px] p-5">
                    <div className="size-[20px]">
                        <RevisionIcon />
                    </div>
                    <div className="h-[20px] w-[1px] bg-[#FFFFFF21]"></div>
                    <div>
                        <p className="text-[#FFFFFF] text-[14px] font-bold">
                            ضمانت بازگشت کالا
                        </p>
                        <p className="text-[#FFFFFF80] text-[12px] font-medium">
                            تا 7 روز بعد از خرید
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start gap-4">
                <div className="flex items-center justify-start gap-4 bg-[#FFFFFF08] rounded-[14px] p-5">
                    <div className="size-[20px]">
                        <AwardIcon />
                    </div>
                    <div className="h-[20px] w-[1px] bg-[#FFFFFF21]"></div>
                    <div>
                        <p className="text-[#FFFFFF] text-[14px] font-bold">
                            ضمانت اصالت تمامی لوازم یدکی
                        </p>
                        <p className="text-[#FFFFFF80] text-[12px] font-medium">
                            با یدک صدرا کیفیت را تجربه کنید
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 bg-[#FFFFFF08] rounded-[14px] p-5">
                    <div className="size-[20px]">
                        <SupportIcon />
                    </div>
                    <div className="h-[20px] w-[1px] bg-[#FFFFFF21]"></div>
                    <div>
                        <p className="text-[#FFFFFF] text-[14px] font-bold">
                            پشتیبانی حرفه‌ای یدک‌‌صدرا
                        </p>
                        <p className="text-[#FFFFFF80] text-[12px] font-medium">
                            خدمات حرفه ای 24 ساعته/7روز هفته
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};export default FooterCards;