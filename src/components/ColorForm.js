import React, { useState } from 'react';

const ColorForm = (props) => {
    const {color, setColor} = props;
    const [inputColor, setInputColor] = useState ("");
    const [size, setSize] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault ();
        const newColor = {
            backgroundColor: inputColor,
            display: 'inline-block',
            padding: '10px',
            margin: '10px',
            height: size+'px' ,
            width: size+'px',
        }
        setColor ([newColor, ...color]);
        setInputColor ("");
        setSize ("");
    }

    return (
        <div>
            <label>Color</label>
            <form onSubmit = {handleSubmit}>
                <label>Color</label>
                <input type="text" onChange= {(e) => setInputColor(e.target.value)} value = {inputColor}/>
                <label>Size</label>
                <input type="text" onChange = {(e) => setSize(e.target.value)} value = {size}/>
                <input type="submit" value = "Add"/>
            </form>
        </div>
    )

}

export default ColorForm