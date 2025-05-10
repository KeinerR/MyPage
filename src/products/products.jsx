import firstImage from '../assets/image/firstProduct.jpg';
import secondImage from '../assets/image/tic.jpg';
import thirdImage from '../assets/image/redes.avif';
import webImage from '../assets/image/secondImageProduct.jpg'; // Asegúrate de tener esta imagen
import ButtonViewMore from '../buttons/buttonsViewMore';
import '../style/styleProduct.css';

export default function Products() {
  return (
    <div className="containerProducts">
      <div className="productCard">
        <div className="imageContainer">
          <img className="productImage" src={firstImage} alt="desarrollo a medida" />
          <h2 className="productTitle">Desarrollo software a la medida</h2>
        </div>
        <p className="productDesc">Creamos soluciones digitales adaptadas a tus necesidades específicas, optimizando procesos y aumentando tu productividad.</p>
        <ButtonViewMore/>
      </div>

      <div className="productCard">
        <div className="imageContainer">
          <img className="productImage" src={secondImage} alt="servicios TIC" />
          <h2 className="productTitle">Servicios TIC</h2>
        </div>
        <p className="productDesc">Ofrecemos soporte tecnológico, administración de sistemas y soluciones integrales para empresas del presente.</p>
        <ButtonViewMore/>
      
      </div>

      <div className="productCard">
        <div className="imageContainer">
          <img className="productImage" src={thirdImage} alt="redes" />
          <h2 className="productTitle">Redes y Telecomunicaciones</h2>
        </div>
        <p className="productDesc">Diseñamos, instalamos y mantenemos infraestructuras de red estables y seguras para una comunicación eficiente.</p>
        <ButtonViewMore/>
     
      </div>

      <div className="productCard">
        <div className="imageContainer">
          <img className="productImage" src={webImage} alt="web" />
          <h2 className="productTitle">Creación de Páginas Web</h2>
        </div>
        <p className="productDesc">Diseñamos sitios web profesionales, responsivos y optimizados para tu presencia digital.</p>
        <ButtonViewMore/>
      
      </div>
    </div>
  );
}
