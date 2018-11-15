import React from "react";
import { Link } from "react-router-dom";

import { HeaderCss } from "../styles/styles";

const Header = () => {
  return (
    <HeaderCss>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </HeaderCss>
  );
};

export default Header;
