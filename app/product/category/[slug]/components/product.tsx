"use client"
import { FC, useState } from "react";
import Image from "next/image";
import { ProductType } from "@/components/types/product";
import SubtractIcon from "@/components/icons/header/subtract";
import CarIcon from "@/components/icons/product/car";
import PlusIcon from "@/components/icons/product/plus";
import MinusIcon from "@/components/icons/product/minus";



const Product: FC<ProductType> = (props) => {

    const [count, setCount] = useState<number>(0);

    return (
        <div className="border-[1px] border-[#E6E6E6] rounded-[32px] p-6 select-none">
            <div className="flex items-center justify-between">
                <div className="size-[22px] relative">
                    {
                        props?.country.flag && <Image
                            src={props.country.flag}
                            alt={props.country.slug}
                            fill={true}
                            className="rounded-full"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    }
                </div>
                <p className="text-[#626C81] text-[14px] font-[700]">{props?.brand?.name}</p>
            </div>

            <div className="h-[147px] w-[160px] relative mx-auto my-3">
                {
                    props.main_image && <Image
                        src={props.main_image}
                        alt={props.title}
                        fill={true}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                }
            </div>
            <p className="text-center my-3 w-[250px] mx-auto h-5
                text-[14px] text-[#1E222B] font-[700] overflow-hidden">{props.title}</p>

            <div className="mx-auto flex items-center justify-between w-fit border-[1px] 
                border-[#E7EBF3] rounded-full">
                <div className="bg-[#E7EBF3] p-2 rounded-full px-4">
                    <p className="text-[#1E222B] text-[12px] font-[700]">اصلی</p>
                </div>
                <p className="text-[#3B4251] text-[12px] font-[500] p-2 px-4">تحت لیسانس</p>
            </div>
            <div className="text-center mt-4 flex items-center justify-center gap-2">
                <p className="text-[#1E222B] text-[20px] font-[700]">{props.price.toLocaleString()}</p>
                <span className="text-[#7882A0] text-[13px] font-[500]">تومان</span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
                <div className="size-[43px] flex items-center justify-center bg-[#0867AB] rounded-full">
                    <div className="w-[23px] h-[19px]">
                        <CarIcon />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 h-[43px] bg-[#F0F3F8] p-2 rounded-full">
                    <div className="bg-white size-[29px] rounded-full flex items-center justify-center
                        cursor-pointer active:scale-115 transition duration-200"
                        onClick={() => setCount(count + 1)}>
                        <div className="size-[7px]">
                            <PlusIcon />
                        </div>
                    </div>
                    <p className="text-[#5D6777] font-bold text-[16px]">{count}</p>
                    <div className="bg-white size-[29px] rounded-full flex items-center justify-center
                        cursor-pointer active:scale-115 transition duration-200"
                        onClick={() => setCount(count < 1 ? 0 : count - 1)}>
                        <div className="size-[7px]">
                            <MinusIcon />
                        </div>
                    </div>
                </div>
                <div className="size-[43px] flex items-center justify-center bg-[#00C2DC] rounded-full">
                    <div className="w-[23px] h-[19px]">
                        <SubtractIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}; export default Product;