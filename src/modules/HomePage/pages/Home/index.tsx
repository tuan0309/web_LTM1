import React from "react";
import { Carousel } from "antd";
import MovieCard from "../../components/MovieCard";
import DiscountCard from '@/modules/Discount/components/DiscountCard';

export default function Home() {
  return (
    <main className="bg-white ">
      <Carousel autoplay autoplaySpeed={3000}>
        <div>
          <img
            className="w-full h-96 "
            src="https://newshop.vn/public/uploads/news/nhung-cuon-sach-van-hoc-hay.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-96"
            src="https://thietkelogo.edu.vn/uploads/images/thiet-ke-do-hoa-khac/banner-sach/1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-96"
            src="https://newshop.vn/public/uploads/news/nhung-cuon-sach-van-hoc-hay.jpg"
            alt=""
          />
        </div>
      </Carousel>
      <div className="px-[160px] py-[40px]">
        <div>
          <p className="text-center text-primary3 font-bold my-10 text-[30px]">
            Khuyến mãi
          </p>
          <div className="flex gap-6 ">
            <DiscountCard />
            <DiscountCard />
            <DiscountCard />
            <DiscountCard />
            <DiscountCard />
          </div>
        </div>
        <div className="pl-20 pb-10 pt-1 shadow-xl" >
          <p className="text-center my-8 text-primary3 font-bold  text-[30px] mt-[20px]">
            Tất cả sách
          </p>
          <div className="grid grid-cols-3  gap-x-8 gap-y-4  ">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>

    </main>
  );
}
