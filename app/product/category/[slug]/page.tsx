"use client"
import { useState } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import ArrowLeftIcon from "@/components/icons/home/arrowLeft";
import { useQuery } from "@tanstack/react-query";
import { getProductCategory } from "@/lib/api/product";
import { ProductCategoryResponseType } from "@/components/types/product";

const ProductFilter = dynamic(() => import("@/app/product/category/[slug]/components/filter"), { ssr: false });
const Product = dynamic(() => import("@/app/product/category/[slug]/components/product"), { ssr: false });

interface Order {
    name: string,
    slug: string
}

const Page = () => {

    const { slug } = useParams<{ slug: string }>();

    const { data } = useQuery<ProductCategoryResponseType>({
        queryKey: [slug],
        queryFn: () => getProductCategory(slug)
    });


    const orders: Order[] = [
        {
            name: "جدیدترین",
            slug: "new",
        }, {
            name: "ارزان ترین",
            slug: "cheep",
        }, {
            name: "گران ترین",
            slug: "expense",
        },
    ]

    const [currentOrder, setOrder] = useState<Order>(orders[0]);
    const [countryFilter, setCountryFilter] = useState<string | null>(null);
    const [brandFilter, setBrandFilter] = useState<string | null>(null);


    return (
        <div className="mx-16 mb-16">
            <div className="flex items-center justify-between ">
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-[#8E98AD] text-[12px] font-[500]">صفحه اصلی</p>
                        <div className="size-[16px]">
                            <ArrowLeftIcon color="#8E98AD" />
                        </div>
                        <p className="text-[#8E98AD] text-[12px] font-[500]">
                            {decodeURIComponent(slug).replace("-", " ")}
                        </p>
                    </div>
                </div>
                <div className="w-[85%] h-[1px] bg-[#E8EEF3]"></div>
            </div>

            <div className="grid grid-cols-9 mt-6 border-[#E0E6EE] border-b-[1px]">
                <div className="col-span-2">
                    <p className="text-[#536683] text-[20px] font-bold">فیلتر ها</p>
                </div>
                <div className="col-span-7 flex items-center justify-between">
                    <p className="text-[#121215] text-[20px] font-[700] pb-6">محصولات شمع خودرو</p>
                    <div className="flex items-center justify-center gap-4">
                        {
                            orders.map((order) => {
                                return (
                                    <p key={order.slug} onClick={() => setOrder(order)}
                                        className={` text-[13.5px] cursor-pointer hover:-translate-y-[5px]
                                    transition duration-300
                                    ${currentOrder.slug === order.slug
                                                ? `text-[#0163A9] font-[700]` : `text-[#8E98AD] font-[500]`}`}>
                                        {order.name}
                                    </p>
                                )
                            })
                        }
                    </div>
                    <p className="text-[#8E98AD] text-[13.5px] font-[500]">۴۰۰ محصول</p>
                </div>
            </div>

            <div className="grid grid-cols-9 mt-6">
                <div className="col-span-2">
                    {
                        data?.brands && <ProductFilter
                            brands={data.brands}
                            countries={data.countries}
                            brandFilter={brandFilter}
                            countryFilter={countryFilter}
                            setBrandFilter={setBrandFilter}
                            setCountryFilter={setCountryFilter}
                        />
                    }
                </div>
                <div className="col-span-7"></div>
            </div>
        </div>
    )
}; export default Page;