import styled from "styled-components";
import "./style.css";

function MenuButton(props) {
  const { value, active } = props;

  return (
    <li className="menuItem">
      <button className={active ? "btnActive" : "menuBtn"}>{value}</button>
    </li>
  );
}

export default MenuButton;
