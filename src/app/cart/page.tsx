import { Button } from "antd"
import { HeartOutlined ,LeftOutlined, setTwoToneColor} from '@ant-design/icons';
import Link from "next/link"

export default function cart() {
    return (
        <main className="bg-white py-6 px-32">
        <p className="text-white mb-10 text-xl">
            <span>
            <Link className="text-[#000] font-bold" href={"/"}>Trang chủ</Link>
            </span>
            <span className="mx-3 text-[#000]">/</span>
            <span className="text-[#000] font-bold">Giỏ hàng</span>
        </p>
        <div className="flex gap-20 mb-20 mt-10">
            <div className="w-3/4 p-20 px-[100px] py-[10px] rounded-lg shadow-lg shadow-indigo-500/50 divide-y divide-dashed ">
                <div className="mb-10">
                    <h2 className="text-center text-[#000] pt-5 font-bold text-[25px]">Giỏ hàng</h2>
                    <div className="flex flex-row ">
                        <div className="basis-1/4">
                            <img
                            src="https://muasachhay.vn/wp-content/uploads/2016/09/tieu-thuyet-nhan-mua-sach-hay-656x1024.jpg"
                            alt=""
                            className="w-[200px] h-[200px] cursor-pointer rounded-2xl"
                            />
                        </div>
                        <div className="basis-1/4  gap-4 justify-items-start m-5 ml-8">
                                <p className="my-2 text-[18px] text-[#000] ">
                                    <span className="text-[#000] font-bold">Book 4 </span>
                                </p>
                                <p className="my-2 text-[18px] text-[#000]">
                                    <span className="text-[#000] font-bold">Loại: </span> Tiểu thuyết
                                </p>
                        </div>
                        <div className="basis-1/4 gap-4 justify-items-start m-5">
                                <p className="my-2 text-[18px] text-[#000] ">
                                    <span className="text-[#000] font-bold">50 000 ₫</span>
                                </p>
                                <p className="my-2 text-[18px] text-[#000]">
                                    <span className="text-[#000] font-bold">Số lượng: </span> x1
                                </p>
                        </div>
                        <div className="basis-1/4 flex gap-2 justify-items-center   ">
                            <HeartOutlined twoToneColor="#ff0000" style={{ fontSize: '39px', marginBottom:'70px' }} />
                            <Button className="!border-[2px] !border-black  !text-black !pb-9 !text-[18px] !px-9 font-bold mt-10  ">
                                    Xóa
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-row gap-10">
                    <Button className="!border-[2px] !border-black  !text-black !pb-9 !text-[18px] !px-9 font-bold mt-10  ">
                        <Link className="text-[#000] font-bold" href={"/menu"}> <span className="text-[#000] font-bold"> <LeftOutlined /> </span>Tiếp tục mua sắm</Link>
                    </Button>
                    <div className="flex flex-row gap-2 mt-10  justify-end">
                            <img
                                width="55px"
                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                alt="Visa"
                            ></img>
                            <img
                                width="55px"
                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                alt="American Express"
                                        ></img>
                            <img
                                width="55px"
                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                alt="Mastercard"
                            ></img>
                    </div>
                </div>
            </div>
            <div className="p-20 px-[100px] py-[10px] rounded-lg w-1/4  shadow-lg shadow-indigo-500/50 	">
                    <div>
                        <div className="py-2">
                            <p className="my-4 text-[18px] text-[#000]">
                                <span className="text-[#000] font-bold">Tổng tiền: </span>₫ 50 000
                            </p>
                            <p className="my-4 text-[18px] text-[#000]">
                                <span className="text-[#000] font-bold">Giảm giá: </span> 0%
                            </p>
                            <p className="my-4 text-[18px] text-[#000]">
                                <span className="text-[#000] font-bold">Thành tiền: </span> <span className="text-primary3  font-bold text-[20px]"> ₫ 50 000</span> 
                            </p>
                        </div>
                        <div>
                            <Button className="!border-[2px] !border-primary3 !bg-primary1 !text-white !pb-9 !text-[18px] !px-9">
                                <Link href={"/checkout"}>Thanh toán</Link>
                            </Button>
                        </div>
                    </div>
            </div>
        </div>
        
        </main>
    )
}