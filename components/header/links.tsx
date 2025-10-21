import Link from "next/link";
import CallIcon from "@/icons/header/call";

const HeaderLinks = () => {

    const links: { text: string, url: string }[] = [
        {
            text: "سوالات متداول",
            url: "/"
        }, {
            text: "درباره ما",
            url: "/"
        }, {
            text: "تماس با ما",
            url: "/"
        }, {
            text: "قوانین سایت",
            url: "/"
        }, {
            text: "راهنمای خرید",
            url: "/"
        }, {
            text: "صدرا رسانه",
            url: "/"
        }, {
            text: "صدرا تیوب",
            url: "/"
        }, {
            text: "صدرا ساپورت",
            url: "/"
        },
    ];

    return (
        <div className="px-16 py-4 flex items-center justify-between border-b-[1px] 
            border-[#E8EEF3] pb-2 sticky top-0 left-0 right-0 shadow-xl z-[5] bg-white">
            <div className="flex items-center justify-start gap-10">
                {
                    links.map((link, index) => {
                        return (
                            <Link href={link.url} key={index}>
                                <p className="text-[#495C72] text-[12px] font-medium">{link.text}</p>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="flex items-center justify-start gap-4">
                <div className="size-[42px] bg-[#0062A9] rounded-full flex items-center justify-center">
                    <div className="size-[20px]">
                        <CallIcon />
                    </div>
                </div>
                <div className="[direction:ltr] text-right">
                    <p className="text-[#4C6272] text-[12px] font-semibold">تماس مستقیم با پشتیبانی</p>
                    <p className="text-[#0062A9] font-bold text-[16px]">031 91620062</p>
                </div>
            </div>
        </div>
    )
}; export default HeaderLinks;