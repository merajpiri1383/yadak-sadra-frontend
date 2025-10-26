import api from "@/lib/axios";



export const getProductCategory = async (
    slug: string,
    sort: string,
    brand: string | null,
    country: string | null,
) => {
    console.log(brand);
    const response = await api.get(
        `/product/category/${slug}/?order=${sort}&brand=${brand ? brand : ""}&country=${country ? country : ""}`
    );
    return response.data;
}
