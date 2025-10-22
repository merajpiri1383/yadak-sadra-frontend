import ArrowFromTopIcon from "@/components/icons/product/arrowFromTop";
import ArrowFromDownIcon from "@/components/icons/product/arrowFromDown";
import { CarBrandsType, CountryType } from "@/components/types";
import { FC, useState } from "react";


type Filter = "brand" | "country" | "all";

interface Props {
    brands: CarBrandsType[],
    countries: CountryType[],
}

const ProductFilter: FC<Props> = ({ brands, countries }) => {

    const [currentFilterOpen, setFilterOpen] = useState<Filter>("all");

    return (
        <div className="bg-[#F5F8FA] border-[0.5px] border-[#BBC2D8] rounded-[20px]">
            <div className="flex items-center justify-between border-b-[0.5px] border-[#BBC2D8]">
                <p className="text-[#121215] font-[700] text-[15px] p-4">برند ها</p>
                <div className="p-4 border-r-[0.5px] border-[#BBC2D8] cursor-pointer group">
                    <div
                        onClick={()=> currentFilterOpen === "brand" ? setFilterOpen("all") : setFilterOpen("brand")} 
                        className="size-[18px] group-active:scale-115 transition duration-300">
                        {
                            currentFilterOpen === "brand" ? 
                            <ArrowFromTopIcon color="#536683" /> : 
                            <ArrowFromDownIcon color="#536683" />
                        }
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-[#121215] font-[700] text-[15px] p-4">کشور سازنده</p>
                <div className="p-4 border-r-[0.5px] border-[#BBC2D8] cursor-pointer group">
                    <div 
                        onClick={()=> currentFilterOpen === "country" ? setFilterOpen("all") : setFilterOpen("country")}
                        className="size-[18px] group-active:scale-115 transition duration-300">
                        {
                            currentFilterOpen === "country" ? 
                            <ArrowFromTopIcon color="#536683" /> : 
                            <ArrowFromDownIcon color="#536683" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}; export default ProductFilter;