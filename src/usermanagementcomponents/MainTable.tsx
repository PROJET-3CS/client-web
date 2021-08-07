import React, { FC } from 'react'
import './MainTable.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort , faSlidersH , faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import { Table } from 'reactstrap'

interface IState {
    users : {
      name:string,
      year:number,
      role:string,
      ngroupe?:string,
      status:string,
      lastconnexion?:string,
      url:string,
  }[]
    }



library.add(faSort , faSlidersH , faEllipsisH)





const MainTable:React.FC<IState> = ({users})=>{
 const renderList = ():JSX.Element []=> {
  return users.map((user) => {
   return(
    // eslint-disable-next-line react/jsx-key
    <tr className='maintable-row'>
     <th scope="row" className='maintable-header-item raduisadd'><img className='maintable-header-img' src={user.url} alt="" /> {user.name}</th>
     <td className='maintable-header-item'>{user.role}</td>
     <td className='maintable-header-item'>{user.year}</td>
     <td className='maintable-header-item'>{user.ngroupe}</td>
     <td className='maintable-header-item'>{user.status}</td>
     <td className='maintable-header-item'>{user.lastconnexion}</td>
     <td className='maintable-header-item raduisadd1'><FontAwesomeIcon icon="ellipsis-h" /></td>
    </tr>
   )
  })
 }




 return(
  <Table borderless responsive className='maintable'>
   <thead>
    <tr>
     <th className='maintable-header-title'>Name <FontAwesomeIcon icon="sort" className='maintable-icon-sort'/> </th>
     <th className='maintable-header-title'>Role <FontAwesomeIcon icon="sort" className='maintable-icon-sort' /></th>
     <th className='maintable-header-title'>Year <FontAwesomeIcon icon="sort" className='maintable-icon-sort' /></th>
     <th className='maintable-header-title'>N Groupe <FontAwesomeIcon icon="sort" className='maintable-icon-sort'/></th>
     <th className='maintable-header-title'>Status <FontAwesomeIcon icon="sort" className='maintable-icon-sort'/></th>
     <th className='maintable-header-title'>Last connexion <FontAwesomeIcon icon="sort" className='maintable-icon-sort' /></th>
     <th className='maintable-header-title'> <FontAwesomeIcon icon="sliders-h" /></th>
    </tr>
   </thead>
   <tbody>
    {renderList()}
   </tbody>
  </Table> 
 )
}

export default MainTable