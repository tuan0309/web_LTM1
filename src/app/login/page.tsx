import { Input } from "antd";
import { Button } from "antd";
import Link from "next/link";

export default function Login() {
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
          <p className="text-center mb-8 text-xl text-black font-bold">Đăng nhập</p>
          <div className="w-1/2 mx-auto mb-6">
            <p className="ml-2 mb-2 text-black ">Tên đăng nhập</p>
            <Input className="h-10" placeholder="Nhập username" />
          </div>
          <div className="w-1/2 mx-auto mb-6">
            <p className="ml-2 mb-2 text-black ">Mật khẩu</p>
            <Input className="h-10" placeholder="Nhập mật khẩu" />
          </div>
          <div className="w-1/2 mx-auto mt-12 mb-6">
            <Button className="w-full !bg-primary1 !h-10" type="primary">
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
