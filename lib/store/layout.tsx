import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FooterType } from "@/components/types/footer";
import { UserType } from "@/components/types/user";
import api from "@/lib/axios";


interface LayoutStoreType {
    footer_data: FooterType | null,
    fetchData: () => void,
    user_data: UserType | null,
}


const useLayoutStore = create<LayoutStoreType>()(
    persist(
        (set) => ({
            footer_data: null,
            fetchData: async () => {
                const response = await api.get("/template/layout/");
                set({ footer_data: response.data.footer });
            },
            user_data: null,
        }),
        {
            name: "footer",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
); export default useLayoutStore;
