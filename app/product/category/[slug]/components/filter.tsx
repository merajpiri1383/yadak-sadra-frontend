import React, { FC, useRef, useState } from "react";
import "@/app/product/styles.css";
import CheckIcon from "@/components/icons/product/check";
import ActiveCheckIcon from "@/components/icons/product/activeCheck";
import ArrowFromTopIcon from "@/components/icons/product/arrowFromTop";
import ArrowFromDownIcon from "@/components/icons/product/arrowFromDown";
import { CarBrandsType, CountryType } from "@/components/types";


type Filter = "brand" | "country" | "all";

interface Props {
    brands: CarBrandsType[],
    countries: CountryType[],
    countryFilter : string | null,
    setCountryFilter : React.Dispatch<React.SetStateAction<string | null>>,
    brandFilter : string | null,
    setBrandFilter : React.Dispatch<React.SetStateAction<string | null>>,
}

const ProductFilter: FC<Props> = ({ 
    brands, 
    countries,
    brandFilter,
    countryFilter,
    setBrandFilter,
    setCountryFilter,
}) => {

    const [currentFilterOpen, setFilterOpen] = useState<Filter>("all");
    const brandRef = useRef<HTMLDivElement | null>(null);
    const countryRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="bg-[#F5F8FA] border-[0.5px] border-[#BBC2D8] rounded-[20px]">
            <div className="flex items-center justify-between border-b-[0.5px] border-[#BBC2D8]">
                <p className="text-[#121215] font-[700] text-[15px] p-4">برند ها</p>
                <div className="p-4 border-r-[0.5px] border-[#BBC2D8] cursor-pointer group">
                    <div
                        onClick={() => currentFilterOpen === "brand" ?
                            setFilterOpen("all") : setFilterOpen("brand")}
                        className="size-[18px] group-active:scale-115 transition duration-300">
                        {
                            currentFilterOpen === "brand" ?
                                <ArrowFromTopIcon color="#536683" /> :
                                <ArrowFromDownIcon color="#536683" />
                        }
                    </div>
                </div>
            </div>
            <div
                style={{
                    "--brand-height": brandRef.current?.scrollHeight + "px"
                } as React.CSSProperties}
                className={`${currentFilterOpen === "brand" ? "filter-brand-open border-b-[0.5px]"
                : "filter-brand-close"} overflow-hidden  border-[#BBC2D8]`} ref={brandRef}>
                {
                    brands.map((brand) => {
                        return (
                            <div key={brand.slug} onClick={() => setBrandFilter(brand.slug)}
                                className="flex items-center justify-start gap-3 px-4 py-2 cursor-pointer">
                                <div className="size-[20px]">
                                    {
                                        brandFilter === brand.slug ? <ActiveCheckIcon /> : <CheckIcon />
                                    }
                                </div>
                                <p className="text-[#3C5164] text-[14px] font-[700]">{brand.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex items-center justify-between">
                <p className="text-[#121215] font-[700] text-[15px] p-4">کشور سازنده</p>
                <div className="p-4 border-r-[0.5px] border-[#BBC2D8] cursor-pointer group">
                    <div
                        onClick={() => currentFilterOpen === "country"
                            ? setFilterOpen("all") : setFilterOpen("country")}
                        className="size-[18px] group-active:scale-115 transition duration-300">
                        {
                            currentFilterOpen === "country" ?
                                <ArrowFromTopIcon color="#536683" /> :
                                <ArrowFromDownIcon color="#536683" />
                        }
                    </div>
                </div>
            </div>
            <div
                style={{
                    "--country-height": countryRef.current?.scrollHeight + "px"
                } as React.CSSProperties}
                className={`${currentFilterOpen === "country" ? "filter-country-open border-t-[0.5px]"
                    : "filter-county-close"} overflow-hidden  border-[#BBC2D8]`} ref={countryRef}>
                {
                    countries.map((country) => {
                        return (
                            <div key={country.slug} onClick={() => setCountryFilter(country.slug)}
                                className="flex items-center justify-start gap-3 px-4 py-2 cursor-pointer">
                                <div className="size-[20px]">
                                    {
                                        countryFilter === country.slug ? <ActiveCheckIcon /> : <CheckIcon />
                                    }
                                </div>
                                <p className="text-[#3C5164] text-[14px] font-[700]">{country.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}; export default ProductFilter;