import styled from "styled-components";
import Ingredient from "./Ingredient";

function Prices(props) {
  const ingredientArr = props.property;

  return (
    <Wraper>
      <Tittle>Our prices</Tittle>

      <PricesList>
        {ingredientArr.map((element, index) => (
          <Ingredient
            name={element.name}
            price={element.price}
            key={element.name + index}
          />
        ))}
      </PricesList>
    </Wraper>
  );
}
const Wraper = styled.div({
  textAlign: "center",
  paddingTop: "100px",
});
const Tittle = styled.h3({
  color: "#FF6B0B",
});
const PricesList = styled.ul({
  margin: "0",
  listStyle: "none",
  padding: "0",
  textAlign: "center",
});

export default Prices;
