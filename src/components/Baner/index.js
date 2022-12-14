import styled from "styled-components";

function Baner() {
  return (
    <Wrapper>
      <H3>Baner</H3>
    </Wrapper>
  );
}
const Wrapper = styled.div({
  width: "100%",
  height: "145px",
  background: "#D9D9D9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  boxShadow: "7px 10px 10px #bbb",
});
const H3 = styled.h3({
  fontSize: "16px",
  lineHeight: "20px",
  margin: "0px 10px 20px",
});
export default Baner;
