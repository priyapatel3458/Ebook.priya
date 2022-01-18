import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Gridview from "./Gridview";
import Listview from "./Listview";
import data from "./MOCK_DATA (1).json";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Modal from "react-modal";

function App() {
  const [current, setCurr] = useState();
  const [modalone, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [theme, setTheme] = useState('light');
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const filteredArray = data.filter((item) => {
    if (inputVal === "") return item;
    else if (item.title.toLowerCase().includes(inputVal.toLowerCase()))
      return item;
  });

  return (
    <div className={`${theme === "light" ? "App" : "App_Dark"}`}>
      <BrowserRouter>
        <Header inputVal={inputVal} handleChange={(e) => handleChange(e)} theme={theme} setTheme={setTheme}/>
        <div className= {`${theme === "light" ? "title_box" : "title_dark"}`}>
          <div className={`${theme === "light" ? "title_app" : "title_appdark"}`}>Book Library.... </div> 
          </div>
        <Switch>
          <Route exact path="/">
            <div className="body">
              {filteredArray.length > 0 || inputVal === "" ? (
                filteredArray.map((item) => <Listview item={item}  setCurr={setCurr} setModal={setModal}/>)
              ) : (
                <h4 className="error"><h1>😢</h1>Oops!! No Data Found</h4>
              )}
            </div>
          </Route>
          <Route exact path="/grid">
            <div className="body_grid">
              {filteredArray.length > 0 ? (
                filteredArray.map((item) => <Gridview item={item}  setCurr={setCurr} setModal={setModal} />)
              ) : (
                
                <h4 className="error"><h1>😢</h1>Oops!! No Data Found</h4>
              )}
            </div>
          </Route>
        </Switch>
        <Modal
          isOpen={modalone}
          onRequestClose={() => setModal(false)}
          style={{
            overlay: {
              opacity: 12,
            },
            content: {
              position: "absolute",
              top: 150,
              left: 150,
              right: 150,
              bottom: 100,
              width: 300,
              height: 250,
              borderRadius: 30,
              color: "white",
              backgroundColor: "black",
            },
          }}
        >
          <div className="modal_cont">
            <h4>Id :</h4>
            <div>{current?.id}</div>
            <h4>Title : </h4>
            <div>{current?.title}</div>
            <h4>Description :</h4>
            <div>{current?.description}</div>
          </div>
          <br />
          <button className="modal_btn" onClick={() => setModal(false)}>
            Close
          </button>
        </Modal>
      </BrowserRouter>
    </div>
  );
}

export default App;
