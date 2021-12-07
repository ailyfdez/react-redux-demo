import React from 'react'
import {useDispatch } from 'react-redux';
import { getUser} from '../../redux/action';

function Child() {

  const dispatch = useDispatch()

    return (
        <button type="button" className="btn btn-primary"  onClick={() => dispatch( getUser())}  >click me</button>
    );
}

export default Child;