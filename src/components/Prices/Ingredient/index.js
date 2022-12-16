import styled from "styled-components";

function Ingredient(props) {
  const { name, price } = props;
  return (
    <PriceSpan>
      {name}: {price} ₴
    </PriceSpan>
  );
}
const PriceSpan = styled.span({
  color: "#fff",
  margin: "20px,",
});
export default Ingredient;
