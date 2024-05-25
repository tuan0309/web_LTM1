import React from 'react';
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="bg-white py-1 px-2 ">
      <p className="text-white pt-10 pl-20 text-xl">
        <span>
          <Link className="text-[#000] font-bold" href={"/"}>Trang chủ</Link>
        </span>
        <span className="mx-3 text-[#000]">/</span>
        <span className="text-[#000] font-bold" >Về chúng tôi</span>
      </p>
      <div className="bg-white py-10 px-20 flex">
        <div className="w-2/3 ">
          <h1 className='text-primary1 text-[30px] font-bold text-center py-2 '>GIỚI THIỆU VỀ CHÚNG TÔI</h1>
          <p className="my-4 text-black  px-10 text-[18px]">
            <span className="text-primary3">BOOKSTORE </span> chủ yếu hoạt động kinh doanh trong lĩnh vực xuất bản và phát hành sách, luôn đẩy mạnh giao dịch và mua bán sách bản quyền, nhằm giới thiệu tới đa dạng đối tượng độc giả tại Việt nam những tác phẩm nổi tiếng thế giới. Hơn 15 năm qua, BookStore tự hào là thương hiệu làm sách uy tín, chất lượng trên thị trường xuất bản.
            Trong lĩnh vực sách thiếu nhi, BookStore đã có cơ hội được làm việc với nhiều tập đoàn, công ty xuất bản uy tín và lâu đời trên thế giới như: Disney Southeast Asia (thuộc tập đoàn Disney), Mattel Europa (đơn vị sở hữu hình ảnh nhân vật Barbie), AZbook (Công ty về sách thiếu nhi tại Nga), Children Fun (Trung Quốc), Yearim (Hàn Quốc),…
            Rất nhiều các nhân vật quen thuộc, gần gũi với các em thiếu nhi Việt Nam hiện đang được BookStore sở hữu bản quyền như: Angry Bird, búp bê Barbie, cô bé Bánh Dâu, Nàng tiên Winx, cô mèo huyền thoại Hello Kitty, giúp các em nhỏ tiếp cận với những hình ảnh và câu chuyện đặc sắc từ khắp nơi trên thế giới. Bên cạnh đó, BookStore cũng không ngừng tìm kiếm và khai thác các tác phẩm mới, có giá trị giáo dục cao, nhằm góp phần phát triển văn hóa đọc cho thế hệ trẻ. 
Ngoài ra, BookStore còn tổ chức nhiều hoạt động giao lưu, ký tặng sách, hội thảo chuyên đề và các sự kiện văn hóa khác để tạo cơ hội cho độc giả gặp gỡ và tương tác trực tiếp với các tác giả yêu thích. Với mạng lưới phân phối rộng khắp, từ các cửa hàng bán lẻ đến hệ thống bán hàng trực tuyến, BookStore cam kết mang lại sự thuận tiện tối đa cho khách hàng trong việc tiếp cận và mua sắm sách. 
Không chỉ dừng lại ở sách thiếu nhi, BookStore còn mở rộng phạm vi hoạt động sang nhiều thể loại sách khác như sách văn học, sách kỹ năng sống, sách tham khảo, sách học ngoại ngữ, và nhiều loại sách khác phù hợp với nhiều lứa tuổi và sở thích khác nhau. BookStore luôn chú trọng đến việc đảm bảo chất lượng sách, từ nội dung đến hình thức, nhằm mang lại trải nghiệm tốt nhất cho người đọc.
Với phương châm "Chất lượng là uy tín, độc giả là bạn", BookStore luôn nỗ lực không ngừng để giữ vững vị trí hàng đầu trong ngành xuất bản và phát hành sách tại Việt Nam. Chúng tôi tin rằng, với đam mê và sự cống hiến, BookStore sẽ tiếp tục chinh phục lòng tin và sự yêu mến của độc giả trong và ngoài nước.</p>
        </div>
        <div className="w-1/3">
          <img
            className="rounded-[12px] "
            src="https://res.cloudinary.com/daeg8bpax/image/upload/v1679742829/course%20web%20page/All-NFT-Categories-Illustration_auqj8y.svg"
            alt=""
          />
        </div>
      </div>
    </main>
  )
}