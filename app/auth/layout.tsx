import { FC } from "react";
import Image from "next/image";
import QuestionIcon from "@/components/icons/auth/question";
import MessageIcon from "@/components/icons/auth/message";
import Logo from "@/public/logo-footer.svg";
import { Slide } from "react-awesome-reveal";


const AuthLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section className="my-16 border-[1px] border-[#00000017] w-fit mx-auto p-4 bg-[#FFFFFF] rounded-[30px]
            shadow-[0px_30px_70px_0px_#12121508] grid grid-cols-2 gap-4">
            <div className="col-span-1">
                <Slide direction="right" duration={300} triggerOnce>
                    {children}
                </Slide>
            </div>
            <div className="col-span-1">
                <Slide direction="left" duration={300} triggerOnce>
                    <div className="w-[372px] bg-[#0062A9] rounded-[30px] p-4">
                        <p className="text-[#FFFFFF] text-[14px] font-[700] mt-6">حساب کاربری جدید</p>
                        <p className="text-[#C5CADB] font-[300] text-[13px] my-2">
                            جهت روند ادامه خرید نیاز
                            به وارد شدن به حساب کاربری شخصی خود در سایت یدک صدرا دارید .</p>

                        <div className="mt-6 flex items-center justify-start gap-4">
                            <div className="flex items-center justify-center gap-2">
                                <div className="size-[18px]">
                                    <QuestionIcon />
                                </div>
                                <p className="text-[#E4E8F1] font-[300] text-[12px]">راهنما</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="size-[18px]">
                                    <MessageIcon />
                                </div>
                                <p className="text-[#E4E8F1] font-[300] text-[12px]">پشتیبانی</p>
                            </div>
                        </div>

                        <div className="w-[350px] h-[300px] relative mt-6">
                            <Image
                                src={Logo}
                                alt="logo"
                                fill={true}
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                className="opacity-[4%]"
                            />
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}; export default AuthLayout;