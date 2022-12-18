import styled from "styled-components";

function Ingredient(props) {
  const { name, price } = props;
  return (
    <PriceItem>
      {name}: {price} ₴
    </PriceItem>
  );
}
const PriceItem = styled.li({
  color: "#fff",
  margin: "20px,",
});
export default Ingredient;
