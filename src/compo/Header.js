import React from 'react';
import "./Header.css" ;
import  MenuIcon from "@mui/icons-material/MenuOutlined";
import  SearchIcon from "@mui/icons-material/Search";
import  ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import  HelpOutLinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import  SettingOutLinedIcon from "@mui/icons-material/SettingsOutlined";
import  DialpadOutLinedIcon from "@mui/icons-material/DialpadOutlined";
import { Avatar } from '@mui/material';




function Header(props) {

  const del=async()=>{
    localStorage.clear("mm");
    props.history.push("/")
    }





  return (
    <div className='header'> 
    <div className='header_left'>
<MenuIcon/>
      <img
      src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png"
      alt="loading"
      />
      </div>

      <div className='headermiddle'>
        <div className='headersearchcontainer'>
        <SearchIcon/>
        <input type="text" placeholder='search in mails'></input>
        <ArrowDropDownIcon/>
        </div>
      </div>

      <div className='header_right'>
        <div className='headerrighticons'>
        
      <HelpOutLinedIcon/>
      <SettingOutLinedIcon/>
      <DialpadOutLinedIcon/>
        </div>
     <div className='avatar' style={{cursor:"pointer"}}>
     <Avatar onClick={del}/>

     </div>
      
      </div>
      
    
    
    </div>
  )
}

export default Header