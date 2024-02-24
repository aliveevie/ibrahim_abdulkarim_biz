import '../styles/project.css';

import data from './data.js';


export function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="project-header">
        <h2 data-aos="zoom-out">&lt;Projects /&gt;</h2>
      </div>

      <div className="project-grid">
        {/* Map over project data */}
        {data.map((project, index) => (
          <div className="project" key={index} data-aos="fade-right">
            <h3>{project.projectName}</h3>
            <p>{project.description}</p>
            <video src={project.videoSrc} alt={project.projectName} controls />
            <div className="project-buttons">
              <a href={project.liveUrl}>
                <button>Live URL</button>
              </a>
              <a href={project.sourceCodeUrl}>
                <button>Source Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






 
