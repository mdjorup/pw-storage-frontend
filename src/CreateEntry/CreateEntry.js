import React from 'react'
import "./CreateEntry.css"

import {FiCheck, FiX} from "react-icons/fi"


const CreateEntry = ({reset, submit}) => {



    return (
        <div className='createentry'>
            <div className="create__option">
                <p>Account Name</p>
                <input className='create__input' type="text"></input>
            </div>
            <div className="create__option">
                <p>Notify Period (days)</p>
                <input className='create__input' type="number"></input>
            </div>
            <div className="create__option">
                <p>Password</p>
                <input className='create__input' type="text"></input>
            </div>
            <div className="create__entry__buttons">
                <button className='iconwrapper' onClick={submit}>
                    <FiCheck size="80%" color="#00FF00"/>
                </button>
                <button className='iconwrapper' onClick={reset}>
                    <FiX size="80%" color="#FF0000"/>
                </button>
            </div>


        </div>
  )
}

export default CreateEntry