import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./BodyTitle.css";
import farm from "./../image/banner-farm.png";
import food from "./../image/food.jpg";
import { useHistory } from "react-router-dom";
import React, { useCallback } from "react";

export function BodyTitle() {
  const history = useHistory();
  const pushFarm = useCallback(() => history.push("/farm"), [history]);
  const pushFood = useCallback(() => history.push("/food"), [history]);

  return (
    <Container>
      <Row>
        <Col>
          <Card onClick={pushFarm}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={farm} />
              <Card.Body>
                <Card.Title>
                  <h2 className="title-farm">Farm</h2>
                  <h4>Mô Hình trang trại</h4>
                </Card.Title>
                <Card.Text>
                  Mô hình trang trại được trang bị các thiết bị và công nghệ
                  tiên tiến nhất!
                </Card.Text>
              </Card.Body>
            </Card>
          </Card>
        </Col>
        <Col>
          <Card onClick={pushFood}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={food} />
              <Card.Body>
                <Card.Title>
                  <h2 className="title-food">Food</h2>
                  <h4>Chế biến thực phẩm</h4>
                </Card.Title>
                <Card.Text>
                  Sản phẩm trứng gà Isa Brown và trứng gà Ai Cập An toàn vệ sinh
                  thực phẩm!
                </Card.Text>
              </Card.Body>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
