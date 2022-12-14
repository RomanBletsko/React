import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Tittle>Burger</Tittle>
      <Menu />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.section({
  width: "100%",
  height: "100px",
  background: "#D9D9D9",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "5px",
  boxShadow: "7px 10px 10px #bbb",
});
const Tittle = styled.h2({
  color: "DarkBlue",
});

export default Header;
