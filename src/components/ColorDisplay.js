import React from 'react';
import StyledBox from './StyledBox'

const ColorDisplay = (props) => {
    const {color} = props;
    return (
        <div>
            {
                color.map ((colorObj, index)=> (
                    <StyledBox colorObj = {colorObj} key={index}/>
                ))
            }
        </div>
    )
}

export default ColorDisplay


