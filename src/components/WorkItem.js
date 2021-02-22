import React from "react"

const WorkItem = (props) => {
  return (
    <>
      <div className="work-item mb-2 py-2">
        <h3 className="text-teal-500 font-medium text-xl">
          <a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a>
        </h3>
        <p className="text-gray-700">{props.about}
          <span className="text-gray-600 ml-3">{props.where}</span>
        </p>
      </div>
    </>
  )
}

export default WorkItem
