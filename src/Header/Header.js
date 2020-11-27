import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import page1 from "./../image/img-aicap.png";
import page2 from "./../image/img-isabrown.png";
import page3 from "./../image/page2.jpg";
import page4 from "./../image/img-trangtrai.png";

export function Header() {
  return (
    <Carousel style={{ padding: "2rem" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={page2} alt="First slide" />
        <Carousel.Caption>
          <h3>Giống gà đẻ isa brown</h3>
          <p>Gà giống khoẻ mạnh, nguồn gốc xuất xứ minh bạch.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={page1} alt="First slide" />
        <Carousel.Caption>
          <h3>Giống gà đẻ ai cập</h3>
          <p>Gà giống khoẻ mạnh, nguồn gốc xuất xứ minh bạch.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={page3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Trứng gà</h3>
          <p>
            Trứng gà được thu hoạch hàng ngày, đã qua các bước vệ sinh và kiểm
            định.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={page4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Trang trại</h3>
          <p>
            Trang trại luôn được sát trùng, kiểm dịch, thức ăn chăn nuôi rõ
            nguồn gốc.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
