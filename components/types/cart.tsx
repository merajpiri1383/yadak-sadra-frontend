import { ProductType } from "@/components/types/product";


export interface CartProductType {
    product: ProductType,
    count: number,
}


export interface CartType {
    cart_products: CartProductType[],
    is_open: boolean,
    is_paid: boolean,
    date: string,
    total_price: number,
}