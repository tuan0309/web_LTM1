import React from 'react'
import styles from './eventCard.module.css'

const EventCard = () => {
  return (
    <div className={styles.container}>
      <div className="text-center border-2	 mb-3">
        <a className="inline-block" href="">
          <img
            className="rounded-lg"
            src="https://cand.com.vn/Files/Image/honghai/2020/07/10/eef8b710-02bf-467d-945e-b22777dc4654.jpg"
            alt=""
          />
        </a>
      </div>
      <div className=" mb-3">
        <p className="font-bold text-primary3 text-[20px]">HAPPY DAY THỨ 2</p>
      </div>
      <div className=" mb-3">
        <p className="font-bold text-black text-[16px]">Thời gian sự kiện: 18/2/2024-20/4/2024</p>
      </div>
    </div>
  );
}

export default EventCard