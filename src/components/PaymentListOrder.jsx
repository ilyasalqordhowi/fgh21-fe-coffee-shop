import React from "react";
import { FaCircleXmark, FaPlus, FaRegEnvelope, FaRegUser, FaLocationDot } from "react-icons/fa6";
import Kopie from "../img/Kopie.svg"
function PaymentListOrder() {
  return (
    <>
      <div className="flex flex-col md:p-32 py-32 px-5">
        <div className="text-4xl font-medium mb-12">Payment Details</div>
        <div className="flex gap-12 items-center mb-6">
          <div className="flex justify-between items-center w-full md:w-1/2">
              <div className="font-medium text-xl">Your Order</div>
              <button className="flex items-center gap-3 bg-orange-400 px-4 py-2 rounded-lg">
                <FaPlus className=""/>
                <div className="">Add Menu</div>
              </button>
            </div>
          <div className="md:flex hidden md:w-1/2 text-xl font-medium">Total</div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="flex gap-7 p-2 bg-[#E8E8E8]/30 rounded-md w-full">
              <div className="">
                  <img src={Kopie} alt="" className="object-cover"/>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-center max-w-32 bg-[#D00000] p-2 text-white rounded-full">
                    FLASH SALE!
                </div>
                <div className="text-[#0B0909] font-bold text-lg">
                    Hazelnut Latte
                </div>
                <div className="flex gap-2 ">
                    <div className="">2pcs</div>
                    <div className="">|</div>
                    <div className="">Regular</div>
                    <div className="">|</div>
                    <div className="">Ice</div>
                    <div className="">|</div>
                    <div className="">Dine In</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-[#D00000] font-medium text-xs line-through">IDR 40.000</div>
                    <div className="font-medium text-[#FF8906]">IDR 20.000</div>
                </div>
              </div>
            </div>
            <div className="flex gap-7 p-2 bg-[#E8E8E8]/30 rounded-md w-full">
              <div className="">
                  <img src={Kopie} alt="" className="object-cover"/>
              </div>
              <div className="flex justify-between md:items-center">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-center max-w-32 bg-[#D00000] p-2 text-white rounded-full">
                        FLASH SALE!
                    </div>
                    <div className="text-[#0B0909] font-bold text-lg">
                        Hazelnut Latte
                    </div>
                    <div className="flex gap-2 ">
                        <div className="">2pcs</div>
                        <div className="">|</div>
                        <div className="">Regular</div>
                        <div className="">|</div>
                        <div className="">Ice</div>
                        <div className="">|</div>
                        <div className="">Dine In</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-[#D00000] font-medium text-xs line-through">IDR 40.000</div>
                        <div className="font-medium text-[#FF8906]">IDR 20.000</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold">Payment Info & Delivery</div>
              <form className="flex flex-col gap-2">
                <label htmlFor="email" className="flex flex-col gap-1 w-full justify-center">
                    <div className="text-[#0B132A] font-semibold text-base">Email</div>
                    <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                        <FaRegEnvelope />
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full outline-none"/>
                    </div>
                </label>
                <label htmlFor="name" className="flex flex-col gap-1 w-full justify-center">
                    <div className="text-[#0B132A] font-semibold text-base">Full Name</div>
                    <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                        <FaRegUser />
                        <input type="text" name="name" id="name" placeholder="Enter Your Full Name" className="w-full outline-none"/>
                    </div>
                </label>
                <label htmlFor="name" className="flex flex-col gap-1 w-full justify-center">
                    <div className="text-[#0B132A] font-semibold text-base">Full Name</div>
                    <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                        <FaLocationDot />
                        <input type="text" name="name" id="name" placeholder="Enter Your Full Name" className="w-full outline-none"/>
                    </div>
                </label>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">Delivery</div>
                  <div className="flex gap-2">
                  <div className="flex gap-5 w-full">
                        <button type="button" className="flex items-center justify-center h-11 w-1/3 border-2 text-base text-[#0B0909] rounded-md border-[#FF8906]">Dine in</button>
                        <button type="button" className="flex items-center justify-center h-11 w-1/3 border-2 text-base border-[#E8E8E8] rounded-md text-[#0B0909]">Door Delivery</button>
                        <button type="button" className="flex items-center justify-center h-11 w-1/3 border-2 text-base border-[#E8E8E8] rounded-md text-[#0B0909]">Pick Up</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 ">
          <div className="md:hidden text-xl font-medium mb-6">Total</div>
            <div className="flex flex-col gap-3 bg-[#E8E8E8]/30 p-5 rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="text-[#4F5665] font-bold">Order</div>
                  <div className="font-bold text-[#0B132A]">Idr. 40.000</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[#4F5665] font-bold">Delivery</div>
                  <div className="font-bold text-[#0B132A]">Idr. 0</div>
                </div>
                <div className="flex justify-between ">
                  <div className="text-[#4F5665] font-bold">Tax</div>
                  <div className="font-bold text-[#0B132A]">Idr. 4.000</div>
                </div>
                <div className="border-b-2"></div>
                <div className="flex justify-between">
                  <div className="text-[#4F5665] font-bold">Subtotal</div>
                  <div className="font-bold text-[#0B132A]">Idr. 44.000</div>
                </div>
              </div>
              <button className="bg-orange-400 py-2 rounded-lg">Checkout</button>
              <div className="flex flex-col gap-2">
                <div className="text-[#4F5665]">We Accept</div>
                <div className="flex justify-between">
                  <button>Bri</button>
                  <button>Dana</button>
                  <button>BCA</button>
                  <button>Gopay</button>
                  <button>Ovo</button>
                  <button>Paypal</button>
                </div>
              </div>
              <div className="text-[#4F5665]">*Get Discount if you pay with Bank Central Asia</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentListOrder;