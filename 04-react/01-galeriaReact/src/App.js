import "./App.css";
import Header from "./components/Header";
import ImageCard from "./components/Card";
import Footer from "./components/Footer";
import ImageDB from "./components/DB";
import Logo from "./images/hxhlogo.png";

function App() {
  const imageGallery = ImageDB.map((image) => (
    <ImageCard title={image.nombre} image={image.src} desc={image.desc} />
  ));
  return (
    <div className="completeGallery">
      <Header title="Galería de Imágenes con React" imagen={Logo} />
      <div className="cardGallery">{imageGallery}</div>
      <div className="galleryFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
