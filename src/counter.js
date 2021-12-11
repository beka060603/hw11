import React from 'react';
import {connect} from 'react-redux'
import {inc_action, dec_action, rnd_action, rst_action} from './actions';

const Counter = ({count, inc, dec, rnd, rst}) => {
  return (
    <div>
      <p id='counter_display'>{count}</p>
      <button onClick={inc} id='inc'>Increment</button>
      <button onClick={dec} id='dec'>Decrement</button>
      <button onClick={rnd} id='rnd'>Random</button>
      <button onClick={rst} id='rst'>Restart</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDipatchsToProps = (dispatch) => {
  return {
    inc: () => dispatch(inc_action()),
    dec: () => dispatch(dec_action()),
    rnd: () => dispatch(rnd_action()),
    rst: () => dispatch(rst_action()),
  }
}

export default connect(mapStateToProps, mapDipatchsToProps)(Counter)
