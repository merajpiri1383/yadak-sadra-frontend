import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/lib/api/product";
import api from "@/lib/axios";
import { ProductCategoryResponseType } from "@/components/types/product";


const ProductHead = dynamic(() => import("@/app/product/[slug]/components/productHead"), { ssr: true });
const Actions = dynamic(() => import("@/app/product/[slug]/components/actions"), { ssr: true });
const ProductImages = dynamic(() => import("@/app/product/[slug]/components/images"), { ssr: true })
const ProductDetail = dynamic(() => import("@/app/product/[slug]/components/detail"), { ssr: true });
const Features = dynamic(() => import("@/app/product/[slug]/components/features"), { ssr: true });

interface PageProps {
    params : {
        slug : string,
    }
}

const Page = async ({ params } : PageProps) => {

    const decodedSlug = decodeURI(params.slug);

    const result = await getProductDetail({slug : decodedSlug});

    console.log(result);

    return (
        <section className="px-20 pb-20">
            {/* {
                query.data && <ProductHead {...query.data} />
            }
            <div className="grid grid-cols-12 gap-6 my-6">
                <div className="col-span-3">
                    {
                        query.data && <ProductImages {...query.data} />
                    }
                </div>
                <div className="col-span-6">
                    {
                        query.data && <ProductDetail {...query.data} />
                    }
                </div>
                <div className="col-span-3 select-none">
                    {
                        query.data && <Actions {...query.data} />
                    }
                </div> */}
            {/* </div> */}
        </section>
    )
}; export default Page;