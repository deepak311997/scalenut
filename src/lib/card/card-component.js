import React, { memo } from 'react';

function Card(props) {
    return (
        <div className='card-container'>
            {props.children}
        </div>
    );
}

export default memo(Card);