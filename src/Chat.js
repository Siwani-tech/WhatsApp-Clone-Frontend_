import { Avatar,IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './Chat.css';
import {SearchOutlined,AttachFile, InsertEmoticon, SettingsInputAntenna, Mic, SettingsOverscanOutlined} from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from "./axios";

function Chat({messages}) {

const[input,setInput]=useState(" ");  


const sendMessage= async (e)=>{
  e.preventDefault();


  await axios.post("/messages/new",{
    
    message: input,
    name: "siwani",
    timestamp:"just now",
    received: true,
});
setInput(" ");
}; 




  return (
    <div className='chat'>
      <div className="chat_header">
          <Avatar  src='https://avatars.dicebear.com/api/human/.svg'/>
          <div className="chat_headerInput">
            <h1>Room name</h1>
            <p>Last seen at..</p>
            </div>
            <div className="chat_headerRight">
            <IconButton>
              <SearchOutlined/>
            </IconButton>
            <IconButton>
              <AttachFile/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
              </div>
        </div>
        <div className="chat_body">
           {messages.map((message)=>(
            <p className={`chat_message ${message.received && "chat_reciever"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">
              {message.timestamp}
              </span>
            </p>
           ))}
          
           </div>
          
         

          <div className="chat_footer">
            <InsertEmoticon/>
            <form >
              <input value={input} onChange={e => setInput(e.target.value)}
                placeholder="Type a message "
                type="text"/>
                <button onClick={sendMessage}
                type="submit">Send a message</button>
            </form>
            
           
            <Mic/>
            </div>
            

    </div>
  )
}

export default Chat
