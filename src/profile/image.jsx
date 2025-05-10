import '../style/styleProfile.css';
import imagePerfil from '../assets/image/1.jpg';

export default function Profile({ data }) {
return (
<div className="cardProfile">
    <nav className='navMenu' >
        <img className='naveImage' src={imagePerfil} alt="Katherine Johnson" />
        <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Sobre me</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contactanos</a></li>

        </ul>

    </nav>
</div>
);
}
