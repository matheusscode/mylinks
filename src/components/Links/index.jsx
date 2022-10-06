import "./style.css";

const Links = (props) => {
  const textLinks = props.text;
  const textLinksToUpperCase = textLinks.toUpperCase();
  const link = props.link;

  return (
    <div>
      <a className="btn" href={link}>
        {textLinksToUpperCase}
      </a>
    </div>
  );
};

export default Links;
