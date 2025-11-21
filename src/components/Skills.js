import React from "react";

const skillsData = [
    {
        category: "Front-End Development",
        skills: [
            { name: "HTML", proficiency: "Proficient" },
            { name: "CSS", proficiency: "Proficient" },
            { name: "JavaScript", proficiency: "Proficient" },
            { name: "React.js", proficiency: "Familiar" },
            { name: "Bootstrap", proficiency: "Familiar" }
        ],
    },
    {
        category: "Back-End / Server-Side",
        skills: [
            { name: "Java", proficiency: "Advanced" },
            { name: "C#", proficiency: "Proficient" },
            { name: "Python", proficiency: "Familiar" },
            { name: "PHP", proficiency: "Familiar" },
            { name: "Laravel (PHP)", proficiency: "Familiar" },
            { name: "MySQL", proficiency: "Familiar" }
        ],
    },
    {
        category: "Game Development",
        skills: [
            { name: "Unity Engine", proficiency: "Familiar" },
            { name: "Godot Engine", proficiency: "Familiar" },
            { name: "C# Game Scripting", proficiency: "Familiar" }
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", proficiency: "Proficient" },
            { name: "GitHub", proficiency: "Proficient" },
            { name: "Docker Desktop", proficiency: "Familiar" },
            { name: "Figma", proficiency: "Familiar" },
            { name: "Command Line Interface (CLI)", proficiency: "Proficient" },
            { name: "Vercel", proficiency: "Familiar" }
        ],
    },
];

const getProficiencyClass = (level) => {
    switch (level) {
        case "Expert":
            return "bg-success text-dark";
        case "Advanced":
            return "bg-primary text-white";
        case "Proficient":
            return "bg-warning text-dark";
        case "Familiar":
            return "bg-info text-dark";
        default:
            return "bg-secondary text-white";
    }
};

function Skills() {
    return (
        <div className="container my-5 py-3">
            {/* Header */}
            <header className="text-center mb-5 border-bottom pb-3">
                <h1 className="display-4 fw-bold text-success">Skills</h1>
                <p className="lead">Tools and technologies I use</p>
                <hr className="w-25 mx-auto border-success border-2" />
            </header>
            {/* Skills Grid */}
            <div className="row g-4">
                {skillsData.map((categoryItem) => (
                    <div key={categoryItem.category} className="col-12 col-md-6">
                        <div
                            className="card shadow-lg h-100 border-start border-5 border-success"
                            style={{ borderRadius: "0.75rem" }}
                        >
                            <div className="card-body p-4">
                                {/* Category Header */}
                                <h2 className="card-title h4 fw-bold mb-4">
                                    {categoryItem.category}
                                </h2>
                                {/* Skill List */}
                                <ul className="list-group list-group-flush">
                                    {categoryItem.skills.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="list-group-item d-flex justify-content-between align-items-center px-0 py-2"
                                            style={{ backgroundColor: "transparent" }}
                                        >
                                            <span className="fw-medium text-dark">{skill.name}</span>
                                            <span
                                                className={`badge rounded-pill ${getProficiencyClass(
                                                    skill.proficiency
                                                )}`}
                                            >
                                                {skill.proficiency}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
