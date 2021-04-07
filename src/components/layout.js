import * as React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 w-screen h-screen text-gray-100 font-sans flex items-center">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
