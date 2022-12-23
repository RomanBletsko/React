import axios from "axios";
import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Prices from "./Prices";
import Controls from "./Controls";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      prices: [],
      ingredients: [],
      ingredientAddingOrder: [],
      burgerCreator: {},
      orderPrice: "1.00",
    };
  }

  componentDidMount = async () => {
    try {
      this.setState({ loading: true });
      const { data } = await axios.get(
        "https://burger-api-xcwp.onrender.com/ingredients"
      );
      const ingredients = data.map((ingredient) => {
        return ingredient.name;
      });
      const quantities = data.reduce(
        (acc, curr) => ({ [curr.name]: 0, ...acc }),
        {}
      );

      this.setState({
        prices: data,
        ingredients: ingredients,
        burgerCreator: quantities,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  findPrice = (ingredient) => {
    return this.state.prices.find((element) => element.name === ingredient)
      .price;
  };
  clearOrder = () => {
    const clearedBurgerCreator = {};
    for (const ingredient in this.state.burgerCreator) {
      clearedBurgerCreator[ingredient] = 0;
    }
    if (this.state.ingredientAddingOrder.length !== 0) {
      this.setState({
        burgerCreator: clearedBurgerCreator,
        ingredientAddingOrder: [],
        orderPrice: "1.00",
      });
    }
  };

  changingAmountOfIngredients = (event) => {
    const actionIngredient = event.target.dataset["ingredient"];
    const actionClicked = event.target.dataset["action"];

    this.setState((prevState) => {
      const copyBurgerCreator = { ...prevState.burgerCreator };
      let newPrice = +prevState.orderPrice;
      const newIngredientAddingOrder = [...prevState.ingredientAddingOrder];

      if (actionClicked === "decrement") {
        if (!copyBurgerCreator[actionIngredient] <= 0) {
          copyBurgerCreator[actionIngredient] -= 1;
          newPrice -= this.findPrice(actionIngredient);
          newIngredientAddingOrder.splice(
            newIngredientAddingOrder.findLastIndex(
              (element) => element === actionIngredient
            ),
            1
          );
        }
      }
      if (actionClicked === "increment") {
        if (
          copyBurgerCreator[actionIngredient] < 5 &&
          newIngredientAddingOrder.length < 10
        ) {
          copyBurgerCreator[actionIngredient] += 1;

          newPrice += this.findPrice(actionIngredient);

          newIngredientAddingOrder.push(actionIngredient);
        }
      }
      return {
        ...prevState, // works without it
        burgerCreator: copyBurgerCreator,
        orderPrice: newPrice.toFixed(2),
        ingredientAddingOrder: newIngredientAddingOrder,
      };
    });
  };

  render() {
    const {
      prices,
      orderPrice,
      ingredients,
      burgerCreator,
      ingredientAddingOrder,
      loading,
    } = this.state;
    return (
      <Wrapper>
        <Prices ingredientArr={prices} loading={loading} />
        <Burger
          totalPrice={orderPrice}
          ingredientAddingOrder={ingredientAddingOrder}
          loading={loading}
        />
        <Controls
          loading={loading}
          ingredients={ingredients}
          quantities={burgerCreator}
          updateBurger={this.changingAmountOfIngredients}
          clearAll={this.clearOrder}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "15% 70% 15%",
  height: " 70vh",
  background: "rgba(49, 47, 48, 0.8)",
  textAlign: "center",
  padding: "0",
  borderRadius: "5px",
  boxShadow: "7px 10px 5px #fa5f064d",
});

export default Main;
