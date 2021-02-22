import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"

export default () => {
  return (
    <Layout>
      <main>
        <PageHeader title="Get In Touch" />

          <form name="contact"  method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
            
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="form-name">
            Name
            </label>
            <input class="appearance-none block w-full bg-night-100 text-gray-700 rounded py-3 px-4 mb-5 leading-tight focus:outline-none" id="form-name" type="text" name="name" placeholder="Name"></input>
            
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="form-email">
            Email
            </label>
            <input class="appearance-none block w-full bg-night-100 text-gray-700 rounded py-3 px-4 mb-5 leading-tight focus:outline-none" id="form-email" type="text" name="email" placeholder="Email Address"></input>
            
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="form-message">
            Message
            </label>
            <textarea class=" no-resize appearance-none block w-full bg-night-100 text-gray-700 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:border-teal-500 h-48 resize-none" name="message" id="form-message" placeholder="Enter your message"></textarea>

            <button class="rounded-full py-3 px-4 uppercase text-xs font-bold cursor-pointer tracking-wider text-teal-500 border-teal-500 border-2 hover:bg-teal-500 hover:text-white transition ease-out duration-700" type="submit">Submit Message</button>
          </form>
      </main>
    </Layout>
  )
}
