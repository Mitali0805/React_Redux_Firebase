import React from 'react'
import ProjectSummary from './ProjectSummary'

function ProjectList({ projects }) {
    return (
        <div className="project-list section">
            {projects?.map((project) => (
                <ProjectSummary project={project} key={project.id} />
            ))}
        </div>
    )
}

export default ProjectList