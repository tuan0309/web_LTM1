'use client';

import React from 'react';
import { Form, Input, Button } from 'antd';

const OrderForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className=" bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg w-full m-20">
        {/* <h2 className="text-[35px] font-bold mb-4">Thông tin khách hàng</h2> */}
        <Form
          name="order"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className='mb-2 text-[30px] font-bold text-white'>Nhập số điện thoại của bạn</p>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            className="w-3/4 mx-auto"
          >
            <Input placeholder="Nhập số điện thoại" className="w-full text-xl"/>
          </Form.Item>
          <p className='mb-2 text-[30px] font-bold text-white'>Nhập địa chỉ Email của bạn</p>
          <Form.Item
            name="address"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
            className="w-3/4 mx-auto"
          >
            <Input.TextArea placeholder="Nhập địa chỉ nhận hàng" className="w-full text-xl" />
          </Form.Item>

        </Form>
        <div className="mt-10">
          <span className="text-[0000] text-[30px] 	mb-5 font-bold">Phương thức thanh toán </span>  
          <p className='mt-2 text-[20px]'>Thanh toán khi nhận hàng</p>
        </div>
        <div className="mt-10 flex flex-row gap-12">
          <div className='basis-1/2'>
            <span className="text-[0000]  underline	mb-5 text-[30px] font-bold">Lưu ý </span> 
            <p className='m-2 text-[20px]'>Tối đa 5 phút sau thời gian chuyển khoản, nếu hệ thống không phản hồi vui lòng liên hệ ngay bộ phận hỗ trợ của BookStore.</p> 
            <p className='m-2 text-[20px]'>📞 088 962 8404</p>
            <p className='m-2 text-[20px]'>📧 BookStore@gmail.com</p>
          </div>
          <div className=" basis-1/4 text-center">
            <span className="text-[0000] underline mb-5 text-[30px] font-bold ">Thành tiền: </span> 
            <div className='bg-black p-8 rounded-2xl  mr-20 ml-20 '>
               <span className="text-primary3  font-bold text-[25px]"> 50.000 ₫</span> 
            </div>
          </div>
          <div className='basis-1/4 justify-items-center flex justify-center '>
                            <Button className="!border-[2px] mt-20 !border-primary3 !bg-primary3 !text-white !pb-9 !text-[18px] !px-9">
                                Xác nhận đơn hàng
                            </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OrderForm;
