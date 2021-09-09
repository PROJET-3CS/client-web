import React, { FC } from 'react'

const ChattRow: FC<{ owner: boolean }> = ({owner}) => {
 return (
  <div className="chattmsg-row">
   {owner===false &&
    <div className="chattmsg-row">
     <img src="/img/userRect.png" alt="userpic" className="chattmsg-row-img" />
     <div className="chattmsg-row-msg">
        wee this is a message , i am textig you
     </div>
    </div>
   }  
   {owner===true &&
    <div className="chattmsg-row">
     <div className="chattmsg-row-msg2">
        wee this is a message , i am textig you
     </div>
     <img src="/img/userRect.png" alt="userpic" className="chattmsg-row-img" />
    </div>
   }  
  </div>
 )
}

export default ChattRow