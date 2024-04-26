import React from 'react'
import styles from './discountCard.module.css'
import Link from "next/link";

const DiscountCard = () => {
  return (
    <div className={styles.container }>
      <Link href={"/discount"}>
        <div className="shadow-2xl text-center mb-3">
          <a className="inline-block shadow-lg" href="">
            <img
              className=" w-full rounded-[6px] mb-3 h-[250px] object-cove"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-7-2017/DT-SachNuaGia.png"
              alt=""
            />
          </a>
        </div>
        
        <div className=" mb-3">
          <p className=" font-bold text-primary1 text-[20px]">Đại tiệc sách nửa giá </p>
        </div>
    </Link>

    </div>
  );
}

export default DiscountCard