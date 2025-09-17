import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import Logo from "../logo/Logo";
import { NavLink } from "react-router-dom";
import fontSize from "../../theme/fonts/FontTheme";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Hamburger = styled.div`
  width: 25px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 110;
  position: relative;

  div {
    height: 2px;
    width: 100%;
    background-color: ${colors.black};
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &.open div:nth-child(1) {
    transform: translate(0, 10px) rotate(45deg);
  }
  &.open div:nth-child(2) {
    opacity: 0;
  }
  &.open div:nth-child(3) {
    transform: translate(0, -9px) rotate(-45deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: ${({ open }) => (open ? "40vh" : "0")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 40px;
  background-color: red;
  transition: height 0.6s ease, opacity 0.6s ease;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;

  li {
    font-family: Inter;
    font-size: ${fontSize.s};
    letter-spacing: 2px;
    cursor: pointer;
    position: relative;

    a {
      font-weight: 400;
      color: ${colors.black};
      text-decoration: none;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Footer = styled.div`
  font-size: ${fontSize.xs};
  color: ${colors.gray};
`;

function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { to: "/", label: "Services" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/how-it-works", label: "How it works" },
  ];

  return (
    <Wrapper>
      <Logo height="35px" />
      <Hamburger className={open ? "open" : ""} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      <Overlay open={open}>
        <Menu>
          {menuItems.map(({ to, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </Menu>
        <Footer>
          <p>© {new Date().getFullYear()} Inaing Tech. All rights reserved.</p>
        </Footer>
      </Overlay>
    </Wrapper>
  );
}

export default NavbarMobile;
