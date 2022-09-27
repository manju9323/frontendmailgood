import React from 'react'
import "./mail.css"
import MailCards from './MailCards';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';

function Mail() {
  return (
    <div className='mail'>
    <div className='mailtop1'>
       <div className='mailleft'>
       <CheckBoxOutlineBlankIcon className='cbox'/>
        <RefreshIcon/>
        <ArrowDropDownIcon/>
        <MoreVertIcon/>
        </div> 
      <div className='mailright'>  
        <ChevronLeftIcon/>
        <ChevronRightIcon/>
        </div>
    </div>

        <div className='mailtop2'>
<div className='mailtop2icon'><InboxIcon/><h5>Primary</h5></div>
<div className='mailtop2icon'><LocalOfferIcon/><h5>Promotion</h5></div>
<div className='mailtop2icon'><PeopleAltIcon/><h5>Social</h5></div>
<div className='mailtop2icon'><InfoIcon/><h5>Updates</h5></div>
        </div>

     <div className='mainmail'>
<div className='mailcards'>
<MailCards/>
</div>
     </div>


    </div>
  )
}

export default Mail