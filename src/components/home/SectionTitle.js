import React from 'react';
import './styles/SectionTitle.css';
function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}

export default SectionTitle;
