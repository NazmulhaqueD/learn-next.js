'use client'

import React from 'react'

export default function Button() {
    return (
        <div>
            <button
                onClick={()=>console.log('clicked here')}
                className='px-4 py-1 rounded-sm bg-green-500'
            >click here</button>
        </div>
    )
}
