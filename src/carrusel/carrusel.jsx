import laravel from '../assets/image/laravel.png';
import angular from '../assets/image/angular.png';
import bootstrap from '../assets/image/bootstrap-tutorial.png';
import cc from '../assets/image/cc.png';
import css from '../assets/image/css-logo.png';
import gitIcon from '../assets/image/Git_icon.png';
import htmlIcon from '../assets/image/html5.png';
import jsIcon from '../assets/image/js.png';
import live from '../assets/image/live.png';
import mysql from '../assets/image/mysql.jpg';
import node from '../assets/image/node.png';
import reactIcon from '../assets/image/react.png';
import sql from '../assets/image/sql.png';
import tailwind from '../assets/image/tail.png';

import '../style/styleCarrusel.css';

const images = [
laravel, angular, bootstrap, cc, css,
gitIcon, htmlIcon, jsIcon, live, mysql,
node, reactIcon, sql, tailwind
];

export default function CarruselTool() {
return (

<>

<h6 className='tecnologyName'>Tecnologias </h6>
    <div className="container-carrusel">
        <div className="slider-track">
            {images.concat(images).map((img, index) => (
            <div className="image-wrapper" key={index}>
                <img src={img} alt={`tech-${index}`} className="carrusel-img" />
            </div>
            ))}

        </div>
    </div>
</>
);
}
