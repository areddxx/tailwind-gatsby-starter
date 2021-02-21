import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <header className="p-4 bg-blue-900 text-white font-semibold flex justify-between">
          <h1 className="max-w-4xl">
            <Link to ="/">Austin Redd</Link>
          </h1>
          <nav>
            <Link className="mr-10" to ="/work">Work</Link>
            <Link to ="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Austin Redd {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

export default Layout
