import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import PageHeader from "../components/PageHeader"

export default () => {
  return (
    <Layout>
      <main>

            <PageHeader title="Hi, I'm Austin Redd" />
            <p className="text-2xl night-100">
            UI developer & designer, based in Niwot, Colorado. <span className="block">Currently working at ToolStudios.</span>
            </p>
            <div className="mt-8 block">
            <Link className="rounded-full py-3 px-4 uppercase text-xs font-bold cursor-pointer tracking-wider text-teal-500 border-teal-500 border-2 hover:bg-teal-500 hover:text-white transition ease-out duration-700" to="/contact">Get In Touch </Link>
            </div>



      </main>
    </Layout>
  )
}
