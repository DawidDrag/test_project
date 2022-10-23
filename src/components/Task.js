import React from 'react'
import PropTypes from 'prop-types'

const Task = (props) => {
  const { taskName, user, nextButton } = props

  return (
    <div className={'task'}>
      <h3>{taskName}</h3>
      <h4>{user}</h4>
      <button

        className={'task__prev button'}
      >Prev
      </button>
      <button className={'task__delete-btn button'}>Delete</button>
      <button
        onClick={nextButton}
        className={'task__next button'}
      >Next
      </button>
    </div>
  )
}

Task.propTypes = {
  taskName: PropTypes.string,
  user: PropTypes.string,
  nextButton: PropTypes.func

}

export default Task
