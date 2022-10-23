import React from 'react'
import Column from './Column'
import Form from './Form'
import { ColumnsArrayContext } from './Context'

const Board = () => {
  return (
    <div className={'board'}>
      <Form></Form>

      <div className={'column__container'}>
        <ColumnsArrayContext.Consumer>
          {(context) => {
            return (
              context.map((column) => {
                return (
                  <Column
                    key={column.id}
                    columnTitle={column.name}
                    limit={column.limit}
                    columnId={column.id}
                  >
                  </Column>
                )
              })
            )
          }}
        </ColumnsArrayContext.Consumer>
      </div>

    </div>
  )
}

export default Board
