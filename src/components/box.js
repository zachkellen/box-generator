import React from 'react';

const ColorBox = (props) => {

    const boxStyle = {
        backgroundColor: props.color
    }

    return(
        <div className='box' style={boxStyle}>
            {props.color}
        </div>
    )
}

export default ColorBox;