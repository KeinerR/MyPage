import { FaFacebookF, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../style/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Keiner Rivas © {new Date().getFullYear()}</h3>
        <p className="footer-text">Construyendo soluciones con pasión y precisión. Siempre aprendiendo, siempre creando.</p>
        
        <div className="footer-icons">
          <a href="https://github.com/KeinerR" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/keiner-rivas/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com/keiner_2004/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
