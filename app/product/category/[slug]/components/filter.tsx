import ArrowFromTopIcon from "@/components/icons/product/arrowFromTop";
import ArrowFromDownIcon from "@/components/icons/product/arrowFromDown";
import { CarBrandsType,CountryType } from "@/components/types";
import { FC, useState } from "react";


type Filter = "brand" | "country" | "all";

interface Props {
    brands : CarBrandsType[],
    countries : CountryType[],
}

const ProductFilter : FC<Props> = ({ brands , countries }) => {

    const [currentFilterOpen,setFilterOpen] = useState<Filter>("all");

    return (
        <div className="bg-[#F5F8FA] border-[0.5px] border-[#BBC2D8] rounded-[20px]">
            <div className="flex items-center justify-between p-4">
                <p className="text-[#121215] font-[700] text-[15px]">برند ها</p>
                <div className="size-[18px]">
                    <ArrowFromDownIcon color="#536683" />
                </div>
            </div>
        </div>
    )
};export default ProductFilter;