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
            {type === "edit" && <FiEdit size="60%" color="blue"/>}
            {type === "check" && <FiCheck size="80%" color="#00FF00"/>}
            {type === "reset" && <FiX size="80%" color="orange"/>}
            {type === "delete" && <FiTrash2 size="75%" color="FF0000"/>}
            {type === "view" && <FiEye size="80%" color="#282828"/>}
            {type === "hide" && <FiEyeOff size="60%" color="#282828"/>}

        </div>
    )
}





const Entry = ({accountName, notificationDays, lastSet, password}) => {

    const [pwVisible, setPwVisible] = useState(true);

    const [_accountName, setAccountName] = useState(accountName);
    const [_notificationDays, setNotificationDays] = useState(notificationDays);
    const [_lastSet, setLastSet] = useState(lastSet);
    const [_password, setPassword] = useState(password);

    




    const [state, setState] = useState("saved")
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
                {pwVisible && <IconSelector type="hide"/>}
                {!pwVisible && <IconSelector type="view"/>}

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
