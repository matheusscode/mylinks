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
            text="๐ portifรณlio"
            link="https://matheusscode.github.io/portifolio/"
          />
        </li>
        <li>
          <Links text="๐จ๐ปโ๐ป github" link="https://github.com/matheusscode" />
        </li>
        <li>
          <Links
            text="๐ผ linkedin"
            link="https://www.linkedin.com/in/matheussfigueiredo/"
          />
        </li>
        <li>
          <Links
            text="๐ธ instagram"
            link="https://www.instagram.com/matheusscode/"
          />
        </li>
        <li>
          <Links text="๐ rocketseat" link="https://discord.gg/rRTKuZj7qj" />
        </li>
        <li>
          <Links
            text="๐ฌ youtube"
            link="https://www.youtube.com/channel/UCiH_b6nMZNRYvRB86ApXKNA"
          />
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default App;
