import styled from "styled-components";

function Item() {
  return <AsideItem />;
}
const AsideItem = styled.li({
  width: "100%",
  height: "110px",
  background: "#BDCDF7",
  borderRadius: "5px",
  boxShadow: "5px 6px 6px #bbb",
});

export default Item;
