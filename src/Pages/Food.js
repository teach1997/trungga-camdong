import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./../Nav/NavBar";
import { Header } from "./../Header/Header";
import { Title } from "./../Title/Title";
import { BodyTitle } from "./../BodyTitle/BodyTitle";
import { Footer } from "./../Footer/Footer";
import food from "./../image/banner-khong-code.png";
import isabrown from "./../image/img-trungnau.jpg";
import aicap from "./../image/img-aicap.jpg";
import { Image, Alert, Container, Row, Col } from "react-bootstrap";

function Food() {
  return (
    <div className="App">
      <NavBar />
      <Image
        style={{ width: "100%", padding: "2rem" }}
        src={food}
        alt="farm"
        fluid
      />
      <h3>CÁC SẢN PHẨM TƯƠI CUNG CẤP</h3>
      <Alert className="alert-title" variant="light">
        Thương hiệu trứng gà Cẩm Đông cung cấp trứng gà tươi, được kiểm định và
        trải qua các quy trình sản xuất vệ sinh an toàn thực phẩm trước khi đến
        tay người dùng
      </Alert>
      <Container>
        <Row>
          <Col>
            <div>
              <Image
                style={{ width: "100%", padding: "2rem" }}
                src={isabrown}
                alt="farm"
                fluid
              />
              <h2>Trứng gà Isa Brown</h2>
              <Alert className="alert-title" variant="light">
                <b>Gà ISA nâu (ISA Brown)</b> là giống gà chuyên đẻ hay chuyên
                trứng có nguồn gốc tại Pháp. Giống gà này là giống lai, hình
                thành do việc lao tại giữa giống Gà Rohde Đỏ với Gà Rohde Trắng
                do công ty Hubbard ISA do đó còn gọi là gà Hubbard. Gà này nằm
                trong dòng gà ISA của hãng Hubbard–ISA. Đây là giống gà hướng
                trứng được nuôi phổ biến trên thế giới, chúng là giống gà xuất
                khẩu của Hoa Kỳ. Ở Việt Nam chúng được xếp vào nhóm gà siêu
                trứng cho năng suất cao.
              </Alert>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                style={{ width: "100%", padding: "2rem" }}
                src={aicap}
                alt="farm"
                fluid
              />
              <h2>Mô hình gà hậu bị</h2>
              <Alert className="alert-title" variant="light">
                <b>Gà Ai Cập</b> hay còn gọi là gà Fayoumi là một giống gà có
                nguồn gốc từ vùng Ai Cập và được nhân giống từ lâu trong lịch
                sử. Đây là giống gà cao sản và cho năng suất cao về sản phẩm
                trứng gà. Ngay từ thời trước công nguyên, người Ai Cập đã nổi
                tiếng về việc nuôi gà để lấy trứng
              </Alert>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Food;
