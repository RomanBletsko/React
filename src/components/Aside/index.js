import styled from "styled-components";
import Item from "./Items";

function Aside(props) {
  return (
    <Wraper>
      <H3>News</H3>
      <AsideList>
        <Item />
        <Item />
        <Item />
      </AsideList>
    </Wraper>
  );
}
const Wraper = styled.div({
  width: "23%",
  background: "#D9D9D9",
  textAlign: "center",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "7px 10px 10px #bbb",
});
const H3 = styled.h3({
  fontSize: "16px",
  lineHeight: "20px",
  margin: "0px 10px 20px",
});
const AsideList = styled.ul({
  margin: "0",
  width: "100%",
  listStyle: "none",
  padding: "0",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});

export default Aside;
