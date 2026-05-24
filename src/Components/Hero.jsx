import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({ title }) {
    return (
        <section className="hero2-section">
            <h3>{title}</h3>
            <div className='items mt-3'>
                <Link to="/" className='text-light'>Home</Link>
                <i className='fa fa-arrow-right mx-4'></i>
                <span>{title}</span>
            </div>
        </section>
    )
}
