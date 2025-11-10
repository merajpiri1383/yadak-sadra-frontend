"use client"
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PlusIcon from "@/icons/product/plus";
import MinusIcon from "@/icons/product/minus";
import { addProductCart, getCartDetail, removeProductCart } from "@/lib/api/cart";
import { CartProductType } from "@/components/types/cart";
import useLayoutStore from "@/lib/store/layout";
import EmptyCartLogo from "@/public/empty-cart-logo.svg";



const CartProduct: FC<CartProductType> = ({ count, product }) => {

    const qeuryclient = useQueryClient();

    const addProductCartMutation = useMutation({
        mutationFn: addProductCart,
        onSuccess: () => {
            qeuryclient.invalidateQueries({ queryKey: ["cart-detail"] })
        }
    });

    const removeProductCartMutation = useMutation({
        mutationFn: removeProductCart,
        onSuccess: () => {
            qeuryclient.invalidateQueries({ queryKey: ["cart-detail"] })
        }
    })

    return (
        <div className="my-3">
            <p className="mx-auto w-[200px] h-5 overflow-hidden text-right
                text-[#121215] font-[700] text-[14px]">{product.title}</p>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <div className="p-2 px-4 border-[1px] border-[#DCE0E8] rounded-[25px] flex 
                        items-center justify-between my-3">
                        <div className="size-[16px] active:scale-110 transition duration-200"
                            onClick={() => addProductCartMutation.mutate({ product_id: product.id })}>
                            <PlusIcon color="#7E889D" />
                        </div>
                        <p className="text-[#525F6B] font-[700] text-[16px]">{count}</p>
                        <div className="size-[16px] active:scale-110 transtion duration-200"
                            onClick={() => removeProductCartMutation.mutate({ product_id: product.id })}>
                            <MinusIcon color="#7E889D" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-[#1E222B] font-[700] text-[20px]">
                            {product.price.toLocaleString()}
                        </p>
                        <p className="text-[#7882A0] font-[500] text-[13px]">تومان</p>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center my-3">
                    <div className="size-[65px] relative">
                        {
                            product.main_image &&
                            <Image
                                src={product.main_image}
                                alt={product.title}
                                fill={true}
                                sizes="100%"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

const CartPopup = () => {

    const { user_data } = useLayoutStore();
    const query = useQuery({
        queryFn: getCartDetail,
        queryKey: ["cart-detail",],
    });

    return (
        <div className="absolute top-20 z-[21] left-0" onClick={(e) => e.stopPropagation()}>
            <Slide
                direction="up"
                duration={300}
                triggerOnce
                className="bg-[#FFFFFF] rounded-[30px] p-4 w-[300px]">
                {
                    query.data && query.data.cart_products.length > 0 ?
                        <div>
                            <div className="max-h-[350px] mb-4 overflow-y-scroll hide-scrollbar">
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
                            <Link href={"/cart"}>
                                <div className="bg-[#06C3DD] rounded-[37px] p-4">
                                    <p className="text-[#FFFFFF] text-[14px] font-[900] text-center">
                                        سبد خرید</p>
                                </div>
                            </Link>
                        </div> :
                        <div>
                            <div className="w-[75px] h-[80px] relative mx-auto">
                                <Image
                                    src={EmptyCartLogo}
                                    alt="not-login-logo"
                                    fill={true}
                                    sizes="100%"
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>
                            <p className="text-center text-[#3C5164] text-[16px] font-[700]">
                                سبد خرید شما خالی است
                            </p>
                            <p className="text-center text-[#8E98AD] font-[500] text-[12px] my-2">
                                به سبد خود محصول اضافه کنید
                            </p>
                        </div>
                }
            </Slide>
        </div>
    )
}; export default CartPopup;