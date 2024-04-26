import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MovieCard() {
  return (
    <div className="border-slate-50 border-0">
      <Link className=" m-2 rounded-lg" href={"/book-detail"}>
        <div>
          <div>
            <img className=" shadow-2xl w-full rounded-[6px] mb-3 w-[230px] h-[400px] object-cover "
              src="https://muasachhay.vn/wp-content/uploads/2016/09/tieu-thuyet-nhan-mua-sach-hay-656x1024.jpg"
              alt=""
            />
          </div>
          <div className="flex gap-2 my-2 items-center">
            <div className="bg-orange-500 p-1 rounded-[6px] font-semibold text-[12px]">
              T15
            </div>
          </div>
          <p className="mb-2 text-[14px] text-black">
            Thể loại sách: <span className="font-medium">Tiểu thuyết</span>
          </p>
          <p className=" text-[14px] text-black">
            Giá bán: <span className="font-medium text-primary3">50 000 VNĐ</span>
          </p>
        </div>
      </Link>
      <div>
        <Button type="primary" className="!bg-primary1">
          <Link href={"/book-detail"}>Xem chi tiết</Link>
        </Button>
      </div>
    </div>
  );
}
