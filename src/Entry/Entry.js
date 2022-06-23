import React, {useState} from 'react'
import "./Entry.css"


import {FiEdit, FiCheck, FiX, FiTrash2, FiEye, FiEyeOff} from "react-icons/fi"


/*
Account       Notification Days         Password


States:
1. Submitted - this is resting state
Account       Notification Days         Password (show/hide)
2. Editting existing - this is where you get to edit the password field and the notificaiton Days field
Account       |Notification Days|       Old Password  |New Password|
3. Creating new
|Account|     |Notification Days|       |New Password|    (options)



create, edit, saved


*/

const IconSelector = ({type}) => {

    return (
        
        <div className='iconselector'>
            {type === "edit" && <FiEdit />}
            {type === "check" && <FiCheck />}
            {type === "reset" && <FiX />}
            {type === "delete" && <FiTrash2 />}
            {type === "view" && <FiEye />}
            {type === "hide" && <FiEyeOff />}

        </div>
    )
}





const Entry = ({accountName, notificationDays, lastSet, password}) => {

    const [pwVisible, setPwVisible] = useState(false);

    const [_accountName, setAccountName] = useState(accountName);
    const [_notificationDays, setNotificationDays] = useState(notificationDays);
    const [_lastSet, setLastSet] = useState(lastSet);
    const [_password, setPassword] = useState(password);

    




    const [state, setState] = useState("edit")
    // here we will send the request for the password if 

    return (
        <div className='entry'>
            <div className='entry__account'>
                <p>{_accountName}</p>
            </div>
            <div className='notidays'>
                <p>{_notificationDays}</p>
            </div>
            <div className='dateset'>
                <p>{_lastSet.toString()}</p>
            </div>
            <div className='password'>
                {pwVisible && <p>{password}</p>}
                {!pwVisible && <p>**********</p>}

            </div>
            <div className='icons'>
                {state === "saved" && ["edit"].map((icon) => <IconSelector type={icon}/>)}
                {state === "edit" && ["check", "reset", "delete"].map((icon) => <IconSelector type={icon}/>)}
                {state === "create" && ["check", "delete"].map((icon) => <IconSelector type={icon}/>)}
            </div>
        </div>
    )
}

export default Entry
