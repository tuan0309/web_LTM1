import React from "react";
import { Carousel } from "antd";
import MovieCard from '@/modules/HomePage/components/MovieCard';
import Link from "next/link";


export default function Menu() {
    return (
        <main className="bg-white ">
            <div className="flex gap-20">
                <div className="w-1/4 border-gray-950 divide-y divide-dashed">
                    <div>
                        <h2 className="text-center text-[#000] pt-20 font-bold text-[37px]">Lọc Theo:</h2>
                    </div>
                    <div>
                        <h2 className=" ml-20 text-[#000] px-10 pt-5  font-bold text-[35px]">Danh Mục</h2>
                        <div className="py-5">
                            <Link href={"/"}>
                                <p className="text-black mr-6 ml-20 mb-2 text-[25px] px-10">Tất cả sách</p>
                            </Link>
                            <Link href={"/"}>
                                <p className=" text-black mr-6 ml-20 mb-2 text-[25px] px-10">Sách Tiếng Anh</p>
                            </Link>
                            <Link href={"/"}>
                                <p className=" text-black mr-6 ml-20 mb-2 text-[25px] px-10">Truyện tranh</p>
                            </Link>
                            <Link href={"/"}>
                                <p className=" text-black mr-6 ml-20 mb-2 text-[25px] px-10">Tiểu thuyết</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-20 px-[100px] py-[10px] w-3/4 shadow-xl" >
                    <p className="text-center my-5 text-primary3 font-bold  text-[35px] ">
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
