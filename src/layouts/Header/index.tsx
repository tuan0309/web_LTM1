"use client";

import { Button } from "antd";
import { Input } from "antd";
import Link from "next/link";
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function Header() {
  const login = localStorage.getItem("login");

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <header className="sticky shadow-sm	 top-0 left-0 right-0 z-50">
      <div className="flex justify-between bg-white px-8 py-4 items-center">
        <div className="flex items-center">
          <Link href={"/"}>
            <img
              src="https://t3.ftcdn.net/jpg/02/20/76/12/360_F_220761231_v6LqgQtqhXXgbzfw9br6SmICn5SqYWLJ.jpg"
              alt=""
              className="w-[50px] h-[50px] cursor-pointer"
            />
          </Link>
          <Link href={"/"}>
            <p className="text-primary1 font-bold text-[25px] ">BOOKSTORE</p>
          </Link>
        </div>
        <div className="flex ">
          <Link href={"/"}>
            <p className="text-black mr-2 font-bold text-[20px] px-5">
              Trang chủ
            </p>
          </Link>
          <Link href={"/menu"}>
            <p className="text-black mr-2 font-bold text-[20px] px-5">
              Danh mục
            </p>
          </Link>
          <Link href={"/contract"}>
            <p className="text-black mr-2 font-bold text-[20px] px-5">
              Liên hệ
            </p>
          </Link>
          <Link href={"/about-us"}>
            <p className="text-black mr-2 font-bold text-[20px] px-5">
              Giới thiệu
            </p>
          </Link>
          <Link href={"/discount"}>
            <p className="text-black mr-2 font-bold text-[20px] px-5">
              Khuyến mại
            </p>
          </Link>
        </div>
        <div className="w-250 flex  ">
          <Input className="h-10 " placeholder="Tìm kiếm" />
        </div>
        {login ? (
          <div className="flex items-center">
            <div>
              <img
                className="h-9 w-9 mr-2"
                src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                alt=""
              />
            </div>
            <div>
              <p className="text-[#000]">{login}</p>
              <p
                onClick={() => logOut()}
                className="text-[#000] cursor-pointer text-[10px]"
              >
                Đăng xuất
              </p>
            </div>
          </div>
        ) : (
          <div className="flex">
            <Button type="default">
              <Link href={"/sign-up"}>Đăng ký</Link>
            </Button>
            <Button type="primary" className="ml-3 !bg-primary1">
              <Link href={"/login"}>Đăng nhập</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
