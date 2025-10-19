"use client"
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { getIndex } from "@/lib/api/index";
import { IndexResponse } from "@/components/types";

const Slider = dynamic(() => import("@/app/components/slider"), { ssr: true });


const HomePageClient = () => {

    const { data } = useQuery<IndexResponse>({
        queryKey: ["index"],
        queryFn: getIndex,
    });

    return (
        <div className="mx-16 my-6 [direction:rtl]">
            {
                data?.slider && <Slider {...data.slider} />
            }
        </div>
    )
}; export default HomePageClient;