import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <img src={assets.menu_icon} alt="menu icon" className="menu" />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" className="src" />
            <p>New Chat</p>
        </div>
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" className="src" />
                <p>What is React ...</p>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" className="src" />
            <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" className="src" />
            <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" className="src" />
            <p>Setting</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
