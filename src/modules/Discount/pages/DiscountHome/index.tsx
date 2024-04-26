import React from 'react'
import DiscountCard from '../../components/DiscountCard';
import EventCard from '../../components/EventCard';
import Link from "next/link";

const DiscountHome = () => {
  return (
    <div className="py-12 px-32 bg-white">
      <p className="text-white mb-10 text-xl">
        <span>
          <Link className="text-[#000] font-bold" href={"/"}>Trang chủ</Link>
        </span>
        <span className="mx-3 text-[#000]">/</span>
        <span className="text-[#000] font-bold">Khuyến mãi</span>
      </p>
      <h1 className='text-2xl text-primary1 text-[30px] font-bold text-center py-8'>Khuyến mãi</h1>
      <div className="flex flex-wrap max-w-[1322px] mx-auto">
        <DiscountCard></DiscountCard>
        <DiscountCard></DiscountCard>
        <DiscountCard></DiscountCard>
        <DiscountCard></DiscountCard>
      </div>
      <h1 className='text-2xl text-primary1 text-[30px] font-bold text-center py-8'>Sự kiện</h1>
      <div className="flex flex-wrap max-w-[1322px] mx-auto">
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
    </div>

  );
}

export default DiscountHome