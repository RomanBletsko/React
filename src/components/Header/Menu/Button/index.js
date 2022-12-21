import "./style.css";

function MenuButton(props) {
  const { value, active } = props;

  return (
    <li>
      <button className={active ? "btnActive" : "menuBtn"}>{value}</button>
    </li>
  );
}

export default MenuButton;
