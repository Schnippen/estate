import {useState} from 'react'
import styles from './SimpleSelect.module.css'

function SimpleSelect(props) {

    const [isActive, setIsActive] = useState(false);
    const [state, setState] = useState("");

      const handleActive = () => {
        setIsActive((current) => !current);
      };

    const handleState = (e) => {
      setState(e.target.value);
    };

  return (
    <div className={styles.simple_select}>
      <label>{props.title}</label>
      <div>
        <select className={styles.select_form} onChange={handleState}>
          <option value="1">mieszkania</option>
          <option value="2">domy</option>
          <option value="3">komercyjne</option>
          <option value="4">działki</option>
          <option value="5">garaże</option>
          <option value="-1">dowolny</option>
        </select>
      </div>
      {state}
    </div>
  );
}

export default SimpleSelect

/*

.simple-select{
    display: flex;
    flex-direction: column;
    align-items: center;
}


<option value="1">mieszkania</option>
          <option value="2">domy</option>
          <option value="3">komercyjne</option>
          <option value="4">działki</option>
          <option value="5">garaże</option>
          <option value="-1">dowolny</option>
          
            const handleSorting =(e)=>{const selectedSorting=(e.target.value);
  setItemsSorting(selectedSorting)};

  const handleSortingLowToHigh =()=>{
    Database.sort((firstItem, secondItem) =>
      parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join("")) -
      parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join("")))
  };
  const handleSortingHighToLow =()=>{
    Database.sort((firstItem, secondItem) =>
    parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join(""))-
    parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join("")))
  };

  setItemsPerPage(itemsPerPage = e.target.value)

          */