import React, { FC } from 'react'
// import '../styles/main.scss'
// import './AwesomeTable.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSlidersH, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'reactstrap'

interface ITable {
 tableHead: { name: string; path?: string; action?: any }[]
 tableBody?: any[]
}

library.add(faSort, faSlidersH, faEllipsisH)

const AwesomeTableHead: React.FC<ITable> = ({ tableHead }) => {
 const renderColumn = (name: string, index: number) => {
  if (name !== '')
   return (
    <th key={new Date().getTime() + index} className="awesome-table__header-title">
     {name}
     <FontAwesomeIcon icon="sort" className="awesome-table__header-title--icon" />
    </th>
   )
  return null
 }
 return (
  <thead>
   <tr>
    {tableHead.map((head, index) => {
     let i = index

     return renderColumn(head.name, i)
    })}

    <th className="awesome-table__header-title">
     <FontAwesomeIcon icon="sliders-h" />
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

 const renderRow = () => {
  return (
   <>
    {tableBody?.map((item, i) => {
     let ii = i
     return (
      <tr key={new Date().getTime() + ii} className="awesome-table__body-row">
       {tableHead.map((head, j) => {
        let jj = ii + j
        return (
         <td key={new Date().getTime() + jj} className="awesome-table__body-item">
          {renderCell(item, head)}
         </td>
        )
       })}
      </tr>
     )
    })}
   </>
  )
 }
 const renderColumn = () => {
  return <tbody className="awesome-table__body">{renderRow()}</tbody>
 }

 return renderColumn()
}

const AwesomeTable: React.FC<ITable> = ({ tableHead, tableBody }) => {
 return (
  <Table borderless responsive className="awesome-table">
   <AwesomeTableHead tableHead={tableHead} />
   <AwesomeTableBody tableHead={tableHead} tableBody={tableBody} />
  </Table>
 )
}

export default AwesomeTable
