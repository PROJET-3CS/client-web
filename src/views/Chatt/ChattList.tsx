import React, { FC } from 'react'
import ContactRow from './ContactRow'

const ChattList: FC = () => {
 return (
  <div className="chattlist">
   <p className="chattlist-title">Chats</p>
   <div className="chattlist-btns">
    <button className="chattlist-btn" type="button">
     open
    </button>
    <button className="chattlist-btn" type="button">
     Done
    </button>
    <button className="chattlist-btn" type="button">
     Unread
    </button>
   </div>
   <div className="chattlist-rows">
    <ContactRow owner={false} />
    <ContactRow owner={false} />
    <ContactRow owner />
   </div>
  </div>
 )
}

export default ChattList
