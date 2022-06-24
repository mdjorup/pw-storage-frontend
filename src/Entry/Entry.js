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
        
        <button className='iconselector'>
            {type === "edit" && <FiEdit size="60%" color="blue"/>}
            {type === "check" && <FiCheck size="80%" color="#00FF00"/>}
            {type === "reset" && <FiX size="80%" color="orange"/>}
            {type === "delete" && <FiTrash2 size="75%" color="FF0000"/>}
            {type === "view" && <FiEye size="80%" color="#282828"/>}
            {type === "hide" && <FiEyeOff size="60%" color="#282828"/>}

        </button>
    )
}





const Entry = ({accountName, notificationDays, lastSet, password}) => {

    const [pwVisible, setPwVisible] = useState(false);

    const [_accountName, setAccountName] = useState(accountName);
    const [_notificationDays, setNotificationDays] = useState(notificationDays);
    const [_lastSet, setLastSet] = useState(lastSet);
    const [_password, setPassword] = useState(password);

    const [state, setState] = useState("saved")
    // here we will send the request for the password if 




    const handleEditClick = () => {
        setState("edit");
    }

    const handlePasswordVisibility = () => {
        setPwVisible(!pwVisible)
    }

    const handleReset = () => {
        setNotificationDays(notificationDays);
        setPassword(password)

        setState("saved")
    }

    const handleSubmit = () => {
        //send request with updated information

        setLastSet(new Date());
        setState("saved")
    }

    const handleDelete1 = () => {
        
        setState("delete")
    }

    const handleDelete2 = () => {
        //figure out logic here. 
        // 1) Confirm that the delete was intended
        // 1) send request to database which deletes the entry
        // 2) pull down new entries into redux

    }

    return (
        <div className='entry'>
            <div className='entry__account'>
                <p>{_accountName}</p>
            </div>
            <div className='notidays'>
                {state === "saved" && <p>{_notificationDays}</p>}
                {state !== "saved" && <input className='entry__input' placeholder={_notificationDays} type="number"/>}
            </div>
            <div className='dateset'>
                <p>{_lastSet.toString().split(/(\s+)/).slice(0, 9)}</p>
            </div>

            <div className='password__outerdiv'>

                {state === "saved" && <div className='password'>
                    <div className='password__text'>
                        {pwVisible && <p>{password}</p>}
                        {!pwVisible && <p>**********</p>}
                    </div>
                    {pwVisible && <button className='iconwrapper' onClick={handlePasswordVisibility}>
                        <FiEye size="60%" color="#282828"/>
                    </button>}
                    {!pwVisible && <button className='iconwrapper' onClick={handlePasswordVisibility}>
                        <FiEyeOff size="60%" color="#282828"/>
                    </button>}

                </div>}
                {state !== "saved" && <input className='entry__input__password' placeholder={password} type="text"/> }
            </div>
            <div className='icons'>
                {state === "saved" && 
                <button className='iconwrapper' onClick={handleEditClick}>
                    <FiEdit size="60%" color="blue"/>
                </button>}
                {state === "edit" && 
                <button className='iconwrapper' onClick={handleSubmit}>
                    <FiCheck size="80%" color="#00FF00"/>
                </button>}
                {state === "edit" && 
                <button className='iconwrapper' onClick={handleReset}>
                    <FiX size="80%" color="orange"/>
                </button>}
                {state === "edit" && 
                <button className='iconwrapper' onClick={handleDelete1}>
                    <FiTrash2 size="75%" color="#FF0000"/>
                </button>}
                {state === "delete" && <div className='delete__wrapper'>
                    <button className='confirm__delete'>
                        Delete?
                    </button>
                    <button className='iconwrapper' onClick={handleReset}>
                        <FiX size="80%" color="#00FF00"/>
                    </button>
                </div>}
                
            </div>
        </div>
    )
}

export default Entry
