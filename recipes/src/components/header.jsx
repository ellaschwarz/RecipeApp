import React from 'react'
import salad from '../veggie-salad.svg'

export default function header() {
    return (
        <div className='header'>
            <h1 className='logo'>Yummi <img src={salad} width='50' alt=''></img></h1>
            
        </div>
    )
}
