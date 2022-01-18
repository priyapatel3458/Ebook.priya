import React from "react";
import './Gridview.css'
const Gridview = ({ item, setModal, setCurr }) => {
  return (
    <div className="container" >
      <div className="card" onClick={() => {
        setModal(true);
        setCurr(item);
      }}>
        <img className="img" src={item.url} alt="book" />
        <div className="details">
          <div className="title_name">Title : <strong>{item.title}</strong></div>
          <div>Description : {item.description}</div>
        </div>
       </div>
    </div>
  );
};

export default Gridview;