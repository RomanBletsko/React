import styled from "styled-components";
import Item from "./Items";

function Main() {
  return (
    <Wraper>
      <H3>Blogs</H3>
      <MainLIst>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </MainLIst>
    </Wraper>
  );
}
const Wraper = styled.div({
  width: "65%",
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
const MainLIst = styled.ul({
  margin: "0",
  padding: 0,
  listStyle: "none",
  background: "#D9D9D9",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "10px",
});

export default Main;
