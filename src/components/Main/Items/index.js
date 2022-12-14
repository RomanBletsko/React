import styled from "styled-components";

function Item() {
  return <MainItem />;
}
const MainItem = styled.li({
  width: "100%",
  height: "70px",
  background: "#F9D7D7",
  borderRadius: "5px",
  boxShadow: "5px 6px 6px #bbb",
});
export default Item;
