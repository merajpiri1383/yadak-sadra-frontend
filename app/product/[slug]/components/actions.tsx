"use client"
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { ProductDetailType } from "@/components/types/product";
import { addProductCart } from "@/lib/api/cart";
import AwardIcon from "@/components/icons/footer/award";
import SendIcon from "@/components/icons/product/send";
import BoxIcon from "@/components/icons/product/box";
import CheckSquareIcon from "@/components/icons/product/checkSquare";
import PlusIcon from "@/components/icons/product/plus";
import MinusIcon from "@/components/icons/product/minus";
import useLayoutStore from "@/lib/store/layout";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";


const Actions: FC<ProductDetailType> = (props) => {

    const [count, setCount] = useState<number>(0);
    const router = useRouter();
    const { user_data } = useLayoutStore();

    const mutation = useMutation({
        mutationFn: addProductCart,
        onError: (error: AxiosError) => {
            if (error.response && error.response.status === 401) {
                router.push("/auth/login");
            }
        },
        onSuccess: (data) => {
            console.log(data);
        }
    })


    const addCartHandler = () => {
        if (user_data) {
            mutation.mutate({
                product_id: props.id,
            })
        } else {
            router.push("/auth/login");
        }
    };


    return (
        <>
            <div className="border-[#DEE8EE] border-[1px] rounded-[30px] bg-[#F5F8FA] p-4">
                <div className="flex items-center justify-between gap-2 my-2">
                    <div className="size-[24px]">
                        <AwardIcon />
                    </div>
                    <div className="w-full border-b border-[#DEE6EF] py-2">
                        <p className="text-[#3C5164] text-[12px] font-[700]">
                            گارانتی اصالت و سلامت فیزیکی کالا
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 my-2">
                    <div className="size-[24px]">
                        <SendIcon />
                    </div>
                    <div className="w-full border-b border-[#DEE6EF] py-2">
                        <p className="text-[#3C5164] text-[12px] font-[700]">
                            ارسال رایگان برای خرید تکی محصول
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 my-2">
                    <div className="size-[24px]">
                        <BoxIcon />
                    </div>
                    <div className="w-full border-b border-[#DEE6EF] py-2">
                        <p className="text-[#3C5164] text-[12px] font-[700]">ارسال از 1 روز کاری دیگر</p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 my-2">
                    <div className="size-[24px]">
                        <CheckSquareIcon />
                    </div>
                    <div className="w-full py-2">
                        <p className="text-[#3C5164] text-[12px] font-[700]">
                            موجود در انبار یدک‌صدرا
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-[#CD1536] text-[13px] font-[700] my-6">حداقل تعداد سفارش : 1</p>

            <div className="flex items-center justify-between p-6 rounded-[36px] border-[1px]
                border-[#E1E8EF] bg-[#F5F8FA]">
                <p className="text-[#596A7D] text-[13px] font-[700]">انتخاب تعداد</p>
                <div className="flex items-center justify-center gap-3">
                    <div className="size-[20px] cursor-pointer"
                        onClick={() => setCount(count + 1)}>
                        <PlusIcon />
                    </div>
                    <p className="text-[#4C5A66] text-[24px] font-[700]">{count}</p>
                    <div className="size-[20px] cursor-pointer"
                        onClick={() => setCount(count > 1 ? count - 1 : 0)}>
                        <MinusIcon />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between my-6">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[#121215] text-[24px] font-[700]">
                        {(props.price * count).toLocaleString()}
                    </p>
                    <p className="text-[#7882A0] text-[13px] font-[500]">تومان</p>
                </div>
                <button className={`bg-[#00C2DC] rounded-[43px] p-4 
                    ${count > 0 ? "cursor-pointer" : "cursor-not-allowed"}`}
                    onClick={addCartHandler}
                    disabled={count < 1}>
                    <p className="text-center text-[#FFFFFF] text-[15px] font-[900]">افزودن به سبد</p>
                </button>
            </div>
        </>
    )
}; export default Actions;