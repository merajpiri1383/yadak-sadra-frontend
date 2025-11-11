import { FC } from "react";


interface SummaryProps {
    product_count: number,
    price_to_pay: number,
    total_price: number,
}


const Summary: FC<SummaryProps> = ({ price_to_pay, product_count, total_price }) => {
    return (
        <div className="border-[1px] border-[#00000017] rounded-[30px] p-6 h-fit">
            <div className="flex items-center justify-between border-b border-[#E1E8EF] pb-4">
                <p className="text-[#121215] text-[18px] font-[700]">خلاصه سفارش</p>
                <p className="text-[#8E98AD] text-[14px] font-[700]"> {product_count} محصول</p>
            </div>
            <div className="flex items-center justify-between border-b border-[#E1E8EF] pb-4 my-4">
                <p className="text-[#121215] text-[15px] font-[700]">مبلغ قابل پرداخت</p>
                <div className="flex items-center justify-center gap-2 text-[#121215] font-[700]">
                    <p className="text-[19px]">{price_to_pay.toLocaleString()}</p>
                    <p className="text-[13px]">تومان</p>
                </div>
            </div>
            <div className="flex items-center justify-between  my-4">
                <p className="text-[#121215] text-[15px] font-[700]">مبلغ کل سفارش</p>
                <div className="flex items-center justify-center gap-2 text-[#121215] font-[700]">
                    <p className="text-[19px]">{total_price.toLocaleString()}</p>
                    <p className="text-[13px]">تومان</p>
                </div>
            </div>

            <div className="bg-[#00C2DC] w-full rounded-[53px] p-4 mt-6">
                <p className="text-center text-[#FFFFFF] font-[900] text-[15px]">ادامه و تکمیل خرید</p>
            </div>
        </div>
    )
}; export default Summary;