import { bookService } from "@/core/apis/product.service";
import { Button } from "antd";
import Link from "next/link";

interface IParams {
  params: {
    slug: string;
    searchParams: any;
  };
}

export default async function BookDetail(params: IParams) {
  const detail: any = await bookService.getBookById(params?.params?.slug);

  return (
    <main className="bg-white py-6 px-32">
      <p className="text-white mb-10 text-xl">
        <span>
          <Link className="text-[#000] font-bold" href={"/"}>
            Trang chủ
          </Link>
        </span>
        <span className="mx-3 text-[#000]">/</span>
        <span className="text-[#000] font-bold">{detail?.name}</span>
      </p>
      <div className="flex gap-20">
        <div className="w-1/3">
          <img className="rounded-[12px] " src={detail?.imgUrl} alt="" />
        </div>
        <div className="w-2/3">
          <p className="font-bold text-primary3 text-[30px]">{detail?.name}</p>
          <p className="my-4 text-[18px] text-[#000]">{detail?.description} </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold ">Thể loại: </span>{" "}
            {detail?.type1}
          </p>
          <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold ">Giá tiền: </span>{" "}
            {detail?.price.toLocaleString()} VNĐ
          </p>
          {/* <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Dịch giả: </span>{" "}
            <span>Hoàng Long</span>
          </p> */}
          {/* <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Nhà xuất bản: </span> NXB
            Văn Học Stephanie Stine
          </p> */}
          {/* <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Công ty phát hành: </span>{" "}
            Cửu Đức Huy Quan
          </p> */}
          {/* <p className="my-4 text-[18px] text-[#000] ">
            <span className="text-[#000] font-bold">Số trang: </span> 178
          </p> */}
          {/* <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Hình thức bìa: </span> Bìa
            mềm
          </p> */}
          {/* <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Ngày xuất bản: </span> 2013
          </p> */}
          {/* <p className="my-4 text-[18px] text-[#000]">
            <span className="text-[#000] font-bold">Trọng lượng (gr): </span>{" "}
            230
          </p> */}
          <div className="mt-8 flex gap-6">
            <Button className="!border-[2px] !border-primary3 !bg-primary1 !text-white !pb-9 !text-[18px] !px-12">
              <Link href={"/checkout"}>Mua sách ngay</Link>
            </Button>
            <Button className="!border-[2px] !border-primary3 !bg-primary1 !text-white !pb-9 !text-[18px] !px-9">
              <Link href={"/cart"}>Thêm vào giỏ hàng</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
