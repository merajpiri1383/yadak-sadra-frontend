"use client"
import { FC, useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { useMutation } from "@tanstack/react-query";
import { searchProduct } from "@/lib/api/product";
import { ProductType } from "@/components/types/product";
import SearchIcon from "@/icons/header/search";
import LeftArrowBoxIcon from "@/icons/header/leftArrowBox";
import Link from "next/link";




const SearchResult: FC<{
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    products?: ProductType[],
}> = ({ setShow, products }) => {

    return (
        <div className="absolute z-[20] top-20 right-0">
            <div
                onClick={() => setShow(false)}
                className="fixed top-0 left-0 bottom-0 right-0 bg-[#3445501F]"></div>
            <Slide direction="down" duration={300}>
                <div className="bg-white w-[600px] p-6 relative rounded-[30px]">
                    {
                        products && products.length > 0 ? products.map((product) => {
                            return (
                                <Link key={product.id} href={"/product/" + product.slug}>
                                    <div className="border-b border-[#E1E8EF] py-6 
                                    flex items-center justify-between">
                                        <p className="text-[#3C5164] text-[14px] font-[700]">
                                            {product.title}
                                        </p>
                                        <div className="size-[18px]">
                                            <LeftArrowBoxIcon />
                                        </div>
                                    </div>
                                </Link>
                            )
                        }) : <p className="text-[#3C5164] text-[14px] font-[700]">موردی یافت نشد</p>
                    }
                </div>
            </Slide>
        </div>
    )
};

const HeaderSearch = () => {

    const [showResult, setShowResult] = useState<boolean>(false);
    let timeoutId: number;

    const mutation = useMutation({
        mutationFn: searchProduct,

    })

    const queryChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (timeoutId) {
            window.clearTimeout(timeoutId);
            mutation.reset();
        }
        timeoutId = window.setTimeout(() => {
            mutation.mutate({ query: e.target.value });
        }, 1500);
        setShowResult(true);
    };


    const hideResultHandler = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (window) {
            window.addEventListener("click", hideResultHandler);
        }
        return () => window.removeEventListener("click", hideResultHandler);
    }, []);

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#E9F0F4] p-4 flex items-center justify-between rounded-[53px] w-[280px] relative">
            <input
                type="text"
                placeholder="جستجو در محصولات ..."
                onChange={queryChangeHandler}
                className="outline-none placeholder-[#4C6272F8] placeholder-[13px] font-bold"
            />
            <div className="size-[22px]">
                <SearchIcon />
            </div>
            {
                showResult && <SearchResult
                    setShow={setShowResult}
                    products={mutation.data}
                />
            }
        </div>
    )
}; export default HeaderSearch;