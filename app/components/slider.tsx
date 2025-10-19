import { FC, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { SliderType } from "@/components/types";
import 'swiper/css';
import ArrowRightIcon from "@/components/icons/home/arrowRight";
import ArrowLeftIcon from "@/components/icons/home/arrowLeft";
import Link from "next/link";



const Slider: FC<SliderType> = ({ boxes, images }) => {

    const swiperRef = useRef<null | SwiperType>(null);

    const swiperNext = () => {
        swiperRef.current?.slidePrev();
    }

    const swiperPrev = () => {
        swiperRef.current?.slideNext();
    }

    return (
        <div className="my-6 grid grid-cols-4 gap-4">
            <div className="col-span-3">
                <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {
                        images.map((image, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="relative h-[430px] rounded-[20px]">
                                        <div className="absolute z-[2] left-6 top-[50%] rounded-[45px]
                                        flex items-center justify-center h-[113px] cursor-pointer
                                        -translate-y-[50%] w-[52px] bg-[#FFFFFF]/15" onClick={swiperPrev}>
                                            <div className="size-[25px]">
                                                <ArrowLeftIcon />
                                            </div>
                                        </div>
                                        <div className="absolute z-[2] right-6 top-[50%] rounded-[45px]
                                        flex items-center justify-center h-[113px] cursor-pointer
                                        -translate-y-[50%] w-[52px] bg-[#FFFFFF]/15" onClick={swiperNext}>
                                            <div className="size-[25px]">
                                                <ArrowRightIcon />
                                            </div>
                                        </div>

                                        <Image
                                            src={image.image_url}
                                            alt="image"
                                            fill={true}
                                            sizes="100%"
                                            className="rounded-[20px]"
                                            style={{ objectFit: "cover", objectPosition: "center" }}
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="col-span-1 gap-4 grid grid-cols-1">
                {
                    boxes?.map((box, index) => {
                        if (index > 2) return null;
                        return (
                            <div key={index} className="col-span-1 relative rounded-[20px] flex items-center
                                justify-center">
                                <Image
                                    src={box.image_url}
                                    alt={box.title}
                                    fill={true}
                                    sizes="100%"
                                    style={{objectFit : "cover",objectPosition : "center"}}
                                    className="rounded-[20px]"
                                />
                                <div className="absolute bg-black/20 top-0 left-0 right-0 bottom-0
                                rounded-[20px]"></div>

                                <div className="relative z-[2] border border-gray-400/20 rounded-full p-3">
                                    <Link className="text-[#FFFFFF] text-[18px]
                                    " href={box.link}>{box.title}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}; export default Slider;