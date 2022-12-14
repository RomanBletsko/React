import styled from "styled-components";
import Button from "./Button";

function Menu(props) {
  return (
    <MenuList>
      <Button pr={1} />
      <Button pr={2} />
      <Button pr={3} />
      <Button pr={4} />
      <Button pr={5} />
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
