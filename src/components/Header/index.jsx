//Assets
import Avatar from "../../assets/avatar/matheusscode-avatar.jpg";
import "./style.css";

const Header = () => {
  return (
    <div>
      <a href="/index.html">
        <img src={Avatar} alt="avatar-image" className="avatar" />
      </a>
      <h1 className="my-name">
        <span>I'm am</span>, Matheus Figueiredo
      </h1>
      <h2 className="about-me">Desenvolvedor Front-End.</h2>
    </div>
  );
};

export default Header;
