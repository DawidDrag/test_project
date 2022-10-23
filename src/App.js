
import React, { useState } from 'react'
import Board from './components/Board'
import { ButtonSendContext, TasksArrayContext, ColumnsArrayContext, ButtonNextContext } from './components/Context'

const dataState = {
  columns: [{ id: 1, name: 'ToDo', limit: 4 },
    { id: 2, name: 'InProgres', limit: 3 },
    { id: 3, name: 'Done', limit: 2 }],

  tasks: [{ id: 1, name: 'zadanie 1', user: 'dawid drag' },
    { id: 1, name: 'zadanie 2', user: 'dawid drag' },
    { id: 3, name: 'zadanie 2', user: 'dawid drag' },
    { id: 2, name: 'zadanie 2', user: 'dawid drag' }]
}

const App = () => {
  const [dataTask, setDataTask] = useState(dataState.tasks)

  const nextButton = (e) => {
    console.log(e)
    dataTask.map(task => {
      return (
        task.id = task.id + 1
      )
    })
  }

  const sendDataToLocalStorage = (key, data) => {
    // if (localStorage.getItem(key)) {
    //   localStorage.setItem(key, localStorage.getItem(key) + JSON.stringify(data))
    // } else {
    localStorage.setItem(key, JSON.stringify(data))
    // }
  }

  const takeDataFromLocalStorage = (key) => {
    const data = localStorage.getItem(key)
    return data
  }

  const createTask = (e) => {
    e.preventDefault()
    const newTask = { id: 1, name: e.target[0].value, user: e.target[1].value }

    sendDataToLocalStorage('task', newTask)

    e.target[0].value = ''
    e.target[1].value = ''

    const dataStorage = takeDataFromLocalStorage('task')
    const dataFromStorage = JSON.parse(dataStorage)
    console.log(dataFromStorage)

    setDataTask([...dataTask, dataFromStorage])
  }

  return (
    <ButtonNextContext.Provider value={nextButton}>
      <ColumnsArrayContext.Provider value={dataState.columns}>
        <TasksArrayContext.Provider value={dataTask}>
          <ButtonSendContext.Provider value={createTask}>
            <Board ></Board>
          </ButtonSendContext.Provider>
        </TasksArrayContext.Provider>
      </ColumnsArrayContext.Provider>
    </ButtonNextContext.Provider>
  )
}
export default App
