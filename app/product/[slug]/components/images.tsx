import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { ProductDetailType } from "@/components/types/product";
import Car2Icon from "@/components/icons/product/car2";


const ProductImage = ({ url }: { url: string }) => {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <div className="w-[180px] h-[220px] relative mx-auto">
                    <Image
                        src={url}
                        alt="image"
                        sizes="100%"
                        fill={true}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            </div>
        </div>
    )
};

const ProductImages: FC<ProductDetailType> = ({ main_image, images }) => {
    return (
        <div>
            <div className="border-[1px] border-[#E1E8EF] rounded-[30px] p-4 bg-[#FBFDFE]">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                >
                    <SwiperSlide>
                        {
                            main_image && <ProductImage
                                url={main_image}
                            />
                        }
                    </SwiperSlide>
                    {
                        images.map((url, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProductImage
                                        url={url.image}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="grid grid-cols-4 gap-3 my-6">
                {
                    images.filter((item, i) => i < 4).map((image, index) => {
                        return (
                            <div className="p-3 border-[1px] border-[#E1E8EF] rounded-[22px]
                                    bg-[#FBFDFE]" key={index}>
                                <div className="w-[30px] h-[45px] relative mx-auto">
                                    <Image
                                        src={image.image}
                                        alt="image"
                                        fill={true}
                                        sizes="100%"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="border-b-[1.1px] border-[#0163A9] rounded-[39px] p-4 bg-[#F5F8FA]
                    flex items-center justify-between">
                <div className="flex items-center justify-start gap-6">
                    <p className="text-[#374550] text-[15px] font-[700]">بررسی سازگاری</p>
                    <p className="text-[#8E98AD] text-[13px] font-[500]">برای انواع خودرو ها</p>
                </div>
                <div className="size-[24px]">
                    <Car2Icon />
                </div>
            </div>
        </div>
    )
}; export default ProductImages;