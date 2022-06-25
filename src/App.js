import { useState } from 'react';
import './App.css';

import Entry from './Entry/Entry';
import CreateEntry from './CreateEntry/CreateEntry';

import {FiPlus} from "react-icons/fi"


//7034480005
function App() {

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
              <FiPlus size="80%"/>
            </button>}
          {creating && <CreateEntry />}
        </div>
      </div>
    </div> 
  );
}

export default App;
