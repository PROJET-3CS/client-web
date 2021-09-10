import { faFileUpload, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useEffect, useRef } from 'react'
import ChattRow from './Message'

const ChattMsg: FC = () => {
 const messagesEndRef = useRef<null | HTMLElement>(null) as React.MutableRefObject<HTMLInputElement>

 const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
 }

 useEffect(() => {
  scrollToBottom()
 }, [ChattMsg])

 return (
  <div className="chattmsg">
   <p className="chattmsg-sender">Jhon snow</p>
   <div className="chattmsg-rows">
    <ChattRow owner={false} />
    <ChattRow owner />
    <ChattRow owner />
    <ChattRow owner />
    <ChattRow owner />
    <ChattRow owner />
    <div ref={messagesEndRef} />
   </div>
   <div className="chattmsg-send">
    <FontAwesomeIcon className="chatt-header-icon2 chattmsg-send-btn1" icon={faFileUpload} />
    <input
     type="text"
     className="search__input chattmsg-send-input"
     placeholder="write a message..."
    />
    <FontAwesomeIcon className="chatt-header-icon2" icon={faPaperPlane} />
   </div>
  </div>
 )
}

export default ChattMsg
