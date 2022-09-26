import data from "../data/rybnik_Nieruchomosci_Morizon_21.09.2022.json";
import ListItem from "./ListItem";
import './List.css'

function List() {
  const items = data.map((item) => 
    <ListItem item={item}/>
  );

  return (
    <ul className="list_container">
      {items}
    </ul>
  );
}

export default List;
