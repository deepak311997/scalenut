import React, { memo, useState } from 'react';

const minPriceRange

function Slider(props) {
    const [min, setMin] = useState(props.min);
    const [max, setMax] = useState(props.max);

    return (
        <div>
            <input type='range' min={min} max={max} value={props.value} />
            <div>
                <select>
                    <option value="Min" class="OMc8Rd">Min</option>
                    <option value="500" class="OMc8Rd">₹500</option>
                    <option value="1000" class="OMc8Rd">₹1000</option>
                    <option value="2000" class="OMc8Rd">₹2000</option>
                    <option value="5000" class="OMc8Rd">₹5000</option>
                    <option value="10000" class="OMc8Rd">₹10000</option>
                </select>
                <select></select>
            </div>
        </div>
    )
}

export default memo(Slider);