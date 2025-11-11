import api from "@/lib/axios";
import { CartType } from "@/components/types/cart";

export const addProductCart = async ({ product_id }: { product_id: string }) => {
    const response = await api.post(`/cart/product-cart/${product_id}/`);
    return response.data;
}


export const removeProductCart = async ({ product_id }: { product_id: string }) => {
    const response = await api.delete(`/cart/product-cart/${product_id}/`);
    return response.data;
}


export const getCartDetail = async (): Promise<CartType> => {
    const response = await api.get("/cart/detail/");
    return response.data;
};


export const deleteCartProduct = async ({ product_id }: { product_id: string }) => {
    const response = await api.delete(`/cart/delete-product-cart/${product_id}/`);
    return response.data;
}