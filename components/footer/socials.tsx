import Link from "next/link";
import useLayoutStore from "@/lib/store/layout";
import InstagramIcon from "@/icons/footer/instagram";
import TelegramIcon from "@/icons/footer/telegram";
import WhatsAppIcon from "@/icons/footer/whatsapp";


const FooterSocials = () => {

    const { footer_data } = useLayoutStore();

    return (
        <div className="mt-12">
            <p className="text-[16px] text-[#FFFFFF] font-[700]">شبکه های اجتماعی ما</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <Link href={footer_data?.instagram_page || "/"}
                    className="col-span-1 bg-[#BF2754] h-[164px] flex items-center rounded-[12px]">
                    <div className="mx-auto">
                        <div className="size-[60px] mx-auto">
                            <InstagramIcon />
                        </div>
                        <p className="text-[#FFFFFF] text-[13px] font-[900] text-center">پیج اینستاگرام</p>
                    </div>
                </Link>
                <Link href={footer_data?.telegram_channel || "/"}
                    className="col-span-1 bg-[#0072C4] h-[164px] flex items-center rounded-[12px]">
                    <div className="mx-auto">
                        <div className="size-[30px] mx-auto my-[15px]">
                            <TelegramIcon />
                        </div>
                        <p className="text-[#FFFFFF] text-[13px] font-[900] text-center">کانال تلگرام</p>
                    </div>
                </Link>
                <Link href={footer_data?.whatsapp_support || "/"}
                    className="col-span-1 bg-[#00B167] h-[164px] flex items-center rounded-[12px]">
                    <div className="mx-auto">
                        <div className="size-[30px] my-[15px] mx-auto">
                            <WhatsAppIcon />
                        </div>
                        <p className="text-[#FFFFFF] text-[13px] font-[900] text-center">پشتیبانی واتسپ</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}; export default FooterSocials;