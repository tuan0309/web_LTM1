import React from "react";
import { Carousel } from "antd";
import MovieCard from '@/modules/HomePage/components/MovieCard';
import Link from "next/link";


export default function Menu() {
    return (
        <main className="bg-white ">
            <div className="flex gap-20">
                <div className="w-1/3 border-gray-950 divide-y divide-dashed">
                    <div>
                        <h2 className="text-center text-[#000] pt-20 font-bold text-[25px]">Lọc Theo:</h2>
                    </div>
                    <div>
                        <h2 className=" text-center text-[#000] pt-10 pb-5font-bold text-[20px]">Danh Mục</h2>
                        <div className="py-5">
                            <Link href={"/"}>
                                <p className="text-center text-black mr-6  text-[15px] px-10">Tất cả sách</p>
                            </Link>
                            <Link href={"/"}>
                                <p className=" text-center text-black mr-6 text-[15px] px-10">Sách Tiếng Anh</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-center text-black mr-6  text-[15px] px-10">Truyện tranh</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-center text-black mr-6  text-[15px] px-10">Tiểu thuyết</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-20 px-[100px] py-[10px] w-2/3 shadow-xl" >
                    <p className="text-center my-5 text-primary3 font-bold  text-[30px] ">
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
