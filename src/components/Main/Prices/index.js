import styled from "styled-components";
import Loader from "../Loader";
import Ingredient from "./Ingredient";

function Prices({ ingredientArr, loading }) {
  return (
    <Wraper>
      {loading ? (
        <Loader />
      ) : (
        <Div>
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
        </Div>
      )}
    </Wraper>
  );
}
const Wraper = styled.div({});
const Div = styled.div({
  textAlign: "center",
  paddingTop: "50px",
});
const Tittle = styled.h3({
  color: "#FF6B0B",
});
const PricesList = styled.ul({
  margin: "0 0 0 30px",
  listStyle: "none",
  padding: "0",
  textAlign: "start",
});

export default Prices;
