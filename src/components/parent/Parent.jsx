
import React from 'react';

import { useSelector } from 'react-redux'
import Child from "../child/child";
import { getAmount } from '../../redux/selectors/child'


function Parent() {
    const amount = useSelector(state => getAmount(state));

    return (
        <div className="container">
            <h1> Count ${amount}</h1>
            <Child></Child>
        </div>
    );
}

export default Parent;