import React from 'react'
import { useState} from 'react';
import "./Sidebar.css";
//modal
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-modal'
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import EmailIcon from '@mui/icons-material/Email';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
//bottom
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CollectionsIcon from '@mui/icons-material/Collections';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
//
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';

//toast
import { toast} from 'react-toastify';
const urls='https://gmailapp.onrender.com/api/compose/mail'

function Sidebar(props) {

  const [modalOpen,setmodalOpen] =useState(false)
  const [focus,setfocus] =useState(false)
  const [email,setemail] =useState("")
  const [subject,setsubject] =useState("")
  const [message,setmessage] =useState("")

///asiox--------------------------------
let fast=async()=>{
  //console.log({email,subject,message})
  if (email !==""){
await axios.post(urls,{email,subject,message},{headers:{'mm':`${JSON.parse(localStorage.getItem("mm"))}`}})
.then(res=>{
  toast.success(`${res.data}`,{
    position:toast.POSITION.TOP_CENTER
  })
 
}
)
.catch(
  err=>{toast.error(err.response.data.err)}
)}
}
//----------------------------------------
  return (
    <div className='sidebar'>
<div className='sidebaroptiontop'>
<div className='sidebaroption'>

  <div className='sidebaroptionicon1'>
    <CreateIcon  onClick ={()=>{setmodalOpen(true)}}/>
  <Modal isOpen={modalOpen} onRequestClose={()=>setmodalOpen(false)}
   shouldCloseOnOverlayClick={false} 
  style={{
    overlay: {
    width:680,
    height:"auto",
    backgroundColor:"rgba(0,0,0,0.8)",
    zIndex:"1000",
    top:"50%",
    left:"50%",
    marginTop:"-250px",
    marginLeft:"-350px",
    borderRadius:"none",
  },
content:{margin:0,
padding:0,
border:"none",
},
}}>

  <div className='modalcontainer'>
    <div className='modalcontainertop'>
    <div className='modalheader'>
      <p>New Message</p>
      <div className='modelheadericons'></div>
<CloseIcon onClick={()=>setmodalOpen(false)}/>
      </div>
    </div>
    
    <div onClick={()=>setfocus(true)} className="modalrecipt">
    <p>{focus?"To":"Recipients"}</p>























    

    <input  onChange={(e)=>setemail(e.target.value)}
    type="text" placeholder='To' 
    />
  </div>

  <div className="modalrecipt">
    <input  onChange={(e)=>setsubject(e.target.value)}
    type="text" placeholder="Subject"
    />
  </div>
  <div className="quill">
    <ReactQuill  onChange={(value)=>setmessage(value)}
    placeholder="Compose your mail"
    />
  </div>
  </div>
  <div className='modalcontainbottom'>
     <div className='modalbottom'>

<button type="submit" onClick={fast} >Send</button>

<FormatColorTextIcon/>
<AttachFileIcon/>
<InsertLinkIcon/>
<EmojiEmotionsIcon/>
<CollectionsIcon/>
<ScreenLockRotationIcon/>
<div className='modalbottomlast'>
  <MoreVertIcon/>
<DeleteIcon/></div>
     </div>
  </div>
  </Modal>
  </div>

  <div className='sidebaroptionicon'><InboxIcon/></div>
  <div className='sidebaroptionicon'><StarIcon/></div>
  <div className='sidebaroptionicon'><TimerIcon/></div>
  <div className='sidebaroptionicon'><SendIcon/></div>
  <div className='sidebaroptionicon'><DraftsIcon/></div>

<LabelImportantIcon/><ScheduleSendIcon/><EmailIcon/><ErrorOutlineIcon/><DeleteIcon/><CategoryIcon/><SettingsIcon/><AddIcon/>



</div>
</div>



    </div>
  )
}

export default Sidebar