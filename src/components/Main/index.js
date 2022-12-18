import styled from "styled-components";
import Burger from "./Burger";
function Main(props) {
  const { price } = props;
  return (
    <Wrapper>
      <Tittle>Burger price: {price} ₴</Tittle>
      <Btn>Checout</Btn>
      <Burger></Burger>
    </Wrapper>
  );
}
const Wrapper = styled.div({
  height: " 100%",
  background: "#312F30",
  textAlign: "center",
  padding: "0",
  borderRadius: "5px",
  boxShadow: "7px 10px 5px #fa5f064d",
});
const Tittle = styled.h3({
  color: "#FF6B0B",
});
const Btn = styled.button`
  background: #ff6b0b;
  font-weight: 800;
  border-radius: 5px;
  border: none;
  padding: 7px 15px;
  &:hover {
    scale: 120%;
  }
`;

export default Main;
