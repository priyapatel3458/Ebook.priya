import React from "react";
import './Listview.css'

const Listview = ({ item , setModal, setCurr}) => {
  return (
    
    <div className="container-ls" onClick={() => {
      setModal(true);
      setCurr(item);
    }} >
   
      <div className="card-ls">
        <img className="img" src={item.url} alt="book" />
      </div>
      <div className="space-ls"></div>
      <div className="details-ls">
        <div className="title">  <strong>{item.title}</strong></div>
        <div>Description : {item.description}</div>
      </div>
    </div>
  );
};

export default Listview;