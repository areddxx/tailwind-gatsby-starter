import React from "react"

const PageHeader = (props) => {
  return (
    <>
      <div>
        <h1 className="page-heading night-100">
          {props.title}
        </h1>
      </div>
    </>
  )
}

export default PageHeader
