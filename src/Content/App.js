import React, { Component } from "react";
import NavbarHook from "./NavbarHook";
import FormHook from "./FormHook";
import PageContent from "./PageContentHook";
import { ThemeProvider } from "./contexts/ThemeContextHook";
import { LanguageProvider } from "./contexts/LanguageContextHook";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <NavbarHook />
            <FormHook />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
