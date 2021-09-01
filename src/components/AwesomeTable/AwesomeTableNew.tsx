import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSlidersH, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'reactstrap'
import { v4 as uuid } from 'uuid'

interface ITable {
 tableHead: { name: string; path?: string; action?: any }[]
 tableBody?: any[]
}

library.add(faSort, faSlidersH, faEllipsisH)

const AwesomeTableHead: React.FC<ITable> = ({ tableHead }) => {
 const renderColumn = (name: string) => {
  if (name !== '')
   return (
    <th key={uuid()} className="clinity__table-header">
     {name}&nbsp;
     <FontAwesomeIcon icon={faSort} className="clinity__table-header--icon" />
    </th>
   )

  return null
 }

 return (
  <thead className="clinity__table-head">
   <tr className="clinity__table-row">
    {tableHead.map((column) => {
     return renderColumn(column.name)
    })}
    <th className="clinity__table-header">
     <span className="clinity__table-header--setting">
      <FontAwesomeIcon icon={faSlidersH} />
     </span>
    </th>
   </tr>
  </thead>
 )
}

const AwesomeTableBody: React.FC<ITable> = ({ tableHead, tableBody }) => {
 const renderCell = (item: any, column: any) => {
  if (column.action) return column.action(item)

  return item[column.path]
 }

 const renderRows = () => {
  return (
   <>
    {tableBody?.map((item) => {
     return (
      <tr key={uuid()} className="clinity__table-row">
       {tableHead.map((column) => {
        return (
         <td key={uuid()} className="clinity__table-cell">
          {renderCell(item, column)}
         </td>
        )
       })}
      </tr>
     )
    })}
   </>
  )
 }
 const renderTableBody = () => {
  return renderRows()
 }

 return renderTableBody()
}

const AwesomeTableNew: React.FC<ITable> = ({ tableHead, tableBody }) => {
 return (
  <div className="clinity__table">
   <Table borderless responsive>
    <AwesomeTableHead tableHead={tableHead} />
    <tbody className="clinity__table-body">
     <AwesomeTableBody tableHead={tableHead} tableBody={tableBody} />
    </tbody>
   </Table>
  </div>
 )
}

export default AwesomeTableNew
