import React from 'react'
import {useDispatch } from 'react-redux';
import { getUser} from '../../redux/action';
import './index.css';

function Child() {

  const dispatch = useDispatch()

    return (
        <button id="buttonclick" type="button" className="btn m-2 pt-2 pb-2"  onClick={() => dispatch( getUser())}  >click me</button>
    );
}

export default Child;