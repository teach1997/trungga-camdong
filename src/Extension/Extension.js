import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Col, Image, Card, Row } from "react-bootstrap";
import baohd from "./../image/bao-hai-duong.png";
import baonn from "./../image/bao-nong-nghiep.png";

export function Extension() {
  return (
    <Container className="mt-5">
      <h2>Các Thành Tựu Và Hình Ảnh Thực Tế</h2>
      <Row>
        <Col>
          <a
            href="https://baohaiduong.vn/nong-nghiep/ty-phu-trung-ga-151256"
            target="_blank1"
          >
            <Image
              style={{ width: "100%" }}
              src={baohd}
              alt="farm"
              fluid
            />
          </a>
        </Col>
        <Col>
          <a
            href="https://nongnghiep.vn/ra-mat-hoi-chan-nuoi-ga-de-thuong-pham-huyen-cam-giang-d278653.html"
            target="_blank2"
          >
            {" "}
            <Image
              style={{ width: "100%"}}
              src={baonn}
              alt="farm"
              fluid
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
