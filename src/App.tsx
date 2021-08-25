import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { verify } from './store/slices/auth'
import RootRoute from './routes/RootRoute'

function App() {
 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _verify = () => {
  dispatch(verify())
 }

 useEffect(() => {
  _verify()
 }, [])

 return (
  <div className="App">
   <RootRoute />
  </div>
 )
}

export default App
