"use client"
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { getIndex } from "@/lib/api/index";
import { IndexResponse } from "@/components/types";

const Slider = dynamic(() => import("@/app/components/slider"), { ssr: true });
const Brands = dynamic(() => import("@/app/components/brands"), { ssr: true });
const CarToolsTypes = dynamic(() => import("@/app/components/carToolsTypes"), { ssr: true });
const ProductCategories = dynamic(() => import("@/app/components/productCategories"), { ssr: true });


const HomePageClient = () => {

    const { data } = useQuery<IndexResponse>({
        queryKey: ["index"],
        queryFn: getIndex,
    });

    return (
        <div className="my-6 [direction:rtl]">
            {
                data?.slider && <Slider {...data.slider} />
            }
            {
                data?.brand_countries && data?.yadak_sadra_brands &&
                <Brands
                    brand_countries={data.brand_countries}
                    car_brands={data.car_brands}
                    yadak_sadra_brands={data.yadak_sadra_brands}
                />
            }
            {
                data?.product_categories && <ProductCategories categories={data?.product_categories} />
            }
            <CarToolsTypes />
        </div>
    )
}; export default HomePageClient;