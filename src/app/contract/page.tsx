import { Button } from "antd";
import Link from "next/link";

export default function Rules() {
  return (
    <main className=" py-12 px-32 bg-white">
      <p className="text-white mb-10 text-xl">
        <span>
          <Link className="text-primary1 text-[20px] font-bold" href={"/"}>Trang chủ</Link>
        </span>
        <span className="mx-3 text-[#000]">/</span>
        <span className="text-primary1 text-[20px] font-bold">Liên hệ</span>
      </p>
      <div className=" relative w-full h-96">
        <iframe className="absolute top-0 left-0 w-full h-full "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6265.254719418725!2d105.7877896276069!3d20.97889377328539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2sPosts%20and%20Telecommunications%20Institute%20of%20Technology%20(PTIT)!5e0!3m2!1sen!2s!4v1713813840751!5m2!1sen!2s">
        </iframe>
      </div>
      <div className="w-2/3">
        <p className="font-bold mt-10 text-primary1 text-[35px]">Liên Hệ Bookstore</p>
        <div className="divide-y divide-dashed">
          <p className="my-4 text-black text-[18px]">
            Nếu có bất cứ vấn đề nào thắc mắc bạn có thể gửi mail trực tiếp đến chúng tôi thông qua mẫu bên cạnh hoặc bạn có thể liên hệ theo thông tin dưới đây:
          </p>
          <p className="my-4 text-black text-[18px]">
            <span className="text-[red]">Địa chỉ: </span> 96A Đường Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội, Vietnam
          </p>
          <p className="my-4 text-black text-[18px]">
            <span className="text-[red]">Email: </span> bookstore@gmail.com
          </p>
          <p className="my-4 text-black  text-[18px]">
            <span className="text-[red]">Hotline: </span> 0889628404
          </p>
        </div>
        <div className="flex items-center">
          <img className="w-14 h-14" src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="" />
          <img className="w-14 h-14" src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="" />
          <img className="w-14 h-14" src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="" />
        </div>
      </div>
    </main>
  )
}
