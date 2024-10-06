import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/Order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
