import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Route_Products() {
  return (
    <>
      <div>
        <h2>Hello from Product Page</h2>
      </div>

      <nav className="products-nav">
        <Link to="shirts">Shirts</Link>
        <Link to="jeans">Jeans</Link>
      </nav>
      <Outlet/>

    </>
  )
}

export default Route_Products
