import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import CitroenCar from "@/public/images/citroen-car.jpg";
import CitroenLogo from "@/public/images/citroen-logo.png";
import IranianCar from "@/public/images/iranian-car.jpg";
import VolvoCar from "@/public/images/volvo-car.jpg";
import VolvoLogo from "@/public/images/volvo-logo.png";
import CheryImage from "@/public/images/chery.jpg";
import LexusCar from "@/public/images/lexus-car.png";
import LexusLogo from "@/public/images/lexus-logo.png";

const CarToolsTypes = () => {
    return (
        <div className="mx-16 grid grid-cols-5 gap-4 my-14">
            <Slide
                direction="right" duration={400} triggerOnce
                className="col-span-1 bg-[#054B7E] rounded-[30px]">
                <div>
                    <div className="text-center text-[#FFFFFF] m-4">
                        <p className="text-[16px] font-[500]">انواع قطعات خودرو های</p>
                        <p className="text-[22px] font-[900]">تویوتا و لکسوس</p>
                        <p className="text-[12px] font-[500] mt-4">مشاهده همه محصولات</p>
                    </div>
                    <div className="w-full h-[170px] relative">
                        <div className="absolute top-0 left-0 right-0 bottom-0  z-[2]
                    rounded-b-[20px] bg-gradient-to-b 
                    from-[#054B7E] to-[#054B7E00]"></div>
                        <Image
                            src={LexusLogo}
                            alt="lexus-logo"
                            fill={true}
                            className="z-[3]"
                            style={{ objectFit: "contain", objectPosition: "center" }}
                        />
                        <Image
                            src={LexusCar}
                            alt="lexus-car"
                            fill={true}
                            sizes="100%"
                            className="rounded-b-[20px] opacity-[60%]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </Slide>
            <div className="col-span-2 grid grid-cols-1 gap-4">
                <Slide
                    direction="down" duration={400} triggerOnce
                    className="col-span-1 bg-[#25212B] rounded-[20px]">
                    <div className="grid grid-cols-2 items-center h-full">
                        <div className="col-span-1">
                            <div className="text-[#FFFFFF] text-center">
                                <p className="text-[16px] font-[500]">انواع قطعات خودرو های</p>
                                <p className="text-[22px] font-[900]">جک و چری</p>
                            </div>
                        </div>
                        <div className="col-span-1 relative h-full">
                            <div className="absolute top-0 left-0 right-0 bottom-0  z-[2]
                                rounded-l-[20px] bg-gradient-to-l
                                from-[#25212B] to-[#25212B00]"></div>
                            <Image
                                src={CheryImage}
                                alt="chery-image"
                                fill={true}
                                className="rounded-l-[20px]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                    </div>
                </Slide>
                <Slide
                    direction="up" duration={400} triggerOnce
                    className="col-span-1 bg-[#00C2DC] rounded-[20px]">
                    <div className="grid grid-cols-2 h-full">
                        <div className="col-span-1 relative">
                            <div className="absolute top-0 left-0 right-0 bottom-0  z-[2]
                                rounded-r-[20px] bg-gradient-to-r
                                from-[#00C2DC] to-[#00C2DC00]"></div>
                            <Image
                                src={IranianCar}
                                alt="iranian-car"
                                fill={true}
                                className="rounded-r-[20px]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <div className="text-[#FFFFFF] text-center">
                                <p className="text-[16px] font-[500]">انواع قطعات خودرو های</p>
                                <p className="text-[22px] font-[900]">ایرانی</p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
            <Slide className="col-span-1 bg-[#CF0025] rounded-[30px]" direction="up" duration={400} triggerOnce>
                <div>
                    <div className="text-center text-[#FFFFFF] m-4">
                        <p className="text-[16px] font-[500]">انواع قطعات خودرو های</p>
                        <p className="text-[22px] font-[900]">سنگین ولوو</p>
                        <p className="text-[12px] font-[500] mt-4">مشاهده همه محصولات</p>
                    </div>
                    <div className="w-full h-[170px] relative">
                        <div className="absolute top-0 left-0 right-0 bottom-0  z-[2]
                            rounded-b-[20px] bg-gradient-to-b 
                            from-[#CF0025] to-[#CF002500]"></div>
                        <Image
                            src={VolvoLogo}
                            alt="lexus-logo"
                            fill={true}
                            className="z-[3]"
                            style={{ objectFit: "contain", objectPosition: "center" }}
                        />
                        <Image
                            src={VolvoCar}
                            alt="lexus-car"
                            fill={true}
                            sizes="100%"
                            className="rounded-b-[20px] opacity-[60%]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </Slide>
            <Slide className="col-span-1 bg-[#37495E] rounded-[30px]" duration={400} direction="right"
                triggerOnce>
                <div>
                    <div className="text-center text-[#FFFFFF] m-4">
                        <p className="text-[16px] font-[500]">انواع قطعات خودرو های</p>
                        <p className="text-[22px] font-[900]">پژو و سیتروين</p>
                        <p className="text-[12px] font-[500] mt-4">مشاهده همه محصولات</p>
                    </div>
                    <div className="w-full h-[170px] relative">
                        <div className="absolute top-0 left-0 right-0 bottom-0  z-[2]
                            rounded-b-[20px] bg-gradient-to-b 
                            from-[#37495E] to-[#37495E00]"></div>
                        <Image
                            src={CitroenLogo}
                            alt="citroen-logo"
                            fill={true}
                            className="z-[3]"
                            style={{ objectFit: "contain", objectPosition: "center" }}
                        />
                        <Image
                            src={CitroenCar}
                            alt="citroen-car"
                            fill={true}
                            sizes="100%"
                            className="rounded-b-[20px] opacity-[60%]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </Slide>
        </div>
    )
}; export default CarToolsTypes;