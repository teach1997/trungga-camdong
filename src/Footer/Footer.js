import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col, Alert } from "react-bootstrap";
import "./Footer.css";
import SimpleMap from "../Map/GoogleMap";

export function Footer() {
  return (
    <Jumbotron className="footer-container" fluid>
      <Container>
        <Row>
          <Col>
            <h1>Trứng gà Cẩm Đông!</h1>
            <p>
              Trang trại Thuân Vải, Thôn Vĩnh Lại, Xã Cẩm Đông, Huyện Cẩm Giàng, Tỉnh Hải Dương
            </p>
            <Alert variant="light">
            © 2020 Trứng Gà Cẩm Đông. Tất cả các quyền được bảo hộ.
            </Alert>
          </Col>
          <Col>
          <SimpleMap />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
