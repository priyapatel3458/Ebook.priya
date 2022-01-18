import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {useHistory} from 'react-router-dom';
import './Header.css';

function Header({inputVal, handleChange, theme, setTheme}) {
    let history = useHistory();
    const handlegrid = () => {
        history.push("/grid");
      };
      const handlelist = () => {
        history.push("/");
      };
      const handletoggle = () => {
        if(theme === 'light') {
            setTheme('Dark');
        }
        else{
            setTheme('light');
        }
      }
    return (
        <div className="Header_container">
            <div className="logo" >
                E-Books
            </div> 
            
            <div className="header__search">
                <input className="header__searchInput" type="text" value={inputVal} onChange={(e) => handleChange(e)} />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__option">
            <span className="header__optionLineOne" onClick={handlegrid}><ViewCompactIcon/></span>
            <span className="header__optionLineTwo">GridView</span>
          </div>
          <div className="header__option">
          <span className="header__optionLineOne" onClick={handlelist}><FormatListBulletedIcon /></span>
          <span className="header__optionLineTwo">ListView</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne" onClick={handletoggle}><Brightness4Icon /></span>
          <span className="header__optionLineTwo">Theme</span>
        </div>
            
        </div>
        
    )
}

export default Header
