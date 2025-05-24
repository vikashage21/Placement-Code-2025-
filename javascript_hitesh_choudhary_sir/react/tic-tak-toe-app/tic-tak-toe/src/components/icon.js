import React from 'react'
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa'


function icon({ name }) {
    
       switch (name){
        case 'circle':
            return <FaRegCircle className='icon' />
            case 'cross':
            return <FaTimes className='icon' />
            default:
            return <FaPen className='icon' />
       } 
    
}

export default icon
