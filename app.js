const { useState } = React;

const GroceryListItem = (props) => {
  const [isBold, setIsBold] = useState(false);

  const style = {
    fontWeight: isBold ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseOver={() => setIsBold(true)}>
      {props.type}
    </li>
  );
}

const Strawberries = () => (<li>Strawberries</li>);
const Cucumbers = () => (<li>Cucumbers</li>);

const GroceryList = (props) => (
  <ul>
    {props.items.map(item => (<GroceryListItem type={item} />) )}
  </ul>
);
ReactDOM.render(<GroceryList items={['Mangos', 'Strawberries', 'Cucumbers']} />, document.getElementById("app"));