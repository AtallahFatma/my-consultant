import React from "react";
import theme from "../../../styling/theme";
import { ThemeProvider } from "styled-components";
import Footer from "../footer/Footer";
import { StyledChildren, StyledContent, StyledWrapper } from "./Layout.styled";
import Navbar from "./NavBar";

const Layout = ({children}) => {

  return (
    <ThemeProvider theme={theme}>
      <StyledContent>
        <Navbar />
        <StyledWrapper isConnected={false}>
          <StyledChildren>
            {children}
          </StyledChildren>
        </StyledWrapper>
        <Footer />
      </StyledContent>
      </ThemeProvider>
  );
};

export default Layout;
