import React from 'react';

const List = (props) => {
    return (
        <li className='list'>
            <input type="checkbox" id="myCheckbox" className='check'/>
            <span className='task'>{props.item}</span>
            <span>...</span>
        </li>
    );
}

export default List;