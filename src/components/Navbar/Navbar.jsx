import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./NavbarElement";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              RAYHAN
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/portfolio" onClick={closeMobileMenu}>
                  Portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/skill" onClick={closeMobileMenu}>
                  Skill
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact" onClick={closeMobileMenu}>
                  Contact Me
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink
                    href="https://drive.google.com/file/d/1Vj--R1MjYy4jvewMkHXKNCCg7C7YL59x/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button primary>Resume</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink
                    href="https://drive.google.com/file/d/1Vj--R1MjYy4jvewMkHXKNCCg7C7YL59x/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Get Resume
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
