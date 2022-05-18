import { useState } from "react";


function Select({ options, onSelect, defaultOption=1 }) {

    return (
    <select onChange={(evt) => onSelect(Number(evt.target.value))}>
        {
        options.map((val) => (
            <option value={val.value}>{val.text}</option>
        ))
        }
    </select>

    );
}

const options = [
    { value: 1, text: "Chocolate" },
    { value: 2, text: "Vainilla" }
];

function ItemDetailSelect () {
    const [option, setOption] = useState(1);

    function optionSelected(value) {
        setOption(value);
    }

    return (
        <div>
            {option===1 ? 
                    <img className="detail-img" src='https://i.ibb.co/XDmWj3V/ena-protein.png' alt='imagen' />
                    : 
                    <img className="detail-img" src='https://i.ibb.co/XDmWj3V/ena-protein.png' alt='imagen' /> 
            }
            <Select 
                options={options} 
                onSelect={optionSelected} 
                defaultOption={option} 
            />        
        </div>
    );
}

export default ItemDetailSelect;