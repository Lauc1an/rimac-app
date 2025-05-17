import icon from "@/assets/images/rimac-icon.svg";
import rimac from "@/assets/images/rimac.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={icon} />
          <img src={rimac} />
        </div>
        <div className="footer__copyright">
          <p>© 2023 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
