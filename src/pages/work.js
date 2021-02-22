import React from "react"
import Layout from "../components/Layout"
import WorkItem from "../components/WorkItem"
import PageHeader from "../components/PageHeader"

export default () => {
  return (
    <Layout>
      <main>
        <PageHeader title="A few sites I've built, designed, & maintained." />
        <div className="flex flex-col">
        {/* <h2 className="mt-8 text-3xl text-blue-500">Professional Projects</h2> */}
        <WorkItem 
          title="Moon Mother Hemp"
          link="https://moonmotherhemp.com"
          about="Custom WooCommerce theme"
          where="Built @ToolStudios"
        />

        <WorkItem 
          title="Golden Aluminum"
          link="https://goldenaluminum.com/"
          about="Website design"
          where="Built @ToolStudios"
        />        

        <WorkItem 
          title="Grassroots Cannabis"
          link="https://www.grassrootscannabis.com/"
          about="Website design & custom WordPress theme"
          where="Built @ToolStudios"
        />        

        <WorkItem 
          title="Greenhouse Dispensaries"
          link="https://greenhouseil.com/"
          about="Website Design"
          where="Built @ToolStudios"
        />        

        <WorkItem 
          title="Herbology Dispensaries"
          link="https://goldenaluminum.com/"
          about="Website Design"
          where="Built @ToolStudios"
        />        

        <WorkItem 
          title="Trulieve"
          link="https://trulieve.com/"
          about="DevOps // Design Support // Dev Support"
          where="Built @ToolStudios"
        />        

        <WorkItem 
          title="Bond Road Cannabis"
          link="https://goldenaluminum.com/"
          about="Custom WordPress Theme"
          where="Built @ToolStudios"
        />        

        <WorkItem 
          title="Kola Partners"
          link="https://www.kolapartners.com/"
          about="WordPress Theme"
          where="Built @ToolStudios"
        />        
        
          
        </div>
      </main>
    </Layout>
  )
}
