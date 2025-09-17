import styled from "styled-components";
import Logo from "../logo/Logo";
import { NavLink } from "react-router-dom";
import colors from "../../theme/color/ColorTheme";
import fontSize from "../../theme/fonts/FontTheme";
import ArrowButton from "../button/ArrowButton";

const Wrapper = styled.div`
  height: 84px;
  width: 100%;
  will-change: transform;
`;

const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  box-sizing : border-box;
  padding :  0px 20px;
  ul {
    display: flex;
    gap: 20px;
  }

  li {
    position: relative;
    font-size: ${fontSize.s};
    list-style: none;
    letter-spacing: 18%;
    cursor: pointer;
    a {
      color: ${colors.black};
      text-decoration: none;
      font-weight: 400;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

function NavbarDesktop() {
  const menuItems = [
    { to: "/", label: "Services" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/how-it-works", label: "How it works" },
  ];

  return (
    <Wrapper>
      <Container>
        <div>
          <Logo />
        </div>
        <ul>
          {menuItems.map(({ to, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ArrowButton text={"Get in touch"} />
      </Container>
    </Wrapper>
  );
}

export default NavbarDesktop;
