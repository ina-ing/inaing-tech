import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Wrapper = styled.div`
  position: fixed;
  background-color: ${colors.white};
  opacity: 1;
  z-index: 99 !important;
  width: 100vw;
  height: fit-content;
`;

const DesktopNavbar = styled.div`
  display: none;
  @media (min-width: 680px) {
    display: block;
  }
`;

const MobileNavbar = styled.div`
  display: block;

  @media (min-width: 680px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <>
      <Wrapper>
        <DesktopNavbar>
          <NavbarDesktop />
        </DesktopNavbar>
        <MobileNavbar>
          <NavbarMobile/>
        </MobileNavbar>
      </Wrapper>
      <div style={{ paddingTop: "76px" }}></div>
    </>
  );
}

export default Navbar;
