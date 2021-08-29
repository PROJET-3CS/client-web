import React, { FC } from 'react'

import { Toast, ToastHeader, ToastBody } from 'reactstrap'

interface Props {
 modal: boolean
 type: string
}

const Toaster: FC<Props> = ({ children, modal, type }) => {
 return (
  <>
   {modal ? (
    <div className="clinity_toast-container" style={{backgroundColor: (type === 'danger') ? 'red' : 'green'}}>
     <Toast className="clinity_toast">
      <ToastHeader className="clinity_toast-header">
       { type === 'danger' ? '🚨' : '🎉' } Clinity Message
      </ToastHeader>
      <ToastBody className="clinity_toast-body">{children}</ToastBody>
     </Toast>
    </div>
   ) : (
    ''
   )}
  </>
 )
}

export default Toaster
