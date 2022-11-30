import './Footer.css'
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-social">
          <label>Bądźmy w kontakcie:</label>
          <div className="footer__container-social-links">
            <FiFacebook />
            <FiTwitter />
            <FiFacebook />
            <FiInstagram/>
          </div>
        </div>
        <div className="footer__container-opinions">opinie klientów</div>
        <div className="footer__container-navigation">nawigacja strony</div>
      </div>
      <div> contact support adress</div>
      <div>copyright privacy policy etc</div>
    </footer>
  );
}

export default Footer