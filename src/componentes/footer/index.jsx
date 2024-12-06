import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a
          href="https://www.linkedin.com/in/daniel-developer-ariza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/Linkedin.png" alt="Linkedin" />
        </a>

        <a href="https://x.com/DanielA13784385">
          <img src="/img/twitter.png" alt="twitter" />
        </a>

        <a
          href="https://www.instagram.com/arizamelquisedec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="img/LogoFooter.png" alt="Logo" />
      <strong>Desarrollado por Daniel Ariza y Alura</strong>
    </footer>
  );
};

export default Footer;
