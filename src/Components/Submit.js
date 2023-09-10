import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Submit() {
    return (
        <>
            <Header />
                    <div className="card">
                        <div className='cardinner'>
                            <i class="checkmark">✓</i>
                        </div>
                        <br/>
                        <h1 className='success'>Success</h1>
                        <br/>
                        <p className='success'>We received your request<br /> we'll reserve table for you!</p>
                    </div>
            <Footer />
        </>
    )
}
