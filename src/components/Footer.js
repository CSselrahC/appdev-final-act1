import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <a
            href="mailto:charlesserranocarreon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="Email"
            dangerouslySetInnerHTML={{
              __html: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1l-8 5-8-5V4z"/>
                <path d="M0 6.5V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.5l-8 5-8-5z"/>
              </svg>
            `}}
          />
          <a
            href="https://www.facebook.com/csharlec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="Facebook"
            dangerouslySetInnerHTML={{
              __html: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.324v21.352C0 23.406.595 24 1.325 24h11.494v-9.294h-3.13v-3.622h3.13v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.324 0 2.463.098 2.794.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.592 1.325-1.324V1.324C24 .592 23.405 0 22.675 0z"/>
              </svg>
            `}}
          />
          <a
            href="https://www.linkedin.com/in/charlesscarreon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="LinkedIn"
            dangerouslySetInnerHTML={{
              __html: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.031-1.849-3.031-1.85 0-2.133 1.444-2.133 2.939v5.661H9.359V9h3.415v1.561h.049c.476-.9 1.637-1.849 3.371-1.849 3.603 0 4.269 2.369 4.269 5.457v6.283zM5.337 7.433c-1.144 0-2.069-.928-2.069-2.068 0-1.144.925-2.07 2.069-2.07 1.143 0 2.068.926 2.068 2.07 0 1.14-.925 2.068-2.068 2.068zm1.777 13.019H3.561V9h3.553v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.204 24 24 23.225 24 22.271V1.73C24 .774 23.204 0 22.225 0z"/>
              </svg>
            `}}
          />
          <a
            href="https://github.com/CSselrahC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="GitHub"
            dangerouslySetInnerHTML={{
              __html: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-3.792 23.4c.6.113.82-.262.82-.582 0-.288-.01-1.05-.015-2.063-3.338.726-4.04-1.608-4.04-1.608-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.084-.73.084-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.304.762-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.302-.536-1.523.117-3.176 0 0 1.008-.324 3.3 1.23a11.52 11.52 0 0 1 6 0c2.292-1.554 3.3-1.23 3.3-1.23.654 1.653.243 2.874.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.476 5.922.43.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.292 0 .324.216.7.825.58A12 12 0 0 0 12 0Z"/>
              </svg>
            `}}
          />
        </div>
        <div>
          <small>© 2025 Website made by Charles S. Carreon</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
