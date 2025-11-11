import api from "@/lib/axios";
import { ProductType } from "@/components/types/product";

export const getProductCategory = async (
    slug: string,
    sort: string,
    brand: string | null,
    country: string | null,
) => {
    const response = await api.get(
        `/product/category/${slug}/?order=${sort}&brand=${brand ? brand : ""}&country=${country ? country : ""}`
    );
    return response.data;
}


export const searchProduct = async ({ query }: { query: string }): Promise<ProductType[]> => {
    const response = await api.get(`/product/search/?search=${query}/`);
    return response.data;
};

