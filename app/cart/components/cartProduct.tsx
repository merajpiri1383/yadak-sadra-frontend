import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartProductType } from "@/components/types/cart";
import { addProductCart, removeProductCart, deleteCartProduct } from "@/lib/api/cart";
import TrashIcon from "@/components/icons/cart/trash";
import PlusIcon from "@/components/icons/product/plus";
import MinusIcon from "@/components/icons/product/minus";
import { useMutation, useQueryClient } from "@tanstack/react-query";



const CartProduct: FC<CartProductType> = ({ count, product }) => {

    const queryclient = useQueryClient();

    const addMutation = useMutation({
        mutationFn: addProductCart,
        onSuccess: () => {
            queryclient.invalidateQueries({ queryKey: ["cart-detail"] });
        }
    });

    const removeMutation = useMutation({
        mutationFn: removeProductCart,
        onSuccess: () => {
            queryclient.invalidateQueries({ queryKey: ["cart-detail"] });
        }
    });

    const deleteMutation = useMutation({
        mutationFn: deleteCartProduct,
        onSuccess: () => {
            queryclient.invalidateQueries({ queryKey: ["cart-detail"] });
        }
    })


    return (
        <div className="my-3 border-t border-[#E1E8EF] p-4 select-none">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-4">
                    <div>
                        <div className="size-[102px] bg-[#DEE7ED] rounded-[14px] 
                            flex items-center justify-center">
                            <div className="size-[70px] relative">
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
                    <div>
                        <Link href={"/product/" + product.slug}>
                            <p className="text-[#121215] text-[16px] font-[700]">{product.title}</p>
                        </Link>
                        <div className="flex items-center justify-start gap-2 mt-4">
                            <p className="text-[#1E222B] text-[20px] font-[700]">
                                {product.price.toLocaleString()}
                            </p>
                            <p className="text-[#7882A0]">تومان</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="border-[1px] border-[#D7E0EA] rounded-[46px] p-4 px-5
                        flex items-center justify-between gap-3">
                        <div
                            onClick={() => addMutation.mutate({ product_id: product.id })}
                            className="size-[20px] cursor-pointer active:scale-110 transition">
                            <PlusIcon color="#3C5164" />
                        </div>
                        <p className="text-[#121215] text-[18px] font-[700]">{count}</p>
                        <div
                            onClick={() => removeMutation.mutate({ product_id: product.id })}
                            className="size-[20px] cursor-pointer active:scale-110 transition">
                            <MinusIcon color="#3C5164" />
                        </div>
                    </div>
                    <div className="bg-[#F5F8FA] size-[58px] rounded-full flex items-center justify-center
                        shadow-[0px_2px_4px_0px_#3C516421] cursor-pointer transition active:scale-110"
                        onClick={() => deleteMutation.mutate({ product_id: product.id })}>
                        <div className="size-[20px]">
                            <TrashIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default CartProduct;