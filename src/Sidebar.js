import React from 'react';

import './Sidebar.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar,IconButton} from '@material-ui/core';
import {SearchOutlined} from  '@material-ui/icons'; 
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
       
      <div className="slidbar_header">
      <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93JenirZi88TvBQlSAxNPG-T1T0Wz-2bvi_Ip7hsNKIaPzIcPtkjS_NUCLs__I3eUirA&usqp=CAU'/>
       
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon/>
            </IconButton>
            <IconButton>
              <ChatIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
              
            </div>
        </div>
        <div className="slidebar_search">
            <div className="sidebar_Searchcontainer">
                <SearchOutlined/>
                <input type="text" placeholder='Search or start new Chat'/>
              </div>
          </div>
          <div className="sidebar_chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            </div>
    </div>
  )
}

export default Sidebar
