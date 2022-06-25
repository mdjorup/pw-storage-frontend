import { useState } from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';


import Entry from './Entry/Entry';
import CreateEntry from './CreateEntry/CreateEntry';
import Auth from './Auth/Auth';



const Home = () => {
  const [creating, setCreating] = useState(false)


  const testEntries = [{
    id: 1,
    accountName: "Spotify",
    notificationDays: 50,
    lastSet: new Date(),
    password: 1234567890,
    state: "saved"
  }, {
    id: 2,
    accountName: "Apple ID",
    notificationDays: 100,
    lastSet: new Date(),
    password: 1234567890,
    state: "saved",
  },{
    id: 3,
    accountName: "Spotify",
    notificationDays: 50,
    lastSet: new Date(),
    password: 1234567890,
    state: "saved"
  },{
    id: 4,
    accountName: "Spotify",
    notificationDays: 50,
    lastSet: new Date(),
    password: 1234567890,
    state: "saved"
  },{
    id: 5,
    accountName: "Spotify",
    notificationDays: 50,
    lastSet: new Date(),
    password: 1234567890,
    state: "saved"
  }];

  const handleNewPwReset = () => {
    setCreating(false)
  }

  const handleNewPwSubmit = () => {
    setCreating(false)
  }


  return (
    <div className="App">
      <div className="header">
        <p>Welcome, Michael</p>
        <button className='logout__button'>
          Log Out
        </button>
      </div>
      <div className='app__body'>
        <div className='entries__header'>
          <p className='tableheader account'>Account Name</p>
          <p className='tableheader noti'>Notification Days</p>
          <p className='tableheader modified'>Last Modified</p>
          <p className='tableheader pw'>Password</p>
          <p className='tableheader ic'></p>

        </div>
        <div className="entries">
          {testEntries && testEntries.map((entry) => {
              let id = entry.id
              let accountName = entry.accountName;
              let notificationDays = entry.notificationDays;
              let lastSet = entry.lastSet;
              let password = entry.password;
              let state = entry.state;
              return <Entry key={id}
                            accountName={accountName}
                            notificationDays={notificationDays}
                            lastSet={lastSet}
                            password={password}
                            state={state}/>
            })
          }
        </div>
        <div className="create__entry">
          {!creating && <button className='createnew__button' onClick={() => setCreating(true)}>
              {/* <FiPlus size="80%"/> */}
              New Entry
            </button>}
          {creating && <CreateEntry reset={handleNewPwReset} submit={handleNewPwSubmit}/>}
        </div>
      </div>
    </div> 
  );
}


function App() {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user)


  return (
    <Routes>
      <Route path='/' element={user.jwt ? <Home/> : <Navigate to='login'/> }/>
      <Route path='/login' element={<Auth type="login"/>} />
      <Route path='/register' element={<Auth type='register'/>} />
    </Routes>
  )
}

export default App;
