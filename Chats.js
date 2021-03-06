import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';




const Chats = () => {

    const history = useHistory();
    const handleLogout = async ()=>{
        await auth.signOut();
        history.push('/');
    }
    return ( 
        <div className='chats-page'>
             <div className='nav-bar'>
             <div className='logo-tab'>
                 Unichat
             </div>
             <div className='logout-tab'>
                 Logout
             </div>
        </div>
        <ChatEngine
            height='calc(100vh - 66px'
            projectID='cf79b8fb-694a-4333-92cd-dae865df3b99'
            userName='.'
            userSecret='.'/>
    </div>
 );   
}
 
export default Chats;