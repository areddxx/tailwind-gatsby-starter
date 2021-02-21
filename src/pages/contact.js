import React from "react"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow flex flex-col mt-10 px-10">
        <div>
        <div className="sm:px-2 px-10">
            <h1 className="page-heading">
              Get In Touch
            </h1>
          </div>
        </div>

          <form className="sm:px-2 px-10" name="contact" method="POST" data-netlify="true">
            
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="form-name">
            Name
            </label>
            <input class="appearance-none block w-full bg-white-500 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="form-name" type="text" placeholder="Name"></input>
            
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="form-email">
            Email
            </label>
            <input class="appearance-none block w-full bg-white-500 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="form-email" type="text" placeholder="Email Address"></input>
            
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="form-email">
            Message
            </label>
            <textarea class=" no-resize appearance-none block w-full bg-white-500 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>

            <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Send</button>
          </form>
      </main>
    </Layout>
  )
}
