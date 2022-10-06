import React from "react";

//Components
import Links from "./components/Links";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <ul>
        <li>
          <Links
            text="📝 portifólio"
            link="https://matheusscode.github.io/portifolio/"
          />
        </li>
        <li>
          <Links text="👨🏻‍💻 github" link="https://github.com/matheusscode" />
        </li>
        <li>
          <Links
            text="💼 linkedin"
            link="https://www.linkedin.com/in/matheussfigueiredo/"
          />
        </li>
        <li>
          <Links
            text="📸 instagram"
            link="https://www.instagram.com/matheusscode/"
          />
        </li>
        <li>
          <Links text="🚀 rocketseat" link="https://discord.gg/rRTKuZj7qj" />
        </li>
        <li>
          <Links
            text="🎬 youtube"
            link="https://www.youtube.com/channel/UCiH_b6nMZNRYvRB86ApXKNA"
          />
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default App;
