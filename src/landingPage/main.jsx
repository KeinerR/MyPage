import imageMain from '../assets/image/imageKeiner.png';
// import imageMain from '../assets/image/main.jpg';


import '../style/styleMainPage.css';

export default function Main() {
  return (
    <div className="mainImageContainer">
      <img className="mainImage" src={imageMain} alt="main page" />
      <h1 className="mainText">Keiner Rivas — Backend Developer 🚀</h1>
 <h4 className="mainTextTwo">La tecnología es mi herramienta, el desarrollo backend mi pasión.</h4>

    </div>
  );
}
