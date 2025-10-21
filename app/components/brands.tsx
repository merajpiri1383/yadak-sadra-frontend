"use client"
import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import 'swiper/css';
import { CountryType, CarBrandsType } from "@/components/types/index";
import ArrowLeftIcon from "@/components/icons/home/arrowLeft";
import ArrowRightIcon from "@/components/icons/home/arrowRight";
import MaskGroup from "@/public/Mask Group.svg";


const FilteredBrands: FC<{
    filteredBrands: CarBrandsType[]
}> = ({ filteredBrands }) => {

    const swiperRef = useRef<null | SwiperType>(null);

    return (
        <div className="mt-6 flex items-center justify-between gap-4 -translate-y-[40%] ">
            <div className="bg-[#AABBCF] rounded-full cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}>
                <div className="size-[41px]  flex items-center justify-center cursor-pointer">
                    <div className="size-[20px]">
                        <ArrowRightIcon />
                    </div>
                </div>
            </div>
            <Swiper
                slidesPerView={filteredBrands.length > 5 ? 5 : filteredBrands.length}
                spaceBetween={30}
                loop={true}
                allowTouchMove={false}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    filteredBrands.map((brand) => {
                        return (
                            <SwiperSlide key={brand.slug} className="my-4">
                                <div className="bg-white rounded-[20px] hover:bg-[#0062A9] transition
                                        duration-400 cursor-pointer group justify-center
                                        hover:shadow-[0px_39px_50px_-15px_#0062A96B]
                                        shadow-lg w-[170px] h-[144px] flex items-center ">
                                    <div>
                                        <div className="h-[61px] relative w-[90px]">
                                            <Image
                                                src={brand.logo}
                                                alt={brand.slug}
                                                fill={true}
                                                sizes="100%"
                                                style={{ objectFit: "cover", objectPosition: "center" }}
                                            />
                                        </div>
                                        <p className="text-[#B2BDCB] text-[14px] font-[600]
                                        transition duration-400
                                        text-center mt-3 group-hover:text-white">{brand.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="cursor-pointer bg-[#AABBCF] rounded-full"
                onClick={() => swiperRef.current?.slidePrev()}>
                <div className="size-[41px]  flex items-center justify-center">
                    <div className="size-[20px]">
                        <ArrowLeftIcon />
                    </div>
                </div>
            </div>
            <div>
                <div className="h-[144px] w-[144px] rounded-[20px] bg-[#D80027] flex items-center 
                        justify-center">
                    <div>
                        <div className="size-[61px] relative mx-auto">
                            <Image
                                src={MaskGroup}
                                alt="mask group"
                                fill={true}
                                sizes="100%"
                            />
                        </div>
                        <p className="text-[#FFFFFF] font-[700] text-[15px] 
                            text-center mt-3">همه برند ها خودرو</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


const YadakSadraBrands: FC<{
    yadak_sadra_brands: CarBrandsType[],
}> = ({ yadak_sadra_brands }) => {
    return (
        <div>
            <p className="text-center text-[#015BA5] text-[14px]">
                <span className="font-bold text-[24px]">برند های </span>یدک صدرا</p>
            <div className="flex items-center justify-between gap-4 mt-4 translate-y-[50%]">
                {
                    yadak_sadra_brands.map((brand) => {
                        return (
                            <div key={brand.slug} className="h-[156px] w-[232px] bg-[#FFFFFF] rounded-[11px]
                                inset-shadow-lg shadow-[inset_51px_45px_70px_-30px_#E2E8EF75] flex items-center">
                                <div className="mx-auto">
                                    <div className="mx-auto">
                                        <div className="w-[120] h-[28] relative mx-auto">
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                fill={true}
                                                sizes="100%"
                                                style={{ objectFit: "cover", objectPosition: "center" }}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-[#5C5C77] my-4 font-[500] text-[14px]">
                                        محصولات برند
                                        <span className="font-[700px]">{brand.name}</span>
                                    </p>
                                    <p className="my-4 text-[#8192A7] text-[14px]">مشاهده همه محصولات</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};


const Brands: FC<{
    brand_countries: CountryType[],
    car_brands: CarBrandsType[],
    yadak_sadra_brands: CarBrandsType[],
}> = ({ brand_countries, car_brands, yadak_sadra_brands }) => {

    const [currentCountry, setCountry] = useState("all");
    const [filteredBrands, setFilteredBrands] = useState<CarBrandsType[]>(car_brands);

    useEffect(() => {
        if (currentCountry === "all") {
            setFilteredBrands(car_brands);
        } else {
            setFilteredBrands(car_brands.filter((item) => item.country?.slug === currentCountry))
        }
    },[currentCountry]);

    return (
        <div className="bg-[#E9F0F4] my-12 rounded-[50px] relative py-6 select-none">
            <div className="flex items-center justify-between mx-16">
                <p className="text-[#015BA5] font-[900] text-[24px]">برند های خودرو</p>

                <div className="flex items-center justify-center gap-2">

                    <div
                        onClick={() => setCountry("all")}
                        className={`p-2 rounded-full px-6 cursor-pointer transition duration-400
                        ${currentCountry === "all" ? "bg-[#D7E5ED]" : "bg-[#FFFFFF70]"}`}>
                        <p className="text-[#1F2329] text-[13px]">همه</p>
                    </div>

                    {
                        brand_countries.map((country) => {
                            return (
                                <div key={country.slug}
                                    onClick={() => setCountry(country.slug)}
                                    className={`p-2 rounded-full px-6 cursor-pointer transition duration-400
                                    ${currentCountry === country.slug ? "bg-[#D7E5ED]" : "bg-[#FFFFFF70]"}`}>
                                    <p className="text-[#1F2329] text-[13px]">{country.name}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="p-3 bg-white rounded-full px-6 cursor-pointer">
                    <p className="text-[#708692] text-[13px] font-medium">مشاهده همه</p>
                </div>
            </div>

            <div className="bg-white rounded-[120px] my-24 px-16">
                <FilteredBrands filteredBrands={filteredBrands} />

                <YadakSadraBrands yadak_sadra_brands={yadak_sadra_brands} />
            </div>

        </div>
    )
}; export default Brands;