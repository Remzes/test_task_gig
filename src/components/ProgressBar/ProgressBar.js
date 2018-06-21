import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <section className="progress-bar-container" style={{visibility: progress === 100 ? 'hidden' : 'visible' }}>
      <section className="progress-bar" style={{width: progress + '%'}} />
    </section>
  )
};

export default ProgressBar