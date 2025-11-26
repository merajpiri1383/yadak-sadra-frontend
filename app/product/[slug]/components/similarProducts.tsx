import Product from "@/app/product/category/[slug]/components/product";
import { ProductType } from "@/components/types/product";


const SimilarProducts = ({ products } : {products : ProductType[]}) => {
    return (
        <div className="bg-linear-to-b from-[#F5F8FA] to-[#FFFFFF] py-12 px-20">
            <p className="text-[#121215] text-[20px] font-[700]">محصولات مشابه</p>
            <div className="w-[100%] h-[1px] bg-[#E0E6EE] my-6"></div>
            <div className="grid grid-cols-4 gap-6">
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="col-span-1">
                                <Product {...product} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};export default SimilarProducts;