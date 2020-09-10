import React from 'react';

const TabHeader = (props) => {
    const selected = {
        backgroundColor: 'green',
    };

    const notSelected = {
        backgroundColor: 'grey',
    };

    return (
        <div>
            <button
                onClick={() => props.clickHandler(props.index)}
                style={props.selected ? selected : notSelected}
                // className={props.selected ? 'btn btn-primary' : 'btn-warning'}
            >
                Tab {props.index}
            </button>
        </div>
    );
};

export default TabHeader;
