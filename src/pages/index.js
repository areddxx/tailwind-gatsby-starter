import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col mt-10">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2 px-10">
            <h1 className="pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Austin Redd
            </h1>
            <p className="mt-8 text-2xl text-blue-900 sm:mt-8">
            UI developer & designer, based in Niwot, Colorado. <span className="block">Currently working at ToolStudios.</span>
            </p>

            <Link className="mt-8 block hover:text-teal-500 hover:underline" to="/contact">Get In Touch </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}
