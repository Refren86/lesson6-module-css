import React from "react";

import { Bubbles } from "./Bubbles/Bubbles";
import { ContactUsForm } from "./ContactUsForm/ContactUsForm";
import { ContactDetails } from "./ContactDetails/ContactDetails";
import { ContactUsBanner } from "./ContactUsBanner/ContactUsBanner";

export const Main = () => {
  return (
    <main>
      <Bubbles />
      <ContactUsBanner />
      <ContactUsForm />
      <ContactDetails />
    </main>
  );
};
