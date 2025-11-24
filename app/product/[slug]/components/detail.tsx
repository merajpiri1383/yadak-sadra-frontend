import { FC } from "react";
import Image from "next/image";
import { ProductDetailType } from "@/components/types/product";



const ProductDetail: FC<ProductDetailType> = (props) => {
    return (
        <>
            <div className="flex items-center justify-between border-b border-[#E1E8EF] py-3">
                <p className="overflow-hidden w-[380px] h-8 text-[#121215] text-[24px]
                font-[700]">{props.title}</p>
                <div className="h-8 w-[100px] relative">
                    {
                        props.brand.logo &&
                        <Image
                            src={props.brand.logo}
                            alt={props.brand.name}
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    }
                </div>
            </div>

            {
                props.short_description !== "nan" && <div className="my-6">
                    <div className="flex items-center justify-between gap-3 my-4">
                        <div className="w-[150px] bg-[#88A0B1] p-2 rounded-[43px]">
                            <p className="text-[#FFFFFF] text-[12px] font-[900] text-center">خلاصه توضیحات</p>
                        </div>
                        <div className="h-[1px] w-full bg-[#E1E8EF]"></div>
                    </div>
                    <p className="text-[#8E98AD] text-justify text-[12px] font-[700] leading-8">
                        {props.short_description}</p>
                </div>
            }
            <div>
                <div className="flex items-center justify-between gap-3 my-4">
                    <div className="w-[170px] bg-[#88A0B1] p-2 rounded-[43px]">
                        <p className="text-[#FFFFFF] text-[12px] font-[900] text-center">ویژگی های محصول</p>
                    </div>
                    <div className="h-[1px] w-full bg-[#E1E8EF]"></div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {
                        props.product_features.map((feature, index) => {
                            return (
                                <div className="flex items-center justify-between gap-3" key={index}>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="size-[12px] rounded-full 
                                        border-[2px] border-[#00C2DC]"></div>
                                        <p className="text-[#3C5164] text-[13px] font-[700]">{feature.key}</p>
                                    </div>
                                    <p className="h-5 w-[100px] overflow-hidden text-[13px]
                                    text-[#0163A9] font-[700]">{feature.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}; export default ProductDetail;