import styled from "styled-components";
import backGroundImg from "../../../assets/bg.jpg";
import Loader from "../Loader";
function Burger({ totalPrice, ingredientAddingOrder, loading }) {
  const positionTopBun = ingredientAddingOrder.length
    ? 115 + 25 * ingredientAddingOrder.length
    : 260;
  const zIndexTopBun = ingredientAddingOrder.length + 1;
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Div>
          <Tittle>Burger price: {totalPrice} ₴</Tittle>
          <BurgerWrapper>
            <TopBun
              src={require("../../../assets/products/top_bun.png")}
              alt="Top bun"
              style={{
                bottom: positionTopBun,
                zIndex: zIndexTopBun,
              }}
            />
            {!ingredientAddingOrder.length && (
              <Paragraph>Start by adding ingredients to your burger</Paragraph>
            )}

            {ingredientAddingOrder.map((product, index) => {
              return (
                <ProductIMGStyled
                  key={product + index}
                  src={require(`../../../assets/products/${product}.png`)}
                  alt={product}
                  style={{
                    bottom: 95 + index * 25,
                    zIndex: index + 1,
                  }}
                />
              );
            })}
            <BottomBun
              src={require("../../../assets/products/bottom_bun.png")}
              alt="Bottom bun"
            />
          </BurgerWrapper>

          <Btn>Checout</Btn>
        </Div>
      )}
    </div>
  );
}
const Div = styled.div({
  marginTop: "15px",
  height: "95%",
  display: "flex",
  justifyContent: "end",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${backGroundImg})`,
  borderRadius: "15px",
});
const Tittle = styled.h3({
  color: "#FF6B0B",
});
const Paragraph = styled.p({
  position: "absolute",
  top: "51%",
  color: "#FF6B0B",
});
const BurgerWrapper = styled.div({
  position: "relative",
  height: "90%",
  width: "50%",
  display: "flex",
  justifyContent: "end",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "50px",
});
const TopBun = styled.img({
  width: "200px",
  position: "absolute",
});
const ProductIMGStyled = styled.img({
  width: "200px",
  position: "absolute",
});
const BottomBun = styled.img({
  width: "200px",
});
const Btn = styled.button`
  margin-bottom: 30px;
  background: #ff6b0b;
  font-weight: 800;
  border-radius: 5px;
  border: none;
  padding: 7px 15px;
  &:hover {
    scale: 120%;
  }
`;

export default Burger;
