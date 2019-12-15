import React from 'react';
import '../styles/Projects.css';

export default class Projects extends React.Component {

render() {
    return (
      <div className="projectsContainer">
      <header> Projects </header>
      <ul>
      <li>
      <a href = 'https://github.com/sumanthpikkili/cloud-syncsecure' target='_blank' rel="noopener noreferrer">
          Cloud Syncsecure
      </a>
      </li>
      <li>
      <a href = 'https://github.com/sumanthpikkili/cse5324-diary' target='_blank' rel="noopener noreferrer">
          Emotions Android app
      </a>
      </li>
      <li>
      <a href = 'https://github.com/sumanthpikkili/cloud-aws-clustervisualization' target='_blank' rel="noopener noreferrer">
          Cloud AWS cluster visualization
      </a>
      </li>
      <li>
      <a href = 'https://github.com/sumanthpikkili/knowledge-discovery-healthcare' target='_blank' rel="noopener noreferrer">
          HealthCare knowledge discovery
      </a>
      </li>
      </ul>
      </div>
    )
}
}
