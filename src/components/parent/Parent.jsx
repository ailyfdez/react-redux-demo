
import React from 'react';

import { useSelector } from 'react-redux'
import Child from "../child/child";
import { getUser } from '../../redux/selectors/child'


function Parent() {
    const userName = useSelector(state => getUser(state));

    return (
        <div className="container">
            <h1> Hola soy {userName}</h1>
            <Child></Child>
        </div>
    );
}

export default Parent;