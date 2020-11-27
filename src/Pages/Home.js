import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./../Nav/NavBar";
import { Header } from "./../Header/Header";
import { Title } from "./../Title/Title";
import { BodyTitle } from "./../BodyTitle/BodyTitle";
import { Footer } from "./../Footer/Footer";
import { Extension } from "../Extension/Extension";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Title />
      <BodyTitle />
      <div className="mt-5">
        <hr />
        <Extension />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
