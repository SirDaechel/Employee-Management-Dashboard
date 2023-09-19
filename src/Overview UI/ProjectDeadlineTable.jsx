import { useState } from "react"

const ProjectDeadlineTable = ({ projects }) => {

  const slicedProjects = projects.slice(0, 6)

  return (

    <div className="project_deadline">


        <table className="project_deadline_table">

            <caption className="deadline_title">
                Project Deadlines
            </caption>

            <thead className="deadline_table_head">
                <tr>
                    <th className="deadline_table_title">Project Name</th>
                    <th className="deadline_table_title">Assigned To</th>
                    <th className="deadline_table_title">Status</th>
                    <th className="deadline_table_title">Due Date</th>
                    <th className="deadline_table_title">Priority</th>
                </tr>
            </thead>

            <tbody>

                {slicedProjects.map((project) => (

                    <tr key={project.projectName}>
                        <td className="project_deadline_txt">
                            {project.projectName}
                        </td>

                        <td className="project_deadline_txt">
                            {project.assignedTo}
                        </td>

                        <td>
                            <p className="project_deadline_txt project_deadline_status" style={{backgroundColor: project.status === "In Progress"  ? "#F6FFA6" : project.status === "Completed"  ? "#A6FF96" : project.status === "Pending"  ? "#64CCC5" : project.status === "Testing"  ? "#C4B0FF" : null}}>
                                {project.status}
                            </p>
                        </td>

                        <td className="project_deadline_txt">
                            {project.enddate}
                        </td>

                        <td className="project_deadline_txt">
                            {project.priority}
                        </td>
                    </tr>

                ))}

            </tbody>

        </table>

    </div>

  )

}

export default ProjectDeadlineTable