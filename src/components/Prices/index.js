import styled from "styled-components";
import Ingredient from "./Ingredient";

function Prices(props) {
  const ingradientArr = props.property;

  return (
    <Wraper>
      <Tittle>Our prices</Tittle>

      <PricesList>
        {ingradientArr.map((element) => (
          <PricesItem>
            <Ingredient
              name={element.name}
              price={element.price}
              key={element.name}
            />
          </PricesItem>
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
const PricesItem = styled.li({
  margin: "10px",
});

export default Prices;
