import React, {useState} from 'react';

const useSelect = (initialState, options) => {


    const [state, setState] = useState(initialState);

    const SelectComponent = () => (
        <select className="browser-default" id="" value={state} onChange={e => setState(e.target.value)}>
            <option value="">--Select an option--</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
    return [state, SelectComponent];
};

export default useSelect;
