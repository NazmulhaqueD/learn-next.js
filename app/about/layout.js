import Link from 'next/link'
import React from 'react'

export default function aboutLayout({children}) {
    return (
        <div>
            <nav>
                <ul className='flex gap-6'>
                    <li><Link href={'about/mission'}>Mission</Link></li>
                    <li><Link href={'about/vision'}>Vision</Link></li>
                </ul>
                <hr></hr>
            </nav>

            <main className='mt-6'>
                {children}
            </main>
           
        </div>
    )
}
