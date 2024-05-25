import { Button } from "antd";
import Link from "next/link";

export default function BookDetail() {
  return (
    <main className="bg-white py-6 px-32">
      <p className="text-white mb-10 text-xl">
        <span>
          <Link className="text-[#000] font-bold" href={"/"}>Trang chủ</Link>
        </span>
        <span className="mx-3 text-[#000]">/</span>
        <span className="text-[#000] font-bold">Tiểu Thuyết Nhạn</span>
      </p>
      <div className="flex gap-20">
        <div className="w-1/3">
          <img
            className="rounded-[12px] "
            src="https://muasachhay.vn/wp-content/uploads/2016/09/tieu-thuyet-nhan-mua-sach-hay-656x1024.jpg"
            alt=""
          />
        </div>
        <div className="w-2/3">
          <p className="font-bold text-primary3 text-[30px]">Tiểu Thuyết Nhạn</p>
          <p className="my-4 text-[18px] text-[#000]">
            Nhạn là một quyển tiếu thuyết ngắn của Mori Ogai viết vào những năm cuối đời để nhớ lại một thời tuổi trẻ. Đóng vai trò người kể truyện, một mối tình tay ba giữa mỹ nhân Otama, chàng sinh viên điển trai Okada và con buôn Suezo từ từ hiện ra qua từng trang văn điềm đạm. Trên đó những toan tính, dằn vặt, mâu thuẫn gia đình, bản chất con người dần hiện lên rõ ràng minh bạch.
          </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold ">Tác giả: </span> Mori Ogai
          </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Dịch giả: </span> <span>Hoàng Long</span>
          </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Nhà xuất bản: </span> NXB Văn Học
            Stephanie Stine
          </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Công ty phát hành: </span> Cửu Đức
            Huy Quan
          </p>
          <p className="my-4 text-[18px] text-[#000] ">
            <span className="text-[#000] font-bold">Số trang: </span> 178
          </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Hình thức bìa: </span> Bìa mềm
          </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Ngày xuất bản: </span> 2013
          </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Trọng lượng (gr): </span> 230
          </p>
          <div className="mt-8 flex gap-6">
            <Button className="!border-[2px] !border-primary3 !bg-primary1 !text-white !pb-9 !text-[18px] !px-12">
              <Link href={"/"}>Mua sách ngay</Link>
            </Button>
            <Button className="!border-[2px] !border-primary3 !bg-primary1 !text-white !pb-9 !text-[18px] !px-9">
              <Link href={"/"}>Thêm vào giỏ hàng</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
