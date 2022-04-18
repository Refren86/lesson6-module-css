import React from "react";

import { Contacts } from "./Contacts/Contacts";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  return (
    <header id="header">
      <Contacts />
      <Navigation />
    </header>
  );
};
