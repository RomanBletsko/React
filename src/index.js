import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import { Header, Main, Prices } from "./components";

const ingredients = [
  { name: "Bacon", price: 0.75 },
  { name: "Cheese", price: 1.7 },
  { name: "Salad", price: 0.95 },
  { name: "Pickle", price: 1.25 },
  { name: "Meat", price: 0.75 },
];

function BurgerApp() {
  let burgerPrice = 0;
  return (
    <Body>
      <BodyWraper>
        <Header />
        <MainWrapper>
          <Prices property={ingredients} />
          <Main price={burgerPrice} />
        </MainWrapper>
      </BodyWraper>
    </Body>
  );
}
const Body = styled.div({
  width: "100%",
  height: "100vh",
  background: "#1C1C1C",
});
const BodyWraper = styled.div({
  margin: "0 auto",
  width: "1211px",
  padding: "20px",
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "space-between",
});
const MainWrapper = styled.div({
  width: "100%",
  height: "600px",
  display: "grid",
  gridTemplateColumns: "15% 70% 15%",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BurgerApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
