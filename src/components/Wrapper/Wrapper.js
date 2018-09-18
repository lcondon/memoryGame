import React from 'react';
import './Wrapper.css';

const Wrapper = props => (
  <div className="container mx-auto my-4" style={{ width: '80%' }}>
    <div className="row justify-content-center">{props.children}</div>
  </div>
);

export default Wrapper;
