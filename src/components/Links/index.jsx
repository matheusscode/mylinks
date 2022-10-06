import "./style.css";

const Links = (props) => {
  const textLinks = props.text;
  const textLinksToUpperCase = textLinks.toUpperCase();
  const link = props.link;

  return (
    <div>
      <a className="link" target="_blank" href={link}>
        {textLinksToUpperCase}
      </a>
    </div>
  );
};

export default Links;
