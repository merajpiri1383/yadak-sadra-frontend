import api from "@/lib/axios";



export const getIndex = async () => {
    const result = await api.get("/template/index/");
    return result.data;
}