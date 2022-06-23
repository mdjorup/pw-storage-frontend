import './App.css';

import Entry from './Entry/Entry';


//7034480005
function App() {




  const testEntries = [{
    id: 1,
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
        <p>Here are your passwords:</p>
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
    </div> 
  );
}

export default App;
