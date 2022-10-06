//Assets
import Avatar from "../../assets/avatar/matheusscode-avatar.jpg";
import "./style.css";
import TypeWrite from 'typewriter-effect'

const Header = () => {
  return (
    <div>
      <a href="/index.html">
        <img src={Avatar} alt="avatar-image" className="avatar" />
      </a>
      <h1 className="my-name">
        <TypeWrite
          onInit={(typewriter) => {
            typewriter.typeString("I'm am, Matheus Figueiredo").start();
          }}
        />
      </h1>
      <h2 className="about-me">Desenvolvedor Front-End.</h2>
    </div>
  );
};

export default Header;
