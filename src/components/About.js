import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tempPic from '../data/temp-pic.jpg';

function About() {
    return (
        <div className="container my-5 py-3">
            {/* Header and Contact */}
            <header className="text-center mb-5 border-bottom pb-3">
                <h1 className="display-4 fw-bold text-success">Charles S. Carreon</h1>
                <p className="lead">Bachelor of Science in Computer Science Student</p>
                <p className="text-muted mb-0">
                    Hi! I am <strong className="text-dark">Charles S. Carreon.</strong><br />
                    I am a 3rd Year BS Computer Science student from Pamantasan ng Cabuyao.
                </p>
                <p className="text-muted">
                    Email: <a href="mailto:charlesserranocarreon@gmail.com" className="text-decoration-none">charlesserranocarreon@gmail.com</a> |
                    Facebook: <a href="https://www.facebook.com/csharlec" target="_blank" className="text-decoration-none">csharlec</a> |
                    LinkedIn: <a href="https://www.linkedin.com/in/charlesscarreon/" target="_blank" className="text-decoration-none">/in/charlesscarreon/</a> |
                    GitHub: <a href="https://github.com/CSselrahC" target="_blank" className="text-decoration-none">CSselrahC</a>
                </p>
            </header>

            {/* Information Section */}
            <section id="experiences" className="mb-5">
                <h2 className="border-bottom pb-2 mb-4 text-success">Personal Information</h2>
                <div className="card shadow-sm">
                    <div className="card-body d-flex flex-column flex-md-row align-items-center">
                        <img
                            src={tempPic}
                            alt="Description"
                            className="rounded-circle me-md-4 mb-3 mb-md-0"
                            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                        />

                        {/* Content */}
                        <div className="flex-grow-1 w-100">
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="card-title fw-bold text-dark">Aspiring Software Developer</h6>
                            </div>

                            <h1>Charles</h1>
                            <p className="card-text">
                                Hi! I am{' '}<strong className="text-dark">Charles Serrano Carreon</strong>. I am an undergraduate of Bachelor Science in Computer Science.
                                My interest in computing technologies started when I was in high school. I aspire to be a software developer, developing games and creating tools that people would love to use.
                                I am currently seeking opportunities where I can learn, contribute as a team member, and be able to showcase my various skills in technology. Feel free to contact me below.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Experiences Section */}
            <section id="experiences" className="mb-5">
                <h2 className="border-bottom pb-2 mb-4 text-success">Experiences</h2>
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="d-flex w-100 justify-content-between">
                            <h4 className="card-title fw-bold text-dark">iSITE NATIONAL IT SKILLS COMPETITION 2025</h4>
                            <small className="text-success fw-bold text-nowrap">March 28, 2025</small>
                        </div>

                        <p className="text-muted fst-italic mb-2">Role: Contestant (C# Programming)</p>

                        <p className="card-text">
                            I participated in the iSITE NATIONAL IT SKILLS COMPETITION 2025, representing my school as a contestant in the <strong className="text-dark">C# Programming</strong> category.
                        </p>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <span className="badge bg-info text-dark fw-bold">Technologies used: C#</span>
                            <a
                                href="https://www.facebook.com/photo?fbid=639672425702343&set=pcb.639672645702321"
                                className="btn btn-outline-success btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Event Post &rarr;
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="mb-5">
                <h2 className="border-bottom pb-2 mb-4 text-success">Education</h2>

                <div className="card shadow-sm">
                    <div className="card-body">

                        {/* 1. BS Computer Science*/}
                        <div className="mb-4 pb-3 border-bottom">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1 fw-bold">Bachelor Science in Computer Science</h5>
                                <small className="text-success fw-bold text-nowrap">2023 - Present (3rd Year)</small>
                            </div>
                            <p className="mb-1 text-muted">Pamantasan ng Cabuyao</p>
                        </div>

                        {/* 2. Senior High School */}
                        <div className="mb-4 pb-3 border-bottom">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Senior High School</h5>
                                <small className="text-muted fw-bold">Graduated: 2023</small>
                            </div>
                            <p className="mb-1 text-muted">Pamantasan ng Cabuyao Senior High School Department</p>
                        </div>

                        {/* 3. Junior High School */}
                        <div className="mb-4 pb-3 border-bottom">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Junior High School</h5>
                                <small className="text-muted fw-bold">Graduated: 2021</small>
                            </div>
                            <p className="mb-1 text-muted">Pulo National High School</p>
                        </div>

                        {/* 4. Elementary */}
                        <div>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Elementary</h5>
                                <small className="text-muted fw-bold">Graduated: 2017</small>
                            </div>
                            <p className="mb-0 text-muted">Pulo Elementary School</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;