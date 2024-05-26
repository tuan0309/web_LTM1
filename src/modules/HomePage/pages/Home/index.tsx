"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import MovieCard from "../../components/MovieCard";
import DiscountCard from "@/modules/Discount/components/DiscountCard";
import { Button } from "antd";
import Link from "next/link";
import { bookService } from "@/core/apis/product.service";

export default function Home() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const res = await bookService.getAllBooks({
      page: 1,
      pageSize: 9999,
    });
    setList(res);
  };

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
        <div className="pl-20 pb-10 pt-1 shadow-xl">
          <p className="text-center my-8 text-primary3 font-bold  text-[30px] mt-[20px]">
            Tất cả sách
          </p>
          <div className="grid grid-cols-3  gap-x-8 gap-y-4  ">
            {list?.map((item, index) => {
              return (
                <div key={index} className="border-slate-50 border-0">
                  <Link
                    className=" m-2 rounded-lg"
                    href={`/book-detail/${item?.product_id}`}
                  >
                    <div>
                      <div>
                        <img
                          className=" shadow-2xl w-full rounded-[6px] mb-3 w-[230px] h-[400px] object-cover "
                          src={item?.imgUrl}
                          alt=""
                        />
                      </div>
                      <div className="flex gap-2 my-2 items-center">
                        <div className="bg-orange-500 p-1 rounded-[6px] font-semibold text-[12px]">
                          T15
                        </div>
                      </div>
                      <p className="mb-2 text-[14px] text-black">
                        Thể loại sách:{" "}
                        <span className="font-medium">{item.type1}</span>
                      </p>
                      <p className=" text-[14px] text-black">
                        Giá bán:{" "}
                        <span className="font-medium text-primary3">
                          {item?.price?.toLocaleString()} VNĐ
                        </span>
                      </p>
                    </div>
                  </Link>
                  <div>
                    <Button type="primary" className="!bg-primary1">
                      <Link href={`/book-detail/${item?.product_id}`}>Xem chi tiết</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
