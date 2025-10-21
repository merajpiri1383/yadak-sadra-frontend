"use client"
import Link from "next/link";
import useLayoutStore from "@/lib/store/layout";

const FooterLinks = () => {

    const { footer_data } = useLayoutStore();

    return (
        <div className="mt-12">
            <div className="grid grid-cols-3">
                {
                    footer_data?.group_links.map((group_link, index) => {
                        return (
                            <div className="col-span-1" key={index}>
                                <p className="text-[#FFFFFF] text-[14px] font-bold
                                border-b pb-4 border-gray-500/50">{group_link.title}</p>
                                {
                                    group_link.links.map((link, link_index) => {
                                        return (
                                            <Link href={link.url} key={link_index}>
                                                <p className="text-[#FFFFFFBF] text-[12px] font-[500]
                                                transition duration-400 my-4
                                                hover:text-[#FFFFFF] hover:font-[700]">{link.title}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-3 "></div>
        </div>
    )
}; export default FooterLinks;