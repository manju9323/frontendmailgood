import {React,useEffect,useState}from 'react'
import "./MailCards.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox } from '@mui/material';
import Star from '@mui/icons-material/StarRate';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import LaunchIcon from '@mui/icons-material/Launch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Reply from '@mui/icons-material/Reply';
import Forward from '@mui/icons-material/Forward';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-modal'
//import CreateIcon from '@mui/icons-material/Create';
//
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CollectionsIcon from '@mui/icons-material/Collections';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
//
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import axios from 'axios';
import { toast} from 'react-toastify';
const urls='https://gmailapp.onrender.com/api/compose/mail'



function MailCards() {

  const [modalOpen,setmodalOpen] =useState(false)
  const [focus,setfocus] =useState(false)
  const [email,setemail] =useState("")
  const [subject,setsubject] =useState("")
  const [message,setmessage] =useState("")

  const [datum,setDatum] =useState([])
  const [neutral,setneutral] =useState(false)
  const reply=()=>{
    setmodalOpen(true)
    setneutral(false)
  }
  const forward=()=>{
    setmodalOpen(true)
    setneutral(true)
  }

const getdata=async()=>{
  let res =await axios.get("https://gmailapp.onrender.com/api/data/getmails",{headers:{'mm':`${JSON.parse(localStorage.getItem("mm"))}`}})
setDatum(res.data)
console.log(res.data)
}



useEffect(()=>{
  getdata()
},[])



let fast=async()=>{
  //console.log({email,subject,message})
  if (email !=="" && email !==null){
await axios.post(urls,{email,subject,message},{headers:{'mm':`${JSON.parse(localStorage.getItem("mm"))}`}})
.then(res=>{
  toast.success(`${res.data.message || res.data}`,{
    position:toast.POSITION.TOP_CENTER
  })
}
)
.catch(
  err=>{toast.error(err.response.data.err)}
)}
}



 const del=async(id)=>{
console.log(id)
 await axios.delete(`https://gmailapp.onrender.com/api/data/deletemail/${id}`,{headers:{'mm':`${JSON.parse(localStorage.getItem("mm"))}`}});
getdata()
 }




  return (
    <>{ datum.map((dat,i)=>{ 

 return <div key={i} className='mailcards'>
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className='accordmid'>
            <div className='accordleft'>
            <Checkbox/>
            <Star/>
            <div className='accorddetailinfo'>
              <AccountCircleIcon/>
              <div className='senderinfodate'>
              </div>
            </div>
            <Typography> <div className='sendinfo'>
              <div className='h4'>{dat.email}<small className='sm' >{dat.email} </small></div>
              <small className='tempmailspace'>{dat.email}</small>
              
              </div></Typography>
            </div>
            <div className='accordmain'>
            <Typography>{dat.subject}</Typography>
            </div>
            <div className="accordmiddate">
            <Typography><div className='senderinfodateoption'>
                <small>{dat.createdAt}</small>
                <MoreVertIcon/>
                <LocalPrintshopIcon/>
            <LaunchIcon/>
            <DeleteIcon onClick={()=>{del(dat._id)}}/>
                <div className='accorddetails'>
          </div>
                </div></Typography>
            </div>
            </div>
          
        </AccordionSummary>
        <AccordionDetails>
          <div className='accorddetails'>
<div className='mainmailcontent'></div>
<div className='mailcontentin'>{dat.html}</div>
          </div>
          
        
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
      <p>{neutral ? "Forward":"Reply" }</p>
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
<button onClick={fast} >{neutral ? "Forward":"Reply"}</button>



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
          <div className='mailreplylinks'>
            <div onClick={reply} className='mailreplylink'>
              <Reply/>
             
            </div>
            <div onClick={forward} className='mailreplylink'>
              <Forward/>
             
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>        
        </div>




      



    })
    }</>
  )
}

export default MailCards