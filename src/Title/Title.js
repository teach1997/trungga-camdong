import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Alert } from "react-bootstrap";
import "./Title.css"

export function Title() {
    return (
        <Container>
            <h2 className="title-h2">Thương hiệu trứng gà Cẩm Đông</h2>
            <Alert className="alert-title" variant="light">Mô hình khép kín của Thương hiệu trứng gà Cẩm Đông được tổ chức theo 2 lĩnh vực chính: Trang trại chăn nuôi (Farm), Chế biến thực phẩm (Food) để đảm bảo cam kết tuyệt đối về chất lượng sản phẩm từ khâu sản xuất đến thành phẩm.</Alert>
        </Container>
    );
}