import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./../Nav/NavBar";
import { Header } from "./../Header/Header";
import { Title } from "./../Title/Title";
import { BodyTitle } from "./../BodyTitle/BodyTitle";
import { Footer } from "./../Footer/Footer";
import {
  Navbar,
  Nav,
  Image,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import banner from "./../image/banner-ga-de.png";
import haubi from "./../image/img-haubi.jpg"

function Farm() {
  return (
    <div className="App">
      <NavBar />
      <Image
        style={{ width: "100%", padding: "2rem" }}
        src={banner}
        alt="farm"
        fluid
      />
      <h3>QUY TRÌNH CHĂN NUÔI</h3>
      <Alert className="alert-title" variant="light">
        Các giống vật nuôi của Trang trại Thuân Vải được tạo lập từ nguồn gen tốt nhất của thế
        giới, được nuôi thích nghi và chọn lọc trong điều kiện Việt Nam để nhân
        giống theo nhu cầu của thị trường Việt Nam.
      </Alert>
      <Container>
        <Row>
          <Col>
            <div>
              <Image
                style={{ width: "100%", padding: "2rem" }}
                src={haubi}
                alt="farm"
                fluid
              />
              <h2>Mô hình gà hậu bị</h2>
              <Alert className="alert-title" variant="light">
                Hậu bị là giai đoạn quan trọng nhất chuẩn bị cho gà để trứng
                thương phẩm phát triển tốt và khả năng sinh sản cao. Quy trình
                nuôi dưỡng và chăm sóc gà trong thời gian mới nở đến khi đẻ
                trứng quyết định tuổi đẻ trứng đầu, số trứng đẻ, trọng lượng
                trứng cũng như thời gian khai thác trứng.
              </Alert>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                style={{ width: "100%", padding: "2rem" }}
                src={banner}
                alt="farm"
                fluid
              />
              <h2>Mô hình chăn nuôi và thu hoạch gà đẻ trứng</h2>
              <Alert className="alert-title" variant="light">
                <b>1. Chuồng gà:</b>  Chuồng nuôi gà công nghiệp lấy trứng được
                thiết kế rất đặc biệt gồm các lồng sắt kích thước khoảng 1,2 x
                0,65 x 0,38 mét tương ứng với chiều dài, rộng, cao. Một lồng như
                thế này có thể nuôi 12 con hoặc từ lồng đó bạn ngăn ra làm các
                lồng đơn chỉ để cho chúng ăn ngủ nghỉ vệ sinh một chỗ, như vậy
                sẽ kiểm soát được năng suất từng con một, lồng được thiết kế đặc
                biệt có ngăn để trứng rơi ra riêng và ngăn hứng phân riêng.
                Chuồng à phải được che kín bằng rèm che. Khi làm chuồng gà phải
                phải tham khảo các mẫu chuồng phổ biến hiện nay để dễ dàng trong
                công việc vệ sinh và lấy trứng. <br /> <br />
                <hr />
                <b>2. Dụng cụ ăn uống:</b> Mỗi lồng gà
                có một máng ăn và máng nước riêng, mỗi ngăn gà một máng nước ở
                trên và mỗi lồng một máng thức ăn dài bằng với chiều dài lồng
                đặt phía dưới và đều ở bên ngoài lồng khi ăn gà sẽ thò cổ ra
                ngoài để ăn.
              </Alert>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Farm;
