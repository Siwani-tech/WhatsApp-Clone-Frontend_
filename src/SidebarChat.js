import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat() {

  const [avt,setavt]=useState('');

  useEffect(()=>{
    setavt(Math.floor(Math.random()*5000))
  },[])
  return (
    <div className='sidebarChat'>
        
        <Avatar src={`https://avatars.dicebear.com/api/human/${avt}.svg`}/>
        
        <div className="sidebarchat__info">
                <h2>Room name</h2>
                <p>This is the last message </p>
            </div>
      
    </div>
  )
}

export default SidebarChat
