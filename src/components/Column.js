import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import { TasksArrayContext, ButtonNextContext } from './Context'

const Column = (props) => {
  const { columnTitle, limit, columnId } = props

  const checkLimit = (arrayData, searchId) => {
    const filteredArray = arrayData.filter(element => element.id === searchId)
    const filteredArrayLength = filteredArray.length
    return filteredArrayLength
  }

  return (
    <div className={'column'}>
      <h2>
        {columnTitle} limit: {limit}
      </h2>
      <ButtonNextContext.Consumer>
        {(btnNextContext) => {
          return (
            <TasksArrayContext.Consumer>
              {(contextArray) => {
                return contextArray.map((task, index) => {
                  if (task.id === columnId && checkLimit(contextArray, task.id) <= limit) {
                    return (
                      <Task
                        taskName={task.name}
                        user={task.user}
                        key={index}
                        nextButton={btnNextContext}
                      >
                      </Task>
                    )
                  }
                  return null
                })
              }}
            </TasksArrayContext.Consumer>
          )
        }}

      </ButtonNextContext.Consumer>
    </div>
  )
}

Column.propTypes = {
  columnTitle: PropTypes.string,
  limit: PropTypes.number,
  columnId: PropTypes.number
}

export default Column
