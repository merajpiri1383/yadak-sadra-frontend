import api from "@/lib/axios";



export const getProductCategory = async (slug : string) => {
    const response = await api.get(`/product/category/${slug}/`);
    return response.data;
}
