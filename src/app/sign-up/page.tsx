import { Input } from "antd";
import { Button } from "antd";
import Link from "next/link";

export default function SignUp() {
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
              <p className="ml-2 mb-2 text-black ">Email</p>
              <Input className="h-10" placeholder="Nhập email" />
            </div>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-black ">Username</p>
              <Input className="h-10" placeholder="Nhập username" />
            </div>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-black ">Mật khẩu</p>
              <Input className="h-10" placeholder="Nhập mật khẩu" />
            </div>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-black ">Nhập lại mật khẩu</p>
              <Input className="h-10" placeholder="Nhập lại mật khẩu" />
            </div>
            <div className="w-1/2 mx-auto mt-12 mb-6">
              <Button className="w-full !bg-primary1 !h-10" type="primary">
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
