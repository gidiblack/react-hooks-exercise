import React, {useState} from "react";

const InputElement = () => {
    // useState tracks a single JS object or value
    // js destructuring syntax is used to name the two properties returned by useState -> readonly variable and function that sets the variable  
    const [inputText, setInputText] = useState("");
    // create a new state value inialised with empty array to hold state history changes
    const [historyList, setHistoryList] = useState([]);
    // call function from inside the onChange event listener and parse the current value of input to it.
    return <div><input
        onChange={(e) => {
            setInputText(e.target.value);
            setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter some text" /><br/>
        {inputText}
        {/* MAP through the array and output history on change */}
        <hr/><br/>
        <ul>
            {historyList.map((rec) => {
                return <div>{rec}</div>
            })}
            
        </ul>
        </div>;
};

export default InputElement;