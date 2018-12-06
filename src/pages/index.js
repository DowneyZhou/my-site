import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Header">
      <div className="Logo">DC</div>
      <div className="Nav">
        <Link to="page-2">HOME</Link>
        <Link to="page-2">WORK</Link>
        <Link to="page-2">PHOTOGRAPHY</Link>
        <Link to="page-2">GET IN TOUCH</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
