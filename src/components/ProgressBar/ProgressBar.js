import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({progress}) => {
  return (
    <section className="progress-bar-container" style={{opacity: progress === 100 ? 0 : 1 }}>
      <section className="progress-bar" style={{width: progress + '%'}} />
    </section>
  )
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default ProgressBar