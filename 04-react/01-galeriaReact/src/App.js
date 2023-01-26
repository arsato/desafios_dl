import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Tarjeta from "./components/Card";
import Footer from "./components/Footer";
import {
  GonDB,
  KilluaDB,
  KurapikaDB,
  LeorioDB,
  ChrolloDB,
  HisokaDB,
} from "./components/DB";
import Gon from "./images/Gon_Design.png";
import Killua from "./images/Killua_Design.png";
import Kurapika from "./images/Kurapika_Design.png";
import Leorio from "./images/Leorio_Design.png";
import Chrollo from "./images/Chrollo_Design.png";
import Hisoka from "./images/Hisoka_Design.png";
import Logo from "./images/hxhlogo.png";

function App() {
  return (
    <div className="completeGallery">
      <Header title="Galería de Imágenes con React" imagen={Logo} />
      <div className="cardGallery">
        <Tarjeta title={GonDB.nombre} image={Gon} desc={GonDB.desc} />
        <Tarjeta title={KilluaDB.nombre} image={Killua} desc={KilluaDB.desc} />
        <Tarjeta
          title={KurapikaDB.nombre}
          image={Kurapika}
          desc={KurapikaDB.desc}
        />
        <Tarjeta title={LeorioDB.nombre} image={Leorio} desc={LeorioDB.desc} />
        <Tarjeta
          title={ChrolloDB.nombre}
          image={Chrollo}
          desc={ChrolloDB.desc}
        />
        <Tarjeta title={HisokaDB.nombre} image={Hisoka} desc={HisokaDB.desc} />
      </div>
      <div className="galleryFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
