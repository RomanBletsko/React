import styled from "styled-components";

function MenuButton(props) {
  const { pr } = props;
  return (
    <Li>
      <Button>{pr}</Button>
    </Li>
  );
}
const Li = styled.li({});
const Button = styled.button({
  width: "40px",
  height: " 40px",
  background: "#E7EFD6;",
  border: "1px solid #888",
  borderRadius: "5px",
  boxShadow: "5px 6px 6px #bbb",
});
export default MenuButton;
