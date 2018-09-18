import React from 'react';
import './Strange.css';

const StrangerCard = props => {
  return (
    <div className="col-3 my-1 p-0" key={props.id}>
      <img
        onClick={e => {
          e.preventDefault();
          props.remove(props.id, e);
        }}
        className="img-thumbnail click-item"
        alt={props.name}
        src={props.image}
      />
    </div>
  );
};

export default StrangerCard;
