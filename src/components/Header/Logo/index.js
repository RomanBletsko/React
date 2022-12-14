import styled from "styled-components";
function Logo() {
  return <LogoWraper />;
}

const LogoWraper = styled.div({
  width: "70px",
  height: "50px",
  background: "#F1F2AE",
  borderRadius: "5px",
  boxShadow: "5px 6px 6px #bbb",
});

export default Logo;
