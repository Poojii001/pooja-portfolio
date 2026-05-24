import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
    <Hero title="404! Page Not Found" />
      <div className="container">
        <div className="my-5 py-5 text-center">
          <h1>404! Page Not Found</h1>
          <Link to='/' className='btn btn-dark px-3'>Back to Home</Link>
        </div>
      </div>
    </>
  )
}
