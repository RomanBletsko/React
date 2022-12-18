import styled from "styled-components";
import Button from "./Button";

function Menu() {
  return (
    <MenuList>
      <Button value="Home" active={true} />
      <Button value="Order" />
      <Button value="FAQ" />
    </MenuList>
  );
}
const MenuList = styled.ul({
  padding: 0,
  listStyle: "none",
  display: "flex",
  gap: "10px",
});

export default Menu;
