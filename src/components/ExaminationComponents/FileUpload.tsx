import React, { DragEvent, DragEventHandler, FC, useState } from 'react'
import { Card, FormGroup, Input, Label } from 'reactstrap'
import { InputProps, ReactChangeEvent, File } from '../../helpers/types'
import './FileUpload.scss'

interface Props {
 // eslint-disable-next-line no-unused-vars
 handleDrop: (paylaod: File) => void
}

const FileUpload: FC<InputProps & Props> = ({ label, handleDrop }) => {
 const [drag, setDrag] = useState(false)

 const readFile: DragEventHandler = (e: DragEvent) => {
  e.preventDefault()
  const { files } = e.dataTransfer
  if (files) {
   const item : File = {
    name: files[0].name,
    size: files[0].size,
    type: files[0].type,
   }
   handleDrop(item)
   setDrag(false)
  }
 }

 const browseFile = (e: ReactChangeEvent) => {
  const { files } = e.target
  if (files) {
   handleDrop(files[0])
   setDrag(false)
  }
 }

 return (
  <FormGroup className="FileUpload__form-group">
   <Label className="FileUpload__form-label">{label}</Label>
   <Label>
    <Card
     className="FileUpload__form-card"
     onDragOver={(e) => {
      e.preventDefault()
      setDrag(true)
     }}
     style={{ display: !drag ? 'flex' : 'none' }}
    >
     <img src="/img/upload_file.svg" alt="Upload File" />
     <p>Drop your image here, or browse</p>
     <span>PNG, GIF, JPG or JPEG file type</span>
    </Card>
    <Card
     className="FileUpload__form-card FileUpload__form-card-drag"
     onDrop={readFile}
     onDragOver={(e) => {
      e.preventDefault()
     }}
     onDragLeave={() => {
      return setDrag(false)
     }}
     style={{ display: drag ? 'flex' : 'none' }}
    >
     <img src="/img/openFolder.svg" alt="Open Folder" />
     <p>Drop your file</p>
     <span>File size must be less then 10mb</span>
    </Card>
    <Input id="file" type="file" onChange={browseFile} hidden />
   </Label>
  </FormGroup>
 )
}

export default FileUpload
