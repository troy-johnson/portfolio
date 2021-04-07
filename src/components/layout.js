import * as React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 w-screen h-screen text-gray-100 font-body flex items-center">
      <div className="max-w-5xl mt-0 mb-0 mr-auto ml-auto pt-0 pr-4 pl-4 pb-6">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
