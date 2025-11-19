import React from "react";
import projectsData from "../data/projects.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
    return (
        <div className="container my-5">
            <header>
                <h1 className="display-5 fw-bold text-primary text-center mb-4">Projects</h1>
                <p className="lead text-muted text-center mb-4">
                    A showcase of my works and contributions
                </p>
                <hr className="w-25 mx-auto border-primary border-2" />
            </header>

            <div className="row">
                {projectsData.map((project) => (
                    <div key={project.projectId} className="col-lg-6 col-md-12 mb-4">
                        <div className="card shadow-lg h-100 border-start border-5 border-primary">
                            <div className="card-body d-flex flex-column">
                                <h3 className="card-title text-primary mb-3">{project.projectName}</h3>
                                <p className="card-text flex-grow-1" style={{ whiteSpace: "pre-wrap" }}>
                                    {project.projectDescription}
                                </p>
                                <ul className="project-details-list mt-3">
                                    <li className="list-group-item">
                                        <strong>Date: </strong> {project.projectDate}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Technologies used: </strong> {project.projectTechnologies.join(", ")}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Project Type: </strong> {project.projectType}
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
                                <div className="d-flex mt-3 align-items-center">
                                    <span className="project-link-label">Links:</span>
                                    <div className="project-links-container">
                                        {project.projectLink && project.projectLink.length > 0 && (
                                            <>
                                                {project.projectLink.map((link, index) => (
                                                    <span
                                                        key={index}
                                                        className="project-link"
                                                        dangerouslySetInnerHTML={{ __html: link }}
                                                        style={{ marginRight: "0.75rem", cursor: "pointer", display: "inline-block" }}
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </div>
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
