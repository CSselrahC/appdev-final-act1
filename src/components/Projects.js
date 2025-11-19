import React from 'react';
import projectsData from '../data/projects.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">My Projects</h1>
            <h2 className="text-center mb-5 lead">A showcase of my works:</h2>
            <div className="row">
                {projectsData.map((project) => (
                    <div key={project.projectId} className="col-lg-6 col-md-12 mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body d-flex flex-column">
                                {/* Project Name */}
                                <h3 className="card-title text-primary mb-3">
                                    {project.projectName}
                                </h3>
                                
                                {/* Project Description */}
                                <p 
                                    className="card-text flex-grow-1"
                                    style={{ whiteSpace: 'pre-wrap' }}
                                >
                                    {project.projectDescription}
                                </p>
                                
                                <ul className="list-group list-group-flush mt-3">
                                    {/* Project Date */}
                                    <li className="list-group-item">
                                        <strong>Date:</strong> {project.projectDate}
                                    </li>
                                    {/* Project Technologies */}
                                    <li className="list-group-item">
                                        <strong>Technologies used:</strong> {project.projectTechnologies.join(', ')}
                                    </li>
                                    {/* Project Type */}
                                    <li className="list-group-item">
                                        <strong>Project Type:</strong> {project.projectType}
                                    </li>
                                    {/* Project Status */}
                                    <li className="list-group-item">
                                        <strong>Project Status:</strong> <span className={`badge ${project.projectStatus === 'Finished' ? 'bg-success' : 'bg-warning text-dark'}`}>{project.projectStatus}</span>
                                    </li>
                                    {/* Project Role */}
                                    <li className="list-group-item">
                                        <strong>Role:</strong> {project.projectRole}
                                    </li>
                                </ul>

                                {/* Project Links */}
                                <div className="mt-3">
                                    {project.projectLink.map((linkHtml, index) => (
                                        <span 
                                            key={index}
                                            dangerouslySetInnerHTML={{ __html: linkHtml }} 
                                            className="me-3"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;