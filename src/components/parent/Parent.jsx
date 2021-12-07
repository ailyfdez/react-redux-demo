
import React from 'react';

import { useSelector } from 'react-redux'
import Child from "../child/child";
import { getUser } from '../../redux/selectors/child'


function Parent() {
    const userName = useSelector(state => getUser(state));
    
    return (
        <><div> Hola soy {userName}</div><Child></Child></>
    );
}

export default Parent;