import React, { FC } from 'react'

const ContactRow: FC<{ owner: boolean }> = ({ owner }) => {
 return (
  <div className="chattlist-row">
   <img src="/img/userRect.png" alt="userpic" className="chattlist-row-pic" />
   <div className="chattlist-row-text">
    <p className="chattlist-row-user">Leslie Laurens</p>
    <p className="chattlist-row-message">{!owner ? 'when is our meeting' : 'you:message'}</p>
   </div>
   <p className="chattlist-row-time">12 min</p>
  </div>
 )
}

export default ContactRow
