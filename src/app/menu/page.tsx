"use client";

import { Carousel } from "antd";
import MovieCard from "@/modules/HomePage/components/MovieCard";
import Link from "next/link";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { bookService } from "@/core/apis/product.service";

export default function Menu() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    getAll(null);
  }, []);

  const getAll = async (type1: any) => {
    const res = await bookService.getAllBooks({
      page: 1,
      pageSize: 9999,
      type1: type1,
    });
    setList(res);
  };

  return (
    <main className="bg-white ">
      <div className="flex gap-20">
        <div className="w-1/4 border-gray-950 divide-y divide-dashed">
          <div>
            <h2 className="text-center text-[#000] pt-20 font-bold text-[37px]">
              Lọc Theo:
            </h2>
          </div>
          <div>
            <h2 className=" ml-20 text-[#000] px-10 pt-5  font-bold text-[35px]">
              Danh Mục
            </h2>
            <div className="py-5">
              <div className="cursor-pointer" onClick={() => getAll(null)}>
                <p className="text-black mr-6 ml-20 mb-2 text-[25px] px-10">
                  Tất cả sách
                </p>
              </div>
              <div className="cursor-pointer" onClick={() => getAll("englishBook")}>
                <p className=" text-black mr-6 ml-20 mb-2 text-[25px] px-10">
                  Sách Tiếng Anh
                </p>
              </div>
              <div className="cursor-pointer" onClick={() => getAll("comic")}>
                <p className=" text-black mr-6 ml-20 mb-2 text-[25px] px-10">
                  Truyện tranh
                </p>
              </div>
              <div className="cursor-pointer" onClick={() => getAll("novel")}>
                <p className=" text-black mr-6 ml-20 mb-2 text-[25px] px-10">
                  Tiểu thuyết
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-20 px-[100px] py-[10px] w-3/4 shadow-xl">
          <p className="text-center my-5 text-primary3 font-bold  text-[35px] ">
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
