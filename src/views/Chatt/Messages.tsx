import React, { FC } from 'react'
import ChattRow from './Message'

const ChattMsg: FC = () => {
 return (
  <div className="chattmsg">
   <p className='chattmsg-sender'>Jhon snow</p>
   <ChattRow owner={false}/>
   <ChattRow owner/>
  </div>
 )
}

export default ChattMsg
