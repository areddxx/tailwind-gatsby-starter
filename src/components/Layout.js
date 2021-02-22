import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-night-200">
        <header className="py-4 px-10 bg-night-200 text-white font-semibold flex justify-between">
          <h1 className="max-w-4xl hover:text-teal-500 transition ease-out duration-700">
            <Link to ="/">Austin Redd</Link>
          </h1>
          <nav>
            <Link className="hover:text-teal-500 transition ease-out duration-700 mr-10" to ="/work">Work</Link>
            <Link className="hover:text-teal-500 transition ease-out duration-700" to ="/contact">Contact</Link>
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
