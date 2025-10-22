import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductCategoryType } from "@/components/types";


const ProductCategories: FC<{
    categories: ProductCategoryType[],
}> = ({ categories }) => {
    return (
        <div className="mx-16 my-6 grid grid-cols-5 gap-6">
            {
                categories.map((category) => {
                    return (
                        <Link href={"/product/category/" + category.slug} key={category.slug}
                            className="shadow-lg rounded-[30px] hover:-translate-y-[10px] transition
                            duration-300">
                            <div className="border-dashed border border-[#E2E8EF] rounded-[30px] p-6 pb-0
                                shadow-[inset_51px_45px_70.3px_-30px_#B6BED038,81px_81px_96.6px_-104px_#E2E8EF] ">
                                <p className="text-center text-[#5C5C77] font-[900]
                                    text-[20px]">{category.title}</p>
                                <p className="text-center text-[#8192A7] text-[12px]
                                    font-[500] my-6">مشاهده همه محصولات</p>

                                <div className="w-full h-[150px] relative">
                                    <Image
                                        src={category.image}
                                        alt={category.slug}
                                        fill={true}
                                        className="rounded-[30px]"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}; export default ProductCategories;