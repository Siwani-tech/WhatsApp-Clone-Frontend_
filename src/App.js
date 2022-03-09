
import react, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
     const [messages,setmessages]=useState([]);

     useEffect(()=>{
          axios.get('/messages/sync')
          .then(response=> {
               //console.log(response.data)
               setmessages(response.data);
          })
     },[])


     useEffect(()=>{
          const pusher = new Pusher('1b729c80791a14a9e64c', {
               cluster: 'eu'
             });
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', (newMessages) =>{
               // alert(JSON.stringify(newMessages));
               setmessages([...messages,newMessages])
             });  
             
             return ()=>{
                  channel.unbind_all();
                  channel.unsubscribe();

             }

     },[messages]);
     console.log(messages);
     return (
        <div className="app">
             <div className="app_body">
                  <Sidebar/>
                  <Chat messages={messages}/>
                  </div>


                  {/* </Sidebar/> */}
                  {/* </Chat compuntnt/> */}
    </div>
  );
}

export default App;
