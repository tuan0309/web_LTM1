"use client";

import { userService } from "@/core/apis/user.service";
import { Input } from "antd";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    const body = {
      username: username,
      password: password,
    };
    const res = await userService.login(body);
    if (res === true) {
      window.alert("Đăng nhập thành công");
      localStorage.setItem("login", username!);
      window.location.href = "/";
    } else {
      window.alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <main>
      <div className="py-12 px-32 flex bg-white gap-12">
        <div className="w-1/2">
          <img
            className="rounded-[24px] object-cover"
            src="https://img.freepik.com/premium-vector/school-seamless-pattern-with-doodles-wrapping-paper-stationary-scrapbooking-wallpaper_67074-1422.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 my-auto">
          <p className="text-center mb-8 text-xl text-black font-bold">
            Đăng nhập
          </p>
          <div className="w-1/2 mx-auto mb-6">
            <p className="ml-2 mb-2 text-black ">Tên đăng nhập</p>
            <Input
              onChange={(e: any) => setUsername(e.target.value)}
              className="h-10"
              placeholder="Nhập username"
            />
          </div>
          <div className="w-1/2 mx-auto mb-6">
            <p className="ml-2 mb-2 text-black ">Mật khẩu</p>
            <Input
              onChange={(e: any) => setPassword(e.target.value)}
              className="h-10"
              placeholder="Nhập mật khẩu"
              type="password"
            />
          </div>
          <div className="w-1/2 mx-auto mt-12 mb-6">
            <Button
              onClick={() => login()}
              className="w-full !bg-primary1 !h-10"
              type="primary"
            >
              Đăng nhập
            </Button>
          </div>
          <p className="text-[13px] text-black  text-center mx-2">
            Chưa có tài khoản?{" "}
            <span className="text-primary3 cursor-pointer">
              <Link href={"/sign-up"}>Đăng ký</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
