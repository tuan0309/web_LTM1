"use client";
import { userService } from "@/core/apis/user.service";
import { Input } from "antd";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const reg = async () => {
    const body = {
      username: username,
      password: password,
      name: name,
      email: email,
      role: "ROLE_USER",
    };
    const res = await userService.register(body);
    if (res === 1) {
      window.alert("Đăng ký thành công");
      router.push("/login");
    } else {
      window.alert("Có lỗi xảy ra");
    }
  };

  return (
    <main>
      <main>
        <div className="py-12 bg-white px-32 flex gap-12">
          <div className="w-1/2">
            <img
              className="rounded-[24px] object-cover"
              src="https://img.freepik.com/premium-vector/school-seamless-pattern-with-doodles-school-supplies-stationary_67074-1429.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2  my-auto">
            <p className="text-center text-black  mb-8 text-xl font-bold">
              Đăng ký tài khoản
            </p>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-black ">Nhập họ và tên</p>
              <Input
                onChange={(e: any) => setName(e.target.value)}
                className="h-10"
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-black ">Email</p>
              <Input
                onChange={(e: any) => setEmail(e.target.value)}
                className="h-10"
                placeholder="Nhập email"
              />
            </div>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-black ">Username</p>
              <Input
                onChange={(e: any) => setUsername(e.target.value)}
                className="h-10"
                placeholder="Nhập username"
              />
            </div>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-black ">Mật khẩu</p>
              <Input
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
                className="h-10"
                placeholder="Nhập mật khẩu"
              />
            </div>
            {/* <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-black ">Nhập lại mật khẩu</p>
              <Input type="password" className="h-10" placeholder="Nhập lại mật khẩu" />
            </div> */}
            <div className="w-1/2 mx-auto mt-12 mb-6">
              <Button
                onClick={() => reg()}
                className="w-full !bg-primary1 !h-10"
                type="primary"
              >
                Đăng ký
              </Button>
            </div>
            <p className="text-[13px] text-black  text-center mx-2">
              Đã có tài khoản?{" "}
              <span className="text-primary3 cursor-pointer">
                <Link href={"/login"}>Đăng nhập</Link>
              </span>
            </p>
          </div>
        </div>
      </main>
    </main>
  );
}
