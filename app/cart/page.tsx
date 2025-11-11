"use client"
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { getCartDetail } from "@/lib/api/cart";


const CartProduct = dynamic(() => import("@/app/cart/components/cartProduct"), { ssr: true });
const Summary = dynamic(() => import("@/app/cart/components/summary"), { ssr: false });

const Page = () => {

    const query = useQuery({
        queryKey: ["cart-detail"],
        queryFn: getCartDetail,
    });

    return (
        <section className="grid grid-cols-10 gap-6 px-20 pb-20">
            <div className="col-span-7 border-[1px] border-[#00000017] rounded-[30px] p-6 h-fit">
                <p className="text-[#121215] font-[700] text-[18px]">سبد خرید</p>
                {
                    query.data?.cart_products.map((cart_product) => {
                        return (
                            <CartProduct
                                count={cart_product.count}
                                product={cart_product.product}
                                key={cart_product.product.id}
                            />
                        )
                    })
                }
            </div>
            <div className="col-span-3 relative">
                {
                    query.data && <Summary
                        price_to_pay={query.data.total_price}
                        product_count={query.data.cart_products.length}
                        total_price={query.data.total_price}
                    />
                }
            </div>
        </section>
    )
}; export default Page;