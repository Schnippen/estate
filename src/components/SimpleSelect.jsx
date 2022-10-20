import {useState} from 'react'

function SimpleSelect(props) {

    const [state, setState] = useState("");

    const handleState = (e) => {
      setState(e.target.value);
    };

  return (
    <div className="simple-select">
      <label>{props.title}</label>
      <div>
        <select onChange={handleState}>
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

/*<option value="1">mieszkania</option>
          <option value="2">domy</option>
          <option value="3">komercyjne</option>
          <option value="4">działki</option>
          <option value="5">garaże</option>
          <option value="-1">dowolny</option>*/