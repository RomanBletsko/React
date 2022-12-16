import styled from "styled-components";
function Burger() {
  return (
    <Div>
      <TopBun />
      <BottomBun />
    </Div>
  );
}
const Div = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});
const TopBun = styled.div({
  width: "300px",
  height: "60px",
  background: "#FFC473 ",
  borderTopRightRadius: "25px",
  borderTopLeftRadius: "25px",
  borderBottomRightRadius: "5px",
  borderBottomLeftRadius: "5px",
  margin: "30px",
});
const BottomBun = styled.div({
  width: "300px",
  height: "50px",
  background: "#FFC473 ",
  margin: "30px",
  borderRadius: "5px",
});

export default Burger;
