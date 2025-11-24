import Link from "next/link";
import BookmarkIcon from "@/components/icons/header/bookmark";
import ShareIcon from "@/components/icons/product/share";
import ArrowLeftIcon from "@/components/icons/home/arrowLeft";
import { FC } from "react";
import { ProductType } from "@/components/types/product";


const ProductHead: FC<ProductType> = (props) => {
    return (
        <div className="flex items-center justify-between border-y py-4 border-[#E8EEF3]">
            <div className="flex items-center justify-center gap-3">
                <Link href={"/"}>
                    <p className="text-[#8E98AD] font-[500] text-[12px]">صفحه اصلی</p>
                </Link>
                <div className="size-[25px]">
                    <ArrowLeftIcon color="#D8DFEE" />
                </div>
                <Link href={"/product/category/" + props.category.slug}>
                    <p className="text-[#8E98AD] font-[500] text-[12px]">
                        {props.category.title}
                    </p>
                </Link>
                <div className="size-[25px]">
                    <ArrowLeftIcon color="#D8DFEE" />
                </div>
                <Link href={"/product/category/" + props.brand?.slug}>
                    <p className="text-[#8E98AD] font-[500] text-[12px]">
                        {props.brand?.name}
                    </p>
                </Link>
                <div className="size-[25px]">
                    <ArrowLeftIcon color="#D8DFEE" />
                </div>
                <p className="text-[#3C5164] text-[12px] font-[500]">
                    {props.title}
                </p>
            </div>
            <div className="flex items-center justify-center gap-8">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[#0163A9] text-[12px] font-[700]">اشتراک گذاری</p>
                    <div className="size-[20px]">
                        <ShareIcon />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[#0163A9] text-[12px] font-[700]">افزودن به علاقه مندی</p>
                    <div className="size-[20px]">
                        <BookmarkIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}; export default ProductHead;