import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import backgrounImg from "./assets/bg.jpg";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import { Header, Main } from "./components";

function BurgerApp() {
  return (
    <Body>
      <BodyWrapper>
        <Header />
        <Main />
      </BodyWrapper>
    </Body>
  );
}
const Body = styled.div({
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${backgrounImg})`,
});
// "#1C1C1C"
const BodyWrapper = styled.div({
  margin: "0 auto",
  width: "1211px",
  padding: "20px",
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "space-between",
});
// const MainWrapper = styled.div({
//   width: "100%",
//   height: "600px",
//   display: "grid",
//   gridTemplateColumns: "15% 70% 15%",
// });

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
