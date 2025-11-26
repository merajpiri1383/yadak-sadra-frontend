import dynamic from "next/dynamic";
import { getProductDetail } from "@/lib/api/product";


const ProductHead = dynamic(() => import("@/app/product/[slug]/components/productHead"), { ssr: true });
const Actions = dynamic(() => import("@/app/product/[slug]/components/actions"), { ssr: true });
const ProductImages = dynamic(() => import("@/app/product/[slug]/components/images"), { ssr: true })
const ProductDetail = dynamic(() => import("@/app/product/[slug]/components/detail"), { ssr: true });
const Features = dynamic(() => import("@/app/product/[slug]/components/features"), { ssr: true });
const SimilarProducts = dynamic(() => import("@/app/product/[slug]/components/similarProducts"),{ssr : true})

interface PageProps {
    params: {
        slug: string,
    }
}

const Page = async ({ params }: PageProps) => {

    const decodedSlug = decodeURI(params.slug);

    const result = await getProductDetail({ slug: decodedSlug });

    return (
        <section className="pb-20">
            {
                result && <ProductHead {...result} />
            }
            <div className="grid grid-cols-12 gap-6 my-6 px-20">
                <div className="col-span-3">
                    {
                        result && <ProductImages {...result} />
                    }
                </div>
                <div className="col-span-6">
                    {
                        result && <ProductDetail {...result} />
                    }
                </div>
                <div className="col-span-3 select-none">
                    {
                        result && <Actions {...result} />
                    }
                </div>
            </div>

            <Features />

            {
                result && <SimilarProducts products={result.similar_products} />
            }
        </section>
    )
}; export default Page;