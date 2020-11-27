import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"
import {
  Navbar,
  Nav,
  Image,
} from "react-bootstrap";
import logo from '../image/LOGO1.png'

export function NavBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/">
          <Image src={logo} alt='logo' fluid />
          <p className="p-logo">Thuân Vải</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <div>
          <h4>Trứng gà Cẩm Đông</h4>
          <p>Trứng sạch cho mọi nhà</p>
          </div>
        </Nav>
        <div className="contact">
        <h2>Liên hệ với chúng tôi</h2>
        <p>SĐT: 0973034639</p>
        <p>Email: trunggacamdong@gmail.com</p>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
